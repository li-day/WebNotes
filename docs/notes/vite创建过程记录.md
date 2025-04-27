## 创建指令

```cmd
npm create vite@latest my-vue-app -- --template vue-ts
```

这里我创建的是vuets版本指令是[官网](https://cn.vitejs.dev/guide/)里面的

## 配置vite.config

### 设置启动配置server

```js
server: {
    host: '0.0.0.0', // 配置host ip
    open: true, // 是否启动打开浏览器
    port: 8080 // 端口
}
```

详细配置看[官网](https://cn.vitejs.dev/config/server-options.html)

### 配置文件绝对路径@

```javascript
import { resolve } 'path' // 该模块为node模块 在vite ts中需要下载 插件@types/node npm i @types/node -d
resolve:{
    alias: {
        '@': resolve('./src')
    }
}

// tsconfig.json文件
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### 配置打包build

```javascript
build: {
    outDir: 'dist', // 指定打包文件名
    target: 'es2015',// 指定打包代码格式
    terserOptions:{ 
      compress: {
        drop_console: true, // 配置build后console.log不执行
        drop_debugger: true,// 配置build后debugger不执行
        ecma: 2015
      }
    }
  },
```

### 配置优化插件

`npm install --save-dev rollup-plugin-visualizer`  打包体积视图插件

```javascript
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: [
            visualizer({open:true, gzipSize: true, brotliSize: false, title: '打包后视图插件', template: 'treemap'})
        ]
    }
})
```

`npm install vite-plugin-compression`  vite打包开始gzip插件

```javascript
import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
    plugins: [
        //deleteOriginFile 是否删除原文件
        viteCompression({deleteOriginFile: true})
    ]
})
```

## 集成vue-route路由

`npm i vue-router`  在src下创建router/index

```typescript
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import {constantRouter} from './modules/home'
const constantRouter: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/home.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRouter
})
export default router

// main.ts 文件引入
import router from '@/router'

app.use(router)

```

## 集成pinia状态管理

`npm install pinia`  在src文件下创建pinia/index [官网](https://pinia.vuejs.org/zh/getting-started.html)

```ts
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

const pinia = createPinia()

pinia.use(piniaPersist)

export default pinia

// main.ts 引入
import pinia from '@/pinia'

app.use(pinia)
```

## 集成Element-plus 这边建议看[官网](https://element-plus.org/zh-CN/guide/quickstart.html)

## 集成axios

`npm i axios`  创建src/api/index

```typescript
import Axios, { ResponseType } from 'axios'
import { baseUrl } from './env'  
import APIURL from './api'

const axios = Axios.create({
  timeout: 1800000
})

type VITETS = 'test' | 'production' | 'development'

axios.defaults.baseURL = baseUrl[import.meta.env.VITE_MODE as VITETS]

// 添加请求拦截器
axios.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)
export interface AJAXTS {
  url: string
  params: {}
  data: {}
  responseType: ResponseType
  type: string
}
export const ajaxGet = async ({ url, params = {}, responseType }: Partial<AJAXTS>) =>
  await doAjax({ url, params, responseType, type: 'get' })
export const ajaxPost = async ({ url, data = {}, responseType }: Partial<AJAXTS>) =>
  await doAjax({ url, data, responseType, type: 'post' })
export const ajaxDelete = async ({ url, params = {}, responseType }: Partial<AJAXTS>) =>
  await doAjax({ url, params, responseType, type: 'delete' })
export const ajaxPut = async ({ url, data = {}, responseType }: Partial<AJAXTS>) =>
  await doAjax({ url, data, responseType, type: 'put' })

const doAjax = ({ url, params = {}, data = {}, responseType, type }: Partial<AJAXTS>) => {
  return axios({
    method: type,
    url: APIURL[url as string] || url,
    params,
    data,
    responseType
  })
}

// env.ts文件
export const baseUrl = {
    test: '',
    production: '',
    development: 'http://192.168.124.67:8081'
  }
  
// api.ts文件
const apiObj: {[key:string]:string} = {}
export default apiObj

```

## 配置环境

1. 创建.env.development开发环境

   1. ```
      # 环境
      VITE_MODE = development
      # 接口地址
      VITE_BASE_URL = ''
      ```

   2. 

2. 创建.env.production生产环境

   1. ```
      # 环境
      VITE_MODE = production
      # 接口地址
      VITE_BASE_URL = ''
      ```

   2. 

3. 创建.env.test测试环境

   1. ```
      # 环境
      VITE_MODE = test
      # 接口地址
      VITE_BASE_URL = ''
      ```

   2. 

## 集成[eslint](https://eslint.cn/)与[prettier](https://www.prettier.cn/docs/options.html)

```cmd
// 下载包
npm i eslint 
```

```
// 初始化eslint
npx eslint --init
// 由于vite的中
```

```javascript
? How would you like to use ESLint? ...
  To check syntax only
  To check syntax and find problems
> To check syntax, find problems, and enforce code style
  ---------------------------------------------------------------- 选择强制代码风格
√ How would you like to use ESLint? · style       
? What type of modules does your project use? ... 
> JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these
  ------------------------------------------------------------选择语言模块
? Which framework does your project use? ... 
  React
> Vue.js
  None of these
  ------------------------------------------------------------选择语言框架
? Does your project use TypeScript? » No / Yes
  --------------------------------------------是否使用ts (视自己情况而定,我这里不用选No)
? Where does your code run? ...  (Press <space> to select, <a> to toggle all, <i> to invert selection)
√ Browser
√ Node
  -----------------------------------------------代码在哪里运行 (用空格选中 Browser+Node)
? How would you like to define a style for your project? ... 
  Use a popular style guide
> Answer questions about your style
  -----------------------------------------------用过A&Q来配置规则
? What format do you want your config file to be in? ...
> JavaScript
  YAML
  JSON
  ----------------------------------------------配置文件使用js文件
? What style of indentation do you use? ...
> Tabs
  Spaces
  ----------------------------------------------缩进方式
? What quotes do you use for strings? ... 
  Double
> Single
  -----------------------------------------------字符串用什么引号
? What line endings do you use? ...
> Unix
  Windows
  ---------------------------------------------------
? Do you require semicolons? » No / Yes
  ---------------------------------------------------是否需要分号(视自己情况而定,我这里不用选No)
? Would you like to install them now? » No / Yes
  ---------------------------------------------------选择yes现在立即初始化配置文件
? Which package manager do you want to use? ... 
> npm
  yarn
  pnpm
  ------------------------------------------------包管理器选择npm

```

把eslint集成到vite中

```javascript
// npm i vite-plugin-eslint 安装集成插件
// vite.config.ts
plugins: [
    ...,
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.ts'],
      cache: false
    })
]

```



```cmd
// 安装prettier 
eslint-plugin-prettier 将 Prettier 的规则设置到 ESLint 的规则中。
eslint-config-prettier 关闭 ESLint 中与 Prettier 中会发生冲突的规则。最后形成优先级：Prettier 配置规则 > ESLint 配置规则。

npm i prettier eslint-plugin-prettier eslint-config-prettier --dev
```

```js
在.eslint.cjs文件中的
module.exports = {
    ....,
    plugins: [..., 'prettier'],
    extends: [..., 'plugin:prettier/recommended'],
    rules: {
        'prettier/prettier': 'off',
    }
}
```

配置[prettire](https://eslint.org/docs/latest/use/configure/plugins)

```javascript
// 创建.prettierrc.js文件
module.exports = {
  endOfLine: "auto",
  semi: true,
  eslintIntegration: true,
  singleQuote: true,
  endOfLine: "lf",
  tabWidth: 2,
  trailingComma: "none",
  bracketSpacing: true,
  arrowParens: "avoid",
}
```



```json
// 这边写上我在用的规则 
// .eslint.cjs
rules: {
    'prettier/prettier': 'off',
    'singleQuote': 'off',
    'vue/multi-word-component-names': 'off',
    'no-console': 'off',
    'no-prototype-builtins': 'off',
    'no-undef': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/no-v-html': 'off',
    'no-extra-boolean-cast': 'off',
    'no-unreachable': 'off',
    'no-unused-vars': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'vue/no-template-shadow': 'off'
  }
  
// .prettierrc.js
module.exports = {
  endOfLine: "auto",
  semi: true,
  eslintIntegration: true,
  singleQuote: true,
  endOfLine: "lf",
  tabWidth: 2,
  trailingComma: "none",
  bracketSpacing: true,
  arrowParens: "avoid",
}
```



