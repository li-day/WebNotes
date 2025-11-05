# NPM 常用命令核心整理
NPM（Node Package Manager）是 Node.js 内置的包管理工具，用于安装、卸载、管理项目依赖，以及执行项目脚本。本文基于前端开发高频场景，对 NPM 常用命令进行分类整理，明确每个命令的**功能定义、核心语法、使用场景及注意事项**，同时补充实用技巧，帮助开发者高效管理项目依赖。


# npm常用命令速查表

| 命令 | 简写/扩展 | 功能说明 |
|------|----------|----------|
| `npm -v` | - | 查看npm版本号 |
| `npm init` | `npm init -y` | 初始化项目生成`package.json`（`-y`跳过交互，直接生成默认配置） |
| `npm install` | `npm i` | 根据`package.json`自动安装所有依赖 |
| `npm install 包名 --save-dev` | `npm i 包名 -D` | 安装开发环境依赖（记录在`devDependencies`） |
| `npm install 包名 --save` | `npm i 包名 -S` | 安装生产环境依赖（记录在`dependencies`） |
| `npm list` | `npm ls` | 查看当前目录已安装的本地包 |
| `npm list -g` | `npm ls -g` | 查看全局已安装的包 |
| `npm --help` | - | 查看npm帮助文档 |
| `npm install 包名 @版本号` | `npm i 包名@x.y.z` | 安装指定版本的包 |
| `npm update 包名` | `npm up 包名` | 更新指定包到最新版本 |
| `npm uninstall 包名` | `npm un 包名` | 卸载指定的本地包 |
| `npm config list` | - | 查看npm的所有配置信息 |
| `npm 指定命令 --help` | - | 查看特定命令的详细帮助（如`npm install --help`） |
| `npm info 指定包名` | - | 查看远程npm仓库中指定包的所有版本信息 |
| `npm config get registry` | - | 查看当前包的下载源地址 |
| `npm config set registry <地址>` | - | 修改包下载源（如`npm config set registry https://registry.npmmirror.com`切换为淘宝镜像） |
| `npm root` | - | 查看本地包的安装路径 |
| `npm root -g` | - | 查看全局包的安装路径 |
| `npm ls 包名` | - | 查看本地安装的指定包及版本信息（未安装显示empty） |
| `npm ls 包名 -g` | - | 查看全局安装的指定包及版本信息（未安装显示empty） |
| `npm config set prefix <路径>` | - | 修改npm默认的全局安装路径（如`npm config set prefix D:\node\npm-global`） |
| `npm cache clear -f` | - | 强制清除npm的缓存 |
| `npm link` | - | 本地包映射到全局，模拟包安装后的使用状态（开发npm包时常用） |
| `npm unlink 包名` | - | 断开本地包与全局的映射关联 |
| `npm publish` | - | 将当前项目发布到npm仓库（需先登录npm账号） |
| `npm login` | - | 登录npm账号（发布包前需执行） |
| `npm logout` | - | 退出当前npm账号 |
| `npm run 脚本名` | - | 执行`package.json`中`scripts`定义的脚本（如`npm run dev`） |

> 注：`npm install`的`--save`（-S）在npm 5.0+版本中为默认行为，不指定时默认安装到`dependencies`


## 一、NPM 环境初始化（项目起步必做）
### 1.1 npm init - 初始化项目（生成 package.json）
#### 功能定义
在项目目录中生成 `package.json` 文件（项目配置核心文件，记录项目名称、版本、依赖、脚本等信息），是使用 NPM 管理项目的第一步。

#### 核心语法
| 命令 | 说明 | 场景推荐 |
|------|------|----------|
| `npm init` | 交互式初始化 | 需自定义项目信息（如名称、版本、作者）时使用，按提示输入内容 |
| `npm init -y` / `npm init --yes` | 快速初始化（默认配置） | 日常开发首选，自动生成默认配置的 `package.json`，无需手动输入 |

#### 生成的 package.json 核心字段说明
```json
{
  "name": "my-project",       // 项目名称（小写，无空格，可含连字符/下划线）
  "version": "1.0.0",         // 项目版本（遵循 SemVer 规范：主版本.次版本.修订号）
  "description": "",          // 项目描述（可选，用于 npm 官网展示）
  "main": "index.js",         // 项目入口文件（默认 index.js）
  "scripts": { "test": "echo \"Error: no test specified\" && exit 1" }, // 自定义脚本
  "keywords": [],             // 项目关键词（可选，用于 npm 搜索）
  "author": "",               // 作者信息（可选，格式："姓名 <邮箱>"）
  "license": "ISC"            // 开源协议（默认 ISC，常用 MIT）
}
```

#### 注意
- `name` 字段不可包含大写字母和空格，若发布到 npm 仓库，需确保名称在 npm 官网唯一。
- 后续可手动修改 `package.json` 中的字段，如添加 `scripts` 脚本、修改 `main` 入口等。


## 二、依赖管理（安装/卸载/更新依赖）
NPM 依赖分为两类：**生产依赖**（项目运行必需，如 `express`、`react`）和**开发依赖**（仅开发阶段使用，如 `webpack`、`eslint`），安装时需区分类型。

### 2.1 npm install - 安装依赖（核心命令）
#### 功能定义
根据 `package.json` 或指定包名，下载并安装依赖到项目的 `node_modules` 目录，同时更新 `package.json` 和 `package-lock.json`（锁定依赖版本）。

#### 核心语法
| 命令 | 简写 | 功能 | 场景说明 |
|------|------|------|----------|
| `npm install` | `npm i` | 安装 `package.json` 中所有依赖 | 克隆项目后首次安装，或切换分支后同步依赖 |
| `npm install <包名>` | `npm i <包名>` | 安装指定包（默认生产依赖） | 安装生产依赖，如 `npm i express`（项目运行需用） |
| `npm install <包名> --save` | `npm i <包名> -S` | 安装指定包并添加到生产依赖 | 等价于默认安装（NPM 5+ 后无需显式加 `-S`），记录到 `dependencies` 字段 |
| `npm install <包名> --save-dev` | `npm i <包名> -D` | 安装指定包并添加到开发依赖 | 安装开发工具，如 `npm i webpack -D`，记录到 `devDependencies` 字段 |
| `npm install <包名>@<版本号>` | `npm i <包名>@<版本>` | 安装指定版本的包 | 需固定依赖版本时使用，如 `npm i lodash@4.17.21` |
| `npm install <包名> -g` | `npm i <包名> -g` | 全局安装指定包 | 安装全局工具，如 `npm i nodemon -g`（可在任意项目中使用） |
| `npm install <包名> --no-save` | - | 安装包但不记录到 `package.json` | 临时安装测试包，不希望影响项目依赖配置时使用 |

#### 关键文件说明
- `node_modules`：存放所有安装的依赖包，体积较大，**不提交到 Git 仓库**（需在 `.gitignore` 中排除）。
- `package-lock.json`：锁定所有依赖的精确版本（包括间接依赖），确保团队成员或部署环境安装的依赖版本一致，**必须提交到 Git 仓库**。

#### 示例
```bash
# 1. 安装生产依赖（express）
npm i express -S

# 2. 安装开发依赖（webpack）
npm i webpack -D

# 3. 安装指定版本的 lodash
npm i lodash@4.17.21

# 4. 全局安装 nodemon（用于自动重启 Node 服务）
npm i nodemon -g
```


### 2.2 npm uninstall - 卸载依赖
#### 功能定义
从 `node_modules` 中删除指定依赖，并从 `package.json` 中移除对应的依赖记录（避免残留无用配置）。

#### 核心语法
| 命令 | 简写 | 功能 | 场景说明 |
|------|------|------|----------|
| `npm uninstall <包名>` | `npm un <包名>` | 卸载指定生产依赖 | 如 `npm un express`，同时删除 `dependencies` 中的记录 |
| `npm uninstall <包名> --save-dev` | `npm un <包名> -D` | 卸载指定开发依赖 | 如 `npm un webpack -D`，同时删除 `devDependencies` 中的记录 |
| `npm uninstall <包名> -g` | `npm un <包名> -g` | 卸载全局安装的包 | 如 `npm un nodemon -g`，删除全局工具 |
| `npm uninstall <包名> --no-save` | - | 卸载包但不删除 `package.json` 记录 | 临时卸载测试，后续可能重新安装时使用（不推荐常规场景） |

#### 示例
```bash
# 1. 卸载生产依赖 express
npm un express

# 2. 卸载开发依赖 webpack
npm un webpack -D

# 3. 卸载全局工具 nodemon
npm un nodemon -g
```


### 2.3 npm update - 更新依赖
#### 功能定义
更新 `package.json` 中指定依赖或所有依赖到符合版本约束的最新版本（需结合 `package.json` 中的版本规则），并更新 `package-lock.json`。

#### 核心语法
| 命令 | 功能 | 场景说明 |
|------|------|----------|
| `npm update` | 更新所有依赖 | 按 `package.json` 中的版本约束，更新所有生产依赖和开发依赖 |
| `npm update <包名>` | 更新指定依赖 | 仅更新单个包，如 `npm update lodash` |
| `npm update <包名1> <包名2>` | 更新多个依赖 | 同时更新多个包，如 `npm update lodash express` |
| `npm update -g <包名>` | 更新全局依赖 | 更新全局安装的包，如 `npm update -g nodemon` |

#### 版本约束规则（package.json 中版本号的含义）
`package.json` 中依赖的版本号格式决定了 `npm update` 的更新范围，常见规则：
| 版本格式 | 含义 | 示例 | 更新范围 |
|----------|------|------|----------|
| `~x.y.z` | 允许修订号更新（x、y 固定，z 可更新） | `~1.2.3` | 可更新到 1.2.x 的最新版本（如 1.2.4、1.2.5） |
| `^x.y.z` | 允许次版本和修订号更新（x 固定，y、z 可更新） | `^1.2.3` | 可更新到 1.x.x 的最新版本（如 1.3.0、1.4.2） |
| `x.y.z` | 固定版本（不允许任何更新） | `1.2.3` | 只能保持 1.2.3 版本，`npm update` 不生效 |
| `x.y` | 允许修订号更新（等价于 `~x.y.0`） | `1.2` | 可更新到 1.2.x 的最新版本 |

#### 示例
```bash
# 1. 更新所有依赖
npm update

# 2. 仅更新 lodash 依赖
npm update lodash

# 3. 更新全局工具 nodemon
npm update -g nodemon
```


### 2.4 npm ls - 查看依赖树
#### 功能定义
查看项目依赖的层级结构（包括直接依赖和间接依赖），以及各依赖的安装版本，用于排查依赖冲突或版本问题。

#### 核心语法
| 命令 | 功能 | 场景说明 |
|------|------|----------|
| `npm ls` | 查看所有依赖树 | 显示 `node_modules` 中所有依赖的层级关系（输出内容较多） |
| `npm ls <包名>` | 查看指定依赖的层级 | 仅显示单个包的依赖路径，如 `npm ls lodash` |
| `npm ls --depth=0` | 查看直接依赖 | 仅显示 `package.json` 中记录的直接依赖（生产+开发），简洁清晰 |
| `npm ls -g <包名>` | 查看全局依赖的层级 | 查看全局安装的包的依赖结构，如 `npm ls -g nodemon` |

#### 示例
```bash
# 1. 查看所有直接依赖（最常用，避免输出过多）
npm ls --depth=0

# 2. 查看 lodash 的依赖路径（排查间接依赖版本）
npm ls lodash

# 3. 查看全局依赖 nodemon 的结构
npm ls -g nodemon
```


## 三、脚本管理（npm run）
`package.json` 的 `scripts` 字段可定义自定义脚本（如启动服务、打包构建、代码检测等），通过 `npm run <脚本名>` 执行，简化开发流程。

### 3.1 npm run - 执行自定义脚本
#### 功能定义
执行 `package.json` 中 `scripts` 字段定义的脚本命令，支持简写（部分常用脚本可省略 `run`）。

#### 核心语法
| 命令 | 功能 | 场景说明 |
|------|------|----------|
| `npm run <脚本名>` | 执行指定脚本 | 如 `npm run dev`（执行 `scripts.dev` 定义的命令） |
| `npm start` | 执行 `start` 脚本 | 简写，等价于 `npm run start`（常用：启动开发服务） |
| `npm test` | 执行 `test` 脚本 | 简写，等价于 `npm run test`（常用：运行测试用例） |
| `npm run <脚本名> -- <参数>` | 给脚本传递额外参数 | 如 `npm run build -- --mode production`（给 build 脚本传 `--mode production` 参数） |

#### 常见脚本配置示例（package.json）
```json
{
  "scripts": {
    "dev": "nodemon index.js",        // 启动开发服务（用 nodemon 自动重启）
    "start": "node index.js",         // 启动生产服务（无自动重启）
    "build": "webpack --config webpack.config.js", // 执行打包构建
    "lint": "eslint src/**/*.js",     // 代码检测（用 eslint）
    "test": "jest"                    // 运行测试（用 jest）
  }
}
```

#### 示例
```bash
# 1. 执行 dev 脚本（启动开发服务）
npm run dev

# 2. 执行 start 脚本（简写，启动生产服务）
npm start

# 3. 执行 build 脚本并传递参数（指定生产环境打包）
npm run build -- --mode production

# 4. 执行 lint 脚本（代码检测）
npm run lint
```


### 3.2 npm run 脚本的特殊变量
脚本中可使用 NPM 提供的特殊变量，获取项目或依赖的信息：
| 变量 | 含义 | 示例（脚本中使用） |
|------|------|--------------------|
| `$npm_package_name` | 项目名称（package.json.name） | `"echo 项目名称：$npm_package_name"` |
| `$npm_package_version` | 项目版本（package.json.version） | `"echo 项目版本：$npm_package_version"` |
| `$npm_package_dependencies_<包名>` | 指定生产依赖的版本 | `"echo lodash 版本：$npm_package_dependencies_lodash"` |
| `$npm_config_<配置名>` | NPM 配置项的值 | `"echo 镜像地址：$npm_config_registry"` |

#### 示例（脚本中使用变量）
```json
{
  "scripts": {
    "info": "echo 项目：$npm_package_name@$npm_package_version，lodash版本：$npm_package_dependencies_lodash"
  }
}
```
执行 `npm run info` 后，输出类似：`项目：my-project@1.0.0，lodash版本：4.17.21`。


## 四、全局配置与镜像管理
NPM 默认从 [npm 官方镜像](https://registry.npmjs.org/) 下载依赖，国内访问速度较慢，可通过配置国内镜像（如淘宝 NPM 镜像）提升速度；同时可配置全局参数（如默认安装路径、用户名等）。

### 4.1 npm config - 配置 NPM 参数
#### 功能定义
查看、设置、删除 NPM 的配置项（如镜像地址、默认安装类型、缓存路径等），配置分为**用户级**（仅当前用户生效）、**项目级**（仅当前项目生效）、**全局级**（所有项目生效）。

#### 核心语法
| 命令 | 功能 | 场景说明 |
|------|------|----------|
| `npm config get <配置名>` | 查看指定配置项的值 | 如 `npm config get registry`（查看当前镜像地址） |
| `npm config set <配置名> <值>` | 设置配置项 | 如 `npm config set registry https://registry.npmmirror.com/`（设置淘宝镜像） |
| `npm config delete <配置名>` | 删除配置项 | 如 `npm config delete registry`（恢复默认镜像） |
| `npm config list` | 查看所有配置项 | 显示用户级、项目级、全局级的所有配置 |
| `npm config set <配置名> <值> --global` | 设置全局配置 | 如 `npm config set prefix "D:\npm-global"`（设置全局依赖安装路径） |

#### 常用配置项说明
| 配置项 | 含义 | 默认值 | 常用设置 |
|--------|------|--------|----------|
| `registry` | 依赖下载镜像地址 | `https://registry.npmjs.org/` | 国内推荐：`https://registry.npmmirror.com/`（淘宝镜像） |
| `prefix` | 全局依赖安装路径 | 系统默认路径（如 Windows：`C:\Users\用户名\AppData\Roaming\npm`） | 自定义路径（如 `D:\npm-global`，避免权限问题） |
| `cache` | 依赖缓存路径 | 系统默认缓存路径 | 自定义路径（如 `D:\npm-cache`） |
| `save` | 安装依赖时是否默认添加到生产依赖 | `true`（NPM 5+） | 无需修改（默认即可） |

#### 示例
```bash
# 1. 查看当前镜像地址
npm config get registry

# 2. 设置淘宝镜像（国内推荐）
npm config set registry https://registry.npmmirror.com/

# 3. 设置全局依赖安装路径（避免 C 盘占用）
npm config set prefix "D:\npm-global"

# 4. 查看所有配置项
npm config list
```


### 4.2 npx - 执行依赖中的命令（无需全局安装）
#### 功能定义
NPM 5.2+ 内置 `npx` 工具，用于执行项目 `node_modules/.bin` 目录下的命令（如 `webpack`、`eslint`），无需全局安装依赖，也无需手动输入路径，简化临时命令执行。

#### 核心语法
| 命令 | 功能 | 场景说明 |
|------|------|----------|
| `npx <命令>` | 执行项目依赖中的命令 | 如 `npx webpack`（执行项目中安装的 webpack，无需全局安装） |
| `npx <包名>` | 临时安装包并执行其命令 | 如 `npx create-react-app my-app`（临时安装 `create-react-app` 并创建 React 项目，执行后自动删除包） |
| `npx <命令> --version` | 查看命令对应的包版本 | 如 `npx webpack --version`（查看项目中 webpack 的版本） |

#### 示例
```bash
# 1. 执行项目中安装的 webpack（无需全局安装）
npx webpack

# 2. 临时安装 create-react-app 并创建 React 项目（推荐，避免全局安装工具）
npx create-react-app my-react-app

# 3. 查看项目中 eslint 的版本
npx eslint --version

# 4. 执行项目中的自定义脚本（等价于 npm run dev，但可传递参数）
npx nodemon index.js --watch src
```


## 五、依赖版本与锁文件管理
### 5.1 npm outdated - 检查依赖是否过时
#### 功能定义
对比 `package.json` 中的依赖版本与 npm 仓库中的最新版本，列出所有可更新的依赖（显示当前版本、可更新版本、最新版本），帮助开发者发现需要更新的依赖。

#### 核心语法
| 命令 | 功能 | 场景说明 |
|------|------|----------|
| `npm outdated` | 检查所有依赖是否过时 | 显示生产依赖和开发依赖的过时情况 |
| `npm outdated <包名>` | 检查指定依赖是否过时 | 仅查看单个包的版本状态，如 `npm outdated lodash` |
| `npm outdated --production` | 仅检查生产依赖 | 排除开发依赖，只关注项目运行必需的依赖 |

#### 输出结果解读
执行 `npm outdated` 后，输出表格包含以下列：
- `Package`：依赖包名
- `Current`：当前项目中安装的版本
- `Wanted`：符合 `package.json` 版本约束的最新版本（`npm update` 可更新到该版本）
- `Latest`：npm 仓库中该包的最新版本（可能超出 `package.json` 的版本约束，需手动修改版本号才能更新）
- `Location`：依赖在 `node_modules` 中的路径

#### 示例
```bash
# 1. 检查所有依赖是否过时
npm outdated

# 2. 仅检查生产依赖是否过时
npm outdated --production

# 3. 检查 lodash 是否过时
npm outdated lodash
```


### 5.2 package-lock.json 与 yarn.lock 的区别
- **package-lock.json**：NPM 生成的依赖锁文件，锁定所有依赖（包括直接和间接依赖）的精确版本，确保不同环境安装的依赖版本一致，**必须提交到 Git 仓库**。
- **yarn.lock**：Yarn（另一个包管理工具）生成的锁文件，功能与 `package-lock.json` 一致，但格式不同。若项目中同时存在两种锁文件，可能导致依赖冲突，建议统一使用一种包管理工具（NPM 或 Yarn）。

#### 注意
- 不要手动修改 `package-lock.json`（由 NPM 自动维护），否则可能导致依赖版本混乱。
- 若需同步团队成员的依赖版本，确保所有人都基于 `package-lock.json` 执行 `npm install`（而非手动修改 `package.json` 中的版本号）。


## 六、其他高频实用命令
### 6.1 npm version - 管理项目版本（遵循 SemVer 规范）
#### 功能定义
自动更新 `package.json` 中的 `version` 字段，并生成 Git 标签（可选），遵循 [SemVer 语义化版本规范](https://semver.org/)（主版本.次版本.修订号：`x.y.z`）。

#### 核心语法
| 命令 | 功能 | 版本变化示例 |
|------|------|--------------|
| `npm version patch` | 修订号更新（修复 bug，兼容旧版本） | `1.0.0` → `1.0.1` |
| `npm version minor` | 次版本更新（新增功能，兼容旧版本） | `1.0.0` → `1.1.0` |
| `npm version major` | 主版本更新（不兼容旧版本的重大变更） | `1.0.0` → `2.0.0` |
| `npm version <版本号>` | 手动指定版本 | `npm version 1.2.3`（直接将版本设为 1.2.3） |
| `npm version <类型> -m "chore: bump version to %s"` | 更新版本并生成 Git 提交信息 | `%s` 会自动替换为新版本号，如 `chore: bump version to 1.0.1` |

#### 示例
```bash
# 1. 修复 bug 后，更新修订号（1.0.0 → 1.0.1）
npm version patch -m "chore: bump version to %s (fix login bug)"

# 2. 新增功能后，更新次版本（1.0.1 → 1.1.0）
npm version minor -m "chore: bump version to %s (add user profile)"

# 3. 重大重构后，更新主版本（1.1.0 → 2.0.0）
npm version major -m "chore: bump version to %s (breaking change: API v2)"
```


### 6.2 npm cache - 管理依赖缓存
#### 功能定义
NPM 会缓存下载的依赖包到本地（默认路径由 `cache` 配置项指定），`npm cache` 命令用于查看、清理缓存，解决因缓存损坏导致的依赖安装失败问题。

#### 核心语法
| 命令 | 功能 | 场景说明 |
|------|------|----------|
| `npm cache ls` | 查看缓存内容 | 显示所有缓存的依赖包（输出较多，一般用于排查缓存问题） |
| `npm cache clean --force` | 强制清理所有缓存 | 缓存损坏导致安装失败时使用（如 `npm install` 报错，可先清理缓存） |
| `npm cache verify` | 验证并清理无效缓存 | 安全清理缓存（保留有效缓存，推荐优先使用，而非 `--force`） |

#### 示例
```bash
# 1. 验证并清理无效缓存（推荐）
npm cache verify

# 2. 强制清理所有缓存（缓存损坏时使用）
npm cache clean --force
```


### 6.3 npm doctor - 诊断 NPM 环境问题
#### 功能定义
检查 NPM 环境是否正常（如 Node.js 版本、镜像地址、权限、缓存等），输出诊断报告并给出修复建议，用于排查 NPM 命令执行失败的环境问题。

#### 核心语法
```bash
npm doctor
```

#### 诊断内容
执行后会检查以下项：
- Node.js 版本是否兼容当前 NPM 版本
- NPM 镜像地址是否可访问
- 全局依赖安装路径权限是否正常
- 缓存目录是否可读写
- `package.json` 是否存在语法错误

#### 示例
```bash
# 诊断 NPM 环境问题
npm doctor
# 输出示例（正常情况）：
# Check                               Value   Recommendation
# npm ping                            ok
# npm -v                              ok      current: v9.6.7, latest: v9.8.1
# node -v                             ok      current: v18.17.0, recommended: v18.17.0
# npm config get registry             ok      https://registry.npmmirror.com/
# ...
```


## 七、NPM 最佳实践与注意事项
1. **`.gitignore` 配置**：必须排除 `node_modules`（依赖包目录）和 `npm-debug.log`（错误日志文件），避免 Git 仓库体积过大。
   ```bash
   # .gitignore 示例
   node_modules/
   npm-debug.log
   .DS_Store # Mac 系统文件
   Thumbs.db # Windows 系统文件
   ```

2. **依赖版本管理**：
   - 生产依赖建议使用 `^x.y.z` 或 `~x.y.z`（允许小版本更新，获取 bug 修复），避免使用固定版本 `x.y.z`（错过安全更新）。
   - 开发依赖可使用 `*`（自动安装最新版本），但需注意兼容性。

3. **避免全局安装过多依赖**：除工具类依赖（如 `nodemon`、`create-react-app`）外，其他依赖优先安装到项目中（用 `npm i <包名>`），避免全局依赖版本冲突。

4. **权限问题处理**：
   - 全局安装依赖时若出现权限报错（如 `EACCES`），不要用 `sudo`（Linux/Mac）或管理员权限（Windows），推荐通过 `npm config set prefix` 自定义全局安装路径（避免系统目录权限问题）。

5. **镜像选择**：国内用户优先使用淘宝镜像（`https://registry.npmmirror.com/`），提升依赖下载速度；若需发布包到 npm 官网，需先将镜像切回官方（`npm config set registry https://registry.npmjs.org/`）。

6. **锁文件提交**：`package-lock.json` 必须提交到 Git 仓库，确保团队成员和部署环境安装的依赖版本完全一致，避免“在我电脑上能跑”的问题。

通过以上命令整理，可覆盖前端开发中 NPM 的绝大多数使用场景，结合最佳实践能高效管理项目依赖，提升开发效率。