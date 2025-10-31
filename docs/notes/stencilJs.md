# Stencil.js 全面学习笔记
## 一、Stencil.js 核心认知
### 1. 定义与定位
Stencil 是一款生成 Web Components（自定义元素）的编译器，通过 TypeScript、JSX 和 CSS 构建符合标准的 Web 组件，专门用于打造高质量组件库。其核心优势在于生成的组件无框架依赖，可跨 React、Vue、原生 JS 等技术栈使用，轻松实现多项目 UI 风格统一。

### 2. 与主流组件库对比
| 特性 | Stencil | Ant Design |
|------|---------|------------|
| 核心技术 | Stencil.js + Web Components | React + TypeScript |
| 运行时依赖 | 无框架依赖 | 强依赖 React 生态 |
| 编译方式 | 编译为原生 Web Components | React 组件库 |
| 跨框架支持 | 原生支持 React/Vue/原生 JS | 需要独立适配版本 |

## 二、环境搭建与项目初始化
### 1. 项目创建
通过 npm 或 pnpm 命令快速初始化项目：
```bash
npm init stencil
# 或
pnpm create stencil
```
### 2. 初始化流程
1. 选择项目类型：推荐选择 `component`（适用于构建可复用组件集合）
2. 输入项目名称：例如 `my-web-component`
3. 确认创建：输入 `Yes` 完成初始化，自动生成项目结构与 Git 仓库

## 三、项目结构解析
### 1. 核心目录说明
```
my-web-component/
├── .stencil/            # 编译相关临时文件
├── dist/                # 打包生成的 Web Components 产物
├── node_modules/        # 依赖包
├── src/
│   ├── components/      # 组件目录（核心）
│   │   └── my-component/
│   │       ├── my-component.css    # 组件样式
│   │       ├── my-component.tsx    # 组件逻辑
│   │       └── readme.md           # 组件文档
│   ├── utils/           # 工具函数
│   ├── index.html       # 开发服务器页面
│   └── index.ts         # 入口文件
├── stencil.config.ts    # 编译配置文件
├── tsconfig.json        # TypeScript 配置
└── package.json         # 项目依赖与脚本
```

### 2. 关键文件详解
#### （1）组件文件：my-component.tsx
定义组件核心逻辑，包含标签名、属性、样式和渲染逻辑：
```tsx
import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'my-component',    // 自定义元素标签名（必需，需含连字符）
  styleUrl: 'my-component.css',  // 样式文件路径
  shadow: true            // 启用 Shadow DOM 实现样式隔离
})
export class MyComponent {
  // 定义组件属性（类似 React/Vue 的 Props）
  @Prop() first: string
  @Prop() middle: string
  @Prop() last: string

  // 内部方法
  private getText(): string {
    return this.first + this.middle + this.last
  }

  // 渲染函数（返回 JSX 结构）
  render() {
    return <div>Hello, World! I'm {this.getText()}</div>
  }
}
```

#### （2）配置文件：stencil.config.ts
控制编译输出、命名空间等核心配置：
```tsx
import { Config } from '@stencil/core'

export const config: Config = {
  namespace: 'my-web-component',  // 组件库命名空间（唯一标识）
  outputTargets: [
    {
      type: 'dist',               // 生成标准构建产物
      esmLoaderPath: '../loader'  // ESM 加载器路径
    },
    {
      type: 'dist-custom-elements',  // 生成独立自定义元素
      customElementsExportBehavior: 'auto-define-custom-elements',  // 自动注册元素
      externalRuntime: false        // 运行时内置
    },
    { type: 'docs-readme' },        // 自动生成 README 文档
    { type: 'www', serviceWorker: null }  // 开发演示页面（禁用 Service Worker）
  ],
  testing: { browserHeadless: 'shell' }  // 无头浏览器测试
}
```

#### （3）入口配置：package.json
指定模块入口、脚本命令和发布文件：
```json
{
  "name": "my-web-component",
  "version": "0.0.1",
  "main": "dist/index.cjs.js",        // CommonJS 入口
  "module": "dist/index.js",          // ESM 入口
  "types": "dist/types/index.d.ts",   // TypeScript 类型入口
  "scripts": {
    "build": "stencil build",         // 构建生产版本
    "dev": "stencil build --dev --watch --serve",  // 开发模式（热更新+服务）
    "test": "stencil test --spec --e2e",           // 测试命令
    "generate": "stencil generate"    // 生成新组件
  }
}
```

## 四、核心装饰器用法
### 1. @Component：组件定义
用于标记类为 Stencil 组件，配置组件元数据：
| 参数 | 说明 | 示例 |
|------|------|------|
| tag | 组件标签名（必需，需符合自定义元素规范） | `tag: 'todo-list'` |
| styleUrl | 单个样式文件路径 | `styleUrl: 'todo-list.css'` |
| styleUrls | 多平台/主题样式配置 | `styleUrls: { ios: 'todo-list.ios.css', dark: 'todo-list.dark.css' }` |
| shadow | 启用 Shadow DOM | `shadow: true` |
| scoped | 启用样式作用域（与 shadow 互斥） | `scoped: true` |
| styles | 内联 CSS 样式 | `styles: 'div { background: #fff }'` |

### 2. @Prop：组件属性
用于定义组件对外暴露的属性，支持校验、可变性配置：
#### 基本使用
```tsx
import { Component, Prop, h } from '@stencil/core'

@Component({ tag: 'todo-list' })
export class TodoList {
  @Prop() name: string  // 定义字符串类型属性

  render() {
    return <div>列表名称：{this.name}</div>
  }
}
```
#### 组件使用
```html
<!-- HTML 中使用（驼峰转连字符） -->
<todo-list name="周一待办"></todo-list>
<!-- JSX 中使用 -->
<todo-list name={"周一待办"}></todo-list>
```

#### 高级配置
- **必填属性**：通过 `!` 标记必填
  ```tsx
  @Prop() thingToDo!: string  // 必需属性
  ```
- **可变性**：允许组件内部修改属性
  ```tsx
  @Prop({ mutable: true }) thingToDo: string = '初始值'
  ```
- **属性反射**：属性值同步到 DOM 属性
  ```tsx
  @Prop({ reflect: true }) count: number = 0  // DOM 中显示 count="0"
  ```
- **属性校验**：结合 `@Watch` 实现
  ```tsx
  @Watch('thingToDo')
  validateThingToDo(newVal: string) {
    if (!newVal || newVal.length < 2) {
      throw new Error('thingToDo 不能为空且长度至少 2 位')
    }
  }
  ```

### 3. @State：组件状态
用于标记组件内部状态，状态变化会触发重新渲染：
```tsx
import { Component, State, h } from '@stencil/core'

@Component({ tag: 'app-button' })
export class AppButton {
  @State() count = 0  // 内部状态

  render() {
    return (
      <div>
        <button onClick={() => this.count++}>点击+1</button>
        <p>计数：{this.count}</p>
      </div>
    )
  }
}
```

### 4. @Watch：属性监听
监听 `@Prop` 或 `@State` 属性变化，触发回调函数：
```tsx
import { Component, Prop, State, Watch, h } from '@stencil/core'

@Component({ tag: 'watch-demo' })
export class WatchDemo {
  @Prop() num1: number = 0
  @State() num2: number = 0

  // 监听单个属性
  @Watch('num1')
  onNum1Change(newVal: number, oldVal: number) {
    console.log(`num1 从 ${oldVal} 变为 ${newVal}`)
  }

  // 监听多个属性
  @Watch('num1')
  @Watch('num2')
  onAnyChange(newVal: number, oldVal: number, propName: string) {
    console.log(`${propName} 变化：${oldVal} → ${newVal}`)
  }
}
```

### 5. 事件相关装饰器
#### （1）@Event：自定义事件
定义组件对外触发的事件，支持冒泡、取消等配置：
```tsx
import { Component, Event, EventEmitter, h } from '@stencil/core'

@Component({ tag: 'event-demo' })
export class EventDemo {
  // 定义自定义事件
  @Event({
    eventName: 'my-custom-event',  // 事件名（默认使用属性名）
    bubbles: true,                 // 允许冒泡
    cancelable: true,              // 允许取消
    composed: true                 // 允许跨 Shadow DOM 传播
  })
  clickEvent: EventEmitter<string>  // 事件发射器

  // 触发事件
  handleClick() {
    this.clickEvent.emit('事件传递的数据')  // 发送数据
  }

  render() {
    return <button onClick={this.handleClick.bind(this)}>触发事件</button>
  }
}
```
#### （2）@Listen：事件监听
监听 DOM 事件或自定义事件：
```tsx
import { Component, Listen, h } from '@stencil/core'

@Component({ tag: 'event-demo' })
export class EventDemo {
  // 监听点击事件
  @Listen('click')
  onHandleClick(event: MouseEvent) {
    console.log('点击事件触发', event)
  }

  // 监听自定义事件
  @Listen('my-custom-event')
  onCustomEvent(event: CustomEvent) {
    console.log('自定义事件数据：', event.detail)
  }
}
```

### 6. 其他常用装饰器
- **@Method**：暴露公共方法供外部调用
  ```tsx
  @Method()
  async showPrompt(): Promise<void> {
    // 公共方法逻辑（需返回 Promise）
  }
  ```
- **@Element**：获取组件宿主元素
  ```tsx
  @Element() el: HTMLElement  // 访问组件 DOM 元素
  getHeight() {
    return this.el.getBoundingClientRect().height
  }
  ```

## 五、组件样式方案
### 1. Shadow DOM 样式隔离
启用 `shadow: true` 后，组件样式仅作用于内部，外部样式无法穿透：
```css
/* 组件内部样式 */
:host {  /* 选择组件宿主元素 */
  display: block;
  margin: 10px;
}
div {
  color: #333;
  background: #f5f5f5;
}
```

### 2. 多主题样式
通过 `styleUrls` 配置不同主题/平台样式：
```tsx
@Component({
  tag: 'my-component',
  styleUrls: {
    ios: 'my-component.ios.css',    // iOS 样式
    md: 'my-component.md.css',      // Material Design 样式
    dark: 'my-component.dark.css'   // 暗黑模式样式
  }
})
export class MyComponent {
  @Prop() mode: string = 'light'  // 控制主题
}
```
使用时通过 `mode` 属性切换：
```html
<my-component mode="dark"></my-component>
```

### 3. 全局样式
在 `stencil.config.ts` 中配置全局样式文件，作用于所有组件：
```tsx
export const config: Config = {
  globalStyle: 'src/global/global.css',  // 全局样式路径
  outputTargets: [{ type: 'www' }]
}
```

## 六、组件生命周期
### 1. 生命周期阶段划分
#### （1）挂载阶段（首次渲染）
| 方法 | 触发时机 | 核心作用 |
|------|----------|----------|
| connectedCallback | 组件连接到 DOM 时（可多次触发） | 启动定时器、绑定全局事件 |
| componentWillLoad | 首次连接 DOM 后（仅一次） | 异步加载数据、初始化配置 |
| componentWillRender | 每次渲染前（含首次） | 调整渲染状态 |
| render | 组件渲染（含首次） | 生成 DOM 结构 |
| componentDidRender | 每次渲染后（含首次） | 访问渲染后的 DOM |
| componentDidLoad | 首次渲染完成后（仅一次） | 初始化第三方库 |

#### （2）更新阶段（Prop/State 变化）
| 方法 | 触发时机 | 核心作用 |
|------|----------|----------|
| @Watch | 监听属性变化时 | 处理属性变化逻辑 |
| componentShouldUpdate | 重渲染前 | 决定是否需要重渲染 |
| componentWillUpdate | 重渲染前（非首次） | 更新前准备工作 |
| componentWillRender | 每次渲染前 | 调整渲染状态 |
| render | 组件重渲染 | 生成更新后的 DOM |
| componentDidRender | 重渲染后 | 处理渲染后的 DOM 操作 |
| componentDidUpdate | 重渲染完成后 | 处理更新后的逻辑 |

#### （3）卸载阶段
| 方法 | 触发时机 | 核心作用 |
|------|----------|----------|
| disconnectedCallback | 组件从 DOM 断开时 | 清理资源（清除定时器、解绑事件） |

### 2. 生命周期执行顺序
#### （1）首次挂载（父子组件）
1. 父组件：connectedCallback → componentWillLoad
2. 子组件：connectedCallback → componentWillLoad → componentWillRender → render → componentDidRender → componentDidLoad
3. 父组件：componentWillRender → render → componentDidRender → componentDidLoad

#### （2）属性更新
1. @Watch 触发 → componentShouldUpdate（返回 true）
2. componentWillUpdate → componentWillRender → render
3. componentDidRender → componentDidUpdate

#### （3）卸载与重新挂载
1. 卸载：disconnectedCallback（清理资源）
2. 重新挂载：connectedCallback → componentWillRender → render → componentDidRender

### 3. 生命周期最佳实践
- 异步初始化逻辑放在 `componentWillLoad` 中
- 渲染状态调整放在 `componentWillRender` 中
- 资源清理（定时器、事件）放在 `disconnectedCallback` 中
- 避免在 `componentDidUpdate`/`componentDidRender` 中直接修改状态（需做脏检查）

## 七、高级用法
### 1. 函数式组件
与 React 函数式组件类似，支持 props 和 children：
```tsx
import { FunctionalComponent, h } from '@stencil/core'

interface HelloProps {
  name: string
}

// 基础函数式组件
export const Hello: FunctionalComponent<HelloProps> = ({ name }) => (
  <h1>Hello, {name}!</h1>
)

// 带 children 的组件
export const Container: FunctionalComponent = (_, children, utils) => (
  <div class="container">
    {utils.map(children, child => ({ ...child, vattrs: { ...child.vattrs, class: 'item' } }))}
  </div>
)
```

### 2. 组件嵌套使用
Web Components 天然支持嵌套，与原生 DOM 元素用法一致：
```tsx
// 子组件
@Component({ tag: 'child-component' })
export class ChildComponent {
  @Prop() message: string
  render() {
    return <div>{this.message}</div>
  }
}

// 父组件
@Component({ tag: 'parent-component' })
export class ParentComponent {
  render() {
    return (
      <div>
        <child-component message="我是子组件"></child-component>
      </div>
    )
  }
}
```

### 3. 插槽使用
支持默认插槽和具名插槽，与 Vue 插槽用法类似：
```tsx
// 组件定义
@Component({ tag: 'slot-demo' })
export class SlotDemo {
  render() {
    return (
      <div>
        <h3>默认插槽</h3>
        <slot></slot>  {/* 默认插槽 */}
        <h3>具名插槽</h3>
        <slot name="footer"></slot>  {/* 具名插槽 */}
      </div>
    )
  }
}

// 组件使用
<slot-demo>
  <p>默认插槽内容</p>
  <div slot="footer">具名插槽（底部）</div>
</slot-demo>
```

## 八、项目运行与构建
### 1. 开发模式
启动开发服务器，支持热更新：
```bash
pnpm dev
```
自动打开浏览器访问 `http://localhost:3333`，修改代码实时刷新。

### 2. 构建生产版本
生成优化后的 Web Components 产物：
```bash
pnpm build
```
产物输出到 `dist/` 目录，包含 ESM、CommonJS 等多种格式。

### 3. 组件测试
执行单元测试和端到端测试：
```bash
pnpm test  # 执行所有测试
pnpm test.watch  # 监听模式下执行测试
```

### 4. 生成新组件
通过命令快速创建组件文件：
```bash
pnpm run generate
```
按照提示输入组件标签名，自动生成 `.tsx`、`.css` 等文件。



## 九、项目使用

### 1. npm link 本地建立连接

在组件项目也就是`stenciljs`搭建的项目,简称B项目:

检查项目 B 的 `package.json`，确保包含必要的配置（`name` 是关键，将作为包名被引用）：

```json
{
  "name": "li-components",  // 包名（必须唯一，后续链接需用）
  "version": "1.0.0",
  "main": "dist/loader/index.js",   // 入口文件（根据 Stencil 打包输出配置）
  "module": "dist/esm/index.js",
  "types": "dist/types/index.d.ts"
}
```

**在项目 B 中执行 `npm link`**

```bash
npm run build # 先打包项目
npm link # 创建全局node_module包
```

在实际开发项目,简称A项目:

**在项目 A 中执行 `npm link 包名`**

```bash
npm link li-components 
```

**验证链接是否成功**

进入项目 A 的 `node_modules` 目录，查看是否存在 `my-stencil-components` 文件夹

**在 项目 A 中引入 Stencil 组件**

在项目 A 的入口文件（如 `main.ts`）中引入并注册 Stencil 组件：

```typescript
import { Plugin } from 'vue'
import App from './App.vue'
import { defineCustomElements } from 'li-components/loader'

const app = createApp(App)

const ComponentLibrary: Plugin = {
  async install() {
    defineCustomElements()
  }
}
app.use(ComponentLibrary).mount('#app')
```

在项目 A 的(vite.config.ts)中引入并表示 Stencil 组件：

```typescript
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // 匹配 Stencil 组件的标签前缀（如 li-）
          isCustomElement: (tag) => tag.startsWith('li-')
        }
      }
    })
  ]
});
```

### 2. npm i 引入

未尝试