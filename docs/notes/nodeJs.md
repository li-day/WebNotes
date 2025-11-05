# Node.js模块系统核心知识整理
在前端开发中，Node.js的模块系统是实现代码模块化、复用性和可维护性的核心机制。以下内容基于参考文档中与模块相关的核心知识点，结合规范语法与实用场景进行整理优化，涵盖模块分类、加载机制、核心模块使用及实战案例。


## 一、Node.js模块系统概述
Node.js遵循**CommonJS规范**，将每个文件视为一个独立模块，模块内部的变量、函数默认具有私有性，需通过特定方式暴露后才能被其他模块引用。其核心价值在于：
1. 解决代码命名冲突问题
2. 实现代码按功能拆分，提升可维护性
3. 支持第三方依赖的高效管理（如通过`npm`安装的包）

模块的核心流程分为两步：
1. **模块暴露**：模块内部通过`module.exports`或`exports`暴露成员
2. **模块引入**：其他模块通过`require()`函数引入目标模块


## 二、模块的分类
Node.js中的模块主要分为三大类，适用场景与加载机制各有差异：

### 2.1 核心模块（内置模块）
由Node.js官方提供，无需安装即可直接引入，涵盖文件操作、网络请求、路径处理等基础功能，是开发的基础工具。

#### 常用核心模块及功能
| 模块名 | 核心功能 | 关键API示例 |
|--------|----------|-------------|
| `fs` | 文件系统操作（读/写/删除/遍历文件/目录） | `fs.readFile()`（异步读文件）、`fs.writeFileSync()`（同步写文件）、`fs.readdir()`（遍历目录） |
| `path` | 路径处理（拼接、解析、规范化路径） | `path.join()`（拼接路径）、`path.resolve()`（解析绝对路径）、`path.extname()`（获取文件后缀） |
| `http` | 构建HTTP服务器/客户端（处理网络请求） | `http.createServer()`（创建服务器）、`http.get()`（发送GET请求） |
| `url` | URL地址解析（提取协议、主机、路径、查询参数） | `url.parse()`（解析URL字符串）、`new URL()`（URL对象化处理） |
| `querystring` | URL查询参数处理（解析/拼接键值对） | `querystring.parse()`（解析查询字符串为对象）、`querystring.stringify()`（对象转为查询字符串） |
| `os` | 操作系统信息获取（内存、CPU、主机名等） | `os.totalmem()`（总内存）、`os.cpus()`（CPU信息）、`os.hostname()`（主机名） |

#### 加载与使用示例（以`fs`和`path`为例）
```javascript
// 1. 引入核心模块（无需指定路径，直接写模块名）
const fs = require('fs');
const path = require('path');

// 2. 使用path拼接文件路径（避免跨平台路径分隔符问题）
const filePath = path.join(__dirname, 'data.txt'); // __dirname是当前模块所在目录的绝对路径

// 3. 使用fs异步读取文件
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('文件读取失败：', err);
    return;
  }
  console.log('文件内容：', data);
});

// 4. 使用fs同步写入文件（同步操作会阻塞代码执行，适用于简单场景）
const content = 'Hello, Node.js Module!';
fs.writeFileSync(filePath, content, 'utf8');
console.log('文件写入成功');
```


### 2.2 自定义模块（用户模块）
由开发者根据业务需求创建的`.js`文件、目录或JSON文件，需通过相对路径（`./`或`../`）或绝对路径引入。

#### 模块暴露与引入规则
1. **模块暴露方式**
   - 方式1：通过`module.exports`暴露（支持暴露任意类型，推荐使用）
     ```javascript
     // 自定义模块：utils.js
     const add = (a, b) => a + b;
     const multiply = (a, b) => a * b;

     // 暴露多个成员（对象形式）
     module.exports = {
       add,
       multiply,
       version: '1.0.0' // 可同时暴露常量
     };
     ```
   - 方式2：通过`exports`暴露（仅支持添加属性，不能直接赋值为非对象类型）
     ```javascript
     // 自定义模块：utils.js
     exports.add = (a, b) => a + b;
     exports.multiply = (a, b) => a * b;
     // 错误用法：exports = add; // 直接赋值会切断与module.exports的关联，暴露失效
     ```

2. **模块引入方式**
   - 引入`.js`文件：可省略后缀名，Node.js会自动补全
     ```javascript
     // 引入utils.js（当前目录下）
     const utils = require('./utils'); // 等效于require('./utils.js')
     console.log(utils.add(2, 3)); // 输出5
     console.log(utils.version); // 输出1.0.0
     ```
   - 引入目录模块：需在目录下创建`index.js`（入口文件），Node.js会自动加载该文件
     ```javascript
     // 目录结构：math/
     //          ├─ index.js（入口文件）
     //          ├─ add.js
     //          └─ multiply.js

     // math/index.js 中暴露模块
     const add = require('./add');
     const multiply = require('./multiply');
     module.exports = { add, multiply };

     // 其他模块引入math目录
     const math = require('./math'); // 自动加载math/index.js
     ```
   - 引入JSON文件：需指定`.json`后缀，Node.js会自动解析为JavaScript对象
     ```javascript
     // 引入config.json
     const config = require('./config.json');
     console.log(config.baseUrl); // 直接访问JSON中的键
     ```


### 2.3 第三方模块（依赖模块）
由社区或第三方开发者开发的模块，需通过`npm`（Node.js包管理工具）安装后才能使用，如`express`（Web框架）、`lodash`（工具函数库）、`mysql`（数据库驱动）等。

#### 安装与使用流程
1. **初始化项目**（首次使用时）：创建`package.json`（记录项目依赖）
   ```bash
   npm init -y # -y 表示默认生成配置，无需手动确认
   ```
2. **安装第三方模块**
   - 生产依赖（项目运行必需）：`npm install 模块名 --save`（简写`npm i 模块名 -S`）
   - 开发依赖（仅开发阶段使用，如测试工具）：`npm install 模块名 --save-dev`（简写`npm i 模块名 -D`）
   ```bash
   # 安装express（生产依赖）
   npm i express -S

   # 安装mocha（测试工具，开发依赖）
   npm i mocha -D
   ```
3. **引入并使用**：直接通过模块名引入，无需路径
   ```javascript
   // 引入express并创建HTTP服务器
   const express = require('express');
   const app = express();

   app.get('/', (req, res) => {
     res.send('Hello, Third-party Module!');
   });

   app.listen(3000, () => {
     console.log('服务器运行在 http://localhost:3000');
   });
   ```


## 三、模块加载机制（require()的查找规则）
`require()`函数是Node.js模块引入的核心，其查找顺序遵循“先核心、再第三方、最后自定义”的规则，具体流程如下：

1. **优先加载核心模块**：若`require()`的参数是核心模块名（如`fs`、`path`），直接返回核心模块，不进行路径查找。
   
2. **查找第三方模块**：若参数不是核心模块且不是路径形式（如`express`），则从当前模块所在目录开始，逐级向上查找`node_modules`目录，直到找到目标模块或到达系统根目录：
   - 查找路径示例：`./node_modules/express` → `../node_modules/express` → `../../node_modules/express` → ...
   - 若找到目标模块，优先加载模块目录下的`package.json`中`main`字段指定的入口文件（如`"main": "lib/express.js"`）；若未找到`package.json`或`main`字段，默认加载`index.js`。

3. **查找自定义模块**：若参数是路径形式（以`./`、`../`或`/`开头）：
   - 若路径指向文件：直接加载该文件（可省略`.js`后缀）
   - 若路径指向目录：按“目录模块”规则加载（查找`index.js`或`package.json`的`main`入口）
   - 若路径不存在：抛出`Cannot find module`错误


## 四、模块的缓存机制
为提升性能，Node.js会对已加载的模块进行缓存，**同一模块多次`require()`时，仅首次加载会执行模块代码，后续引入直接返回缓存结果**。

### 缓存的特点
1. **缓存键规则**：核心模块以模块名为键，自定义模块以解析后的绝对路径为键。
2. **缓存位置**：缓存存储在`require.cache`对象中，可通过该对象查看或清除缓存。
3. **缓存失效场景**：
   - 修改模块文件内容后，需重启Node.js服务才能生效（缓存未更新）
   - 手动删除`require.cache`中的对应键，可强制重新加载模块

### 示例：查看与清除缓存
```javascript
// 首次引入utils.js，执行模块代码并缓存
const utils1 = require('./utils');

// 第二次引入，直接使用缓存，不重新执行模块代码
const utils2 = require('./utils');

console.log(utils1 === utils2); // 输出true（指向同一模块实例）

// 查看缓存（utils.js的绝对路径为键）
const cacheKey = require.resolve('./utils'); // 获取模块的绝对路径
console.log(require.cache[cacheKey]); // 打印缓存的模块信息

// 清除缓存（强制下次引入时重新执行模块代码）
delete require.cache[cacheKey];

// 第三次引入，重新执行模块代码，返回新实例
const utils3 = require('./utils');
console.log(utils1 === utils3); // 输出false
```


## 五、模块间的通信与依赖管理
### 5.1 模块间的变量隔离与共享
- **隔离性**：每个模块有独立的作用域，模块内通过`let`/`const`/`var`声明的变量默认仅在模块内部可见，不会污染全局。
- **共享性**：需通过`module.exports`/`exports`暴露成员，其他模块引入后才能使用。

### 5.2 循环依赖的处理
当模块A引入模块B，模块B又引入模块A时，会形成**循环依赖**。Node.js通过“部分加载”机制处理此类场景：
- 循环依赖发生时，Node.js会先返回已加载的模块部分（未完全执行的`module.exports`），再继续执行后续代码，避免死循环。

#### 循环依赖示例
```javascript
// 模块A：a.js
const b = require('./b');
console.log('a.js中b的值：', b);

module.exports = {
  message: '来自a.js的消息'
};

// 模块B：b.js
const a = require('./a');
console.log('b.js中a的值：', a); // 此时a仅暴露了空对象（a.js未执行完）

module.exports = {
  content: '来自b.js的内容'
};

// 执行a.js的输出：
// b.js中a的值：{}（a.js未执行完，仅返回空对象）
// a.js中b的值：{ content: '来自b.js的内容' }
```


## 六、实战案例：构建一个简易的文件处理工具模块
### 需求
创建一个自定义模块`fileHandler.js`，实现以下功能：
1. 读取指定路径的文件内容
2. 向指定路径写入内容（若文件不存在则创建）
3. 遍历指定目录下的所有文件

### 实现代码
```javascript
// fileHandler.js
const fs = require('fs');
const path = require('path');

/**
 * 读取文件内容（异步）
 * @param {string} filePath - 文件路径（相对/绝对）
 * @param {function} callback - 回调函数（err, data）
 */
const readFile = (filePath, callback) => {
  const absolutePath = path.resolve(filePath); // 转为绝对路径
  fs.readFile(absolutePath, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, data);
  });
};

/**
 * 写入文件内容（同步）
 * @param {string} filePath - 文件路径
 * @param {string} content - 写入内容
 * @returns {boolean} - 成功返回true，失败返回false
 */
const writeFileSync = (filePath, content) => {
  try {
    const absolutePath = path.resolve(filePath);
    fs.writeFileSync(absolutePath, content, 'utf8');
    return true;
  } catch (err) {
    console.error('写入失败：', err);
    return false;
  }
};

/**
 * 遍历目录下的所有文件
 * @param {string} dirPath - 目录路径
 * @returns {string[]} - 文件路径数组（绝对路径）
 */
const listFiles = (dirPath) => {
  const absoluteDir = path.resolve(dirPath);
  const files = [];

  // 同步遍历目录
  const traverse = (currentDir) => {
    const dirents = fs.readdirSync(currentDir, { withFileTypes: true });
    for (const dirent of dirents) {
      const fullPath = path.join(currentDir, dirent.name);
      if (dirent.isFile()) {
        files.push(fullPath);
      } else if (dirent.isDirectory()) {
        traverse(fullPath); // 递归遍历子目录
      }
    }
  };

  traverse(absoluteDir);
  return files;
};

// 暴露模块成员
module.exports = {
  readFile,
  writeFileSync,
  listFiles
};
```

### 使用示例
```javascript
// app.js
const fileHandler = require('./fileHandler');

// 1. 写入文件
const writeSuccess = fileHandler.writeFileSync('./test.txt', '测试文件内容');
console.log('写入结果：', writeSuccess ? '成功' : '失败');

// 2. 读取文件
fileHandler.readFile('./test.txt', (err, data) => {
  if (err) {
    console.error('读取失败：', err);
    return;
  }
  console.log('文件内容：', data);
});

// 3. 遍历当前目录下的所有文件
const files = fileHandler.listFiles('./');
console.log('当前目录下的文件：', files);
```

### 执行结果
```bash
node app.js
# 输出：
# 写入结果：成功
# 文件内容：测试文件内容
# 当前目录下的文件：[ '/Users/xxx/project/test.txt', '/Users/xxx/project/fileHandler.js', '/Users/xxx/project/app.js' ]
```


## 七、常见问题与注意事项
1. **`module.exports`与`exports`的区别**：
   - `exports`是`module.exports`的引用（`exports = module.exports`）
   - 直接给`exports`赋值（如`exports = { a: 1 }`）会切断与`module.exports`的关联，导致暴露失效；如需暴露对象，推荐直接使用`module.exports = { a: 1 }`。

2. **`__dirname`与`__filename`的作用**：
   - `__dirname`：当前模块所在目录的绝对路径（字符串）
   - `__filename`：当前模块文件的绝对路径（字符串）
   - 二者均为模块级别的全局变量，仅在模块内部可用，用于处理路径时避免相对路径的歧义。

3. **核心模块与第三方模块的冲突**：
   - 自定义模块或第三方模块的名称不可与核心模块重复（如不能创建`fs.js`文件并通过`require('fs')`引入），否则会优先加载核心模块，导致自定义模块无法被引入。

4. **JSON模块的加载限制**：
   - 引入JSON文件时必须指定`.json`后缀（如`require('./config.json')`），Node.js不会自动补全JSON后缀。