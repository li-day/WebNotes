# JS基础核心知识整理
## 一、JS概述与组成
JavaScript是浏览器端的核心脚本语言，用于实现网页交互逻辑，其核心由三部分组成：
| 组成部分 | 作用说明 |
|----------|----------|
| **ECMAScript** | 定义JS的基础语法规则（变量、函数、运算符、流程控制等），是JS的核心规范 |
| **DOM（Document Object Model）** | 文档对象模型，将网页内容抽象为“对象”，通过API操作网页标签、属性、文本等 |
| **BOM（Browser Object Model）** | 浏览器对象模型，将浏览器抽象为“对象”，通过API操作浏览器窗口、地址栏、定时器等 |


## 二、JS基础语法规则
1. **大小写敏感**：`let name`与`let Name`是两个不同的变量，需严格区分。
2. **语句分隔**：一条语句结束后建议加`;`（可省略，但为了代码规范性和避免歧义，推荐保留）；一行若写多条语句，必须加`;`分隔。
3. **注释规则**：
   - 单行注释：`// 这是单行注释`
   - 多行注释：`/* 这是多行注释，可跨多行 */`


## 三、输入与输出
JS提供多种与用户交互的方式，核心输入输出方法如下：

### 3.1 输入方法
| 方法 | 语法 | 功能说明 | 返回值 |
|------|------|----------|--------|
| prompt | `prompt('提示信息')` | 弹出输入框，让用户输入内容 | 用户点击“确定”返回输入的字符串；点击“取消”返回`null` |
| confirm | `confirm('提示信息')` | 弹出确认框，让用户选择“确定/取消” | 点击“确定”返回`true`；点击“取消”返回`false` |

### 3.2 输出方法
| 方法 | 语法 | 功能说明 |
|------|------|----------|
| alert | `alert('内容')` | 弹出弹窗显示内容，会阻塞代码执行 |
| console.log | `console.log('内容')` | 在浏览器控制台输出内容（开发调试常用） |
| document.write | `document.write('内容')` | 直接在网页文档中输出内容，可能覆盖原有内容 |
| throw new Error | `throw new Error('错误信息')` | 抛出错误信息，常用于异常处理 |


## 四、变量
变量是用于存储数据的“容器”，需遵循声明、赋值、使用的流程。

### 4.1 变量声明与初始化
- 声明并初始化（推荐）：`let 变量名 = 数据;`（如`let age = 20;`）
- 仅声明（未赋值时默认值为`undefined`）：`let 变量名;`（如`let name;`）
- 批量声明：`let a, b, c = 10;`（a、b未赋值，c赋值为10）

> 注意：`let`是ES6新增的声明方式，支持块级作用域，且**不允许重复声明**；若使用`var`声明，存在变量提升和全局污染问题，推荐优先使用`let`。

### 4.2 变量操作
1. **读取变量**：直接使用变量名，如`console.log(age);`
2. **修改变量**：`变量名 = 新值;`（如`age = 21;`）
3. **变量参与运算**：
   ```javascript
   let c = 100;
   let d = c + 300; // d = 400
   ```

### 4.3 变量交换案例
通过“临时变量”实现两个变量值的交换：
```javascript
let m = 10;
let n = 20;
// 交换步骤
let tmp = m; // 临时存储m的值
m = n;       // 将n的值赋给m
n = tmp;     // 将临时存储的m值赋给n
console.log(m, n); // 输出 20 10
```

### 4.4 变量命名规则
1. 允许包含：字母、数字、下划线（`_`）、美元符号（`$`）
2. 不允许以数字开头
3. 不允许使用JS关键字（如`let`、`function`、`if`等）
4. 命名风格：采用**小驼峰命名法**（首单词小写，后续单词首字母大写，如`userName`、`getUserInfo`）
5. 语义化：命名需“见名知意”（如用`age`存年龄，不用`a`）


## 五、数据类型
JS的数据类型分为“基本数据类型”和“引用数据类型”，核心区别是存储方式不同。

### 5.1 基本数据类型
| 类型 | 说明 | 示例 |
|------|------|------|
| Number（数值） | 整数、小数、正数、负数，包含特殊值`Infinity`（无穷大）和`NaN`（非数字） | `10`、`3.14`、`-5` |
| String（字符串） | 用单引号（`'`）或双引号（`"`）包裹的字符序列 | `'hello'`、`"JS"` |
| Boolean（布尔） | 仅两个值：`true`（真）、`false`（假），用于表示逻辑判断结果 | `let isOk = true;` |
| undefined（未定义） | 变量声明后未赋值时的默认值，或函数无返回值时的返回值 | `let x; console.log(x); // undefined` |
| null（空值） | 表示“空对象”，常用于主动清空变量值 | `let obj = null;` |

#### 字符串特殊规则
- 引号嵌套：单引号内可嵌套双引号，双引号内可嵌套单引号（如`'He said "Hello"'`）
- 转义字符：用`\`实现特殊功能，常见转义字符：
  - `\n`：换行
  - `\t`：制表符（类似按Tab键）
  - `\"`：表示双引号本身
- 模板字符串（ES6新增）：用反引号（`）包裹，支持换行和变量解析（变量用`${变量名}`）：
  ```javascript
  let name = "张三";
  let str = `我的名字是${name}，
  我今年20岁`;
  ```

### 5.2 引用数据类型
主要包括`Array`（数组）、`Object`（对象）、`Function`（函数）等，存储的是“内存地址”，赋值时传递的是地址引用。

### 5.3 数据类型检测
| 检测方法 | 适用场景 | 示例 |
|----------|----------|------|
| typeof | 检测基本数据类型（null除外，typeof null返回`object`） | `typeof 10; // "number"` |
| instanceof | 检测引用数据类型，判断对象是否由某个构造函数创建 | `let arr = []; arr instanceof Array; // true` |
| Array.isArray | 专门检测数组（ES6新增，更可靠） | `Array.isArray([1,2]); // true` |
| Object.prototype.toString.call | 通用检测方法，可准确判断所有数据类型 | `Object.prototype.toString.call("abc"); // "[object String]"` |


## 六、运算符
运算符用于对数据进行计算或逻辑判断，按功能分为以下几类：

### 6.1 赋值运算符
- 基础赋值：`=`（将右边的值赋给左边变量，如`let a = 5;`）
- 复合赋值：`+=`、`-=`、`*=`、`/=`（如`a += 3`等价于`a = a + 3`）

### 6.2 算术运算符
用于数值计算，核心运算符：
| 运算符 | 功能 | 示例 | 结果 |
|--------|------|------|------|
| + | 加法（若有字符串则为拼接） | `10 + 20`、`"a" + "b"` | 30、"ab" |
| - | 减法 | `20 - 5` | 15 |
| * | 乘法 | `3 * 4` | 12 |
| / | 除法 | `10 / 2` | 5 |
| % | 取余（求余数） | `10 % 3` | 1 |
| ++ | 自增（变量值+1） | `let a=5; a++` | a变为6 |
| -- | 自减（变量值-1） | `let b=5; b--` | b变为4 |

> 注意：`++`/`--`放在变量前（如`++a`）时，先自增再参与运算；放在变量后（如`a++`）时，先参与运算再自增。

### 6.3 比较运算符
用于判断两个值的关系，返回布尔值（`true`/`false`）：
| 运算符 | 功能 | 示例 | 结果 |
|--------|------|------|------|
| > | 大于 | `10 > 5` | true |
| < | 小于 | `10 < 5` | false |
| >= | 大于等于 | `10 >= 10` | true |
| <= | 小于等于 | `10 <= 5` | false |
| == | 等于（仅比较值，不比较类型） | `10 == "10"` | true |
| === | 全等（比较值和类型，推荐使用） | `10 === "10"` | false |
| != | 不等于（仅比较值） | `10 != 5` | true |
| !== | 不全等（比较值和类型） | `10 !== "10"` | true |

### 6.4 逻辑运算符
用于组合多个条件判断，返回布尔值或“短路结果”：
| 运算符 | 功能 | 运算规则 | 示例 |
|--------|------|----------|------|
| &&（与） | 找假 | 两边都为true时返回true；否则返回false（短路：左边为false时，右边不执行） | `true && false // false` |
| ||（或） | 找真 | 两边有一个为true时返回true；否则返回false（短路：左边为true时，右边不执行） | `true || false // true` |
| !（非） | 取反 | 将布尔值反转（true→false，false→true） | `!true // false` |

### 6.5 三元运算符
简化`if-else`双分支逻辑，语法：`条件表达式 ? 表达式1 : 表达式2`
- 规则：条件成立时执行表达式1，否则执行表达式2
- 示例：
  ```javascript
  let age = 18;
  let status = age >= 18 ? "成年" : "未成年";
  console.log(status); // "成年"
  ```


## 七、流程控制
流程控制用于控制代码的执行顺序，核心包括“分支结构”和“循环结构”。

### 7.1 分支结构
根据条件执行不同代码块，常见分支语句：

#### 7.1.1 if单分支
```javascript
// 语法
if (条件表达式) {
  // 条件成立时执行的代码
}
// 示例
let score = 80;
if (score >= 60) {
  console.log("及格");
}
```

#### 7.1.2 if-else双分支
```javascript
// 语法
if (条件表达式) {
  // 条件成立时执行
} else {
  // 条件不成立时执行
}
// 示例
let isLogin = false;
if (isLogin) {
  console.log("欢迎登录");
} else {
  console.log("请先登录");
}
```

#### 7.1.3 if-else if-else多分支
用于多个条件的判断，自上而下依次检测，满足一个即执行对应代码块：
```javascript
let score = 85;
if (score >= 90) {
  console.log("优秀");
} else if (score >= 80) {
  console.log("良好");
} else if (score >= 60) {
  console.log("及格");
} else {
  console.log("不及格");
}
```

#### 7.1.4 switch分支
用于“变量与多个固定值”的匹配，适合条件为“具体值”的场景：
```javascript
// 语法
switch (变量) {
  case 值1:
    // 变量 === 值1时执行
    break; // 跳出switch，避免穿透
  case 值2:
    // 变量 === 值2时执行
    break;
  default:
    // 所有case不匹配时执行
}
// 示例
let day = 3;
switch (day) {
  case 1:
    console.log("周一");
    break;
  case 2:
    console.log("周二");
    break;
  default:
    console.log("其他日期");
}
```

> 注意：`switch`的匹配是**全等比较（===）**，且`break`不可省略（否则会发生“穿透”，即继续执行后续case代码）。

### 7.2 循环结构
用于重复执行一段代码，常见循环语句：

#### 7.2.1 for循环
适合“已知循环次数”的场景，语法清晰，三要素明确：
```javascript
// 语法：for(循环变量初始化; 条件表达式; 循环变量修改) { 循环体 }
for (let i = 0; i < 5; i++) {
  console.log(i); // 输出 0,1,2,3,4
}

// 案例：求1-100的和
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i; // 累加
}
console.log(sum); // 5050
```

#### 7.2.2 while循环
适合“未知循环次数，仅知循环条件”的场景，语法：
```javascript
// 语法：while(条件表达式) { 循环体 }
let i = 0;
while (i < 5) {
  console.log(i); // 输出 0,1,2,3,4
  i++; // 必须手动修改循环变量，避免死循环
}
```

#### 7.2.3 do-while循环
与`while`的区别：**先执行一次循环体，再判断条件**（循环体至少执行一次）：
```javascript
// 语法：do { 循环体 } while(条件表达式)
let i = 0;
do {
  console.log(i); // 输出 0,1,2,3,4
  i++;
} while (i < 5);
```

#### 7.2.4 循环控制语句
- `break`：立即跳出整个循环，后续循环不再执行
- `continue`：跳过当前次循环，直接进入下一次循环
```javascript
// break示例：找到第一个偶数就跳出循环
for (let i = 1; i < 10; i++) {
  if (i % 2 === 0) {
    console.log("第一个偶数：", i); // 输出 2
    break;
  }
}

// continue示例：只输出奇数
for (let i = 1; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // 跳过偶数，进入下一次循环
  }
  console.log(i); // 输出 1,3,5,7,9
}
```


## 八、数组（Array）
数组是“有序的数据集合”，可存储多个不同类型的数据，通过“下标”（从0开始）访问元素。

### 8.1 数组定义
- 直接初始化（推荐）：`let 数组名 = [元素1, 元素2, ...];`（如`let arr = [10, "hello", true];`）
- 创建空数组：`let 数组名 = [];`（后续通过下标或方法添加元素）

### 8.2 数组核心属性与方法
| 属性/方法 | 功能说明 | 示例 |
|----------|----------|------|
| length | 获取数组长度（元素个数），也可修改长度（截断或补空） | `let arr = [1,2,3]; arr.length; // 3` |
| 数组名[下标] | 访问/修改对应下标的元素（下标越界返回`undefined`） | `arr[0]; // 1`；`arr[0] = 10; // 修改第一个元素为10` |
| push(元素) | 向数组末尾添加元素，返回新长度 | `arr.push(4); // arr变为[10,2,3,4]` |
| pop() | 删除数组末尾元素，返回被删除的元素 | `arr.pop(); // 返回4，arr变为[10,2,3]` |
| shift() | 删除数组开头元素，返回被删除的元素 | `arr.shift(); // 返回10，arr变为[2,3]` |
| unshift(元素) | 向数组开头添加元素，返回新长度 | `arr.unshift(1); // arr变为[1,2,3]` |
| splice(开始下标, 删除个数, 新元素) | 从指定位置删除/插入元素 | `arr.splice(1, 1, 5); // 从下标1删除1个元素，插入5，arr变为[1,5,3]` |
| reverse() | 反转数组元素顺序（原地修改） | `arr.reverse(); // arr变为[3,5,1]` |
| sort(函数) | 数组排序（默认按字符排序，需传函数实现数值排序） | `arr.sort((a,b) => a - b); // 升序排序，arr变为[1,3,5]` |
| join(分隔符) | 将数组元素用分隔符拼接为字符串 | `arr.join("-"); // 返回"1-3-5"` |
| concat(数组) | 合并两个数组，返回新数组（不修改原数组） | `let arr2 = [6,7]; arr.concat(arr2); // 返回[1,3,5,6,7]` |
| slice(开始下标, 结束下标) | 截取数组片段，返回新数组（不包含结束下标） | `arr.slice(1,3); // 返回[3,5]` |

### 8.3 数组遍历
遍历即“逐个访问数组元素”，常用`for`循环或`for...of`（ES6新增）：
```javascript
let arr = [10, 20, 30, 40];

// 1. for循环遍历（通过下标访问）
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 输出10,20,30,40
}

// 2. for...of遍历（直接访问元素，ES6新增）
for (let item of arr) {
  console.log(item); // 输出10,20,30,40
}
```

### 8.4 数组常见案例
#### 8.4.1 数组反转
```javascript
let arr = [1,2,3,4];
let newArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  newArr[newArr.length] = arr[i];
}
console.log(newArr); // [4,3,2,1]
```

#### 8.4.2 求数组最大值（擂台思想）
```javascript
let arr = [9, 2, 6, 96, 15];
let max = arr[0]; // 初始化擂台为第一个元素
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i]; // 若当前元素更大，更新擂台
  }
}
console.log(max); // 96
```

#### 8.4.3 数组去重
```javascript
// 方法1：利用对象属性唯一性
let arr = [10,20,30,30,10];
let obj = {};
let newArr = [];
for (let item of arr) {
  if (!obj[item]) { // 若对象中无该属性
    obj[item] = true;
    newArr.push(item);
  }
}
console.log(newArr); // [10,20,30]

// 方法2：ES6 Set（简洁，有兼容性）
let newArr2 = [...new Set(arr)];
console.log(newArr2); // [10,20,30]
```


## 九、函数（Function）
函数是“封装的代码块”，用于实现特定功能，可重复调用，提高代码复用性。

### 9.1 函数定义与调用
#### 9.1.1 函数定义方式
| 定义方式 | 语法 | 特点 |
|----------|------|------|
| 函数声明 | `function 函数名(形参列表) { 函数体 }` | 支持“函数提升”（可在定义前调用） |
| 函数表达式 | `let 函数名 = function(形参列表) { 函数体 }` | 不支持函数提升，必须先定义后调用 |
| 箭头函数（ES6） | `let 函数名 = (形参列表) => { 函数体 }` | 简洁，`this`指向与普通函数不同 |

#### 9.1.2 函数调用
函数定义后不会自动执行，需通过“函数名()”调用：
```javascript
// 函数声明
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}
// 调用函数（传入实参）
sayHello("张三"); // 输出 "Hello, 张三!"
```

### 9.2 函数参数
- **形参（形式参数）**：函数定义时的参数，本质是函数内的局部变量（如`function add(a, b) { ... }`中的`a`、`b`）
- **实参（实际参数）**：函数调用时传入的参数（如`add(10, 20)`中的`10`、`20`）
- **参数传递规则**：实参与形参按顺序一一赋值，若实参数量少于形参，未赋值的形参值为`undefined`

#### 9.2.3 arguments关键字
函数内部的内置对象，将传入的实参组成“伪数组”，用于处理“参数数量不确定”的场景：
```javascript
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(sum(1,2,3)); // 6
console.log(sum(10,20,30,40)); // 100
```

### 9.3 函数返回值（return）
`return`用于将函数内部的结果返回给调用处，核心特点：
1. 执行`return`后，函数立即终止，后续代码不再执行
2. 若函数无`return`，默认返回`undefined`
3. `return`可返回任意类型数据（基本类型、引用类型、函数等）

示例：
```javascript
function add(a, b) {
  return a + b; // 返回a+b的结果
}
let result = add(10, 20);
console.log(result); // 30
```

### 9.4 函数作用域
作用域是“变量的访问范围”，JS中函数是划分作用域的核心单位：
- **全局作用域**：函数外的区域，全局变量（在函数外声明的变量）可在任意位置访问
- **局部作用域（函数作用域）**：函数内的区域，局部变量（在函数内声明的变量，包括形参）仅能在函数内访问

> 变量访问规则：局部作用域访问变量时，先在当前作用域查找，找不到则向上一级作用域查找（“就近原则”）。

### 9.5 匿名函数与自调用
- **匿名函数**：无函数名的函数，需通过赋值或自调用使用
- **自调用函数**：定义后立即执行，语法：`(function(形参) { 函数体 })(实参);`

示例：
```javascript
// 自调用函数（常用作“模块隔离”，避免全局污染）
(function(name) {
  console.log(`Hello, ${name}!`);
})("李四"); // 输出 "Hello, 李四!"
```


## 十、对象（Object）
对象是“键值对的集合”，用于存储复杂数据（如一个人的姓名、年龄、性别等信息），键（key）是属性名，值（value）可以是任意数据类型。

### 10.1 对象定义
- 直接量定义（推荐）：`let 对象名 = { 键1: 值1, 键2: 值2, ... };`
  ```javascript
  let person = {
    name: "张三",
    age: 20,
    gender: "男",
    sayHi: function() { // 方法（值为函数的属性）
      console.log(`我叫${this.name}，今年${this.age}岁`);
    }
  };
  ```

### 10.2 对象属性与方法操作
#### 10.2.1 访问属性/方法
- 点语法（推荐）：`对象名.键名`（如`person.name`、`person.sayHi()`）
- 中括号语法（适合键名含特殊字符或键名存储在变量中）：`对象名["键名"]`（如`person["name"]`）

示例：
```javascript
console.log(person.name); // "张三"（访问属性）
person.sayHi(); // "我叫张三，今年20岁"（调用方法）

// 中括号语法示例
let key = "age";
console.log(person[key]); // 20（等价于person.age）
```

#### 10.2.2 修改属性/添加属性
- 修改属性：`对象名.键名 = 新值`（若键名存在则修改，不存在则添加）
- 添加属性：`对象名.新键名 = 值`

示例：
```javascript
person.age = 21; // 修改age属性为21
person.address = "北京"; // 添加address属性
console.log(person); // {name: "张三", age: 21, gender: "男", sayHi: ..., address: "北京"}
```

#### 10.2.3 删除属性
使用`delete`关键字：`delete 对象名.键名`
```javascript
delete person.gender; // 删除gender属性
console.log(person); // {name: "张三", age: 21, sayHi: ..., address: "北京"}
```

### 10.3 this关键字
`this`是函数内部的内置对象，指向“调用函数的对象”，常用于对象方法中访问当前对象的其他属性：
```javascript
let car = {
  brand: "特斯拉",
  price: 300000,
  showInfo: function() {
    console.log(`品牌：${this.brand}，价格：${this.price}`); // this指向car对象
  }
};
car.showInfo(); // "品牌：特斯拉，价格：300000"
```

### 10.4 对象遍历
使用`for...in`循环遍历对象的所有键（key）：
```javascript
let person = { name: "张三", age: 20, gender: "男" };
for (let key in person) {
  console.log(`${key}: ${person[key]}`); // 输出 name:张三、age:20、gender:男
}
```

### 10.5 构造函数（批量创建对象）
构造函数用于“批量创建结构相同的对象”，命名规范：首字母大写（区分普通函数）。

#### 10.5.1 构造函数定义与使用
```javascript
// 定义构造函数
function Person(name, age, gender) {
  this.name = name; // this指向新创建的对象
  this.age = age;
  this.gender = gender;
  this.sayHi = function() {
    console.log(`我叫${this.name}`);
  };
}

// 使用new关键字创建对象（实例化）
let p1 = new Person("张三", 20, "男");
let p2 = new Person("李四", 22, "女");
p1.sayHi(); // "我叫张三"
p2.sayHi(); // "我叫李四"
```

#### 10.5.2 new关键字的作用
1. 创建一个空对象
2. 将空对象赋值给`this`
3. 通过`this`为对象添加属性和方法
4. 返回该对象


## 十一、日期对象（Date）
`Date`是JS提供的内置构造函数，用于处理日期和时间。

### 11.1 创建日期对象
| 语法 | 功能说明 | 示例 |
|------|----------|------|
| `new Date()` | 获取当前日期时间 | `let now = new Date();` |
| `new Date(年, 月, 日, 时, 分, 秒)` | 创建指定日期（月从0开始，0=1月） | `new Date(2024, 5, 1, 12, 0, 0); // 2024-06-01 12:00:00` |
| `new Date("日期字符串")` | 创建指定日期（格式如"2024-06-01 12:00:00"） | `new Date("2024-06-01");` |

### 11.2 日期时间格式化
常用方法获取格式化后的日期时间：
| 方法 | 功能 | 示例（假设当前时间为2024-06-01 14:30:00） |
|------|------|------------------------------------------|
| toLocaleDateString() | 获取本地格式日期 | "2024/6/1" 或 "2024-06-01"（取决于浏览器） |
| toLocaleTimeString() | 获取本地格式时间 | "14:30:00" |
| toLocaleString() | 获取本地格式日期时间 | "2024/6/1 14:30:00" |

### 11.3 提取日期时间组件
通过方法提取年、月、日、时、分、秒等：
```javascript
let now = new Date();
console.log(now.getFullYear()); // 年（如2024）
console.log(now.getMonth() + 1); // 月（0-11，需+1）
console.log(now.getDate()); // 日（1-31）
console.log(now.getHours()); // 时（0-23）
console.log(now.getMinutes()); // 分（0-59）
console.log(now.getSeconds()); // 秒（0-59）
console.log(now.getTime()); // 时间戳（从1970-01-01 00:00:00到当前的毫秒数）
```

### 11.4 案例：格式化日期时间
封装函数，返回“2024-06-01 14:30:00”格式的日期时间：
```javascript
function formatTime() {
  let now = new Date();
  let year = now.getFullYear();
  let month = String(now.getMonth() + 1).padStart(2, "0"); // 补0（如5→"05"）
  let day = String(now.getDate()).padStart(2, "0");
  let hour = String(now.getHours()).padStart(2, "0");
  let minute = String(now.getMinutes()).padStart(2, "0");
  let second = String(now.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}
console.log(formatTime()); // 如 "2024-06-01 14:30:00"
```


## 十二、JSON格式
JSON（JavaScript Object Notation）是用于数据交换的轻量级格式，本质是“符合特定规则的字符串”，常用于前后端数据传输。

### 12.1 JSON格式规则
- 对象格式：`{"键1":"值1","键2":"值2"}`（键必须用双引号，值为字符串时也需双引号）
- 数组格式：`[值1, 值2, 值3]`（如`[10, "hello", true]`）

### 12.2 JSON与JS对象的转换
JS提供`JSON`对象，包含两个核心方法：
| 方法 | 功能 | 示例 |
|------|------|------|
| JSON.stringify(数据) | 将JS对象/数组转换为JSON字符串 | `let obj = {name:"张三"}; JSON.stringify(obj); // '{"name":"张三"}'` |
| JSON.parse(字符串) | 将JSON字符串转换为JS对象/数组 | `let str = '{"name":"张三"}'; JSON.parse(str); // {name:"张三"}` |


## 十三、预解析
预解析是JS引擎在执行代码前的“准备工作”，分为“变量提升”和“函数提升”：

### 13.1 变量提升
- 用`var`声明的变量，会被提升到“当前作用域顶部”，但赋值不会提升（默认值为`undefined`）
- 用`let`/`const`声明的变量，存在“暂时性死区”，不会被提升（不能在声明前使用）

示例：
```javascript
console.log(a); // undefined（var提升，赋值未提升）
var a = 10;

console.log(b); // 报错（let不提升，暂时性死区）
let b = 20;
```

### 13.2 函数提升
- 用“函数声明”定义的函数（`function 函数名() {}`），会被整体提升到当前作用域顶部（可在定义前调用）
- 用“函数表达式”定义的函数（`let 函数名 = function() {}`），仅变量名提升，函数体不提升

示例：
```javascript
sayHi(); // "Hello"（函数声明提升，可提前调用）
function sayHi() {
  console.log("Hello");
}

sayHello(); // 报错（函数表达式仅变量提升，函数体未提升）
let sayHello = function() {
  console.log("Hello");
};
```


## 十四、BOM基础（浏览器对象模型）
BOM操作浏览器相关功能，核心对象是`window`（代表浏览器窗口，是JS的顶级对象）。

### 14.1 window核心属性与方法
| 属性/方法 | 功能说明 | 示例 |
|----------|----------|------|
| innerWidth / innerHeight | 获取浏览器可见区域宽/高 | `console.log(window.innerWidth);` |
| location | 操作浏览器地址栏（href属性可获取/设置URL） | `window.location.href = "https://www.baidu.com"; // 跳转页面` |
| history | 操作浏览器历史记录 | `history.back(); // 后退一页`；`history.forward(); // 前进一页` |
| alert() / confirm() / prompt() | 弹出弹窗（同前文输入输出） | - |
| setTimeout(函数, 延迟时间) | 延迟指定毫秒后执行一次函数（返回定时器ID） | `let timer = setTimeout(() => console.log("延迟1秒"), 1000);` |
| setInterval(函数, 间隔时间) | 每隔指定毫秒重复执行函数（返回定时器ID） | `let timer = setInterval(() => console.log("每1秒执行"), 1000);` |
| clearTimeout(定时器ID) | 清除setTimeout定时器 | `clearTimeout(timer);` |
| clearInterval(定时器ID) | 清除setInterval定时器 | `clearInterval(timer);` |

### 14.2 定时器案例：倒计时
```javascript
let seconds = 10;
let timer = setInterval(() => {
  seconds--;
  console.log(`倒计时：${seconds}秒`);
  if (seconds === 0) {
    clearInterval(timer); // 倒计时结束，清除定时器
    console.log("倒计时结束！");
  }
}, 1000);
```


## 十五、DOM基础（文档对象模型）
DOM将网页文档抽象为“树状结构”，通过API操作网页标签（元素）、属性、文本等，核心对象是`document`（代表整个网页文档）。

### 15.1 获取DOM元素
| 方法 | 功能说明 | 示例 |
|------|----------|------|
| getElementById("id值") | 根据ID获取单个元素（ID唯一） | `let box = document.getElementById("box");` |
| getElementsByClassName("类名") | 根据类名获取元素集合（伪数组） | `let list = document.getElementsByClassName("item");` |
| getElementsByTagName("标签名") | 根据标签名获取元素集合（伪数组） | `let divs = document.getElementsByTagName("div");` |
| querySelector("选择器") | 根据CSS选择器获取**第一个匹配元素**（支持ID、类、标签选择器） | `let btn = document.querySelector("#btn");` |
| querySelectorAll("选择器") | 根据CSS选择器获取**所有匹配元素**（伪数组） | `let items = document.querySelectorAll(".item");` |
| document.body | 获取body元素（直接获取，无需选择器） | `let body = document.body;` |
| document.documentElement | 获取html元素（直接获取） | `let html = document.documentElement;` |

### 15.2 操作DOM元素内容
| 属性 | 功能说明 | 示例 |
|------|----------|------|
| innerText | 获取/设置元素的“纯文本内容”（不解析标签） | `box.innerText = "Hello";` |
| innerHTML | 获取/设置元素的“HTML内容”（解析标签） | `box.innerHTML = "<strong>Hello</strong>";` |

### 15.3 操作DOM元素属性
#### 15.3.1 内置属性（如src、href、id、class等）
直接通过“点语法”操作：
```javascript
let img = document.querySelector("img");
img.src = "new.jpg"; // 修改图片路径
img.alt = "新图片"; // 修改alt属性

let a = document.querySelector("a");
a.href = "https://www.baidu.com"; // 修改链接地址
a.target = "_blank"; // 设置新窗口打开
```

#### 15.3.2 自定义属性
使用`getAttribute`、`setAttribute`、`removeAttribute`操作：
```javascript
let box = document.querySelector("#box");
box.setAttribute("data-id", "1001"); // 设置自定义属性data-id
console.log(box.getAttribute("data-id")); // 获取自定义属性，返回"1001"
box.removeAttribute("data-id"); // 删除自定义属性
```

### 15.4 操作DOM元素样式
#### 15.4.1 行内样式（style属性）
通过`element.style.样式名`操作（样式名采用小驼峰，如`backgroundColor`）：
```javascript
let box = document.querySelector("#box");
box.style.width = "200px";
box.style.height = "200px";
box.style.backgroundColor = "red";
```

#### 15.4.2 类样式（class属性）
通过`element.className`或`element.classList`操作（推荐`classList`，更灵活）：
```javascript
let box = document.querySelector("#box");
// 方法1：className（覆盖原有类）
box.className = "active";

// 方法2：classList（添加/删除/切换类，不覆盖原有类）
box.classList.add("active"); // 添加类
box.classList.remove("active"); // 删除类
box.classList.toggle("active"); // 切换类（有则删，无则加）
```

### 15.5 事件绑定与处理
事件是“用户与网页的交互行为”（如点击、鼠标移动、键盘输入等），通过绑定事件处理函数实现交互逻辑。

#### 15.5.1 事件三要素
1. **事件源**：触发事件的元素（如按钮、输入框）
2. **事件类型**：交互行为类型（如`click`点击、`mouseover`鼠标移入）
3. **事件处理函数**：事件触发时执行的函数

#### 15.5.2 常见事件类型
| 事件类型 | 功能说明 |
|----------|----------|
| click | 鼠标点击事件 |
| dblclick | 鼠标双击事件 |
| mouseover | 鼠标移入元素事件 |
| mouseout | 鼠标移出元素事件 |
| mousedown | 鼠标按下事件 |
| mouseup | 鼠标弹起事件 |
| mousemove | 鼠标移动事件 |
| focus | 元素获得焦点事件（如输入框） |
| blur | 元素失去焦点事件（如输入框） |
| keydown | 键盘按下事件 |
| keyup | 键盘弹起事件 |
| load | 页面或资源加载完成事件 |
| resize | 浏览器窗口尺寸改变事件 |
| scroll | 页面或元素滚动事件 |

#### 15.5.3 事件绑定方式
| 绑定方式 | 语法 | 特点 |
|----------|------|------|
| 行内事件 | `<元素 on事件类型="函数()">` | 耦合度高，不推荐 |
| 0级事件（on事件） | `元素.on事件类型 = 函数` | 简单，同一事件只能绑定一个函数（后续会覆盖） |
| 2级事件（addEventListener） | `元素.addEventListener("事件类型", 函数)` | 支持绑定多个函数，推荐使用（IE8及以下不支持，需用attachEvent） |

示例：
```javascript
// 1. 0级事件绑定
let btn = document.querySelector("#btn");
btn.onclick = function() {
  console.log("按钮被点击了（0级事件）");
};

// 2. 2级事件绑定（支持多个函数）
btn.addEventListener("click", function() {
  console.log("按钮被点击了（2级事件1）");
});
btn.addEventListener("click", function() {
  console.log("按钮被点击了（2级事件2）");
});
```

#### 15.5.4 事件对象（event）
事件触发时，浏览器会自动传入一个“事件对象”，包含事件相关信息（如鼠标位置、触发元素等），常用属性：
| 属性 | 功能说明 |
|------|----------|
| target | 获取“事件源”（真正触发事件的元素） |
| clientX / clientY | 鼠标相对于浏览器可见区域的坐标 |
| pageX / pageY | 鼠标相对于网页文档的坐标 |
| keyCode | 键盘事件中，按下键的ASCII码（如回车是13） |
| preventDefault() | 阻止元素默认行为（如阻止a标签跳转、表单提交） |
| stopPropagation() | 阻止事件冒泡（事件从子元素向父元素传播） |

示例：阻止a标签默认跳转并获取鼠标位置：
```javascript
let a = document.querySelector("a");
a.addEventListener("click", function(e) {
  e.preventDefault(); // 阻止默认跳转行为
  console.log(`鼠标位置：(${e.clientX}, ${e.clientY})`);
});
```

### 15.6 操作DOM树（增删改查）
#### 15.6.1 创建元素
`document.createElement("标签名")`：创建指定标签的元素（初始仅在内存中，需添加到DOM树）
```javascript
let div = document.createElement("div");
div.innerText = "新创建的div";
div.style.color = "red";
```

#### 15.6.2 添加元素
| 方法 | 功能说明 | 示例 |
|------|----------|------|
| appendChild(子元素) | 将子元素添加到父元素的“末尾” | `document.body.appendChild(div);` |
| insertBefore(新元素, 参考元素) | 将新元素插入到“参考元素之前” | `let reference = document.querySelector("#ref"); document.body.insertBefore(div, reference);` |

#### 15.6.3 删除元素
| 方法 | 功能说明 | 示例 |
|------|----------|------|
| removeChild(子元素) | 父元素删除指定子元素（兼容所有浏览器） | `let parent = document.querySelector("#parent"); parent.removeChild(div);` |
| remove() | 元素自删除（IE不支持） | `div.remove();` |

#### 15.6.4 克隆元素
`element.cloneNode(是否深克隆)`：克隆元素，参数为`true`时“深克隆”（复制子元素），`false`时“浅克隆”（仅复制元素本身）
```javascript
let div = document.querySelector("#box");
let cloneDiv = div.cloneNode(true); // 深克隆
document.body.appendChild(cloneDiv);
```

### 15.7 事件委托
事件委托利用“事件冒泡”机制，将子元素的事件绑定到父元素上，实现“批量子元素事件处理”，优点：
1. 减少事件绑定数量，节约内存
2. 动态添加的子元素也能触发事件

示例：为ul下的所有li绑定点击事件（利用事件委托）：
```javascript
let ul = document.querySelector("ul");
ul.addEventListener("click", function(e) {
  // 判断触发事件的是li元素
  if (e.target.tagName === "LI") {
    console.log("点击了li：", e.target.innerText);
  }
});
```