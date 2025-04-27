# 为什么要学react

[中文文档](https://react.docschina.org/)

1. 原生JavaScript操作DOM繁琐、效率低（DOM-API 操作 UI）
2. 使用JavaScript直接操作DOM，浏览器会进行大量的重绘重排
3. 原生JavaScript没有组件化编码方案，代码复用率低

# react特点

1. 采用组件化模式、声明式编码，提高开发效率及组件复用率
2. 在react Native 中可以使用React语法进行移动端开发
3. 使用虚拟DOM+优秀的Diffing算法，尽量减少与真实DOM的交互

**react高效的原因**

1. 使用虚拟(virtual)DOM 不总是直接操作页面真实DOM
2. DOM Diffing算法，最小化页面重绘

# 学习react需要的JavaScript的知识点

1. 判断this的指向
2. class声明类
3. ES6语法规范
4. npm包管理器
5. 原型、原型链
6. 数组常用方法
7. 模块化

# react入门

1. react运用了jsx语法

   1. ```
      const VDOM = <h1>Hello world</h1>
      ReactDom.render(VDOM,document.getElementById('真实DOM'))
      ```



## 复习class 函数

1. 创建一个类 `class Person{ this.a=a; this.b=b }`

2. 继承类 `extends ` 

   1. ```js
      class student extends Person {
          
      }
      ```

   2. 

3. 构造器

   1. `constructor(a,b){  }`

   2. 构造器中的this 指向 类的实例对象

   3. 如果写了构造器就必须写`super(父类的参数)`

   4. `super` 必须写在最上面

   5. ```js
      class student extends Person {
          constructor(a,b){ super(a,b);this.c = c }
      }
      ```

   2. 

4. 类中的一般方法

   1. ```js
      class Person {
      constructor(name,age) {
      	this.name = name 
      	this.age = age
      }
      speak() {
      console.log(`我是${this.name}，我今年${this.age}岁`)
      }
      }
      ```

   2. 类中的一般方法都在 类的原型对象上，供实例使用

   3. 方法中的this指向 调佣类的实例对象

5. `static` 给类自身加一个属性

   1. ```js
      class Mycomponent {
      	static demo = 100
      }
      console.log(Mycomponent.demo)
      ```

   2. 

6. 类中可以直接写赋值语句, 会自动的给实例对象添加一个属性

   1. ```javascript
      class Car {
        constructor(name, price) {
          this.name = name
          this.price = price
        }
        // 类中可以直接写赋值语句,如下代码的含义是: 给Car的实例对象添加一个属性,名为wheel = 4
        wheel = 4
      }
      const c1 = new Car('小测', 199)
      const c2 = new Car('二测', 200)
      console.log(c1)
      console.log(c2)
      ```

7. 抽象类

   1. 用 `abstract` 开头的类是抽象类

      1. 抽象类和其他的类区别不大，只是不能用来创建对象
      2. 抽象类就是专门用来被继承的类

   2. ```typescript
      abstract class Animal {
          name:string
      	constructor(name){
          	this.name = name
      	}
      	say(){
          	console.log(2)
      	}
      }
      ```

8. 抽象方法

   1. 抽象方法使用 `abstract`开头，没有方法体

   2. 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写

   3. ```typescript
      abstract class Animal {
          name:string
      	constructor(name){
          	this.name = name
      	}
       	abstract say():void
      }
      ```

   4. 


**总结**

1. 类中的构造器不是必须写的,要对实例进行一些初始化的操作,如添加指定属性时才写.
2. 如果A类继承了B类,且A类中写了构造器,那么A类构造器中的super是必须调用的,且super只能写在最上面
3. 类中所定义的方法,都是放在了类的原型对象上,供实例使用

## react类式组件

```react
// 1. 创建类式组件 
class MyComponent extends Component {
	render() {
		return <h2>hello world</h2>
	}
}
// 2. 渲染组件到页面
ReactDOM.render(<MyComponent/>,document.getElementById('app')
```

使用类式组件时必须继承React.Component 这个类,且类组件中必须要写render函数

1. 当执行了ReactDOM.render(<MyComponent/>之后发生了什么
   1. react解析组件标签，找到了MyComponent组件，
   2. 发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用到原型上的render方法
   3. 将render返回到虚拟DOM转为真实DOM，随后呈现在页面中

## react组件实例的三大核心属性

**state状态管理**

1. state是组件对象中最重要的属性，值是对象（可以包含多个key-value的组合）
2. 组件被称为状态机，通过更新组件的state来更新对应的页面显示（重新渲染组件）
3. 组件中的render方法中的this为组件实例对象
4. 组件自定义的方法中this为undefined
   1. 在构造器中强制绑定this：通过函数对象的`bind()`
   
      1. ```react
         class myComponent extends React.Component {
         	constructor(props) {
         	  super(props)
         	  // 初始化状态，
         	  this.state = { isHot: false }
               // 解决自定义方法中的this指向问题
                this.demo = this.demo.bind(this)
         	}
             demo () {
                 console.log(this.state.isHot)
             }
         }
         ```
   
      2. 
   
   2. 箭头函数
5. 状态数据，不能直接修改或更新，需求借助一个内置的API `setState({isHot:true})` 进行修改，且这种修改时合并不是替换

```react
class MyComponent extends React.Component {
	constructor(props) {
	  super(props)
	  // 初始化状态，
	  this.state = { isHot: false }
      // 解决自定义方法中的this指向问题
       this.demo = this.demo.bind(this)
	}
	render() {
	  return <h2 onClick={this.demo}>今天天气很{ isHot ? '炎热' : '凉爽' }</h2>
	}
    demo() {
       const {isHot} = this.state
       this.setState({isHot: !isHot})
    }
}

ReactDOM.render(<Mycomponent/>,document.getElementById('app'))
```

**绑定事件**

1. react内部对所有原生事件做了处理 on后面都是大写如 `onClick onBlur onFocus`

2. ```react
   // 1.创建类式组件
       class MyComponent extends React.Component {
           constructor(props) {
               super(props)
               // 初始化状态
               this.state = { isHot: false }
           }
           render() {
               const { isHot } = this.state
               return <h2 onClick={demo}>今天天气很{isHot ? '炎热' : '凉爽'}</h2>
           }
       }
       function demo() {
           console.log('点击了')
       }
       // 2.渲染组件到页面
       ReactDOM.render(<MyComponent />, document.getElementById('app'))
   ```

**简写state**

```react
<script type="text/babel">
    class Mycomponent extends React.Component {
        state = { isHot: true, wind: '微风' }
        render() {
            const { isHot, wind } = this.state
            return <h2 className='isHot' onClick={this.demo}>今天天气很{isHot ? '炎热' : '凉爽'}\ \ \ {wind}</h2>
        }
        demo = () => {
            this.setState({ isHot: !this.state.isHot })
        }
    }
    ReactDOM.render(<Mycomponent />, document.getElementById('app'))
</script>

```

**props**

1. 用于接口外部传入类的数据

   1. ```react
      class MyComponent extends React.Component {
              render() {
                  const { name, age, sex } = this.props
                  return (
                      <ul>
                          <li>{name}</li>
                          <li>{age}</li>
                          <li>{sex}</li>
                      </ul>
                  )
              }
          }
      const data = { name: '张三', age: 19, sex: '女' }
          ReactDOM.render(<MyComponent {...data} />, document.getElementById('app'))
      ```

2. `props`是只读的不能进行赋值

3. `propTypes`  可以对props进行类型,比传的限制

   1. ```js
      MyComponent.proptypes = {
      	name: PropTypes.string
      	age:PropTypes.func
      }
      ```

   2. `isRequired` 是只必传, 方法要写`func`

4. `defaultProps` 可以对`props`设置默认值

   1. ```js
      MyComponent.defaultProps = {
              name: '李四', 
              age: 20
          }
      ```

5. `PropsType` 与 `defaultProps` 简写利用类 中的 `static`属性

   1. ```react
      <script type="text/babel">
          class MyComponent extends React.Component {
              static propTypes = {
                  name: PropTypes.string.isRequired, 
                  age: PropTypes.number
              }
              static defaultProps = {
                  name: '李四', 
                  age: 20
              }
              render() {
                  const { name, age, sex } = this.props
                  return (
                      <ul>
                          <li>{name}</li>
                          <li>{age}</li>
                          <li>{sex}</li>
                      </ul>
                  )
              }
          }
          const data = { name: '张三', age: 19, sex: '女' }
          const data1 = { name: 1, sex: '女' }
          ReactDOM.render(<MyComponent {...data} />, document.getElementById('app'))
          ReactDOM.render(<MyComponent {...data1} />, document.getElementById('app1'))
      </script>
      ```

6. `constructor` 构造器是否接收`props`,是否传递给`super`,取决于:是否希望在构造器中通过`this`访问`props`

   1. ```react
      constructor (props) {
        super(props) 
        // 如果不写super(props),则this.props 为undefined
        console.log(this.props)
      }
      ```

7. 函数组件使用`props` 

   1. ```react
      function MyComponent(props) {
              const { name, age, sex } = props
              return (
                  <ul>
                      <li>{name}</li>
                      <li>{age}</li>
                      <li>{sex}</li>
                  </ul>
              )
          }
          MyComponent.propTypes = {
              name: PropTypes.string.isRequired, // isRequired 必传  方法要写func
              age: PropTypes.number
          }
          MyComponent.defaultProps = {
              name: '李四', // isRequired 必传  方法要写func
              age: 20
          }
          const data = { name: '张三', age: 19, sex: '女' }
          const data1 = { name: 1, sex: '女' }
          ReactDOM.render(<MyComponent {...data} />, document.getElementById('app'))
          ReactDOM.render(<MyComponent {...data1} />, document.getElementById('app1'))
      ```

**refs**

1. 组件内的标签可以定义`ref`属性来标识自己

2. `refs`的string写法

   1. ```react
      class MyComponent extends React.Component {
              render() {
                  return (
                      <div>
                          <input ref='input1' type="text" />&nbsp;
                          <button onClick={this.demo}>点击</button>&nbsp;
                          <input type="text" />
                      </div>
                  )
              }
              demo = () => {
                  console.log(this.refs.input1.value)
              }
          }
          ReactDOM.render(<MyComponent />, document.getElementById('app'))
      ```

3. `refs`的回调写法

   1. ```react
      class MyComponent extends React.Component {
              render() {
                  return (
                      <div>
                          <input ref={c => this.input1 = c} type="text" placeholder='123' />&nbsp;
                          <button onClick={this.demo}>点击</button>&nbsp;
                          <input onBlur={this.demo2} ref={c => this.input2 = c} type="text" placeholder='123' />
                      </div>
                  )
              }
              demo = () => {
                  console.log(this.input1.value)
              }
              demo2 = () => {
                  console.log(this.input2.value)
              }
          }
          ReactDOM.render(<MyComponent />, document.getElementById('app'))
      ```

   2. `ref`直接使用回调函数方式书写会出现执行次数问题,每次数据更新时,会执行两个一个为 `null` ,一次为dom节点,可以采用class类的绑定函数方式来解决执行次数问题
   
      1. ```react
         render() {
             const { isHot } = this.state
             return (
             	<input ref={this.saveInput} type="text" placeholder='123' />
             )
             saveInput = (c) => {
                 this.input = c
                 console.log('@',c)
             }
         }
         ```
   
   3. `createRef` 创建`ref`容器
   
      1. `myRef = React.createRef()` 
      2. `createRef` 调用后可以返回一个对象,用来存储`ref`所标识的节点,该方法只能保存一个节点
      3. 可以使用`this.myRef.current` 来获取节点

## react事件处理

1. 通过`onXxx`属性指定事件处理函数(注意大小写,小写是原生事件,不是`react`事件)
2. `react`使用的自定义(合成)事件,而不是使用的原生DOM事件    ——— 为了更好的兼容
3. `react`中的时间是通过事件委托方式处理的(委托给组件最外层的元素)—— 为了高效
4. 通过`event.taret`可以得到发送事件的DOM元素对象

## react生命周期钩子

**unmountComponentAtNode 销毁组件**

```react
demo = () => {
    // 销毁组件
        ReactDOM.unmountComponentAtNode(document.getElementById("app"));
      };
```



**componentWillMount 挂载前调用**

```react
// 挂载前调用
      componentWillMount() {
        console.log("componentWillMount");
      }
```

**render初始化**

```react
// 初始化
      render() {
        return (
          <div className="no_huo">
            <p style={{ opacity: this.state.opacity }}>
              react生命周期{this.state.opacity}
            </p>
            <button onClick={this.demo}>点击销毁</button>
          </div>
        );
      }
```



**componentDidMount 挂载完成后**

```react
// 挂载完后
      componentDidMount() {
        console.log("componentDidMount");
      }
```



**componentWillUnmount 销毁前**

```react
// 销毁前
      componentWillUnmount() {
        console.log("componentWillUnmount");
      }
```

挂载的执行顺序

```
constructor // 构造器
componentWillMount
render
componentDidMount
```



**shouldComponentUpdate控制组件更新钩子**

```react
// 控制组件更新的钩子 返回false 则不会执行后面钩子, 为true会执行后面的钩子
      shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;
      }
```

**componentWillUpdate 组件将要更新的钩子**

```react
// 组件将要更新的钩子
      componentWillUpdate() {
        console.log("componentWillUpdate");
      }
```

**componentDidUpdate 组件更新完成后**

```react
// 组件更新完成后
      componentDidUpdate() {
        console.log("componentDidUpdate");
      }
```

更新时的执行顺序

```
shouldComponentUpdate
componentWillUpdate
render
componentDidUpdate
```

**componentWillReceiveProps 组件将要接受新的props值**

```react
// 组件将要接受新的props值，第一次挂载的不会执行
      componentWillReceiveProps(props) {
        console.log("componentWillReceiveProps", props);
      }
```

**总结**

1. 初始化阶段: 由`ReactDOM.render()`触达----初次渲染
   1. `constructor()` -----构造器
   2. `componentWillMount()`  ---- 组件挂载前调用
   3. `render()` ----- 组件初始化
   4. `componentDidMount()` ----- 组件挂载完成
2. 更新阶段: 由组件内部`this.setSate()`或父组件重新`render`触发
   1. `shouldComponentUpdate()` -----控制组件更新的钩子 返回false 则不会执行后面钩子, 为true会执行后面的钩子
   2. `componentWillUpdate()` ----- 组件将要更新的钩子
   3. `render()`
   4. `componentDidUpdate()`  ----- 组件更新完成后
3. 卸载组件: 由`ReactDOM.unmountComponentAtNode()` ----- 卸载组件触发
   1. `componentWillUnmount()` ----- 组件销毁前

在17版本中 `componentWillMount , componentWillUpdate , componentWillReceiveProps `三个生命周期钩子都需要添加`UNSAFE_` 在官方文档说未来可能会删除这三个

**react生命周期钩子新**

1. `getDerivedStateFromProps` 从props得到一个衍生得状态 即 state 的值在任何时候都取决于 props 时使用此生命周期

   1. ```react
      // 从props得到一个衍生得状态 即 state 的值在任何时候都取决于 props 时使用此生命周期
            static getDerivedStateFromProps(props, state) {
              console.log("getDeriveStateFromProps", props, state);
              return null;
            }
      ```

2. `getSnapshotBeforeUpdate`

   1. ```react
      getSnapshotBeforeUpdate() {
              console.log("getSnapshotBeforeUpdate");
              return 'snapshotValue';
            }
      componentDidUpdate(prevProps, prevState, snapshotValue) {
          // prevProps 旧的props
          // prevState 旧的state
          // snapshotValue getSnapshotBeforeUpdate return的值
              console.log(snapshotValue)
            }
      ```

**总结**

1. 初始化阶段: 由`ReactDOM.render()`触达----初次渲染
   1. `constructor()` -----构造器
   2. `getDerivedStateFromProps()`  ---- 组件挂载前调用 一定要写`static` 不属于实例调用
   3. `render()` ----- 组件初始化
   4. `componentDidMount()` ----- 组件挂载完成
2. 更新阶段: 由组件内部`this.setSate()`或父组件重新`render`触发
   1. `getDerivedStateFromProps()`
   2. `shouldComponentUpdate()` ----- 控制组件更新的钩子 返回false 则不会执行后面钩子, 为true会执行后面的钩子
   3. `render()`
   4. `getSnapshotBeforeUpdate()` -----在最近一次渲染输出（提交到 DOM 节点）之前调用,如果使用请一定跟`componentDidUpdate` 一起使用
   5. `componentDidUpdate()`  ----- 组件更新完成后
3. 卸载组件: 由`ReactDOM.unmountComponentAtNode()` ----- 卸载组件触发
   1. `componentWillUnmount()` ----- 组件销毁前

## react脚手架

1. `react`提供了一个用于创建`react`项目的脚手架库 `create-react-app`

2. 项目的整体技术架构为: `react + webpack + es6 + eslint`

3. 创建项目

   1. 先需要全局安装:  `npm install -g create-react-app`

   2. 然后使用命令: `create-react-app 项目名`

   3. `npx create-react-app my-app `

   4. `npm init npx create-react-app my-app `

   5. `yarn create react-app my-app` 建议使用

   6. ts版本

      1. ```
         yarn创建
         
         　　yarn create react-app react-ts --template=typescript
         
         　　or
         
         　　yarn create react-app antd-demo-ts --template typescript
         
         npx创建
         
         　　npx create-react-app react-ts --template typescript
         
         　　or
         
         　　npx create-react-app antd-demo-ts --typescript
         ```

      2. 

   7. 然后启动进入项目文件使用: `npm start `启动项目

## 文件介绍

**public**

```html
<!-- %PUBLIC_URL%代表public路径 -->
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <!-- 开启理想视口,做移动端网页的适配 -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- 配置浏览器地址栏颜色,只针对安卓手机,兼容不好 -->
    <meta name="theme-color" content="#000000" />
    <!-- 网站表述, -->
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <!-- 用于指定网页添加到手机主屏幕后的图标 -->
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!-- 应用加壳的配置文件 -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
```

**src**

```js
index.js // 类似vue的main.js 入口文件
App.js // 类似vue的App.vue 组件文件
	{
		ReactDOM.render(
          <React.StrictMode> // 用于检测检测代码不合理的情况
            <App />
          </React.StrictMode>,
          document.getElementById('root')
		);
	
	}
reportWebVitals.js // 用户记录页面的性能(需要web-vitals库的支持)
setupTests.js // 用于做应用的整体测试,组件单元测试(需要jest-dom库的支持)
```




## nanoid 一个UUID的组件库

`yarn add nanoid` 

`import { nanoid } from "nanoid";`

`nanoid()`

[github](https://github.com/ai/nanoid)

## react配置代理

1. 找到`package.json`文件,添加`"proxy": "(需要代理的地址)http://192.168.1.13:5000"` 即可代理

2. `package.json`文件配置的代理只能配置一个，且优先匹配前端资源，如果前端没有则去代理地址

3. 多个代理对象需要在src文件下配置`setupProxy.js`文件

   1. ```js
      const { createProxyMiddleware } = require("http-proxy-middleware");
      // const proxy = require("http-proxy-middleware");
      
      module.exports = function (app) {
        app.use(
          createProxyMiddleware("/api1", {
            // 遇到api1就代理
            target: "http://192.168.1.13:5000", // 请求转发给谁
            changeOrigin: true, // 控制服务器收到的请求头中的Host的值 true就是代理位置 false就是项目位置
            pathRewrite: { "^/api1": "" }, // 删除多余的/api1
          }),
          createProxyMiddleware("/api2", {
            target: "http://192.168.1.13:5001",
            changeOrigin: true,
            pathRewrite: { "^/api2": "" },
          })
        );
      };
      ```

## 消息订阅-发布机制PubSubJS

**PubSubJS**  `npm install pubsul-js -s`

**使用 一般用于兄弟传值**

也是可以适用于任何组件间通信

最后使用完需要在`componentWillUnmount`中取消订阅

```js
import PubSub from 'pubsub-js'
componentDidMount() {
    // subscribe订阅消息
    // 'ListState' 是订阅名 
    this.clearPub = PubSub.subscribe("ListState", (msg, data) => {
        // msg 是订阅的名
    	// data是数据
      console.log(data);
      this.setState(data);
    });
  }

PubSub.publish('delete',data)// 发布消息

// 关闭订阅
componentWillUnmount(){
    PubSub.unsubscribe(this.clearPub)
  }
```

## 扩展 Fetch请求

[使用](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)

[简单的介绍](https://segmentfault.com/a/1190000003810652)

**特点**

1. `fetch` 是浏览器原生方法,不再使用XmlHttpRequest 对象提交ajax请求

2. 老版本浏览器可能不支持

3. 相关案例点击上方按钮查看,简单使用

4. ```js
   getSearch = async () => {
       try {
         const res = await fetch(
           `https://api.github.com/search/users?q=${this.searchVal.value}`
         );
         const data = await res.json();
         console.log(data);
       } catch(error) {
         console.log(error);
       }
     };
   ```

5. 

## 路由前提

`history` h5推出的history `https://cdn.bootcdn.net/ajax/libs/history/4.7.2/history.js`

```js
let history = History.createBrowserHistory()
let hash = History.createHashHistory()
history.push()
history.replace()
history.goBack()
history.goForward()
hash.push()
hash.replace()
hash.goBack()
hash.goForward()
```

## react-router-dom

`react`的路由库是`react-router-dom`

```react
导航区<link to="/about">about</link>

展示区写route标签进行路径匹配
 <Route path="/about" component={About} />
在<App/>的最外侧包裹一个<BrowserRouter>或<HashRouter>
```

### 路由组件与一般组件

1. 不同
   1. 写法不同
      1. 一般组件:`<About/>`
      2. 路由组件: `<Route path="/about" component={About}/>`
   2. 存放位置不同:
      1. 一般组件:`components`
      2. 路由组件:`pages`
   3. 接受的`props`不同:
      1. 一般组件:写组件标签是传递了什么,就能收到什么
      2. 路由组件:接受到三个固定的属性 `history,location, match`
         1. `history`常用: `go(), goBack(), push(path,state), replace(path,state)` 
         2. `location`常用: `pathname,search,state`
         3. `match`常用: `params,path,url`

**Props可以接受到组件体内容**

```react
this.props.children // 可以获取到组件标签体内容
```

**Switch**

通常情况下，`path`与`component`是一一对应的关闭

`Switch`可以提高路由匹配效率（单一匹配）

可以包裹`route`路由可以是路由匹配后不继续执行

```react
<Switch>
            <Route path="/about" component={About}></Route>
            <Route path="/home" component={Home}></Route>
    		<Route path="/home" component={Test}></Route>
          </Switch>
```

**exact路由严格匹配**

路由默认是使用的是模糊匹配

开启严格匹配 有些时候会导致无法继续匹配二级路由

`<Route exact path="/about" component={About}/>`

**Redirect重定向**

`<Redirect to="/about"></Redirect>` 当所有路由都匹配不上的时候就展示

### 路由传递参数

**传递参数 `params`**

1. `<Link to={'/home/msg/detail/2/qwer'}></Link>`
2. `<Route path="/home/msg/detail/:id/:title" component={Detail}></Route>`



```react
 <div className="msgLink">
        {/* 向路由组件传递params */}
        {this.state.msgArr.map((v) => (
          <Link
            to={`/home/msg/detail/${v.id}/${v.title}`}
            className="title"
            key={v.id}
          >
            {v.title}
          </Link>
        ))}

        <div className="detail">
          {/* 声明接收的params参数 */}
          <Route path="/home/msg/detail/:id/:title" component={Detail}></Route>
        </div>
      </div>
```

**接收参数`params`**

```react
const {id,title} = this.props.match.params
```



**search传递参数**

`import qs from 'querystring'`  利用这个库去完成对象的转换

```react

import qs from 'querystring'
const query = qs.stringify({id:1,title:'123')}
<Link to={`/home/msg/detail?${query}`} className="title" key={v.id}>{v.title}</Link>
<Route path="/home/msg/detail" component={Detail}></Route>
```

**search接收参数**

```react
import qs from 'querystring'
const { id, title } = qs.parse(this.props.location.search.slice(1));
```

**state传递参数**

```react
<Link to={{pathname:'/home/msg/detail',state:{id:1,title:'123'}}}
<Route path="/home/msg/detail" component={Detail}></Route>
```

**state接收参数**

**注意** 刷新也是可以保留参数的

```react
const {id,title} = this.props.location.state || {}
```

### 开始路由`replace`模式

```react
<Link replace={true} to="/home">go</Link>
```

**路由组件代码跳转**

```react
this.props.history.push('/home',{id,title})
```

### 组件路由跳转`withRouter`

1. `withRouter`可以加工一般组件，让一般组件具备路由组件所持有的的API
2. `withRouter`的返回值是一个新的组件

```react
import {withRouter} from 'react-router-dom'
class a extends Component{
    back = ()=>{
        this.props.history.goBack()
    }
    render(){
        return <div>123</div>
    }
}
export default withRouter(a)
```

### BrowserRouter与HashRouter的区别

1. 底层原理不一样
   1. `BrowserRouter`使用的是H5的history API，不兼容IE9及一下版本
   2. `HashRouter`使用的是URL的哈希值
2. `path`表现形式不一样
   1. `BrowserRouter`的路径中没有 `#`
   2. `hashRouter`的路径中包含 `#`
3. 刷新后对路由的`state`参数的影响
   1. `BrowserRouter`没有任何影响，因为state保存在`history`对象中
   2. `HashRouter`刷新后会导致路由state参数的丢失
4. `HashRouter`可以用于解决一些路径错误相关的问题

## redux

1. `redux`是一个专门用来做状态管理的js库 (不是`react`插件库)
2. 可以用在`react,angular,vue` 等项目中,但是一般都是与`react`配合使用
3. 作用: 集中式管理`react`应用中多个组件共享的状态

**使用范围**

1. 某个组件的状态,需要让其他组件可以随时拿到
2. 一个组件需要改变另一个组件的状态
3. 能不用就不用,如果不用比较吃力才考虑使用

**redux三个核心概念**

1. `store`

   1. `createStore`,专门用于创建redux中最为核心的`store`对象

   2. `createStore`调用时要传入一个为其服务的`reducer`

   3. `createStore`可以返回一个对象

   4. ```react
      // 引入createStore,专门用于创建redux中最为核心的store对象
      import { createStore } from "redux";
      // 引入为count组件服务的reducer
      import countReducer from "./count_reducer";
      // 创建store 暴露store
      export default createStore(countReducer);
      ```

2. `reducres`

   1. `reducer` 函数会接到两个参数，分别为：之前的状态（`preState`），动作对象（`action`）

   2. `reducer`本质是一个函数，接收`preState`,`aciton`,返回加工后的状态

   3. `reducer`被第一次调用时，时`store`自动触发的 传递的`preState`是`undefined` 传递的`action`是：`{type:"@@REDUX/INIT_a.2.b.4"}`

   4. ```react
      export default function countReducer(preState = 0, action) {
        // 从action对象中获取：type data
        const { type, data } = action;
        // 根据type决定如何加工数据
        switch (type) {
          case "add":
            return preState + data;
          case "del":
            return preState - data;
          default:
            return preState;
        }
      }
      
      ```

   5. 



**redux中的store的方法**

1. `getState()` 获取`store`中的数据

   1. ```js
      import store from '../../redux/store'
      store.getState()
      ```

2. `dispatch()` 修改`store`中的数据

   1. ```js
      import store from '../../redux/store'
      store.dispatch({ type: 'add', data: 1 });
      ```

3. `subscribe()` 检测`store`数据是否发生改变

   1. ```react
      import store from '../../redux/store'
      componentDidMount() { 
          store.subscribe(() => {
            this.setState({}) 
          })
        }
      ```

   2. 

**同步action与异步action**

1. 同步的就`action`就是一个{} 对象
2. 异步的`action`就是一个函数
3. 但是`action `不认函数 需要一个中间介 `redux-thunk`
4. `applyMiddleware` 是告诉`store`这是一个异步的`action`

```react

store.js
// 引入createStore,专门用于创建redux中最为核心的store对象
// applyMiddleware 专门通知action 这是一个异步action
import { createStore, applyMiddleware } from "redux";
// 引入为count组件服务的reducer
import countReducer from "./count_reducer";
// 引入redux-thunk，用于支持异步action
import thunk from "redux-thunk";
// 创建store 暴露store
export default createStore(countReducer, applyMiddleware(thunk));
```

```react
action.js
import { ADD, DEL } from "./consttant";
export const addAction = (data) => ({ type: ADD, data });
export const delAction = (data) => ({ type: DEL, data });
export const asyncAction = (data, time) => {
  // store回调用这个函数传递一个dispatch
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addAction(data));
    }, time);
  };
};

```

## react-redux



**使用react-redux**

```react
// 引入Count的UI组件
import CountUI from '../../component/Count'

// 引入connect用于连接UI组件与redux
import { connect } from 'react-redux'
import { addAction, asyncAction, delAction } from '../../redux/count_action'
/* 
    connect 函数需要传递两个就是函数参数，第一个函数参数mapStateToProps作为传递给UI组件的状态 该函数参数可以接收store中的getState()
                                        第二个函数参数mapDispatchToProps作为传递给UI组件操作状态的方法 该函数可接收store中的dispatch()
    connect的返回的函数需要传递一个参数，该参数就是一个UI组件
*/
export default connect((store) => {
    // 该函数为传递的状态
    return {count:store}
}, (dispatch) => { 
    // 该函数为传递的操作状态的方法
    return {
        addContainers(data) {
            dispatch(addAction(data))
        },
        delContainers(data) {
            dispatch(delAction(data))
        },
        asyncContainers(data, time) { 
            dispatch(asyncAction(data,time))
        }
    }
 })(CountUI)
```

**App.jsx**

```react
import React, { Component } from "react";
import store from "./redux/store";
import Count from "./containers/Count";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/*把store传入给count容器组件中*/}
        <Count store={store}></Count>
      </div>
    );
  }
}

export default App;

```

**优化**

`marDispatchToProps`可以简写成一个对象

```react
import CountUI from "../../component/Count";

import { connect } from "react-redux";
import { addAction, asyncAction, delAction } from "../../redux/count_action";

// marDispatchToProps可以简写成一个对象
export default connect((store) => ({ count: store }), {
  addContainers: addAction,
  delContainers: delAction,
  asyncContainers: asyncAction,
})(CountUI);

```

`react-redux`可以不用在使用`store`中的`subscribe`方法去检测数据改变

`react-redux` 中还有一个`Provider`方法把所有需要`store`传到每个需要的组件容器中

```react
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store"; // 引入store
import { Provider } from "react-redux"; // 引入Provider
import "./App.css";
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

```

**多个reducer管理**

1. `redux`中有一个`combineReducers`方法可以合并多个`reducer`为一个对象

2. ```react
   /* 
       该文件专门用于暴露一个store对象，整个应用只有一个store对象
   */
   
   // 引入createStore,专门用于创建redux中最为核心的store对象
   // applyMiddleware 专门通知action 这是一个异步action
   // combineReducers 传入的对象就是redux保存的对象 用于合并reducers
   import { createStore, applyMiddleware, combineReducers } from "redux";
   // 引入为count组件服务的reducer
   import countReducer from "./reducers/count_reducer";
   import personReducer from "./reducers/preson";
   // 引入redux-thunk，用于支持异步action
   import thunk from "redux-thunk";
   
   const allReducer = combineReducers({ countReducer, personReducer });
   
   // 创建store 暴露store
   export default createStore(allReducer, applyMiddleware(thunk));
   
   ```

3. 

**纯函数**

1. 一类特别的函数，只要是同样的输入（实参），必定得到同样的就是输出（返回）
2. 必须遵守一下一些约束
   1. 不得改写参数数据
   2. 不会产生任何副作用，例如网络请求，输入和输出设备
   3. 不能调用Date.now()或者Math.random()等不纯的方法
3. redux的renducer函数必须是一个纯函数

**redux-devtools开发者工具**

浏览器安装完这个工具还需要安装`yarn add redux-devtools-extension`

```react
import { createStore, applyMiddleware, combineReducers } from "redux";
// 引入为count组件服务的reducer
import countReducer from "./reducers/count_reducer";
import personReducer from "./reducers/preson";
// 引入redux-thunk，用于支持异步action
import thunk from "redux-thunk";
// 用户启动 redux-devtools开发者工具 composeWithDevTools是开始函数
import { composeWithDevTools } from "redux-devtools-extension";

const allReducer = combineReducers({ countReducer, personReducer });

// 创建store 暴露store
export default createStore(
  allReducer,
  composeWithDevTools(applyMiddleware(thunk)) // createStore第二个 参数可以写composeWithDevTools 然后它的是需要支持异步函数的applyMiddleware
);

```

# react扩展

### setState

**setState更新状态的2种写法**

> 1. setState(stateChange,[calback]) ------ 对象式的setState
>    1. stateChange为状态改变对象（该对象可以体现出状态的更改）
>    2. callback是可选的回调函数，它在状态更新完毕、界面也更新后（render调用后）才被调用
> 2. steState(updater,[callback]) --- 函数式的setState
>    1. updater为返回stateChange对象的函数
>    2. updater可以接收到state和props
>    3. callback是可选的回调函数，它在状态更新、页面也更新的后（render调用后）才被调用
> 3. 对象式的setState是函数相式的语法糖
>    1. 如果新状态不依赖与原状态， ===> 使用对象方法
>    2. 如果新状态依赖原状态，===> 使用函数方法
>    3. 如果需要setState()执行后获取最新的状态数据，要在第二个callback函数中读取

### lazyLoad

**路由组件的lazyLoad**

```react
// 1.通过React的lazy函数配合import()函数动态加载路由组件 ===> 路由组件代码会被分开打包
const Login = lazy(()=>import('@/page/Login'))

// 2.通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面
<Suspense fallback={<h1>loading....</h1>}>
    <Switch>
    	<Route path="/xxx" component={Xxxx}></Route>
    	<Redirect to="/login" }></Redirect>
    </Switch>
</Suspense>
```

### Hooks

1. `React Hook/Hooks`是什么

   1. `Hook` 是`React 16.8 `版本增加的新特性/新语法
   2. 可以让你在函数组件中室友state以及其他的`React`特性

2. **三个常用的Hook**

   1. `State Hook:React.useState() `
   2. `Effect Hook: React.useEffect()`
   3. `Ref Hook: React.useReft()`

3. `State Hook`

   1. `State Hook `让函数组件也可以有state状态，并进行状态数据的读写操作
   2. 语法：`const [xxx,setxxx]=React.useState(initVlaue)`
   3. `useState()`说明
      1. 参数：第一次初始化指定的值在内部作缓存
      2. 返回值：包含2个元素的数组，第一个为内部当前状态值，第2个为更新状态值的函数
   4. `setXxx()`  2种写法：
      1. `setXXX(newValue)`:参数为非函数值，直接指定新的状态值，内部用其覆盖原来的状态值
      2. `setXxx(value=>newValue)`: 参数为函数，接收原本的状态值，返回新的状态值，内部用其覆盖原来的状态值

4. `Effect Hook`

   1. `Effect Hook` 可以让你在函数组件中执行副作用操作（用于魔衣类组件中的生命周期钩子）

   2. `React`中的副作用操作：

      1. 发Ajax请求数据获取
      2. 设置订阅/启动定时器
      3. 手动更改真是DOM

   3. 语法和说明：

      1. ```react
         useEffect(()=>{
            // 在此可以执行任何副作用操作相当于 componentDidMount  componentDidUpdate 
            return ()=>{
                // 组件卸载前执行 componentWillUnmount 
            } 
         },[])
         ```

   4. 可以把`useEffect Hook` 看做如下三个函数的组件 `componentDidMount,componentDidUpdate,componentWillUnmount`

5. `Ref Hook`

   1. `Ref Hook` 可以在函数组件中存储/查找组件内的标签或任意其他数据
   2. 语法： `const refContainer = React.useRef()`
   3. 作用：保存标签对象，功能于`React.createRef()`一样

### Fragment

作用：可以不用必须有一个真实的DOM跟标签了 类似于`template`

如果`Fragment `不参与循环遍历 可以简写` <></> `如果参与了遍历 可以在 `<Fragment key={index}></Fragment>`

### contenxt

**理解**

> 一种组件通信的方式，常用于 祖组件 于后台组件 之间的通信

**使用**

```react
// 创建Context 容器对象
const XXcontext = React.CreateContext()
// 渲染子组件时，外面包裹xxxContext.Provider,通过value属性给后代组件传递数据
<xxxContext.Provider value={数据}>
    子组件
</xxxContext>
// 后代组件读取数据：
 // 第一种方法：适用于类组件
  static.contextType = xxxContext //声明接收context
  this.context // 读取context中的value数据

 // 第二种方法：函数组件于类组件都可以
  <xxxContext.Consumer>
      {
      value=>(要显示的内容) // value就是context中的value数据
  }
  </xxxContext.Consumer>
```

### **PureComponent**

`PureComponent`重写了`shouldComponentUpdate()`只有当`state,props`数据有改变的时候才会返回`true`

**注意**

这个比较只是浅比较，如果只是数据对象内部数据改变了，会返回`false` 不要直接修改数据，而是要产出新的数据

### render props

用于向组件内部动态的传入一个带内容的结构标签，类似于`vue`的`slot`技术

`react`中 使用 `children props:` 通过组件表传入结构 `render props`通过组件标签属性传入结构，一般用`render`函数属性

**Children props**

```react
<A>
	<B></B>
</A>
{this.props.children}  如果b组件需要A组件内的数据 ===>做不到
```

**render props**

```react
<A render={(data)=> (<C data={data}/>)></A>
A组件:{this.props.render(内部state数据)}
C组件：读取A组件传入的数据显示 {this.props.data}
```

### 错误边界

用来捕获后代组件错误 ，渲染出备用页面

**特点**

只能捕获后代组件生命周期产生的错误，不能捕获自身组件产生错误和其他组件在合成事件，定时器中产生的错误

**使用方法**

`getDerivedStateFromError` 配合 `componentDidCatch`

```react
// 生命周期函数，一旦后代组件报错了就会触发
static getDeriveStateFromError(err){
    console.log(err)
    //在render之前触发
    // 返回新的state
    return {hasError:true}
}

componentDidCatch(error,info){
    // 统计页面的错误，发送请求发送到后台去
    console.log(error,info)
}

```

### 组件通信方式总结

1. `props` 常用于父子通信
   1. `children props`
   2. `render props`
2. 信息定于-发布`PubSubJS` 常用于兄弟通信
   1. `pubs-sub event`
3. 集中式管理 常用于兄弟与祖孙通信
   1. `redux dva`等
4. `conText`常用于祖孙 但是开发用的少，封装插件用的多

# React Router 6

## 1.概述

1. React Router 以三个不同的包发布到 npm 上，它们分别为：

   1. react-router: 路由的核心库，提供了很多的：组件、钩子。
   2. <strong style="color:#dd4d40">**react-router-dom:**</strong > <strong style="color:#dd4d40">包含react-router所有内容，并添加一些专门用于 DOM 的组件，例如 `<BrowserRouter>`等 </strong>。
   3. react-router-native: 包括react-router所有内容，并添加一些专门用于ReactNative的API，例如:`<NativeRouter>`等。

2. 与React Router 5.x 版本相比，改变了什么？

   1. 内置组件的变化：移除`<Switch/>` ，新增 `<Routes/>`等。

   2. 语法的变化：`component={About}` 变为 `element={<About/>}`等。

   3. 新增多个hook：`useParams`、`useNavigate`、`useMatch`等。

   4. <strong style="color:#dd4d40">官方明确推荐函数式组件了！！！</strong>

      ......

## 2.Component

### 1. `<BrowserRouter>`

1. 说明：`<BrowserRouter> `用于包裹整个应用。

2. 示例代码：

   ```jsx
   import React from "react";
   import ReactDOM from "react-dom";
   import { BrowserRouter } from "react-router-dom";
   
   ReactDOM.render(
     <BrowserRouter>
       {/* 整体结构（通常为App组件） */}
     </BrowserRouter>,root
   );
   ```

### 2. `<HashRouter>`

1. 说明：作用与`<BrowserRouter>`一样，但`<HashRouter>`修改的是地址栏的hash值。
2. 备注：6.x版本中`<HashRouter>`、`<BrowserRouter> ` 的用法与 5.x 相同。

### 3. `<Routes/> 与 <Route/>`

1. v6版本中移出了先前的`<Switch>`，引入了新的替代者：`<Routes>`。

2. `<Routes>` 和 `<Route>`要配合使用，且必须要用`<Routes>`包裹`<Route>`。

3. `<Route>` 相当于一个 if 语句，如果其路径与当前 URL 匹配，则呈现其对应的组件。

4. `<Route caseSensitive>` 属性用于指定：匹配时是否区分大小写（默认为 false）。

5. 当URL发生变化时，`<Routes> `都会查看其所有子` <Route>` 元素以找到最佳匹配并呈现组件 。

6. `<Route>` 也可以嵌套使用，且可配合`useRoutes()`配置 “路由表” ，但需要通过 `<Outlet>` 组件来渲染其子路由。

7. 示例代码：

   ```jsx
   <Routes>
       /*path属性用于定义路径，element属性用于定义当前路径所对应的组件*/
       <Route path="/login" element={<Login />}></Route>
   
   		/*用于定义嵌套路由，home是一级路由，对应的路径/home*/
       <Route path="home" element={<Home />}>
          /*test1 和 test2 是二级路由,对应的路径是/home/test1 或 /home/test2*/
         <Route path="test1" element={<Test/>}></Route>
         <Route path="test2" element={<Test2/>}></Route>
   		</Route>
   	
   		//Route也可以不写element属性, 这时就是用于展示嵌套的路由 .所对应的路径是/users/xxx
       <Route path="users">
          <Route path="xxx" element={<Demo />} />
       </Route>
   </Routes>
   ```

### 4. `<Link>`

1. 作用: 修改URL，且不发送网络请求（路由链接）。

2. 注意: 外侧需要用`<BrowserRouter>`或`<HashRouter>`包裹。

3. 示例代码：

   ```jsx
   import { Link } from "react-router-dom";
   
   function Test() {
     return (
       <div>
       	<Link to="/路径">按钮</Link>
       </div>
     );
   }
   ```

### 5. `<NavLink>`

1. 作用: 与`<Link>`组件类似，且可实现导航的“高亮”效果。

2. 示例代码：

   ```jsx
   // 注意: NavLink默认类名是active，下面是指定自定义的class
   
   //自定义样式
   <NavLink
       to="login"
       className={({ isActive }) => {
           console.log('home', isActive)
           return isActive ? 'base one' : 'base'
       }}
   >login</NavLink>
   
   /*
   	默认情况下，当Home的子组件匹配成功，Home的导航也会高亮，
   	当NavLink上添加了end属性后，若Home的子组件匹配成功，则Home的导航没有高亮效果。
   */
   <NavLink to="home" end >home</NavLink>
   ```

### 6. `<Navigate>`

1. 作用：只要`<Navigate>`组件被渲染，就会修改路径，切换视图。

2. `replace`属性用于控制跳转模式（push 或 replace，默认是push）。

3. 示例代码：

   ```jsx
   import React,{useState} from 'react'
   import {Navigate} from 'react-router-dom'
   
   export default function Home() {
   	const [sum,setSum] = useState(1)
   	return (
   		<div>
   			<h3>我是Home的内容</h3>
   			{/* 根据sum的值决定是否切换视图 */}
   			{sum === 1 ? <h4>sum的值为{sum}</h4> : <Navigate to="/about" replace={true}/>}
   			<button onClick={()=>setSum(2)}>点我将sum变为2</button>
   		</div>
   	)
   }
   ```

### 7. `<Outlet>`

1. 当`<Route>`产生嵌套时，渲染其对应的后续子路由。

2. 示例代码：

   ```jsx
   //根据路由表生成对应的路由规则
   const element = useRoutes([
     {
       path:'/about',
       element:<About/>
     },
     {
       path:'/home',
       element:<Home/>,
       children:[
         {
           path:'news',
           element:<News/>
         },
         {
           path:'message',
           element:<Message/>,
         }
       ]
     }
   ])
   
   //Home.js
   import React from 'react'
   import {NavLink,Outlet} from 'react-router-dom'
   
   export default function Home() {
   	return (
   		<div>
   			<h2>Home组件内容</h2>
   			<div>
   				<ul className="nav nav-tabs">
   					<li>
   						<NavLink className="list-group-item" to="news">News</NavLink>
   					</li>
   					<li>
   						<NavLink className="list-group-item" to="message">Message</NavLink>
   					</li>
   				</ul>
   				{/* 指定路由组件呈现的位置 */}
   				<Outlet />
   			</div>
   		</div>
   	)
   }
   
   ```

## 3.Hooks

### 1. useRoutes()

1. 作用：根据路由表，动态创建`<Routes>`和`<Route>`。

2. 示例代码：

   ```jsx
   //路由表配置：src/routes/index.js
   import About from '../pages/About'
   import Home from '../pages/Home'
   import {Navigate} from 'react-router-dom'
   
   export default [
   	{
   		path:'/about',
   		element:<About/>
   	},
   	{
   		path:'/home',
   		element:<Home/>
   	},
   	{
   		path:'/',
   		element:<Navigate to="/about"/>
   	}
   ]
   
   //App.jsx
   import React from 'react'
   import {NavLink,useRoutes} from 'react-router-dom'
   import routes from './routes'
   
   export default function App() {
   	//根据路由表生成对应的路由规则
   	const element = useRoutes(routes)
   	return (
   		<div>
   			......
         {/* 注册路由 */}
         {element}
   		  ......
   		</div>
   	)
   }
   
   ```

### 2. useNavigate()

1. 作用：返回一个函数用来实现编程式导航。

2. 示例代码：

   ```jsx
   import React from 'react'
   import {useNavigate} from 'react-router-dom'
   
   export default function Demo() {
     const navigate = useNavigate()
     const handle = () => {
       //第一种使用方式：指定具体的路径
       navigate('/login', {
         replace: false,
         state: {a:1, b:2}
       }) 
       //第二种使用方式：传入数值进行前进或后退，类似于5.x中的 history.go()方法
       navigate(-1)
     }
     
     return (
       <div>
         <button onClick={handle}>按钮</button>
       </div>
     )
   }
   ```

### 3. useParams()

1. 作用：回当前匹配路由的`params`参数，类似于5.x中的`match.params`。

2. 示例代码：

   ```jsx
   import React from 'react';
   import { Routes, Route, useParams } from 'react-router-dom';
   import User from './pages/User.jsx'
   
   function ProfilePage() {
     // 获取URL中携带过来的params参数
     let { id } = useParams();
   }
   
   function App() {
     return (
       <Routes>
         <Route path="users/:id" element={<User />}/>
       </Routes>
     );
   }
   
   ```

### 4. useSearchParams()

1. 作用：用于读取和修改当前位置的 URL 中的查询字符串。

2. 返回一个包含两个值的数组，内容分别为：当前的seaech参数、更新search的函数。

3. 示例代码：

   ```jsx
   import React from 'react'
   import {useSearchParams} from 'react-router-dom'
   
   export default function Detail() {
   	const [search,setSearch] = useSearchParams()
   	const id = search.get('id')
   	const title = search.get('title')
   	const content = search.get('content')
   	return (
   		<ul>
   			<li>
   				<button onClick={()=>setSearch('id=008&title=哈哈&content=嘻嘻')}>点我更新一下收到的search参数</button>
   			</li>
   			<li>消息编号：{id}</li>
   			<li>消息标题：{title}</li>
   			<li>消息内容：{content}</li>
   		</ul>
   	)
   }
   
   
   ```

### 5. useLocation()

1. 作用：获取当前 location 信息，对标5.x中的路由组件的`location`属性。

2. 示例代码：

   ```jsx
   import React from 'react'
   import {useLocation} from 'react-router-dom'
   
   export default function Detail() {
   	const x = useLocation()
   	console.log('@',x)
     // x就是location对象: 
   	/*
   		{
         hash: "",
         key: "ah9nv6sz",
         pathname: "/login",
         search: "?name=zs&age=18",
         state: {a: 1, b: 2}
       }
   	*/
   	return (
   		<ul>
   			<li>消息编号：{id}</li>
   			<li>消息标题：{title}</li>
   			<li>消息内容：{content}</li>
   		</ul>
   	)
   }
   
     
   
   
   
   ```

### 6. useMatch()

1. 作用：返回当前匹配信息，对标5.x中的路由组件的`match`属性。

2. 示例代码：

   ```jsx
   <Route path="/login/:page/:pageSize" element={<Login />}/>
   <NavLink to="/login/1/10">登录</NavLink>
   
   export default function Login() {
     const match = useMatch('/login/:x/:y')
     console.log(match) //输出match对象
     //match对象内容如下：
     /*
     	{
         params: {x: '1', y: '10'}
         pathname: "/LoGin/1/10"  
         pathnameBase: "/LoGin/1/10"
         pattern: {
         	path: '/login/:x/:y', 
         	caseSensitive: false, 
         	end: false
         }
       }
     */
     return (
     	<div>
         <h1>Login</h1>
       </div>
     )
   }
   
   ```

### 7. useInRouterContext()

​			作用：如果组件在 `<Router>` 的上下文中呈现，则 `useInRouterContext` 钩子返回 true，否则返回 false。

### 8. useNavigationType()

1. 作用：返回当前的导航类型（用户是如何来到当前页面的）。
2. 返回值：`POP`、`PUSH`、`REPLACE`。
3. 备注：`POP`是指在浏览器中直接打开了这个路由组件（刷新页面）。

### 9. useOutlet()

1. 作用：用来呈现当前组件中渲染的嵌套路由。

2. 示例代码：

   ```jsx
   const result = useOutlet()
   console.log(result)
   // 如果嵌套路由没有挂载,则result为null
   // 如果嵌套路由已经挂载,则展示嵌套的路由对象
   
   ```

### 10.useResolvedPath()

1. 作用：给定一个 URL值，解析其中的：path、search、hash值。

