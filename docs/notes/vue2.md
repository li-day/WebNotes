lorem快速生成文本

# vue创建

`vue create 项目名` 创建项目

`vue ui` 图形化创建项目

```js
1. Use history mode for router?
  	1. 是否使用history模式,选择**n**
2. Pick a CSS pre-processor
	1. 选择使用的css预处理程序,选择**less**
3. Pick a linter / formatter config
	1. 选择代码格式校验标准:选择`standard`标准模式
4. Pick additional lint features
	1. 选择代码格式化的时机,`两个都勾上`
    	1. 保存格式化
    	2. git记录也会格式化
5. Where do you prefer placing config for Babel, ESLint, etc.?
	1. 配置文件保存位置`:选择第一个`
    	1. 保存到单独的文件中,后期调整会简单一些
6. Save this as a preset for future projects?
	1. 是否保存配置,方便后续使用,
    	1. 选择**n**或者**yes**都没啥问题
```

项目的根目录`vue add vuex` 快速整合vuex

项目的根目录 `vue add router` 快速整合router

# vue的插件推荐vscode

>为了使用`vscode`带来更好的开发体验,这里推荐几款插件
>
>[传送门:Vetur](https://github.com/vuejs/vetur)
>
>[传送门:VueHelper](https://github.com/OYsun/vscode-VueHelper)
>
>[传送门:Path Intellisense](https://github.com/ChristianKohler/PathIntellisense)
>
>[传送门:Live Server](https://github.com/ritwickdey/vscode-live-server)

# 文件结构

**结构说明:**

* 如果有需要文件夹的命名按照`如下`规则
* 之后学习的Vue的项目,都是类似于这样的结构

```js
/文件夹
	/assets  静态资源文件夹(图片,样式..)
	/components 组件文件夹 
	/utils      自定义的模块 (工具模块,)
	App.Vue     顶级组件(最开始的代码,如非意外,写这里)
```



# 1.Vue介绍

>Vue官网
>
>[传送门:官网](https://cn.vuejs.org/)
>
>[传送门:百度指数](https://index.baidu.com/v2/main/index.html#/trend/vue?words=vue,react,angular)

**Vue是什么**

1. **Vue**是一个框架
2. 使用的时候就需要遵守规则

**Vue能干什么**

1. 大大的简化开发的编码量
2. 目前市场占有率很高
3. 编码的方式进行转化
   1. 从基于dom编码------->**基于数据**

**注意:**

* 学习建议:
  * 多看文档,尝试一下
* 版本问题?
  * 学习的是2.x:目前最为主流的版本
    * jQuery1.12.4
  * 第三个项目是3.x:最新的版本
    * jQuery:3.x
* 补充 - 框架和库的区别?
  * **library**:库
    * 主要是自己的代码
    * 使用库来解决一些问题,提升开发效率,快速实现功能
  * **Framework**:框架
    * 使用的时候需要符合他的规范,照着他的约定来开发

# 2.Vue的基本使用

>先从一段官方的示例代码入手
>
>[传送门:官方文档 - 起步](https://cn.vuejs.org/v2/guide/#%E8%B5%B7%E6%AD%A5)

## Vue基本结构

**代码**

html部分

```html
<div id="app">
  {{ message }}
</div>
```

js部分

```js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```

>**注意:**
>
>
>
>1. `el`别用在`body`和`html`上,会报错。
>
>2. `Vue`的作用范围
>
>  1. `el`选择器作用的元素内部
>  2. 子元素,后代元素都可以
>
>  ```js
>  el: '#app',
>  ```
>
>3. `data`写数据
>
>  1. 字符串
>  2. 对象
>  3. 数组
>  4. 取值的时候可以结合点语法和下标
>  5. `{{}}`可以写表达式
>     1. 字符串拼接
>     2. 三元表达式
>
>  ```js
>  data: {
>      msg:'hello word'
>  }
>  ```
>
>1. `methods`写方法
>
>  ```js
>  methods: {
>            sayHi () {
>              console.log('こんにちは')
>            },
>            submit () {
>              console.log('提交')
>            }
>          }
>  ```
>  
>5. `computed` 计算属性
>
>   1. 写方法
>   2. 内部可以通过`.`点语法用到`data`中的数据
>   3. 执行完毕要返回结果
>   4. 可以通过`{{}}`直接加载页面
>
>   ```js
>   computed: {
>             msgLength () {
>               console.log('计算属性执行啦')
>               return this.msg.length
>             }
>           }
>   ```
>
>6. `created` 生命周期函数
>
>   1. 创建完毕之后执行, 
>
>   2. 用的较多,可以获取数据,方法;可以获取到 data methods中的属
>
>   3. ```js
>      created () {
>                console.log('created')
>                console.log(this.msg)
>      }
>      ```
>
>7. `beforeCreate` 生命周期函数
>
>   1.  Vue实例完成创建之前执行
>
>   2. 无法获取 data,methods等内部的任何属性
>
>   3. ```js
>      beforeCreate () {
>                console.log('beforeCreate')
>                console.log(this.msg)
>              }
>      ```

## Vue指令

## v-text渲染内容指令

>如果要渲染普通的内容可以使用**v-text**指令
>
>[传送门:v-text](https://cn.vuejs.org/v2/api/#v-text)

**作用:**

1. 替换元素的文本
2. 更新元素的 `textContent`。如果要更新部分的 `textContent`，需要使用 `{{ Mustache }}` 插值。

**语法:**

```html
  <body>
    <div id="app">
      <!-- v-text完整写法时,无论标签中有什么内容,直接替换(覆盖) -->
      <h2 v-text="info">萌你奶奶个腿!</h2>
      <!-- 如果不希望替换所有的内容 就用 {{}} 胡子语法 插值语法 -->
      <h2>{{ info }}萌你奶奶个腿!{{ msg }}</h2>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          info: '感觉自己萌萌哒!',
          msg: '么么哒!'
        }
      })
    </script>
  </body>
```

**注意:**

* 如何理解指令?

  * 就是一个html标签的属性而已
  * `v-`这些属性,只有vue可以解析

* `v-text`会替换哪些内容

  * 完整写法会直接替换标签的所有内容
  * 除非用`{{}}`

## v-html渲染结构指令

>如果要渲染html结构可以使用**v-html**指令
>
>[传送门:v-html指令](https://cn.vuejs.org/v2/api/#v-html)

**作用:**

1. 可以解析标签类比于`.html()`方法

**语法:**

```html
  <body>
    <div id="box">
      v-html指令
      <h2 v-html="msg">默认的内容</h2>
      <h2 v-html="info"></h2>
      v-text指令
      <h2 v-text="msg"></h2>
    </div>

    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#box',
        data: {
          msg: '<a href="#">去百度</a>',
          info: '你好吗?'
        }
      })
    </script>
  </body>
```

**注意:**

1. `v-html`指令是否会简写?
   1. 没有直接当做属性来写
2. 对于普通文本`v-html`指令如何解析?
   1. 直接渲染
3. `v-html`会替换哪些内容?
   1. 标签中的内容全部替换

## v-on事件绑定指令

>如果要绑定事件可以通过v-on指令来实现
>
>[传送门:处理用户输入](https://cn.vuejs.org/v2/guide/#%E5%A4%84%E7%90%86%E7%94%A8%E6%88%B7%E8%BE%93%E5%85%A5)
>
>[传送门:v-on指令](https://cn.vuejs.org/v2/api/#v-on)

**语法:**

1. `v-on:事件名`
2. 可以简写为`@事件名`
3. 方法写在:`methods`中和`data`和`el`是平级的·

```html
 <body>
    <div id="app">
      <h2>{{ msg }}</h2>
      <!-- 完整写法 -->
      <!-- <button v-on:click="sayHello">打招呼</button> -->
      <!-- 简写 用的最多的写法 -->
      <button @click="sayHello">打招呼</button>
      <br />
      <button @click="changeMsg">修改msg</button>
      <br />
      <h2 @click="changeCartoon">{{ cartoon }}</h2>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          msg: '西兰花炒蛋',
          cartoon: '食戬之灵'
        },
        methods: {
          // es6中的简写等同于
          // sayHello:function(){}
          sayHello () {
            console.log('吃了没!!')
          },
          changeMsg () {
            this.msg = '猪脚饭!!!!'
          },
          changeCartoon () {
            this.cartoon = '中华小当家'
          }
        }
      })
    </script>
  </body>
```

**注意:**

1. `this`是谁?
   1. 实例化的`Vue的对象`
   2. `data`和`methods`中的属性都直接丢到了对象上
   3. 可以通过this`.`点语法直接调用或修改Vue中的数据
2. `vue`开发的特点
   1. 数据改变,页面更新
   2. 改变`dom`---->改变数据

### v-on事件绑定的修饰符

**修饰符**

1. `.stop` - 调用 `event.stopPropagation()`。
2. `.prevent` - 调用 `event.preventDefault()`。
3. `.capture` - 添加事件侦听器时使用 capture 模式。
4. `.self` - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
5. `.{keyCode | keyAlias}` - 只当事件是从特定键触发时才触发回调。
6. `.native` - 监听组件根元素的原生事件。
7. `.once` - 只触发一次回调。
8. `.left` - (2.2.0) 只当点击鼠标左键时触发。
9. `.right` - (2.2.0) 只当点击鼠标右键时触发。
10. `.middle` - (2.2.0) 只当点击鼠标中键时触发。
11. `.passive` - (2.3.0) 以 `{ passive: true }` 模式添加侦听器

```vue
<!-- 方法处理器 -->
<button v-on:click="doThis"></button>

<!-- 动态事件 (2.6.0+) -->
<button v-on:[event]="doThis"></button>

<!-- 内联语句 -->
<button v-on:click="doThat('hello', $event)"></button>

<!-- 缩写 -->
<button @click="doThis"></button>

<!-- 动态事件缩写 (2.6.0+) -->
<button @[event]="doThis"></button>

<!-- 停止冒泡 -->
<button @click.stop="doThis"></button>

<!-- 阻止默认行为 -->
<button @click.prevent="doThis"></button>

<!-- 阻止默认行为，没有表达式 -->
<form @submit.prevent></form>

<!--  串联修饰符 -->
<button @click.stop.prevent="doThis"></button>

<!-- 键修饰符，键别名 -->
<input @keyup.enter="onEnter">

<!-- 键修饰符，键代码 -->
<input @keyup.13="onEnter">

<!-- 点击回调只会触发一次 -->
<button v-on:click.once="doThis"></button>

<!-- 对象语法 (2.4.0+) -->
<button v-on="{ mousedown: doThis, mouseup: doThat }"></button>
```

### v-on指令传参

**语法:**

* `@click="doSomething(传入参数)"`
* 定义方法的时候`doSomething(定义参数){}`

```html
<body>
    <div id="app">
      <button @click="doIT(123)">点击传参</button>
      <button @click="doIT(你好吗)">点击传参2</button>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {},
        methods: {
          doIT (num) {
            console.log('num:', num)
          }
        }
      })
    </script>
  </body>
```

**注意:**

1. 字符串要加`引号`,否则会报错

## v-bind操作属性指令

>如果要操纵属性可以通过**v-bind**指令
>
>[传送门:v-bind指令](https://cn.vuejs.org/v2/api/#v-bind)

**作用:**

1. 把数据和属性绑定
   1. 属性:写在标签内部的东西
      1. `src,href,class,style...`

**注意:**

1. `v-bind:属性名`完整写法
2. `:属性名`简写
3. `:class="{样式名:是否生效}"` 
4. 类名中有`-`需要用`''`包裹起来 `:class="{'is-disabled':num==0}"`
5. `:style="{样式名:值}"`
   1. 样式名不能写`-`,如果有用驼峰命名
6. 数据改变,页面也会`更新`哦

**语法**

```html
 <style>
      div {
        width: 100px;
        height: 100px;
        border: 20px solid #000;
      }
      .red {
        background-color: red;
      }
      .yellow {
        color: yellow;
      }
      .radius {
        border-radius: 50%;
      }
    </style>
  <body>
    <div id="app">
      <!-- <img v-bind:src="imgUrl" alt="" /> -->
      <img @click="changeUrl" :src="imgUrl" alt="" />
      <!-- 
        属性名 类名,属性值,是否生效 true(生效) false(不生效)
        行内可以直接写布尔值,不太好,写死的
      -->
      <!-- <div :class="{red:isRed,yellow:true}">你好吗?</div> -->
      <!-- 
        style
          属性名,样式名,-无法解析,用驼峰

       -->
      <div
        :style="{fontSize:size+'px',borderColor:'hotpink'}"
        :class="{red:isRed,yellow:isYellow,radius:age<18}"
      >
        你好吗?
      </div>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          imgUrl: './img/crydog.png',
          // 布尔值
          isRed: true,
          isYellow: true,
          size: 66,
          age: 17
        },
        methods: {
          changeUrl () {
            this.imgUrl = './img/baby.gif'
          }
        }
      })
    </script>
  </body>
```

## v-show显示隐藏指令

>如果要切换元素的显示隐藏可以使用**v-show**指令
>
>[传送门:v-show](https://cn.vuejs.org/v2/api/#v-show)

**作用:**

1. 根据表达式的结果,切换元素的显示隐藏

**语法:**

* `v-show="表达式"`

```html
 <body>
    <div id="app">
      <button @click="isShow=!isShow">切换图片显示</button>
      <br />
      <img src="./img/baby.gif" alt="" v-show="isShow" />
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          isShow: false
        }
      })
    </script>
  </body>
```

**注意:**

1. `v-show`的本质是切换元素的`display`
2. 元素始终是在`dom`树中
3. 可以写表达式,可以直接写布尔值,结果是
   1. true:显示
   2. false:隐藏

## v-if显示隐藏指令

>如果要切换元素的显示隐藏可以还可以使用**v-if**指令
>
>[传送门:v-if](https://cn.vuejs.org/v2/api/#v-if)
>
>[传送门:v-if对比v-show](https://cn.vuejs.org/v2/guide/conditional.html#v-if-vs-v-show)

**作用:**

* 切换元素的显示状态
* 根据表达式的结果
  * `true`:显示
  * `false`:隐藏

**语法:**

```html
  <body>
    <div id="app">
      <button @click="isShow=!isShow">切换图片显示</button>
      <br />
      <h2>v-if控制显示</h2>
      <img src="./img/baby.gif" alt="" v-if="isShow" />
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          isShow: false
        }
      })
    </script>
  </body>
```





**注意:**

1. `v-if`控制显示用的是操纵`dom`元素
   1. `true`:添加到`dom`树中
   2. `false`:从`dom`树中移除
2. 操纵样式还是操纵`dom`树更耗费性能?
   1. `dom`树
   2. 频繁切换元素显示隐藏时:建议用`v-show`
3. 现在的硬件水平,非常厉害了,很多时候性能都是过剩的
   1. 如非必要,不需要把性能作为第一优先级
   2. 现在更在乎用户体验

## v-else-if和v-else指令

>类似于js中的**if-else**,在v-if的后面可以继续使用**v-else**和**v-else-if**
>
>[传送门:v-else指令](https://cn.vuejs.org/v2/api/#v-else)
>
>[传送门:v-else-if指令](https://cn.vuejs.org/v2/api/#v-else-if)

**作用:**

1. 和`v-if`一起使用
2. `v-else-if`需要跟条件
3. `v-else`不需要跟条件

**语法:**

```html
  <body>
    <div id="app">
      <button @click="age++">年龄{{ age }}</button>
      <!-- 18岁 可以光明正大去网吧 -->
      <!-- 25岁 法定男性晚婚年龄 -->
      <h2 v-if="age<18">18岁之前,未成年.不能去网吧</h2>
      <h2 v-else-if="age>=18&&age<25">18岁成年啦.可以光明正大去网吧</h2>
      <h2 v-else>25岁啦,到了晚婚的年龄啦</h2>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          age: 16
        }
      })
    </script>
  </body>
```

**注意:**

1. `v-else-if`是否需要跟条件?
   1. 需要跟条件
2. `v-else`和`v-else-if`能否直接使用?
   1. 不可以,必须跟着`v-if`使用

## v-for循环指令

> 如果要根据数据多次渲染出元素,可以使用**v-for**指令
>
> [传送门:v-for](https://cn.vuejs.org/v2/api/#v-for)

**作用:**

1. 基于对象或者数组生成列表

**语法:**

1. 遍历数组
2. 遍历对象

```html
 <body>
    <div id="app">
      <ul>
        <!-- 
          item 每一项的名字
          in 固定
          cartoons 循环的数组
         -->
        <li v-for="item in cartoons">
          <span>{{ item.name }}</span> --- <span>{{ item.author }}</span>
        </li>
      </ul>
      <h2>循环对象</h2>
      <ul>
        <li v-for="(val,key) in person">
          {{ key }} -- {{ val }}
        </li>
      </ul>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          cartoons: [
            { name: '斗罗大陆', author: '唐家三少' },
            { name: '灵笼', author: '艺画开天' },
            { name: '刺客伍六七', author: '某公司' },
            { name: '一人之下', author: '米二' }
          ],
          person: {
            name: '陈思诚',
            habbit: '打斗地主',
            beforeWife: '佟丽娅'
          }
        }
      })
    </script>
  </body>
```

## v-model获取表数据指令

>如果要获取表单元素的输入,可以使用**v-model**指令
>
>[传送门:v-model指令](https://cn.vuejs.org/v2/api/#v-model)
>
>[传送门:处理用户输入](https://cn.vuejs.org/v2/guide/#%E5%A4%84%E7%90%86%E7%94%A8%E6%88%B7%E8%BE%93%E5%85%A5)
>
>[传送门:表单输入绑定](https://cn.vuejs.org/v2/guide/forms.html)

**作用:**

1. 双向数据绑定
   1. `value`--->`data`
   2. `data`--->`value`
2. 只能获取表单的元素`input` `select` `textarea` `components`

**修饰符**：

- [`.lazy`](https://cn.vuejs.org/v2/guide/forms.html#lazy) - 取代 `input` 监听 `change` 事件
- [`.number`](https://cn.vuejs.org/v2/guide/forms.html#number) - 输入字符串转为有效的数字
- [`.trim`](https://cn.vuejs.org/v2/guide/forms.html#trim) - 输入首尾空格过滤

**语法**

```html
  <body>
    <div id="app">
      <!-- <input type="text" v-model="msg" @keyup.enter="getValue" /> -->
      <input type="text" v-model.trim="msg" @keyup.enter="getValue" />
      <h2>msg:{{ msg }}</h2>
      <button @click="changeMsg">修改msg的值</button>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
      // 需求:输入框中按下  回车  ,获取  value 值
      const app = new Vue({
        el: '#app',
        data: {
          msg: '感觉自己萌萌哒!'
        },
        methods: {
          changeMsg () {
            this.msg = '今天天气还行,不热'
          },
          getValue () {
            console.log('msg:', this.msg)
          }
        }
      })
    </script>
  </body>
```

###  v-model的本质

>`v-model`到底干了什么事
>
>1. 绑定数据
>2. 绑定事件
>3. 接收参数
>4. 修改数据
>
>[传送门:表单输入绑定](https://cn.vuejs.org/v2/guide/forms.html#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95)
>
>[传送门:內联处理器中的方法](https://cn.vuejs.org/v2/guide/events.html#%E5%86%85%E8%81%94%E5%A4%84%E7%90%86%E5%99%A8%E4%B8%AD%E7%9A%84%E6%96%B9%E6%B3%95)
>
>[传送门:行内表达式中的$event](https://www.yuque.com/yanjuxilanhua/eq0c2n/kgihaz#533feb7f)

**本质:**

1. 绑定了`value`或者`checked`
2. 注册了`input`事件或者`change`事件
3. `$event`可以访问原始dom事件

**模板**

```html
<body>
    <div id="app">
      <!-- <input type="checkbox" v-model="isChecked" /> -->
      <!-- 
        对于checkbox而言 v-model干了2件事
        1. :checked  data中的数据设置给了 checked属性
        2. change事件中 把最新的checked属性 赋值给 data中的对应的属性
       -->
      <input type="checkbox" :checked="isChecked" @change="changeHandler" /> 
      <!-- 行内可以通过$event获取默认的参数 -->
      <!-- <input
        type="checkbox"
        :checked="isChecked"
        @change="isChecked = $event.target.checked"
      /> -->
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          isChecked: false
        },
        methods: {
          changeHandler (event) {
          // console.log('触发啦')
          // console.log('event:', event)
          // console.log('checked:', event.target.checked)
          // 赋值给  data中的数据
          this.isChecked = event.target.checked
          }
        }
      })
    </script>
  </body>
```

```html
<div id="app">
      <h2>msg:{{ msg }}</h2>
      <!-- <input type="text" v-model="msg" /> -->
      <!-- 
        type=text的本质是
          :value data-value
          @input 事件绑定 输入内容一直触发

          @change 对于输入框而言,需要失去焦点并且value改变才会触发
       -->
      <!-- <input type="text" :value="msg" @input="inputHandler" /> -->
      <input type="text" :value="msg" @input=" msg=$event.target.value" />
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          msg: '西兰花炒蛋!'
        },
        methods: {
          // inputHandler (event) {
          //   console.log('input触发')
          //   // console.log(event)
          //   // console.log('value:', event.target.value)
          //   this.msg = event.target.value
          // }
          // changeHandler () {
          //   console.log('change触发')
          // }
        }
      })
    </script>
```

### 组件上使用v-model

>[传送门:组件上使用`v-model`](https://cn.vuejs.org/v2/guide/components.html#%E5%9C%A8%E7%BB%84%E4%BB%B6%E4%B8%8A%E4%BD%BF%E7%94%A8-v-model)

**语法:**

1. 子组件中
   1. `props`定义`value`的属性
   2. 数据改变的时候通过`this.$emit('input',新的数据)`
2. 只要子组件满足上面的条件,父组件就可以直接简写为`v-model`

```vue
<script>
export default {
  name: 'son',
  // 1. props
  props: {
    value: {
      // 类型
      type: Number,
      // 必填
      required: true
    }
  methods: {
    add () {
        // num+1 并传递出去
        this.$emit('input', this.value + 1)
    },
    sub () {
        // num -1 并传递出去
        this.$emit('input', this.value - 1)
    }
  }
}
</script>
```

**App组件**

```vue
<template>
	<div>
        <son v-model="fatherNum"></son>
    </div>
</template>
<script>
    import son from './components/son'
export default {
  name: 'app',
  data () {
    return {
      fatherNum: 6
    }
  }
}
</script>
```



## v-once只表达一次指令

>如果希望解析表达式只解析一次,可以使用**v-once**指令
>
>[传送门:v-once指令](https://cn.vuejs.org/v2/api/#v-once)

**语法:**

1. 给希望使用的元素添加即可
2. 数据改变之后不会更新，只会解析一次

```html
 <body>
    <div id="app">
      <h1>v-once指令</h1>
      <button>修改msg</button>
      <h2>v-once指令--{{msg}}</h2>
      <h2>直接渲染--{{msg}}</h2>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          msg: '你好吗?'
        },
        methods: {
        }
      })
    </script>
  </body>
```

## v-pre不解析指令（了解一下）

>如果希望不解析vue的指令,可以使用**v-pre**指令
>
>[传送门:v-pre指令](https://cn.vuejs.org/v2/api/#v-pre)

**语法:**

1. 给希望不解析胡子语法(插值语法)的标签添加即可
2. Vue直接不解析内部的胡子语法`{{}}`

```html
 <body>
    <div id="app">
      <h1>v-pre指令</h1>
      <button>修改msg</button>
      <h2>v-pre指令--{{msg}}</h2>
      <h2>直接渲染--{{msg}}</h2>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          msg: '你好吗?'
        },
        methods: {}
      })
    </script>
  </body>
```

## v-cloak指令(了解一下)

>`v-cloak`指令会在vue`加载完毕`之后自动移除
>
>[传送门:v-cloak指令](https://cn.vuejs.org/v2/api/#v-cloak)

**语法:**

1. 给希望使用的元素添加即可
2. Vue加载完毕之后自动移除，可以结合选择器实现隐藏高亮效果
3. 需要配合`[v-cloak]`属性选择器

```html
<style>
      /* 属性选择器 元素有 v-cloak这个属性 */
      [v-cloak] {
        /* 可以默认让元素隐藏 */
        /* display: none; */
        color: orange;
        background-color: hotpink;
      }
    </style>
<body>
    <div id="app">
      <h1>v-cloak指令</h1>
      <h2 v-cloak>v-cloak指令--{{msg}}</h2>
      <h2>直接渲染--{{msg}}</h2>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          msg: '你好吗?'
        }
      })
    </script>
  </body>
```

# 3.Vue元素的过渡使用

## 单元素过渡使用

>在`vue`中可以十分便捷在元素切换时添加过渡效果(`动画效果`)
>
>[传送门:单元素-组件过渡](https://cn.vuejs.org/v2/guide/transitions.html#%E5%8D%95%E5%85%83%E7%B4%A0-%E7%BB%84%E4%BB%B6%E7%9A%84%E8%BF%87%E6%B8%A1)
>
>触发方式:切换显示状态(v-show,v-if)

**语法:**

1. 使用 `transition`包裹希望添加动画的元素
2. `name`属性和样式中的css选择器对应

```html
<style>
      /* 隐藏->显示 整个过程都有的类名 */
      .slide-fade-enter-active {
        transition: all 1s linear;
      }
      /* 显示->隐藏 整个过程都有的类名 */
      .slide-fade-leave-active {
        transition: all 8s ease;
      }

      /* 隐藏->显示  
          开始样式
          没有设置enter-to 就会用普通的显示状态
       */
      .slide-fade-enter {
        transform: translateX(10px) scale(0) rotate(360deg);
        opacity: 0;
      }
      /*  
        显示->隐藏的 
          目标样式
          没有设置 leave 会以默认的显示状态 作为起始样式
      */
      .slide-fade-leave-to {
        transform: translateX(10px) rotate(3600deg) scale(0);
        opacity: 0;
      }
    </style>
  <body>
    <div id="app">
      <button @click="isShow=!isShow">切换显示</button>
      <br />
      <!-- 2. 使用 transition包裹希望添加动画的元素 -->
      <transition name="slide-fade">
        <!-- 1. 切换元素显示 v-show 或者 v-if 都可以 -->
        <img v-show="isShow" src="./img/Skarner.png" alt="" />
      </transition>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          isShow: false
        }
      })
    </script>
  </body>
```

### 知识点 - 过渡的类名

>在使用`Vue`为元素添加过渡效果时,会自动切换一些类名,他们叫什么,有什么规律呢?

**类名:**

在进入/离开的过渡中，会有 6 个 class 切换。

1. `v-enter`：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
2. `v-enter-active`：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
3. `v-enter-to`：**2.1.8 版及以上**定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 `v-enter` 被移除)，在过渡/动画完成之后移除。
4. `v-leave`：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
5. `v-leave-active`：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
6. `v-leave-to`：**2.1.8 版及以上**定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 `v-leave` 被删除)，在过渡/动画完成之后移除。

类名的开始`v`是一个占位,最后会被`transition`的`name`属性替换

## 列表过渡

>如果是根据数据生成的`列表`要如何添加动画效果呢?
>
>[传送门:列表过渡](https://cn.vuejs.org/v2/guide/transitions.html#%E5%88%97%E8%A1%A8%E8%BF%87%E6%B8%A1)
>
>触发方式:添加或者移除

**语法:**

1. 使用 `transition-group`包裹希望添加动画的元素
2. `name`属性和样式中的css选择器对应
3. `tag`:设置之后会解析为对应的标签,不给解析为`span`
4. `tag`:一般设置父元素的标签语义
5. 循环的元素`必须`设置``:key`,给唯一的标记
6. `:key`:要设置不重复的值,

```html
<style>
      /* 显示和隐藏 都是 持续1s */
      .list-enter-active,
      .list-leave-active {
        transition: all 1s;
      }
      /* 透明度 和 y轴的移动 */
      .list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
        opacity: 0;
        transform: translateX(30px);
      }
    </style>
  <body>
    <div id="app">
      <input type="text" @keyup.enter="addFood" v-model.trim="inputValue" />
      <!-- <ul> -->
      <!-- 
        tag 
          1. 设置之后会解析为对应的标签
          2. 原本的父盒子可以移除
          3. 不写会解析为span
          4. html的容错性很强
       -->
      <transition-group name="list" tag="ul">
        <li class="list-item" v-for="item in foods" :key="item.id">
          {{ item.name }}
        </li>
      </transition-group>
      <!-- </ul> -->
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          // vmodel绑定的数据
          inputValue: '',
          // 列表
          foods: [
            {
              name: '花菜',
              id: 1
            },
            {
              name: '花椒',
              id: 2
            },
            {
              name: '西兰花',
              id: 3
            }
          ]
        },
        methods: {
          // 添加食物
          addFood () {
            // 非空判断
            if (this.inputValue === '') {
              return
            }
            // 添加
            this.foods.push({
              name: this.inputValue,
              // 生成不重复的id 时间戳
              id: Date.now()
            })
            // 清空
            this.inputValue = ''
          }
        }
      })
    </script>
  </body>
```

# 4.计算属性computed

>如果某个`属性`的取值需要稍作计算,可以通过计算属性来完成哦
>
>[传送门:计算属性](https://cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7)

**语法:**

1. 写在`computed`中和`data`平级
2. 写方法
3. 内部可以通过`.`点语法用到`data`中的数据
4. 执行完毕要返回结果
5. 可以通过`{{}}`直接加载页面

```html
<body>
    <div id="app">
      <h2>长度为:{{ msgLength }}</h2>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          msg: '感觉自己萌萌哒!!!'
        },
        computed: {
          msgLength () {
            console.log('执行啦!')
            // 返回长度
            return this.msg.length
          }
        }
      })
    </script>
  </body>
```

**注意:**

1. 和data同级
2. 写的是方法
3. 内部需要`return`
4. 使用的数据改变了会重新执行

## 计算属性的缓存

>方法也能实现计算属性类似的功能,那么区别是什么呢?
>
>[传送门:计算属性缓存vs方法](https://cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E7%BC%93%E5%AD%98-vs-%E6%96%B9%E6%B3%95)
>
>[传送门:深入响应式原理](https://cn.vuejs.org/v2/guide/reactivity.html)
>
>[传送门:计算属性缓存](https://cn.vuejs.org/v2/guide/reactivity.html)

**概念:**

* 计算属性计算出结果之后会进行缓存
* 再次取值直接从缓存中取
* 除非内部使用的`data`中的数据改变了才会重新计算

**模板:**

```vue
<template>
  <div>
    <p>第1次获取:{{ nameLength }}</p>
    <p>第2次获取:{{ nameLength }}</p>
    <p>第3次获取:{{ nameLength }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'jack'
    }
  },
  computed: {
    nameLength () {
      console.log('nameLength执行啦')
      return this.name.length
    }
  }
}
</script>

<style></style>
```

**注意**

1. `函数`+`返回值`的写法是计算属性的是`get`

##  计算属性的set

>如果为计算属性赋值,就需要实现他的`set`方法了
>
>[传送门:计算属性的set](https://cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E7%9A%84-setter)

**语法**

```js
computed:{
	属性名:{
		get(){
			//返回结果
		},
		set(value){
			// 逻辑
		}
	}
```

```html
<body>
    <div id="app">
      <h2>地址:{{address}}</h2>
      <button @click="setAddress">设置地址</button>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          province: '广东省',
          city: '深圳市'
        },
        methods: {
          setAddress () {
            this.address = '四川省-成都市'
          }
        },
        computed: {
          // address () {
          //   return `${this.province}-${this.city}`
          // }
          address: {
            // get的名字是固定
            // 直接写 函数 并return 其实是 get
            get () {
              return `${this.province}-${this.city}--(づ￣ 3￣)づ`
            },
            // set的名字是固定的
            set (value) {
              // console.log('value:', value)
              // 获取省  获取市
              const res = value.split('-')
              console.log('res:', res)
              // 挨个的赋值
              this.province = res[0]
              this.city = res[1]
            }
          }
        }
      })
    </script>
  </body>
```



# 5.axios-数据请求

>来学习一个新的网络请求库,专注于网络请求
>
>[传送门:axios](https://github.com/axios/axios)
>
>[传送门:axios中文网](http://www.axios-js.com/)

## get请求

**语法**

`axios.get(url地址,{params:参数}).then(res=>{成功时执行的回调}).catch(errRes=>{失败时执行的回调})`

`axios.get(url地址?参数=12313).then(res=>{成功时执行的回调}).catch(errRes=>{失败时执行的回调})`

**get无参数代码**

```js
// get请求无参数
        axios.get('https://autumnfish.c123123n/api/joke').then(res => {
            // 请求成功的回调
            // console.log('res:', res)
            console.log(res.data)
          }).catch(errRes => {
            // 请求失败的回调
            console.log('errRes:', errRes)
          })
```

**get带参数**

```js
axios.get('https://autumnfish.cn/api/lol/search', {
          params: {
            q: '亚'
          }).then(res => {
            // 请求成功的回调
            // console.log('res:', res)
            console.log(res.data)
          }).catch(errRes => {
            // 请求失败的回调
            console.log('errRes:', errRes)
          }

 //axios.get(url地址?参数=12313)
axios.get('https://autumnfish.cn/api/lol/search?q=亚').then(res => {
            // 请求成功的回调
            // console.log('res:', res)
            console.log(res.data)
          }).catch(errRes => {
            // 请求失败的回调
            console.log('errRes:', errRes)
          })
```

## post请求

**语法**

`axios.post(url地址,{参数}).then(res=>{成功时执行的回调}).catch(errRes=>{失败时执行的回调})`

```js
axios.post('https://autumnfish.cn/api/user/reg', {
            username: 'huazi'
          }).then(res => {
            // 请求成功的回调
            console.log('res:', res)
          }).catch(errRes => {
            // 请求失败的回调
            console.log('errRes:', errRes)
          })
```

## axios - config模式

>为了实现更为灵活的请求配置,建议使用`config`模式
>
>[传送门:axiosconfig模式](https://github.com/axios/axios#axiosconfig)

**语法:**

**post请求**

```js
axios({
          method: 'post',
          url: 'https://autumnfish.cn/api/user/reg',
          data: {
            username: 'jack爱rose吗'
          }
        }).then(res => {
    		// 请求成功的回调
            console.log('res:', res)
          }).catch(errRes => {
    		// 请求失败的回调
            console.log('errRes:', errRes)
          })
```

**get请求**

```js
axios({
          method: 'get',
          url: 'https://autumnfish.cn/api/lol/search',
          params: {
            q: '贾'
          }
        }).then(res => {
    		// 请求成功的回调
            console.log('res:', res)
          }).catch(errRes => {
    		// 请求失败的回调
            console.log('errRes:', errRes)
          })

```

## axios+vue

**注意**

`axios`的`then`中用箭头函数的指向

```html
<body>
    <div id="app">
      <button @click="getJoke">看笑话</button>
      <p>{{ joke }}</p>
    </div>
    <!-- 导入 axios  和 vue 没有先后关系 -->
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          joke: ''
        },
        methods: {
          getJoke () {
            axios({
              url: 'https://autumnfish.cn/api/joke',
              method: 'get'
            })
              /*
              箭头函数
                创建时this的指向就固定,当前作用域中的this
                getJoke中的this vue实例

              不是箭头函数
                this指向就不固定
            */

              // .then(res => {
              .then(function (res) {
                // 请求成功的回调
                console.log(this)
                console.log('res:', res)
                this.joke = res.data
              }).catch(errRes=>{
                // 请求失败的回调
                console.log('errRes:',errRes)
            })
          }
        }
      })
    </script>
  </body>
```

## axios的create方法

>如果希望使用`axios`时可以进行不同类型的配置,可以通过`create`方法创建一个新的实例来完成
>
>[传送门:axios.create](http://www.axios-js.com/zh-cn/docs/#%E5%88%9B%E5%BB%BA%E5%AE%9E%E4%BE%8B)

**语法:**

```javascript
// 创建一个副本，用来发送请求
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  // 超时时间,超过直接作废
  // timeout: 1000,
  // 自定义请求头 
  // headers: {'X-Custom-Header': 'foobar'}
});
```

**示例:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>axios的create方法</title>
  </head>
  <body>
    <h2>axios的create方法</h2>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script>
      // instance 已经设置好基地址的 axios的请求对象副本
      const instance = axios.create({
        baseURL: 'https://autumnfish.cn/'
      })

      instance({
        url: '/search/hot',
        method: 'get',
        params: {
          timestamp: Date.now()
        }
      }).then(res => {
        console.log('res:', res)
      })
      console.log(axios === instance)
    </script>
  </body>
</html>

```

**注意:**

1. `create`方法创建的实例对象和原始的`axios`是同一个对象吗?
   1. 不是,和`axios`只是功能相同,但是不是同一个对象

## api抽取

>项目中通过`this.$axios`的方式调用接口,功能上木有问题,但是维护上不太方便,一般我们会通过把`api`抽取为方法来解决

**缺点:**

1. 没有办法打开页面之后立刻知道调用了什么接口,代码藏在各种地方
2. 修改接口的地址,参数也比较麻烦,不利于后期维护

```vue
    <script>
      // instance 已经设置好基地址的 axios的请求对象副本
      const instance = axios.create({
        baseURL: 'https://autumnfish.cn/'
      })

      // 抽取为方法 没有参数的
      function getHots () {
        // instance 执行返回的是 Promise对象
        return instance({
          url: '/search/hot',
          method: 'get',
          params: {
            timestamp: Date.now()
          }
        })
      }

      // 外部可以.then
      getHots().then(res => {
        console.log('自己抽取的方法内部')
        console.log('res:', res)
      })

      // 抽取为方法 有参数的
      function searchMusic ({ keywords }) {
        return instance({
          url: '/search',
          method: 'get',
          params: {
            keywords
          }
        })
      }

      // 调用 有参数的方法
      searchMusic({ keywords: '好运来' }).then(res => {
        console.log('搜索结果')
        console.log('res:', res)
      })
    </script>
```

## axios的拦截器

>又是一个听起来逼格很高的`回调函数`
>
>[传送门:axios拦截器-中文网](http://www.axios-js.com/zh-cn/docs/#%E6%8B%A6%E6%88%AA%E5%99%A8)

**作用:**

1. 在`发送`清除之前和`数据`回来之后执行的回调函数

**注意**

`axios`的`拦截器`有2种

1. 请求拦截器:`request`
   1. 发送请求之前执行
2. 响应拦截器:`response`
   1. 数据回来之后执行



```javascript
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
```



# 6.生命周期钩子

>可以叫做**生命周期函数**,就是Vue提供的一堆**回调函数**而已,注册了就会自动执行哦
>
>[传送门:生命周期钩子](https://cn.vuejs.org/v2/guide/instance.html#%E5%AE%9E%E4%BE%8B%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E9%92%A9%E5%AD%90)
>

**作用：**

1. 就是一堆 `回调函数`
2. 可以类比于`window.onload`
3. 写了之后,会自动的执行

**注意:**

1. 生命周期钩子(回调函数)一个有8个
   1. `beforeCreate`:Vue实例完成创建之前执行,无法获取 data,methods等内部的任何属性
   2. `created`: 创建完毕之后执行, 用的较多,可以获取数据,方法
   3. `updated`:数据改变页面更新完毕后执行
   4. `beforeUpdate`：数据改变，页面没有更新之前执行

**语法:**

```html
<body>
    <div id="app">
      {{ msg }}
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          msg: '西兰花炒蛋好好吃!'
        },
        // Vue实例完成创建之前执行
        /*
          无法获取 data,methods等内部的任何属性
          基本不用
        */
        beforeCreate () {
          console.log('beforeCreate')
          console.log(this.msg)
        },
        // 创建完毕之后执行
        /*
          可以获取到 data methods中的属性
          初始化操作,默认执行的逻辑都可以写在这里
        */
        created () {
          console.log('created')
          console.log(this.msg)
        }
      })
    </script>
  </body>
```

# 7.template操作多个标签

>如果要操纵多个标签,但是他们没有自己的父标签,就可以使用**template**来包裹哈
>
>[传送门:template标签结合v-if](https://cn.vuejs.org/v2/guide/conditional.html#%E5%9C%A8-lt-template-gt-%E5%85%83%E7%B4%A0%E4%B8%8A%E4%BD%BF%E7%94%A8-v-if-%E6%9D%A1%E4%BB%B6%E6%B8%B2%E6%9F%93%E5%88%86%E7%BB%84)
>
>[传送门:template标签结合v-for](https://cn.vuejs.org/v2/guide/list.html#%E7%94%A8-v-for-%E6%8A%8A%E4%B8%80%E4%B8%AA%E6%95%B0%E7%BB%84%E5%AF%B9%E5%BA%94%E4%B8%BA%E4%B8%80%E7%BB%84%E5%85%83%E7%B4%A0)

**作用:**

1. 不影响默认结构的情况下 写指令

```html
<body>
    <div id="app">
      <h2 @click="age++">年龄:{{ age }}</h2>
      <!-- 未成年 -->
      <template v-if="age<18">
        <p>玩泥巴</p>
        <p>过家家</p>
        <p>过61</p>
        <p>抓泥鳅</p>
      </template>
      <!-- 成年 -->
      <template v-else>
        <p>去网吧</p>
        <p>处对象</p>
        <p>唱跳rap</p>
      </template>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          age: 16
        }
      })
    </script>
  </body>
```

# 8.ref获取dom元素获得组件属性

>在`vue`中获取`dom`元素或者`组件`,可以使用`ref`属性
>
>[传送门:refs属性](https://cn.vuejs.org/v2/api/#vm-refs)

**语法:**

1. 给希望获取的元素添加`ref="名字"`属性,名字随意,有意义即可
2. 代码中通过`this.$refs.xxx`即可获取
3. `this.$refs`获取所有设置ref属性的元素

```html
<body>
    <div id="app">
      <button @click="getRef">测试ref</button>
      <img ref="brother" src="./img/brother.png" alt="" />
      <img ref="brother2" src="./img/b2.png" alt="" />
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {},
        methods: {
          getRef () {
            // 所有设置了 ref属性的元素
            console.log(this.$refs)
            console.log(this.$refs.brother)
            console.log(this.$refs.brother2)
          }
        }
      })
    </script>
  </body>
```

## ref使用补充

>`ref`设置给不同的元素,获取到的东西是不同的哦
>
>[传送门:访问子组件和子元素](https://cn.vuejs.org/v2/guide/components-edge-cases.html#%E8%AE%BF%E9%97%AE%E5%AD%90%E7%BB%84%E4%BB%B6%E5%AE%9E%E4%BE%8B%E6%88%96%E5%AD%90%E5%85%83%E7%B4%A0)

**作用:**

1. 获取`ref`标记的元素
   1. `dom元素`
   2. `组件`
2. 不是很建议大量使用`ref`去获取子组件的数据,会带来调试的问题

**语法:**

* 给`标签`或`组件`添加`ref`属性
* 代码中`this.$refs.属性名`即可获取到对应的`组件`或`标签`

1. **son组件**

```js
export default {
  name: 'son',
  data () {
    return {
      secret: '我有一个小秘密,就不告诉你嘿!'
    }
  }
}
```

2. **App组件**

```js
methods: {
    testRef () {
      // 所有设置了ref的都可以获取到
      // console.log(this.$refs)
      console.log('dom:', this.$refs.title)
      console.log('组件:', this.$refs.son)
      console.log('组件的数据:', this.$refs.son.secret)
      this.$refs.son.secret = '我是一条小青龙'
    }
  }
```



#  9.单文件组件

>[传送门:组件](https://cn.vuejs.org/v2/guide/components.html)
>
>[传送门:单文件组件](https://cn.vuejs.org/v2/guide/single-file-components.html)
>
>[传送门:单个根元素](https://cn.vuejs.org/v2/guide/components.html#%E5%8D%95%E4%B8%AA%E6%A0%B9%E5%85%83%E7%B4%A0)
>
>[传送门:data必须是个函数](https://cn.vuejs.org/v2/guide/components.html#data-%E5%BF%85%E9%A1%BB%E6%98%AF%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0)

1. 组件:
   1. `Vue`提供的一种更为高级的`封装机制`
      1. 一次性抽取3种东西
      2. 直接复用
         1. 结构,逻辑,样式
2. 单文件
   1. 一个文件,就是组件
3. 可以通过`vue serve xxx.vue`

**语法注意**

1. **template**   结构

   1. 需要有一个跟节点作为容器，只能有一个

   2. 双标签即可，一般用div

   3. ````vue
      <template>
        <div>
          <h2>测试</h2>
        </div>
      </template>
      ````

2. **script**  逻辑

   1. 组件中`data`是一个函数，把用到的数据`return`

   2. 让组件有一个自己独有的数据对象

   3. `data`没用一个组件,都会执行一次

   4. ```js
      data () {
          return {
            fatherNum: 6
          }
        },
      ```

3. **style** 样式
   1. 默认不能写`less`等`css`预处理

   2. `css`以前怎么写,这里还是怎么写

   3. ```css
      <style>
      .my-input-number {
        position: relative;
        display: inline-block;
        width: 180px;
        line-height: 38px;
      }
      </style>
      ```

# 10.nextTick

>`updated`执行的频率太高了,希望页面更新之后执行的逻辑,其实更建议用`nextTick`
>
>[传送门:update](https://cn.vuejs.org/v2/api/#updated)
>
>[传送门:$nextTick](https://cn.vuejs.org/v2/api/#vm-nextTick)

**作用:**

1. `数据改变`并且`dom`更新之后执行的回调函数
2. 可以先理解为高级版本的`定时器`
3. 不会检测所有的数据,一般只是在某个数据改变后执行
4. 相比于`updated`这个使用的更频繁

**注意:**

1. `nextTick`的执行时机是在数据更新后的回调
2. 将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新

**语法:**

* `vue实例`点出来

```js
this.$nextTick(()=>{
    // 逻辑
})
```

# 11.ES6中的模块化

>使用单文件组件开发时,模块化的语法使用的是es6的,咱们来看看如何使用
>
>[传送门:es6Module](https://es6.ruanyifeng.com/#docs/module)

## 默认导出和导入

**导出语法**

```javascript
// 定义
const food = '西兰花炒蛋'
// 暴露
export default food
```

**导入语法:**

1. `xxx`可以写任意名字

```javascript
import xxx from '路径'
```

### 带名字的导出和导入

**导出语法01:**

>  定义和导出分开的语法

```javascript
// 定义
const food ='西兰花炒蛋'
const animal ='狗狗'
const sayHello = function(){
  console.log('你好吗')
}

// 导出
export {food,animal,sayHello}
```

**导出语法02:**

> 定义和导出写在一起的语法

```javascript
// 定义+导出
export const food = '西兰花炒蛋'
export const animal = '哈士奇'
export const sayHello = function () {
  console.log('你好吗?')
}
```

**导入语法01:**

> 根据名字导入模块

```javascript
import { food , animal , sayHello} from '路径'
```

**导入语法02:**

> 使用`as`关键字起别名

```javascript
import { food as 别名 } from '路径'
```

## 组件局部注册及使用

>如果要使用`写好的组件`,需要`导入`,`注册`,才可以使用哦
>
>[传送门:局部注册](https://cn.vuejs.org/v2/guide/components-registration.html#%E5%B1%80%E9%83%A8%E6%B3%A8%E5%86%8C)
>
>[传送门:组件名](https://cn.vuejs.org/v2/guide/components-registration.html#%E7%BB%84%E4%BB%B6%E5%90%8D)
>
>[传送门:组件组织](https://cn.vuejs.org/v2/guide/components.html#%E7%BB%84%E4%BB%B6%E7%9A%84%E7%BB%84%E7%BB%87)

**注意:**

1. `components`写的位置和`data`是同级关系
2. 不可以使用`html`元素的标签名作为组件名
3. 组件命名
   1.  `kebab-case` (短横线分隔命名)
       1.  多单词用`-`分割
   2.  `PascalCase` (首字母大写命名) 
       1.  驼峰
           1.  可以直接用大写字母
           2.  比如`ComIpt`
           3.  或者`com-ipt`

**语法:**

```vue
<template>
	<!-- 03.使用组件 -->
	<ComponentA></ComponentA>
</template>
<script>
    // 01.导入组件
    import ComponentA from './ComponentA.vue'

    // 02.注册组件
    export default {
      components: {
        ComponentA// ComponentA:ComponentA
      },
      // ...
    }
</script>
```

# 父子组件通讯(**重要**)

## slot基本使用

>如果要从`父`组件传递`结构`到`子`组件中,可以通过`slot(插槽)`实现
>
>[传送门:通过插槽分发内容](https://cn.vuejs.org/v2/guide/components.html#%E9%80%9A%E8%BF%87%E6%8F%92%E6%A7%BD%E5%88%86%E5%8F%91%E5%86%85%E5%AE%B9)
>
>[传送门:插槽的后备内容](https://cn.vuejs.org/v2/guide/components-slots.html#%E5%90%8E%E5%A4%87%E5%86%85%E5%AE%B9)

**作用:**

1. 让父组件可以传递结构到子组件中
2. 在子组件内部添加`slot`标签,就可以获取到外部传入的结构

**语法:**

1. 子组件中希望接收结构的位置写一个`<slot></slot>`

2. ```vue
   <div class="my-alert__content">
         <span class="my-alert__title">
           <slot>这是一个寂寞的天</slot>
         </span>
       </div>
   ```

**注意:**

1. 组件中的`export default`
   1. 默认就导出了,无论外部用不用
2. 插槽的`默认值`
   1. `<slot>默认值</slot>`
      1. 不传入结构用默认值
      2. 传入了结构,用传入的值

## 具名插槽

>插槽的进阶知识,具名插槽:**让外部传入的多个结构,去往指定的位置**
>
>[传送门:具名插槽](https://cn.vuejs.org/v2/guide/components-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD)
>
>[传送门:具名插槽的缩写](https://cn.vuejs.org/v2/guide/components-slots.html#%E5%85%B7%E5%90%8D%E6%8F%92%E6%A7%BD%E7%9A%84%E7%BC%A9%E5%86%99)

**语法-组件内部:**

```vue
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```

**语法-使用:**

```vue
<base-layout>
  <!-- 完整写法的简写 -->
  <template v-slot:header>
    <h1>Here might be a page title</h1>
  </template>
  <!-- 会去往默认插槽 -->
  <p>A paragraph for the main content.</p>
  <p>And another one.</p>
  <!-- v-slot:footer的简写 -->
  <template #footer>
    <p>Here's some contact info</p>
  </template>
</base-layout>
```

**注意:**

1. `v-slot:header`可以缩写为什么?
   1. `#header`
2. 设置给默认插槽的内容,是否必须通过`template`包裹?
   1. 不是,不给也是去默认插槽

## props

>如果要从`父`组件传递数据到`子`组件中,可以通过`props`实现
>
>[传送门:通过prop向子组件传递数据](https://cn.vuejs.org/v2/guide/components.html#%E9%80%9A%E8%BF%87-Prop-%E5%90%91%E5%AD%90%E7%BB%84%E4%BB%B6%E4%BC%A0%E9%80%92%E6%95%B0%E6%8D%AE)
>
>[传送门:props验证](https://cn.vuejs.org/v2/guide/components-props.html#Prop-%E7%B1%BB%E5%9E%8B)
>
>[传送门:风格指南](https://cn.vuejs.org/v2/style-guide/)

**作用:**

1. 父组件可以传递数据到子组件

**语法:**

1. 子组件(`my-link`)
   1. 和`data`平级写`props:['属性1','属性2']`
2. 父组件
   1. `<my-link 属性1="xxx"  属性2="xxxxxx"></my-link>`
3. 子组件中
   1. `this.属性1`
   2. 行内使用和data没有任何区别

```js
//不规范写法
props:['num','nums']
props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA: Number,
    // 多个可能的类型
    propB: [String, Number],
    // 必填的字符串
    propC: {
      type: String,
      required: true
    },
    // 带有默认值的数字
    propD: {
      type: Number,
      default: 100
    },
    // 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组默认值必须从一个工厂函数获取
      default: function () {
        return { message: 'hello' }
      }
    },
    // 自定义验证函数
    propF: {
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['success', 'warning', 'danger'].indexOf(value) !== -1
      }
    }
  }
```

## 单向数据流

>当数据是从父组件的**属性**中传递过来时,子组件可别直接改哦
>
>[传送门:单向数据流](https://cn.vuejs.org/v2/guide/components-props.html#%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81)

**注意:**

1. `单向`数据流指的是`父->子`

## emit

>如果要在子组件中和父组件沟通,可以通过`emit`来实现,还可以传递数据哦
>
>[传送门:监听子组件事件](https://cn.vuejs.org/v2/guide/components.html#%E7%9B%91%E5%90%AC%E5%AD%90%E7%BB%84%E4%BB%B6%E4%BA%8B%E4%BB%B6)
>
>[传送门:$emit](https://cn.vuejs.org/v2/api/#vm-emit)
>
>[传送门:使用事件抛出一个值](https://cn.vuejs.org/v2/guide/components.html#%E4%BD%BF%E7%94%A8%E4%BA%8B%E4%BB%B6%E6%8A%9B%E5%87%BA%E4%B8%80%E4%B8%AA%E5%80%BC)

**作用:**

1. 子组件向父组件发消息,甚至可以传递数据

**语法:**

1. 子组件中`this.$emit('事件名',参数`
2. 父组件中`@事件名`
   1. 和子组件中`$emit`跟的名字对应
3. 注册方法,即可执行逻辑

**子组件**

```vue
<template>
  <div class="son">
    <h4>子组件</h4>
    <p>{{ msg }}</p>
    <button @click="testEmit">emit基本使用</button>
    <button @click="testEmitPlus">emit传递参数</button>
  </div>
</template>

<script>
export default {
  props: ['msg'],
  methods: {
    testEmit () {
      this.$emit('memeda')
    },
    testEmitPlus () {
      const randomNum = Math.ceil(Math.random() * 1000)
      // 参数从第二个开始
      this.$emit('doSomething', randomNum)
    }
  }
}
</script>

```

**父组件**

```vue
<template>
  <div class="father">
    <h3>emit-父组件</h3>
    <h4>{{ fatherMsg }}</h4>
    <son @memeda="beiMemeda" @doSomething="fatherDo"></son>
  </div>
</template>

<script>
import son from './components/son'
export default {
  data () {
    return {
      // 父组件中的数据
      fatherMsg: ''
    }
  },
  components: {
    son
  },
  methods: {
    beiMemeda () {
      this.fatherMsg = '儿子给老子发了消息!'
    },
    fatherDo (num) {
      console.log('num:', num)
      this.fatherMsg = `儿子给老子发了消息:${num}`
    }
  }
}
```

# scoped限制css全局化

>如果担心样式都是全局会造成困扰,可以使用`scoped`来进行限制
>
>[传送门:scoped-css](https://vue-loader.vuejs.org/zh/guide/scoped-css.html)
>
>[传送门:scoped注意点](https://vue-loader.vuejs.org/zh/guide/scoped-css.html#%E8%BF%98%E6%9C%89%E4%B8%80%E4%BA%9B%E8%A6%81%E7%95%99%E6%84%8F)

**注意**

1. scoped得原理是
   1. 自动给组件得标签添加`data-v-xxx`的名字
   2. 选择器自动添加`[data-v-xxx]`属性选择器
2. 不建议和标签选择器结合使用，`建议`和`class`或者`id`结合使用

**语法:**

* 给`style`标签添加`scoped`即可

```vue
<template>
  
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
```

# vue-cli项目创建

>之前直接运行一个`.vue`文件属性快速原型开发,如果要开发复杂的项目,建议使用`vue-cli`来搭建项目
>
>[传送门:快速原型开发](https://cli.vuejs.org/zh/guide/prototyping.html)
>
>[传送门:vue-cli](https://cli.vuejs.org/zh/)

**作用:**

1. 帮你把开发`vue`需要用到的,可能用到的一股脑都弄好
2. 方便开发者--->写代码

**使用:**

1. 确保安装这个(咱们都搞定啦)

```bash
npm install -g @vue/cli
```

2. 确认方式:终端输入
   1. 报错,可能是没装
   2. 使用的终端是`powerShell`
      1. 默认的安全级别较高,不让运行全局模块

```bash
vue --version
```

3. 创建项目

   1. 会生成新目录,和文件结构,不要放到现有项目中

   2. 输入命令

      ```
      vue create 项目名
      ```

      1. 项目名不要用中文,有意义即可

4.运行项目

1. 切换到项目目录:`cd 项目目录`
2. 执行命令:`npm run serve`

**注意:**

1. `vscode`中的`git`提示

   1. 项目创建完毕之后,会初始化`git`仓库
   2. 创建阶段,还没初始化完毕,导致git跟踪`node_modules`里面的东西,就有提示
   3. 创建完毕之后根目录下会多一个`.gitignore`
      1. git忽略文件

2. 工作中是否需要`天天`创建项目?

   1. 项目开始的时候创建一次

3. 一直创建失败?

   1. 重新安装模块
   2. 换个网络环境
   3. 换个转接头

   `main.js`中的代码解析

   ```javascript
   // 导入 Vue构造函数
   import Vue from 'vue'
   // 导入了 App.vue 单文件组件
   import App from './App.vue'
   
   // 关闭提示信息
   Vue.config.productionTip = false
   
   // 实例化 Vue 对象
   new Vue({
     // 渲染 把App.vue这个组件 解析为 Vue实例的内部结构
     render: h => h(App)
   }).$mount('#app') // 等同于 el的作用
   
   ```

   **注意:**

   1. 运行项目命令的位置是项目根目录
      1. `package.json`同级目录
      2. `npm run serve`

# SPA

>为了提升用户体验,让网页的切换效果更佳平滑,类似于应用程序,就有了SPA,他的全称是`Single Page Application`,或者叫做`单页面应用`

**注意:**

1. **单页面应用,视觉效果有点类似`tab`切换**
2. 自始至终都在同一个页面,只是切换了显示的内容而已

### 多页应用和单页应用的对比

| **多页应用**                                                 | **单页应用**                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| 一个项目中有多个完整的的HTML文件                             | 一个项目中只有一个完整的HTML页面（index.html）               |
| 可以使用超链接、js实现页面间的跳转                           | 可以使用改进后的超链接、js实现模板页面间的切换               |
| 传统的页面跳转是同步请求：在服务器生成响应内容时，客户端是一片空白 | 模板页面间的切换属于经典的异步请求：直到下一个模板页面来到，前一个模板页面到来，前一个模板页面才从当前DOM树上删除 |
| 页面跳转时，前一个DOM树无用了，需要从浏览器中全部删除，然后等待下一个DOM树的到来 | index.html到来时，浏览器创建一个DOM树。所有的请求都是xhr，到来时只需要作为一个片段挂载在当前DOM树——浏览器从始至终只有一个DOM树 |
| 当网速比较慢时（尤其是移动端应用中时），用户体验极为不好！   | 不会出现一片惨白的情形，浏览体验好。                         |
| 页面切换时，DOM被完整的删除，不可能有过场动画！              | 页面切换的本质是DIV的轮换，可以很容易实现漂亮的过场动画。    |

# vue-router-简介及安装

>如果要使用vue来开发`spa`,一般会搭配`vue-router`来完成
>
>同时来体会`组件`的第三种用法,生成页面
>
>[传送门:安装](https://router.vuejs.org/zh/installation.html)
>
>[传送门:vue-router](https://router.vuejs.org/zh/)

**安装方法:**

1. 下包

```bash
npm install vue-router
```

2. 导包
   1. main.js中

```javascript
   import Vue from 'vue'
   import VueRouter from 'vue-router'
  
   Vue.use(VueRouter)
```

3. 用包
   1. `vue-router`整合

```javascript
   // 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
   
   // 1. 定义 (路由) 组件。
   // 可以从其他文件 import 进来
   const Foo = { template: '<div>foo</div>' }
   const Bar = { template: '<div>bar</div>' }
   
   // 2. 定义路由
   // 每个路由应该映射一个组件。 其中"component" 可以是
   // 通过 Vue.extend() 创建的组件构造器，
   // 或者，只是一个组件配置对象。
   // 我们晚点再讨论嵌套路由。
   const routes = [
     { path: '/foo', component: Foo },
     { path: '/bar', component: Bar }
   ]
   
   // 3. 创建 router 实例，然后传 `routes` 配置
   // 你还可以传别的配置参数, 不过先这么简单着吧。
   const router = new VueRouter({
     routes // (缩写) 相当于 routes: routes
   })
   
   // 4. 创建和挂载根实例。
   // 记得要通过 router 配置参数注入路由，
   // 从而让整个应用都有路由功能
   const app = new Vue({
     router
   }).$mount('#app')
   
   // 现在，应用已经启动了！
```

4. `视图`整合

```html
    <p>
       <!-- 使用 router-link 组件来导航. -->
       <!-- 通过传入 `to` 属性指定链接. -->
       <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
       <router-link to="/foo">Go to Foo</router-link>
       <router-link to="/bar">Go to Bar</router-link>
     </p>
     <!-- 路由出口 -->
     <!-- 路由匹配到的组件将渲染在这里 -->
     <router-view></router-view>
```

**注意:**

1. `router-link`的作用
   1. 超链接标签
   2. 可以根据配置的地址实现,点击跳转
   3. tabbar里面的`tab`
2. `router-view`的作用
   1. 地址匹配到之后,组件渲染的位置
   2. 会把`地址`匹配到的`组件`,直接丢过去
3. 高亮的类名咋看
   1. 审查元素即可看到

# 编程式导航

>什么是`编程式导航`呢
>
>[传送门:编程式导航](https://router.vuejs.org/zh/guide/essentials/navigation.html)

**作用:**

1. 用代码的方式切换路由`url`地址



**语法:**

```bash
this.$router.push(地址)
```





**注意:**

1. 两种导航方式
   1. 声明式导航:`router-link`
      1. 点击即可跳转,没有任何逻辑
   2. 编程式导航:用代码跳转
      1. 跳转可能还涉及到逻辑

# 路由传参-queryString

>来学习一种路由的传参方式`queryString`
>
>[传送门:路由对象](https://router.vuejs.org/zh/api/#%E8%B7%AF%E7%94%B1%E5%AF%B9%E8%B1%A1)
>
>[传送门:路由对象属性](https://router.vuejs.org/zh/api/#%E8%B7%AF%E7%94%B1%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7)

**作用:**

* 通过路由传递参数



**语法01- 携带数据:**

1. url携带:和`get`传参

```
路由地址?key=value&key2=value2
```

2. 编程式导航携带

```javascript
// 分开写，变成 /地址?key=value
this.$router.push({ path: '路由地址', query: { key: 'value' }})
// 直接写
this.$router.push({ path: '路由地址?key=value&key2=value2'})
```



**语法02 - 获取数据:**

* 通过路由对象的`query`属性获取

```javascript
this.$route.query
```



**注意:**

1. `this.$router`和`this.$route`是否一样?
   1. 不是
   2. `this.$router`,可以用来跳转
   3. `this.$route`,可以获取参数

# 嵌套路由

**概念:**

1. 在现有的路由结构中,再套一层

   1. 路由规则下添加`children`的属性

      1. `children`: [

         ​		{

         ​			path:不需要写`/`会自动拼接

         ​			component

         ​		}

          ]

```js
{
    path: '/home',
    name: 'home',
    component: home,
    children: [
      {
        path: 'index', // /home/index
        component: index
      },
      {
        path: 'news', // /home/news
        component: news
      },
      {
        path: 'vip', // /home/vip
        component: vip
      },
      {
        path: 'hots', // /home/hots
        component: hots
      }
    ]
  }
```





# vuex基本使用

>多组件数据共享的大杀器,基本是`vue`项目必备,今天咱们先来看看最基本的使用方法
>
>[传送门:vuex](https://vuex.vuejs.org/zh/)
>
>1. `state` 用来保存公用状态（数据）
>2. 修改`state`状态必须通过 `mutations`
>3. `mutations`只能执行同步代码，类似ajax，定时器之类的代码不能在mutations中执行
>4. 执行异步代码，要通过`actions`，然后将数据提交给`mutations`才可以完成
>5. `state`的状态即共享数据可以在组件中引用
>6. 组件中可以调用 `action` & `mutations` & `state`

**步骤:**

1. 下包:`npm install vuex --save`
2. `main.js`中整合

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  }
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

```

3. 在任何的页面中都可以通过`this.$store.state.xxx`获取或者修改数据啦
   1. 取值
   2. 赋值
      1. 直接修改的操作，插件中看不到

## vuex的mutations

>相比于直接通过`点语法`操纵数据,`mutations`用起来略显复杂
>
>[传送门:Vuex的mutations]([Mutation | Vuex (vuejs.org)](https://vuex.vuejs.org/zh/guide/mutations.html))

**作用:**

1. `vuex`推荐的修改数据的方式

**语法:**

1. `vuex`中定义这个方法
   1. `mutations`里面
2. 组件中调用这个方法
   1. `this.$store.commit('方法名',参数)`
   2. 类比于`this.$emit('事件名',参数)`

```js
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      // 变更状态
      state.count++
    }
  }
})
```

**调用**

```js
store.commit('increment')
```

## vuex的mapState辅助函数

>通过`mapState`辅助函数可以简化`state`的获取
>
>[传送门:mapState辅助函数](https://vuex.vuejs.org/zh/guide/state.html#mapstate-%E8%BE%85%E5%8A%A9%E5%87%BD%E6%95%B0)

**作用:**

1. 根据传入的属性,自动生成计算属性



**语法:**

```javascript
// 导入辅助函数
import { mapState } from 'vuex'
export default {
  computed: {
    myComputed(){
      // xxx
    },
    ...mapState(['state的名字'])
  }
}
```

## vuex - 初始化

> 建立一个新的脚手架项目, 在项目中应用vuex

```bash
$ vue create  demo
```

> 开始vuex的初始化建立，选择模式时，选择默认模式

初始化：

- 第一步：`npm i vuex --save`  => 安装到**`运行时依赖`**   => 项目上线之后依然使用的依赖 ,开发时依赖  => 开发调试时使用  

> 开发时依赖 就是开开发的时候，需要的依赖，运行时依赖，项目上线运行时依然需要的

- 第二步： **在main.js中** `import Vuex from 'vuex'`
- 第三步：**在main.js中**  `Vue.use(Vuex)`
- 第四步：`const store = new Vuex.Store({...配置项})`
- 第五步：在根实例配置 store 选项指向 store 实例对象

```js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(vuex)
const store = new Vuex.Store({})
new Vue({
  el: '#app',
  store
})
```



## vuex - state

> 准备工作：在项目中添加了一个 vue-router，设置 state 的页面

**作用：**

+ state是放置所有公共状态的属性，如果你有一个公共状态数据 ， 你只需要定义在 state对象中

**使用 state：**

1. 定义 state

   ```js
   // 初始化vuex对象
   const store = new Vuex.Store({
     state: {
       // 管理数据
       count: 0
     }
   })
   ```

2. 获取 state

   1. 方式一：原始形式 - 插值表达式

      ```vue
      <div> state的数据：{{ $store.state.count }}</div>
      ```

   2. 方式二：计算属性 - 将 state 属性定义在计算属性中

      ```js
      // 把state中数据，定义在组件内的计算属性中
        computed: {
          count () {
            return this.$store.state.count
          }
        }
      ```

      ```vue
       <div> state的数据：{{ count }}</div>
      ```

   3. 方式三：辅助函数 - mapState

      > 第一步：导入mapState

      ```js
      import { mapState } from 'vuex'
      ```

      >  第二步：利用**扩展运算符**将导出的状态映射给计算属性

      ```js
        computed: {
          ...mapState(['count'])
        }
      ```

      ```vue
       <div> state的数据：{{ count }}</div>
      ```




## vuex - mutations

**作用：**

+ state数据的修改只能通过mutations，并且mutations必须是同步更新，目的是形成**`数据快照`**

+ 数据快照：一次mutation的执行，**立刻**得到一种视图状态，因为是立刻，所以必须是同步

**使用 mutations：**

1. 定义 mutations

   > mutations是一个对象，对象中存放修改state的方法

   ```js
   const store  = new Vuex.Store({
     state: {
       count: 0
     },
     // 定义mutations
     mutations: {
       // 方法里参数 第一个参数是当前store的state属性
       addCount (state) {
         state.count += 1
       }
     }
   })
   ```

   

2. 获取 mutations

   1. 方式一：原始形式 - $store

      ```vue
      <template>
        <button @click="addCount">+1</button>
      </template>
      
      <script>
      export default {
          methods: {
          //   调用方法
            addCount () {
               // 调用store中的mutations 提交给muations
              // commit('muations名称')
              this.$store.commit('addCount')  // 直接调用mutations
          }
        }
      }
      </script>
      ```

   2. 方式二：辅助函数 - mapMutations

      >  第一步：导入mapMutations

      ```js
      import { mapMutations } from 'vuex'
      ```

      >  第二步：利用**扩展运算符**将导出的 mutations 映射给 methods

      ```js
      methods: {
          ...mapMutations(['addCount'])
      }
      ```

      ```vue
      <button @click="addCount">+1</button>
      ```

3. 提交载荷 payload

   > 给 mutations 中的方法添加参数

   1. 定义载荷

      ```js
      const store  = new Vuex.Store({
        state: {
          count: 0
        },
        // 定义mutations
        mutations: {
          // 方法里参数 第一个参数是当前store的state属性
          addCount (state, payload) {
            state.count += payload
          }
        }
      })
      ```

   2. 调用方法

      ```js
       this.$store.commit('addCount', 100)
      ```



## vuex - actions

**作用：**

+ state是存放数据的，mutations是同步更新数据，**`actions则负责进行异步操作，处理的结果交给 muations`**

**使用 actions：**

1. 定义actions

   ```js
    actions: {
     //  获取异步的数据 context表示当前的store的实例 可以通过 context.state 获取状态 也可以通过context.commit 来提交mutations， 也可以 context.diapatch调用其他的action
       getAsyncCount (context, payload) {
         setTimeout(function(){
           // 一秒钟之后 要给一个数 去修改state
           context.commit('addCount', payload)
         }, 1000)
       }
    } 
   ```

   

2. 使用 actions

   1. 方式一：原始调用 - $store

      ```js
       addAsyncCount () {
           this.$store.dispatch('getAsyncCount')
       }
      ```

      

   2. 方式二：辅助函数 - mapActions

      > 第一步：导入mapActions

      ```js
      import { mapActions } from 'vuex'
      ```

      >  第二步：利用**扩展运算符**将导出的 actions 映射给 methods

      ```js
      methods: {
          ...mapActions(['getAsyncCount'])
      }
      ```

      ```vue
      <button @click="getAsyncCount(111)">+异步</button>
      ```



## vuex - getters

**作用：**

+ 除了state之外，有时我们还需要从state中派生出一些状态，这些状态是依赖state的，此时会用到getters（可以使用 getters 来获取 state 中的数据）

**使用 getters：**

1. 定义 getters

   ```js
   const store = new Vuex.Store({
     state: {
       count: 0,
       girlfriend: {
           name: '刘亦菲',
           age: 18,
           gender: '女'
       }
     },
     getters: {
         gfname (state) {
             return state.girlfriend.name
         }
     }
   })
   ```

   

2. 使用 getters

   1. 方式一：原始方式 - $store

      ```vue
      <div>{{ $store.getters.filterList }}</div>
      ```

   2. 方式二：辅助函数 - mapGetters

      > 第一步：导入mapGetters

      ```js
      import { mapGetters } from 'vuex'
      ```

      >  第二步：利用**扩展运算符**将导出的 getters 映射给 computed

      ```js
      computed: {
          ...mapGetters(['filterList'])
      }
      ```

      ```vue
       <div>{{ filterList }}</div>
      ```

   + 总结：getters 相当于是 vuex 中 state 的计算属性



## vuex - Module（模块化）

**为什么会有模块化？**

> 由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。

这句话的意思是，如果把所有的状态都放在state中，当项目变得越来越大的时候，Vuex会变得越来越难以维护

由此，又有了Vuex的模块化


## vuex - Module

**使用 modules：**

1. 定义两个模块   **user** 和  **login**

   + user中管理用户的状态  

     + userInfo
     + hasRight

   + login中管理登录的状态：

     + isLogin
     + token

     ```js
     const store  = new Vuex.Store({
       modules: {
         user: {
            state: {
              userInfo: '12345',
              hasRight: ''
            }
         },
         login: {
           state: {
              isLogin: 'Vuex实例',
            token: ''
           }
         }
       })
     ```

     

2. 使用模块中的内容

   + state

     > 请注意： 此时要获取子模块的状态 需要通过 $store.**`state`**.**`模块名称`**.**`属性名`** 来获取

     ```vue
     <template>
       <div>
           <div>用户token {{ $store.state.user.token }}</div>
           <div>网站名称 {{ $store.state.setting.name }}</div>
       </div>
     </template>
     ```

   + getters

     > 请注意：这个getters是根级别的getters哦

     ```js
      getters: {
        token: state => state.user.token,
        name: state => state.setting.name
      } 
     ```

     ```js
      computed: {
            ...mapGetters(['token', 'name'])
      }
     ```

     

## vuex - Module - 命名空间

**说明：**

+ **命名空间：**  **`namespaced`**
+ 默认情况下，模块内部的 action、mutation 和 getter 是注册在**全局命名空间**的——这样使得多个模块能够对同一 mutation 或 action 作出响应。

> 这句话的意思是 刚才的user模块还是login模块，它的 action、mutation 和 getter 其实并没有区分，都可以直接通过全局的方式调用 如

```js
// 定义  
user: {
       state: {
         token: '12345'
       },
       mutations: {
        //  这里的state表示的是user的state
         updateToken (state) {
            state.token = 678910
         }
       }
    },
```

```vue
// 导入 
methods: {
	...mapMutations(['updateToken'])
}
// 调用
<button @click="updateToken">修改token</button>
```

+ 但是，如果我们想保证内部模块的高封闭性，我们可以采用namespaced来进行设置
  + 高封闭性 => 可以理解成 **一家人如果分家了，此时，你的爸妈可以随意的进出分给你的小家，你觉得自己没什么隐私了，我们可以给自己的房门加一道锁（命名空间 namespaced）,你的父母再也不能进出你的小家了**

```js
  user: {
       namespaced: true, // **********
       state: {
         token: '12345'
       },
       mutations: {
        //  这里的state表示的是user的state
         updateToken (state) {
            state.token = 678910
         }
       }
    },
```



## vuex - Module - 访问命名空间

> 使用带命名空间的模块 **`action/mutations`**

**方案1：**

+ 直接调用-带上模块的属性名路径

```js
test () {
   this.$store.commit('user/updateToken') // 直接调用方法
}
```

**方案2：**

+ 辅助函数 - 带上模块的属性名路径

```vue
  methods: {
       ...mapMutations(['user/updateToken']),
       test () {
           this['user/updateToken']()
       }
   }
  <button @click="test">修改token</button>

```

> 

# 路由元信息

>额外的给路由添加信息,可以通过`路由元信息`来实现
>
>[传送门:路由元信息](https://router.vuejs.org/zh/guide/advanced/meta.html)

**语法:**

* 设置

```javascript
  {
    path: '/login',
    name: 'login',
    component: login,
    // 元信息
    meta:{
    	key:value,
    	key2:value2
    }
  },
```

* 获取
  * 通过`$route.meta`即可点出来

```js
this.$route.meta.xxx
```

# 路由重定向

>重新定义路由的去向
>
>[重定向和别名 | Vue Router (vuejs.org)](https://router.vuejs.org/zh/guide/essentials/redirect-and-alias.html#重定向)

**语法**

```js
  {
    path: '/login',
    name: 'login',
    component: login,
    redirect: '/home'，
    // 元信息
    meta:{
    	key:value,
    	key2:value2
    }
  },
```

**重定向的目标也可以是一个命名的路由**

```js
const router = new VueRouter({
  routes: [
    { 
        path: '/a', 
        redirect: { name: 'foo'}
    }
  ]
})
```



# 导航守卫

> 通俗点来说就是路由切换时会执行的回调函数
>
> [传送门:导航守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html)

**注意:**

1. 导航守卫不只有一个,
2. 对于`beforeEach`,`next()`必须执行的函数
3. 有3`to form next`个参数
   1. `to`:去的路由信息
   2. `form`:来的路由信息
   3. `next`:是否去下一个,不执行,直接卡组

**语法:**

```javascript
const router = new VueRouter({
  routes
})

// 添加全局前置守卫
router.beforeEach((to, from, next) => {
  // to 即将到达的路由信息 this.$route获取到的是一致的
  console.log('to:', to)
  // from 离开的路由信息 this.$route获取到的是一致的
  console.log('from:', from)
  // console.log('next:', next)
  // 不执行next 卡在这个地方 路由的切换就有问题啦!
  // next()
  // 如果你要去的就是 404 直接放走
  if (to.path === '/404') {
    // 直接放走
    next()
  } else {
    // 除他之外 去404
    // 直接跳转到指定页面
    next({ path: '/404' })
  }
})
```

# 自定义指令

**作用**

1. vue 中提供的一种技术，可以给 vue 扩展属性自己的指令

2. ```js
   2.x版本的自定义指令
   定义：
     局部
      directives:{
          指令名（xxx):{
              指令的生命周期
              bind:绑定时
              bind(dom,obj，vnode){
                  dom:当前指令所在dom
                  obj:指令所对应的一些相应值（属性名，修饰符，值（value））
                  vnode:节点信息（可以拿到当前指令所在组件的实例对象）
              }，
              inserted:当前指令所在dom添加到父节点时执行
              inserted（dom,obj,vnode）{
                  
              }
              update:更新时，只要指令所在组件有更新它就会执行，但是不保证更新渲染已完成
              update（dom,obj,vnode）{
                  obj{
                      value:当前值,
                      oldValue:更新前的值
                  }               
              }
              componentUpdated:指令所在组件更新渲染完成时执行
               componentUpdated（dom,obj,vnode）{
                  obj{
                      value:当前值,
                      oldValue:更新前的值
                  }               
              }
              unbind:销毁 （解决绑定）
              unbind（dom,obj,vnode）{} 
          }
          
       
      }
     使用
     div  
       input  v-xxx:属性名.修饰符=‘值’
       
     
     
     全局
       定义：
         Vue.directive(指令名,{生命周期})
         使用  
         input  v-指令名=值
   
   3.x版本
     其它都一样，唯一的就是生命周期
     2.x
      bind:绑定时
      inserted:当前指令所在dom添加到父节点时执行    1
         
      update:更新时，只要指令所在组件有更新它就会执行，但是不保证更新渲染已完成
      componentUpdated:指令所在组件更新渲染完成时执行   2
      
      unbind:销毁 （解决绑定）    3
     3.x
       created:创建时，指令还没有绑定到相应dom前执行
       beforeMount:渲染前，指令绑定到相应dom时执行
       mounted:渲染后，指令所在dom渲染完成    1
                mounted(dom,obj){
                  dom:当前指令所在dom
                  obj:指令所对应的一些相应值（属性名，修饰符，值（value），获取组件实例对象）
              }，
       
       
       
       beforeUpdate:更新前
       updated:更新后       2
       beforeUnmount:销毁前    3
       unmount:销毁后
       
       
       diff
       
          li  张三
          li  李四
          
         li  小五
         li  张三
         li  李四
      
   
   ```

3. 

**用法**

```js
 Vue.directive('dirname', { inserted: function(dom, options) {} })
// dom：使用这个自定义指令的 dom 元素
// options：用来接收定义指令赋值的内容
```

**示例**

```js
Vue.directive('v-myfocus', {
    // 这个函数会在 dom 结构使用这个指令时触发
    inserted: function (dom) {
      // dom 使用自定义指令的 dom 元素
      // console.log(dom)
      // 任务：将 dom 自动获取焦点
      dom.focus()
    }
  })
  new Vue({
    el: '#app',
    data: {
      msg: 'xjj'
    }
  })
```

# component组件

**component**：动态组件(将来页面渲染时，这个组件，并不是一个固定的组件，它会很具传入的 is 属性来动态生成为其它的组件)



# sync修饰符

**作用**

1. 可以用来简化代码

**特点**

1. 可以向子组件中传入一个参数：xxx（xxx表示任意参数）
2. 可以从子组件中接收一个事件：update:xxx（可以接收参数，来给xxx赋值）

```vue
<son :show ="show" @update:show="bool => (show = bool)"></son>
// 简写
<son :show.sync="show"></son>
```

# watch监听器

 **作用：**

+ 可以用来监听 data 中的数据，

+ 只要 data 中被监听的数据发生改变，侦听器中的代码就会执行

  **用法：**

+ 定义：

  ```JS
      watch: {
       '被监听的数据': function () {
         // 被监听的数据改变时触发的逻辑代码
        }
      }
  ```



**immediate**

+ 需求：打开页面时，watch 马上执行

+ 作用：在打开页面中马上执行 watch

+ 用法：

  ```js
  // 无 immediate 的用法
  watch: {
  	key: function (newVal) {
  	
  	}
  }
  // 有 immediate 的用法
  watch: {
  	key: {
  		immediate: true, // 打开页面时，立即执行一次这个 watch
  		handler: function (newVal) { 
  			// 用来处理侦听器的逻辑
  		}
  	}
  }
  ```

**deep** 

+ 需求：侦听到一个对象中属性的改变

+ 作用：如果要侦听到一个对象中的所有属性的改变，可以使用 deep

+ 用法

  ```js
  watch: {
  	xxx: {
  		deep: true, // 开启深度侦听
  		handler: function (newVal) {}
  	}
  }
  ```

  监听路由发生改变
  
  ```vue
  watch:{
  	$route(to, from){
      	console.log(to, from)
    	}
  }
  
  ```
  
  

# 跨域

>跨域的产生,h5向服务发送请求时,浏览器设置的安全协议,
>
>客户端发送请求时不会产生跨域,浏览起如果报了CORS是不一样是跨域,也有可以是服务器错误,可以Postman测试是否能获取数据,如果可以就跨域问题,如果不可以就是服务器接口问题.
>
>

vue-cli的配置文件即**`vue.config.js`**,这里有我们需要的 [代理选项](https://cli.vuejs.org/zh/config/#devserver-proxy)

```js
module.exports = {
  devServer: {
   // 代理配置
    proxy: {
        // 这里的api 表示如果我们的请求地址有/api的时候,就出触发代理机制
        // localhost:8888/api/abc  => 代理给另一个服务器
        // 本地的前端  =》 本地的后端  =》 代理我们向另一个服务器发请求 （行得通）
        // 本地的前端  =》 另外一个服务器发请求 （跨域 行不通）
        '/api': {
        target: 'www.baidu.com', // 我们要代理的地址
        changeOrigin: true, // 是否跨域 需要设置此值为true 才可以让本地服务代理我们发出请求
         // 路径重写
        pathRewrite: {
            // 重新路由  localhost:8888/api/login  => www.baidu.com/api/login
            '^/api': '' // 假设我们想把 localhost:8888/api/login 变成www.baidu.com/login 就需要这么做 
        }
      },
    }
  }
}
```

**注意点：**由于 proxy 配置修改了 vue.config.js 文件，如果需要代码起作用，需要重新启动服务

**总结：**

+ proxy 解决跨域

  + 1.0 将后端服务器的请求伪装为前端服务器的请求：

    + 将请求路径： `http://localhost:3000/api/sys/login` 替换为 `http://localhost:9528/xxx/sys/login`

  + 2.0 跟前端服务器约定路径的转换

    ```js
    // vue.config.js
    devServer: {
    	proxy: {
    		'/xxx': {
    			target: 'http://localhost:3000/api',
    			pathRewrite: {
    				'^/xxx': ''
    			}
    		}
    	}
    }
    ```

    1：创建一个文件夹  如：D:/xxx
    
    2：创建一个谷歌的快捷方式
    
    3：快捷方式点右键 ===》属性===》目标，将光标移动到最后  加空格  粘贴相应代码 
    
    --disable-web-security --user-data-dir=D:\xxx

# render函数

```js
render:h=>h(App)
h:createElement:创建dom
h(名字('div'),{虚拟dom的属性class:'xtx-bread'},[子集])
<div class="xtx-bread">
 子集
</div>
```

# MD5加密

加密方式的一种,vue 中时用md5加密,官网地址[MD5](https://www.npmjs.com/package/js-md5)

`npm install js-md5 `

```js
使用
import md5 from 'js-md5'
const str = "123456789"
const ket = md5(str)
console.log(ket) // 加密签名
```



# 环境

`npm run dev(serve)` ，其实是运行了 `vue-cli service serve` ，默认模式为 development 。可以在 `.env.development` 文件下修改该模式的 `NODE_ENV` 。

`npm run build` ，其实运行了 `vue-cli service build` ，默认模式为 production 。可以在 `.env.production` 文件下修改该模式的 `NODE_ENV` 。

# 插件开发

Vue.js 的插件应该暴露一个 `install` 方法

[传送门](https://cn.vuejs.org/v2/guide/plugins.html#%E5%BC%80%E5%8F%91%E6%8F%92%E4%BB%B6)

