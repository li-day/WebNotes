# VitePress 学习笔记
## 一、框架概述与使用范围
### 1. 核心定位
VitePress 是由 Vite 和 Vue 联合驱动的静态站点生成器，核心能力是将 Markdown 文档快速转换为美观、高性能的文档站点，兼顾开发体验与最终用户体验。

### 2. 适用场景
- 技术文档：如框架说明、API 文档、开发指南等（核心场景）；
- 个人/团队博客：支持 Markdown 快速创作，自带优雅排版；
- 轻量级官网：适合展示产品介绍、项目说明等简洁内容；
- 知识库/教程站点：支持自定义组件扩展，可实现交互式教学内容。

### 3. 核心优势
- 极速开发体验：基于 Vite 实现即时服务器启动和闪电般的热更新；
- 内容优先：专注 Markdown 编写，无需复杂配置即可生成美观页面；
- Vue 生态兼容：可直接在 Markdown 中使用 Vue 语法和组件，灵活扩展；
- 高性能：静态 HTML 实现快速首屏加载，客户端路由优化页面切换体验。

## 二、VitePress 项目创建流程
### 1. 环境准备
确保本地已安装 Node.js（推荐 v18+ 版本），可通过以下命令验证：
```bash
node -v  # 查看 Node 版本
npm -v   # 查看 npm 版本（或 yarn -v/pnpm -v）
```

### 2. 初始化项目（两种方式）
#### 方式一：npm 初始化（推荐）
1. 创建项目文件夹并进入：
```bash
mkdir vitepress-demo && cd vitepress-demo
```
2. 初始化 npm 项目（默认配置即可）：
```bash
npm init -y
```
3. 安装 VitePress 依赖（作为开发依赖）：
```bash
npm install -D vitepress
```

#### 方式二：快速初始化（官方简化命令）
直接通过 VitePress 命令生成基础结构，无需手动创建文件夹：
```bash
npx vitepress init
```
执行后会提示配置项目名称、文档目录、主题等，按引导完成即可自动生成基础结构。

### 3. 基础目录结构
初始化后，核心目录结构如下（以手动初始化为例）：
```
vitepress-demo/
├── node_modules/       # 依赖包
├── docs/               # 文档核心目录
│   ├── .vitepress/     # VitePress 配置目录
│   │   └── config.js   # 核心配置文件
│   └── index.md        # 首页文档（默认入口）
├── package.json        # 项目配置
└── package-lock.json   # 依赖锁文件
```

### 4. 启动开发服务器
在 `package.json` 中添加脚本（手动初始化需手动添加）：
```json
{
  "scripts": {
    "docs:dev": "vitepress dev docs",  // 开发模式
    "docs:build": "vitepress build docs",  // 构建静态文件
    "docs:preview": "vitepress preview docs"  // 预览构建结果
  }
}
```
执行开发命令，启动本地服务器：
```bash
npm run docs:dev
```
启动成功后，访问终端提示的地址（默认 `http://localhost:5173`）即可查看文档站点。

## 三、常用核心配置项（config.js）
`docs/.vitepress/config.js` 是 VitePress 的核心配置文件，以下是高频使用的配置项：

### 1. 基础配置（必选）
```javascript
export default {
  // 站点标题（显示在浏览器标签栏）
  title: "我的 VitePress 文档",
  // 站点描述（SEO 优化用）
  description: "基于 VitePress 构建的文档站点",
  // 站点基础路径（部署到子路径时使用，如 "/docs/"）
  base: "/",
};
```

### 2. 主题配置（themeConfig）
控制站点导航、侧边栏等UI相关配置：
```javascript
export default {
  themeConfig: {
    // 顶部导航栏
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/" },  // 对应 docs/guide/index.md
      { text: "API", link: "/api/" },
    ],
    // 侧边栏（支持多级嵌套）
    sidebar: [
      {
        text: "快速开始",
        items: [
          { text: "安装", link: "/guide/install" },
          { text: "配置", link: "/guide/config" },
        ],
      },
      {
        text: "进阶用法",
        items: [
          { text: "自定义组件", link: "/advanced/component" },
        ],
      },
    ],
    // 底部版权信息
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024 My Docs",
    },
    // 文档编辑链接（点击可跳转到 GitHub 编辑页面）
    editLink: {
      pattern: "https://github.com/your-name/your-repo/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页面",
    },
  },
};
```

### 3. Markdown 相关配置
```javascript
export default {
  markdown: {
    // 启用语法高亮（默认开启，支持多种语言）
    highlight: {
      // 自定义高亮配置（可选）
    },
    // 启用 Markdown 中的 Vue 组件自动导入
    component: true,
    // 配置锚点链接（标题点击跳转）
    anchor: {
      permalink: true,
      permalinkSymbol: "#",
    },
  },
};
```

### 4. 构建与部署配置
```javascript
export default {
  build: {
    // 输出目录（默认 docs/.vitepress/dist）
    outDir: "../dist",
    // 生成静态文件时是否压缩
    minify: true,
  },
  // 部署到 GitHub Pages 时的简化配置（可选）
  githubPages: true,
};
```

## 四、自定义组件使用流程
VitePress 支持在 Markdown 中直接使用 Vue 自定义组件，扩展文档的交互性，步骤如下：

### 1. 创建组件文件
在 `docs/.vitepress/components/` 目录下创建 Vue 组件（若 `components` 文件夹不存在，需手动创建）。

示例：创建 `HelloWorld.vue` 组件
```vue
<!-- docs/.vitepress/components/HelloWorld.vue -->
<template>
  <div class="hello">
    <h3>{{ title }}</h3>
    <p>这是一个 VitePress 自定义组件</p>
    <button @click="count++">点击次数: {{ count }}</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 接收父组件传递的参数
const props = defineProps({
  title: {
    type: String,
    default: "默认标题",
  },
});

// 响应式数据
const count = ref(0);
</script>

<style scoped>
.hello {
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  margin: 20px 0;
}
button {
  padding: 8px 16px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
```

### 2. 在 Markdown 中使用组件
无需手动导入，VitePress 会自动注册 `components` 目录下的组件，直接在 Markdown 文件中使用组件标签即可：

```markdown
# 自定义组件示例

这是 Markdown 内容，下面是自定义组件：

<HelloWorld title="我的第一个组件" />

还可以多次使用：

<HelloWorld title="第二个组件实例" />
```

### 3. 组件进阶使用
#### （1）组件嵌套
组件内部可嵌套其他自定义组件或 Vue 内置组件，例如在 `HelloWorld.vue` 中引入另一个组件 `Card.vue`：
```vue
<!-- 先创建 docs/.vitepress/components/Card.vue -->
<template>
  <div class="card">
    <slot></slot> <!-- 插槽接收外部内容 -->
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 16px;
  margin: 10px 0;
}
</style>

<!-- 在 HelloWorld.vue 中使用 -->
<template>
  <div class="hello">
    <Card>
      <p>嵌套在 Card 组件中的内容</p>
    </Card>
  </div>
</template>
```

#### （2）使用 Vue 语法
Markdown 中可直接嵌入 Vue 模板语法（需用 `{{ }}` 包裹），例如：
```markdown
# Vue 语法示例

当前时间: {{ new Date().toLocaleString() }}

<!-- 条件渲染 -->
<div v-if="true">这是显示的内容</div>

<!-- 列表渲染 -->
<ul>
  <li v-for="i in 3" :key="i">列表项 {{ i }}</li>
</ul>
```
<ul>
  <li v-for="i in 3" :key="i">列表项 {{ i }}</li>
</ul>

### 4. 注意事项
- 组件文件名需使用 PascalCase（大驼峰）命名（如 `HelloWorld.vue`），否则可能导致自动注册失败；
- 组件样式建议使用 `scoped` 修饰符，避免样式污染全局；
- 若需使用 Vue 3 特性（如 `<script setup>`），无需额外配置，VitePress 已默认支持。