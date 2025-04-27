

# vue3介绍

> 目标：了解vue3现状，以及它的优点，展望它的未来

Vue3现状：

-  [vue-next](https://github.com/vuejs/vue-next/) 2020年09月18日，正式发布vue3.0版本。但是由于刚发布周边生态不支持，大多数开发者处于观望。
-  现在主流组件库都已经发布了支持vue3.0的版本，其他生态也在不断地完善中，这是趋势。
   - [element-plus](https://element-plus.org/#/zh-CN)   基于 Vue 3.0 的桌面端组件库 
   - [vant](https://vant-contrib.gitee.io/vant/v3/#/zh-CN)  vant3.0版本，有赞前端团队开源移动端组件库 
   - [ant-design-vue](https://2x.antdv.com/components/overview/)   Ant Design Vue 3.0版本，社区根据蚂蚁 ant design 开发



Vue3优点：

- 最火框架，它是国内最火的前端框架之一，[官方文档](https://v3.vuejs.org/)  [中文文档](https://v3.cn.vuejs.org/)

- 性能提升，运行速度事vue2.x的1.5倍左右

- 体积更小，按需编译体积比vue2.x要更小

- 类型推断，更好的支持Ts（typescript）这个也是趋势

  - 游戏类公司
    - egret   ts
  - 后端主导项目开发
    - java: ts
  - 后端转型做前端
    - 首选ts

- 高级给予，暴露了更底层的API和提供更先进的内置组件

- **★组合API (composition api)**  ，能够更好的组织逻辑，封装逻辑，复用逻辑

  - ```js
    export default {
        data(){
            return {
                num:123,
                ...
            }
        },
        ...num
        method:{
            setNum(){
                this.num++
            }
        }
        
    }
    ```

  - ```js
    export default {
        // num修改
        const num=...
        function setNum(){
            ...
        }
        onMounted...
        computed(...)
        // xxx处理
        const 
        function
        watch
        computed
        onMounted...
        
    }
    ```

  - 

  

Vue3展望：

- 这是趋势，越来越多的企业将来肯定会升级到Vue3.0
- 大型项目，由于对Ts的友好越来越多大型项目可以用Vue3.0



**总结：** 为什么要学 vue3 ?

- 适应市场学习流行的技术提高提升自己竞争力，给自己加薪。



# vite基本使用与项目创建

> 目标：了解vite是什么，使用vite创建vue项目，用来学习vue3知识

vite是什么：[官方文档](https://cn.vitejs.dev/)

- 它是一个更加轻量（热更新速度快，打包构建速度快）的vue项目脚手架工具。
- 相对于vue-cli它默认安装的插件非常少，随着开发过程依赖增多，需要自己额外配置。
- **所以：** 在单纯学习vue3语法会使用它，后面做项目的时候我们还是使用vue-cli



vite基本使用：

- 创建项目 `npm init vite-app 项目名称`  或者 `yarn create vite-app 项目名称`
- 安装依赖 `npm i` 或者 `yarn `
- 启动项目 `npm run dev`  或者  `yarn dev`



**总结：** vite是什么？

- 使用vite创建项目学习vue3语法，使用vue-cli创建项目正式开发。



# 创建vue应用

> 目标：掌握如何创建vue3应用实例

基本步骤：

- 在main.js中导入createApp函数
- 定义App.vue组件，导入main.js
- 使用createApp函数基于App.vue组件创建应用实例
- 挂载至index.html的#app容器



落地代码：

`App.vue`

```vue
<template>
  <div class="container">
    我是根组件
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

```

`main.js`

```js
// 创建一个vue应用
// 1. 导入createApp函数
// 2. 编写一个根组件App.vue，导入进来
// 3. 基于根组件创建应用实例
// 4. 挂载到index.html的#app容器

import {createApp} from 'vue'
import App from './App.vue'
const app = createApp(App)
app.mount('#app')
```





**总结：**  如何创建vue应用实例？

- 通过createApp创建应用实例--->扩展功能将来都是在app上进行。



# 选项API和组合API

> 目标：理解什么是选项API写法，什么是组合API写法。

什么是选项API写法：`Options ApI`

- 咱们在vue2.x项目中使用的就是 `选项API` 写法
  - 代码风格：data选项写数据，methods选项写函数...，一个功能逻辑的代码分散。
- 优点：易于学习和使用，写代码的位置已经约定好
- 缺点：代码组织性差，相似的逻辑代码不便于复用，逻辑复杂代码多了不好阅读。
- 补充：虽然提供mixins用来封装逻辑，但是出现数据函数覆盖的概率很大，不好维护。

```vue
<template>
  <div class="container">
    <div>鼠标位置：</div>
    <div>X轴：{{x}}</div>
    <div>Y轴：{{y}}</div>
    <hr>
    <div>{{count}} <button @click="add()">自增</button></div>  
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      x: 0,
      y: 0,
      count: 0
    }
  },
  mounted() {
    document.addEventListener('mousemove', this.move)
  },
  methods: {
    move(e) {
      this.x = e.pageX
      this.y = e.pageY
    },
    add () {
        this.count++
    }    
  },
  destroyed() {
    document.removeEventListener('mousemove', this.move)
  }
}
</script>
```



什么是组合API写法：`Compositon API`

- 咱们在vue3.0项目中将会使用 `组合API` 写法
  - 代码风格：一个功能逻辑的代码组织在一起（包含数据，函数...）
- 优点：功能逻辑复杂繁多情况下，各个功能逻辑代码组织再一起，便于阅读和维护
- 缺点：需要有良好的代码组织能力和拆分逻辑能力，PS：大家没问题。
- 补充：为了能让大家较好的过渡到vue3.0的版本来，`也支持vue2.x选项API写法`

```vue
<template>
  <div class="container">
    <div>鼠标位置：</div>
    <div>X轴：{{x}}</div>
    <div>Y轴：{{y}}</div>
    <hr>
    <div>{{count}} <button @click="add()">自增</button></div>  
  </div>
</template>
<script>
import { onMounted, onUnmounted, reactive, ref, toRefs } from 'vue'
export default {
  name: 'App',
  setup () {
    // 鼠标移动逻辑
    const mouse = reactive({
      x: 0,
      y: 0
    })
    const move = e => {
      mouse.x = e.pageX
      mouse.y = e.pageY
    }
    onMounted(()=>{
      document.addEventListener('mousemove',move)
    })
    onUnmounted(()=>{
      document.removeEventListener('mousemove',move)
    })

    // 累加逻辑
    const count = ref(0)
    const add = () => {
      count.value ++ 
    }

    // 返回数据
    return {
      ...toRefs(mouse),
      count,
      add
    }
  }
}
</script>
```



**总结：** 

- 知道选项API和组合API的写法区别，建议大家使用组合API在vue3.0项目中。





# 组合API-setup函数

> 目标：掌握setup函数的基本使用

使用细节：

- `setup` 是一个新的组件选项，作为组件中使用组合API的起点。
- 从组件生命周期来看，它的执行在组件实例创建之前`vue2.x的beforeCreate`执行。
- 这就意味着在`setup`函数中 `this` 还不是组件实例，`this` 此时是 `undefined`
- 在模版中需要使用的数据和函数，需要在 `setup` 返回。



演示代码：

```vue
<template>
  <div>
    {{ num }}
    <h3>{{ xxx }}</h3>
    <button @click="btnClick">修改xxx</button>
  </div>
</template>
<script>
/*
setup基本使用,它是入口函数
setup(){
    return {...html内使用的东西}
}
setup它是在beforeCreate之前执行
setup不再支持this（当前组件实例对象）写法
*/
export default {
  data () {
    return {
      xxx: 'abc',
      page: {
        page: 1,
        pageSize: 10
      }
    }
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  methods: {
    btnClick () {
      this.xxx = Math.random() * 999
    }
  },
  beforeCreate () {
    // axios(...).then(res=>{this})
    setTimeout(() => {
      console.log('beforeCreate', this.xxx)
    }, 0)
  },
  setup (props,obj) {
      console.log('obj',obj)
      /*
      	obj中参数解析
      	attrs：相当于以前的$attrs（非props属性与当前组件使用时标签上绑定的方法（$listeners））
      	expose:能让该建组实例对象只访问某些return属性
      	emit:等同于vue2的$emit
      	slots:插槽内的内容(虚拟dom)
      */
    console.log('setup')
    const num = 10
    return { num }
  }
}
</script>
<style></style>

```



**总结：** `setup` 组件初始化之前执行，它返回的数据和函数可在模版使用。



# 组合API-生命周期

> 目标：掌握使用组合API写法的生命周期钩子函数



回顾vue2.x生命周期钩子函数：

- beforeCreate  
  - 创建前：实例化还没有完成，还不能访问data与methods...
- created
  - 创建后：组件实例化已完成，但是还不能访问vue渲染后的dom
- beforeMount 
  - 渲染前：渲染还没有完成还不能访问vue渲染后的dom,读取了需要渲染的html，把相应的依赖也处理了
- mounted
  - 渲染后：渲染完成，可以访问vue渲染后的dom
  - 进入页面dom处理
- beforeUpdate
  - 更新前：vue页面中使用的相关数据修改了，但是页面还没有完成相关渲染
- updated
  - 更新后：vue页面中使用的相关数据修改了，且页面已完成相应渲染
- beforeDestroy
  - 销毁前：准备销毁，还没有销毁，什么都可以访问，
    - 常用于干什么？
      - 善后工作：setInterval   scroll的监听  addEventlistener 
- destroyed
  - 销毁后，还可以访问data与methods,它不能访问vue渲染后的dom
    - 善后工作：setInterval   scroll的监听  addEventlistener 

A---B:路由跳转

- ~~~
  beforeCreate （A） 
  created(A)
  beforeMount (A)
  mounted(A)
  beforeCreate （B） 
  created(B)
  beforeMount (B)
  beforeDestroy(A)
  destroyed(A)
  mounted(B)
  beforeDestroy(B)
  destroyed(B)
  ~~~

- 



认识vue3.0生命周期钩子函数

- `setup` 创建实例前
- `onBeforeMount`  挂载DOM前
- `onMounted` 挂载DOM后
- `onBeforeUpdate` 更新组件前
- `onUpdated` 更新组件后
- `onBeforeUnmount` 卸载销毁前
- `onUnmounted`  卸载销毁后



演示代码：

```vue
<template>
  <div class="container">
    container
  </div>
</template>
<script>
import { onBeforeMount, onMounted } from 'vue'
export default {
  setup () {
    onBeforeMount(()=>{
      console.log('DOM渲染前',document.querySelector('.container'))
    })
    onMounted(()=>{
      console.log('DOM渲染后1',document.querySelector('.container'))
    })
    onMounted(()=>{
      console.log('DOM渲染后2',document.querySelector('.container'))
    })
  },
}
</script>
```



**总结：** 组合API的生命周期钩子有7个，可以多次使用同一个钩子，执行顺序和书写顺序相同。





# 组合API-reactive函数

> 目标：掌握使用reactive函数定义响应式数据

定义响应式数据：

- reactive是一个函数，它可以定义一个复杂数据类型，成为响应式数据。



演示代码：

```vue
<template>
  <div>{{ state.num }}</div>
  <button @click="setNum">修改num</button>
</template>
<script>
/*
vue2:objectDefineProperty
vue3:proxy
对象
reactive:将数据使用对象处理,将数据进行双向绑定处理
1：导入  import {reactive} from 'vue'
2: 使用：
   const state=reactive({
       num:10
   })
*/
import { reactive } from 'vue'
export default {
  setup () {
    // let num = 10
    const state = reactive({
      num: 10
    })
    function setNum () {
      state.num = Math.random() * 9999
      console.log(state.num)
    }
    return { state, setNum }
  }
}
</script>
<style></style>


```



**总结：** 通常是用来定义响应式**对象数据**





#  组合API-toRef函数

> 目标：掌握使用toRef函数转换响应式对象中**某个**属性为单独响应式数据，并且值是关联的。

定义响应式数据：

- toRef是函数，转换**响应式对象**中**某个**属性为单独响应式数据，并且**值是关联的**。



演示代码：

```vue
<template>
  <div>{{ num }}</div>
  <button @click="setNum">修改num</button>
</template>
<script>
/*
toRef:将响应式数据中某个key的值单独提取出来，还具有响应式特性
用法：
  1：import {toRef} from 'vue'
  2:使用：
   const 名字= toRef(响应式数据,'响应式数据的key')
   名字：{
       value:响应式数据[key]
   }
   html中不用写响应式数据的value
   js中使用一定要写value


*/
import { reactive, toRef } from 'vue'
export default {
  setup () {
    // let num = 10
    const state = reactive({
      num: 10
    })
    // let num = state.num
    // let num = 10
    const num = toRef(state, 'num')

    function setNum () {
      num.value = Math.random() * 9999
      console.log(num.value)
    }
    return { num, setNum }
  }
}
</script>
<style></style>


```





使用场景：有一个响应式对象数据，但是模版中只需要使用其中一项数据。





#  组合API-toRefs函数

> 目标：掌握使用toRefs函数定义转换响应式中**所有**属性为响应式数据，通常用于解构|展开reactive定义对象。



定义响应式数据：

- toRefs是函数，转换**响应式对象**中所有属性为单独响应式数据，对象成为普通对象，并且**值是关联的**



演示代码：

```vue
<template>
  <div>{{ a }}</div>
  <div>{{ b }}</div>
  <div>{{ c }}</div>
  <button @click="btnClick">修改a</button>
</template>
<script>
/*
toRefs:将响应式数据中所有的key都转换成响应式
1：导入  import {toRefs} from 'vue'
2:使用
  const 名字 = toRefs(响应式数据)
  名字：{
      [key1]:{
          value:响应式数据[key1]
      },
      [key2]:{
          value:响应式数据[key2]
      },
  }
*/

import { reactive, toRef, toRefs } from 'vue'
export default {
  setup () {
    const state = reactive({
      a: 10,
      b: 20,
      c: 30
    })
    // const a = toRef(state, 'a')
    // const b = toRef(state, 'b')
    // const c = toRef(state, 'c')
    // const stateObj = toRefs(state)
    // {a:{value:a的值}，b:{value:b的值}，c:{value:c的值}}
    // console.log(stateObj)
    function btnClick () {
      state.a = Math.random() * 999
    }
    return { ...toRefs(state), btnClick }
  }
}
</script>
<style></style>

```



使用场景：剥离响应式对象（解构|展开），想使用响应式对象中的多个或者所有属性做为响应式数据。





# 组合API-ref函数

> 目标：掌握使用ref函数定义响应式数据，一般用于简单类型数据

定义响应式数据：

- ref函数，常用于简单数据类型定义为响应式数据
  - 再修改值，获取值的时候，需要.value
  - 在模板中使用ref申明的响应式数据，可以省略.value



演示代码：

```vue
<template>
  <div ref="target">{{ num }}</div>
  <button @click="btnClick">修改num</button>
  <button @click="btnClick2">获取dom</button>
</template>
<script>
/*
reactive定义的是一个对象，没有加value转换
ref定义的数据都转换成对象，都加了一个value,value对应的就是响应式数据的值
ref也可以定义响应式数据
1:导入  import {ref} from 'vue'
2:定义  
    const num=ref(10)
    num={value:10}

获取 dom
vue2:1:标签上定义ref属性  ref="值"
     2：取dom:  this.$refs.ref值
vue3:1:标签上定义ref属性  ref="值"
     2: const 值=ref(null)  return {值}
     3：值.value就是相应的dom
*/

import { ref } from 'vue'
export default {
  setup () {
    const num = ref(null)
    console.log(num)
    function btnClick () {
      num.value = Math.random() * 999
    }
    // 获取dom
    const target = ref(null)
    const btnClick2 = () => {
      console.log(target.value)
    }
    return { num, btnClick, target, btnClick2 }
  }
}
</script>
<style></style>

```



**使用场景：**

- **当你明确知道需要的是一个响应式数据  *对象*  那么就使用 reactive 即可**
- **其他情况使用ref**



# 知识运用案例

> 目标：利用所学知识完成组合API实例

基本步骤：

- 记录鼠标坐标
  - 定义一个响应式数据对象，包含x和y属性。
  - 在组件渲染完毕后，监听document的鼠标移动事件
  - 指定move函数为事件对应方法，在函数中修改坐标
  - 在setup返回数据，模版中使用
- 累加1功能
  - 定义一个简单数据类型的响应式数据
  - 定义一个修改数字的方法
  - 在setup返回数据和函数，模板中使用



落的代码：

```vue
<template>
  <div class="container">
    <div>坐标</div>
    <div>x: {{x}}</div>
    <div>y: {{y}}</div>
    <hr>
    <div>{{count}} <button @click="add">累加1</button></div>
  </div>
</template>
<script>
import { onMounted, onUnmounted, reactive , ref, toRefs} from 'vue'
const useMouse = () => {
    // 1. 记录鼠标坐标
    // 1.1 申明一个响应式数据，他是一个对象，包含x y
    const mouse = reactive({
      x: 0,
      y: 0
    })
    // 1.3 修改响应式数据
    const move = (e) => {
      mouse.x = e.pageX
      mouse.y = e.pageY
    }
    // 1.2 等dom渲染完毕。去监听事件
    onMounted(()=>{
      document.addEventListener('mousemove', move)
    })
    // 1.4 组件消耗，删除事件
    onUnmounted(()=>{
      document.removeEventListener('mousemove', move)
    })

    return mouse
}
export default {
  name: 'App',
  setup () {

    const mouse = useMouse()

    // 2. 数字累加
    const count = ref(0) 
    const add = () => {
      count.value ++
    }



    return { ...toRefs(mouse), count, add }
  }
}
</script>
<style scoped lang="less"></style>

```



**总结：** 体会组合API的写法，尝试组织可读性高的代码。



# 组合API-computed函数

> 目标：掌握使用computed函数定义计算属性

定义计算属性：

- computed函数，是用来定义计算属性的，计算属性不能修改。
- 特点：它的结果会缓存起来



基本使用：

```vue
<template>
  <div class="container">
    <div>今年：{{age}}岁</div>
    <div>后年：{{newAge}}岁</div>
  </div>
</template>
<script>
import { computed, ref } from 'vue'
export default {
  name: 'App',
  setup () {
    // 1. 计算属性：当你需要依赖现有的响应式数据，根据一定逻辑得到一个新的数据。
    const age = ref(16)
    // 得到后年的年龄
    const newAge = computed(()=>{
      // 该函数的返回值就是计算属性的值
      return age.value + 2
    })

    return {age, newAge}
  }
}
</script>
```

高级用法：

````vue
<template>
  <div class="container">
    <div>今年：{{age}}岁</div>
    <div>后年：{{newAge}}岁</div>
    <!-- 使用v-model绑定计算属性 -->
    <input type="text" v-model="newAge">
  </div>
</template>
<script>
import { computed, ref } from 'vue'
export default {
  name: 'App',
  setup () {
    // 1. 计算属性：当你需要依赖现有的响应式数据，根据一定逻辑得到一个新的数据。
    const age = ref(16)
    // 得到后年的年龄
    // const newAge = computed(()=>{
    //   // 该函数的返回值就是计算属性的值
    //   return age.value + 2
    // })

    // 计算属性高级用法，传人对象
    const newAge = computed({
      // get函数，获取计算属性的值
      get(){
        return age.value + 2
      },
      // set函数，当你给计算属性设置值的时候触发
      set (value) {
        age.value = value - 2
      }
    })


    return {age, newAge}
  }
}
</script>
````

目的：让计算属性支持双向数据绑定。



总结：计算属性两种用法

- 给computed传入函数，返回值就是计算属性的值
- 给computed传入对象，get获取计算属性的值，set监听计算属性改变。



# 组合API-watch函数

> 目标：掌握使用watch函数定义侦听器

定义计算属性：

- watch函数，是用来定义侦听器的



监听ref定义的响应式数据

监听多个响应式数据数据

监听reactive定义的响应式数据

监听reactive定义的响应式数据，某一个属性

深度监听

默认执行

```vue
<template>
  <div>
    <h3 ref="target">{{ state.num }}</h3>
    <h3>{{ state.obj }}</h3>
    <button @click="btnClick">修改obj</button>
    <button @click="btnClick2">修改num</button>
    <h3>{{ xxx }}</h3>
    <button @click="btnClick3">同时侦听多个值的变化</button>
  </div>
</template>
<script>
/*
watch:侦听器（某个值（响应式数据）的change事件）
用法：
  1：导入  import {watch} from 'vue'
  2:使用
     setup(){
         watch(需要侦听的值,(newVal,oldVal)=>{},{配制项deep:true,immediate:true})
         原始值：Number,String,Boolean,null,undefined
            ()=>{ return 原始值}===()=>原始值
        引用值：Object,Array,Function
          引用值可以直接写
     }
     需要侦听的值如果是一个引用值，侦听时如果直接写的该值，它只能侦听堆的变化 ，加了deep也一样
     需要侦听的值如果是一个引用值，侦听时如果是一个function再return 引用值,deep为false时，它能侦听栈的变化
                                                                      deep为true时，什么变化都能侦听到
    如果侦听的值是reactive直接返回的值，它内部所有变化 都能侦听到，不需要加deep
    watch配制项：{
       deep:深度侦听
       immediate:是否第一次侦听时就触发回调
       flush:pre(默认)，渲染前调用
              post:渲染后调用
              sync:修改一次调用一次，都是渲染前调用
    }
   引用值：watch(引用值,()=>{},{}) 只用于侦听堆的变化 
   如果需要侦听栈与堆的变化 
           watch(()=>需要侦听的值,()=>{},{deep:true})

    同时侦听多个值
   返回值= watch([需要侦听的值1,需要侦听的值2],(newVal)=>{
        newVal:[需要侦听的值1,需要侦听的值2]
    })
    返回值是一个function,调用该function可以关闭侦听


*/
import { reactive, watch, ref } from 'vue'
export default {
  setup () {
    const state = reactive({
      num: 10,
      obj: {
        a: 0
      }
    })
    function btnClick () {
      //   state.num++
      state.obj = {
        a: Math.random() * 999
      }
      //   state.obj.a++
    }
    watch(
      () => state.obj,
      () => {
        console.log('obj修改了')
      },
      {
        immediate: true // 第一次侦听时就触发
        // deep: true // 深度侦听
      }
    )
    //  第三个属性flush
    const target = ref(null)
    function btnClick2 () {
      state.num++
      state.num++
    }
    watch(
      () => state.num,
      newVal => {
        console.log('num修改了', target.value.innerHTML, newVal)
      },
      {
        flush: 'sync'
      }
    )

    // 同时侦听多个值变化  xxx与num
    const xxx = ref(0)

    function btnClick3 () {
      xxx.value++
      temp()
      //   console.log(temp)
    }
    const temp = watch([() => xxx.value, () => state.num], newVal => {
      console.log(newVal)
    })

    return { state, btnClick, target, btnClick2, btnClick3, xxx }
  }
}
</script>
<style></style>

```



**总结：** 掌握watch的各种用法。



# 组合API-ref属性

> 目标：掌握使用ref属性绑定DOM或组件

获取DOM或者组件实例可以使用ref属性，写法和vue2.0需要区分开

获取单个DOM或者组件

```vue
<template>
  <div class="container">
    <!-- vue2.0 获取单个元素 -->
    <!-- 1. 通过ref属性绑定该元素 -->
    <!-- 2. 通过this.$refs.box获取元素 -->
    <!-- <div ref="box">我是box</div> -->
    <!-- vue2.0 获取v-for遍历的多个元素 -->
    <!-- 1. 通过ref属性绑定被遍历元素 -->
    <!-- 2. 通过this.$refs.li 获取所有遍历元素  -->
    <!-- <ul>
      <li v-for="i in 4" :key="i" ref="li">{{i}}</li>
    </ul> -->

    <!-- 单个元素 -->
    <div ref="dom">我是box</div>
    <!-- 被遍历的元素 -->
    <ul>
      <li v-for="i in 4" :key="i" :ref="setDom">第{{i}}LI</li>
    </ul>
  </div>
</template>
<script>
import { onMounted, ref } from 'vue'
export default {
  name: 'App',
  setup () {
    // 1. 获取单个元素
    // 1.1 先定义一个空的响应式数据ref定义的
    // 1.2 setup中返回该数据，你想获取那个dom元素，在该元素上使用ref属性绑定该数据即可。
    const dom = ref(null)
    onMounted(()=>{
       console.log(dom.value)
    })
  }
}
</script>
<style scoped lang="less"></style>

```

获取v-for遍历的DOM或者组件

```js
    // 2. 获取v-for遍历的元素
    // 2.1 定义一个空数组，接收所有的LI
    // 2.2 定义一个函数，往空数组push DOM
    const domList = []
    const setDom = (el) => {
      domList.push(el)
    }
    onMounted(()=>{
      console.log(domList)
    })
    return {dom, setDom}
```



**总结：**  

- 单个元素：先申明ref响应式数据，返回给模版使用，通过ref绑定数据
- 遍历的元素：先定义一个空数组，定一个函数获取元素，返回给模版使用，通过ref绑定这个函数



# 组合API-父子通讯

> 目标：掌握使用props选项和emits选项完成父子组件通讯

父传子：

```vue
<template>
  <div>
    <Son :sonNum="num" @setNum="fatherSetNum"></Son>
  </div>
</template>
<script>
/*
父传子：
   1：子组件标签定义属性  属性名=值
   2：子组件内   props:['属性名']
2.x:父传子如果传的是原始值不可修改，如果传的是引用值，只要不修改它的引用地址，它的值随便修改
  栈不可修改，堆随便修改
3.x子组件内都不可修改（单向数据流） 
*/

import Son from './components/Son.vue'
import { ref } from 'vue'
export default {
  components: {
    Son
  },
  setup () {
    const num = ref({ a: 0 })
    function fatherSetNum (val) {
      num.value.a = val
    }
    return { num, fatherSetNum }
  }
}
</script>
<style></style>


```

```vue
<template>
  <div class="son">
    <h3>我是子组件</h3>
    <h4>{{ sonNum }}</h4>
    <button @click="btnClick">修改数据</button>
  </div>
</template>
<script>
/*
子传父
   1：子组件标签绑定一个事件  @子组件方法名=“父组件方法"
   2:子组件内： 
   setup(props,{emit}){
   emit===this.$emit
   emit('子组件方法名',需要修改后的值)
  }   
*/
export default {
  name: 'Son',
  props: ['sonNum'],
  setup (props, { emit }) {
    function btnClick () {
      // props.sonNum = Math.random() * 999
      // console.log(props.sonNum)
      emit('setNum', Math.random() * 999)
    }
    return { btnClick }
  }
}
</script>
<style>
.son {
  width: 500px;
  height: 500px;
  border: 5px solid red;
}
</style>

```



扩展：

- 在vue2.x的时候 `.sync`  除去v-model实现双向数据绑定的另一种方式

```vue
<!-- <Son :money='money' @update:money="fn"  /> -->
<Son :money.sync='money'  />
```

- 在vue3.0的时候，使用 `v-model:money="money"`  即可

```vue
    <!-- <Son :money="money" @update:money="updateMoney" /> -->    
	<Son v-model:money="money" />
```



**总结：**

- 父传子：在setup种使用props数据  `setup(props){ // props就是父组件数据  }`
- 子传父：触发自定义事件的时候emit来自 `setup(props,{emit}){ // emit 就是触发事件函数 }`
- 在vue3.0中 `v-model` 和 `.sync`  已经合并成  `v-model` 指令



# 组合API-依赖注入

> 目标：掌握使用provide函数和inject函数完成后代组件数据通讯

使用场景：有一个父组件，里头有子组件，有孙组件，有很多后代组件，共享父组件数据。

**provide/inject 默认的数据是 没有双向绑定的可以利用 toRef结构出reactive中的单个 或者用ref**



演示代码：

````vue
<template>
  <div class="container">
    <h1>父组件 {{money}} <button @click="money=1000">发钱</button></h1>
    <hr>
    <Son />
  </div>
</template>
<script>
import { provide, ref } from 'vue'
import Son from './Son.vue'
export default {
  name: 'App',
  components: {
    Son
  },
  setup () {
    const money = ref(100)
    const changeMoney = (saleMoney) => {
      console.log('changeMoney',saleMoney)
      money.value = money.value - saleMoney
    }
    // 将数据提供给后代组件 provide
    provide('money', money)
    // 将函数提供给后代组件 provide
    provide('changeMoney', changeMoney)

    return { money }
  }
}
</script>
<style scoped lang="less"></style>
````

```vue
<template>
  <div class="container">
    <h2>子组件 {{money}}</h2>
    <hr>
    <GrandSon />
  </div>
</template>
<script>
import { inject } from 'vue'
import GrandSon from './GrandSon.vue'
export default {
  name: 'Son',
  components: {
    GrandSon
  },
  setup () {
    // 接收祖先组件提供的数据
    const money = inject('money')
    return { money }
  }
}
</script>
<style scoped lang="less"></style>
```

```vue
<template>
  <div class="container">
    <h3>孙组件 {{money}} <button @click="fn">消费20</button></h3>
  </div>
</template>
<script>
import { inject } from 'vue'
export default {
  name: 'GrandSon',
  setup () {
    const money = inject('money')
    // 孙组件，消费20，通知父组件App.vue组件，进行修改
    // 不能自己修改数据，遵循单选数据流原则，大白话：数据谁定义谁修改
    const changeMoney = inject('changeMoney')
    const fn = () => {
      changeMoney(20)
    }
    return {money, fn}
  }
}
</script>
<style scoped lang="less"></style>

```



**总结：**  

- provide函数提供数据和函数给后代组件使用
- inject函数给当前组件注入provide提供的数据和函数



# 补充-v-model语法糖

> 目标：掌握vue3.0的v-model语法糖原理

在vue2.0中v-mode语法糖简写的代码 `<Son :value="msg"  @input="msg=$event" />`

在vue3.0中v-model语法糖有所调整：`<Son :modelValue="msg"  @update:modelValue="msg=$event" />`

当`v-model:modelValue` 可以省略`modelValue`

演示代码：

```vue
<template>
  <div class="container">
    <!-- 如果你想获取原生事件事件对象 -->
    <!-- 如果绑定事函数 fn fn(e){ // e 就是事件对象 } -->
    <!-- 如果绑定的是js表达式  此时提供一个默认的变量 $event -->
    <h1 @click="$event.target.style.color='red'">父组件 {{count}}</h1>
    <hr>
    <!-- 如果你想获取自定义事件  -->
    <!-- 如果绑定事函数 fn fn(data){ // data 触发自定义事件的传参 } -->
    <!-- 如果绑定的是js表达式  此时 $event代表触发自定义事件的传参 -->
    <!-- <Son :modelValue="count" @update:modelValue="count=$event" /> -->
    <Son v-model="count" />
  </div>
</template>
<script>
import { ref } from 'vue'
import Son from './Son.vue'
export default {
  name: 'App',
  components: {
    Son
  },
  setup () {
    const count = ref(10)
    return { count }
  }
}
</script>
```

```vue
<template>
  <div class="container">
    <h2>子组件 {{modelValue}} <button @click="fn">改变数据</button></h2>
  </div>
</template>
<script>
export default {
  name: 'Son',
  props: {
    modelValue: {
      type: Number,
      default: 0
    }
  },
  setup (props, {emit}) {
    const fn = () => {
      // 改变数据
      emit('update:modelValue', 100)
    }
    return { fn }
  }
}
</script>
```



**总结：** vue3.0封装组件支持v-model的时候，父传子`:modelValue` 子传父 `@update:modelValue`

**补充：** vue2.0的  `xxx.sync` 语法糖解析  父传子 `:xxx`  子传父  `@update:xxx`  在vue3.0 使用 `v-model:xxx` 代替。



# 补充-mixins语法

> 目标：掌握mixins语法的基本使用，vue2.x封装逻辑的方式，vue3.0建议使用组合API

官方话术：

-  混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。 



理解全局混入：所有组件混入了这些逻辑代码

```js
// 全局混入 全局mixin
// vue2.0 写法  Vue.mixin({})
app.mixin({
  methods: {
    say () {
      console.log(this.$el,'在mounted中调用say函数')
    }
  },
  mounted () {
    this.say()
  }
})
```

```vue
<template>
  <div class="container1">
    <h1> 作者：周杰伦  <a href="javascript:;">关注</a> </h1>
    <hr>
    <Son />
  </div>
</template>
<script>
import Son from './Son.vue'
export default {
  name: 'App',
  components: {
    Son
  }
}
</script>
```

```vue
<template>
  <div class="container2">
    <h2> 作者：周杰伦  <button>关注</button> </h2>
  </div>
</template>
<script>
export default {
  name: 'Son'
}
</script>
<style scoped lang="less"></style>
```



理解局部混入：通过mixins选项进行混入

```js
// 配置对象
export const followMixin =  {
  data () {
    return {
      loading: false
    }
  },
  methods: {
    followFn () {
      this.loading = true
      // 模拟请求
      setTimeout(()=>{
        // 省略请求代码
        this.loading = false
      },2000)
    }
  }
}
```

```vue
<template>
  <div class="container1">
    <h1> 作者：周杰伦  <a href="javascript:;" @click="followFn">{{loading?'请求中...':'关注'}}</a> </h1>
    <hr>
    <Son />
  </div>
</template>
<script>
import Son from './Son.vue'
import {followMixin} from './mixins'
export default {
  name: 'App',
  components: {
    Son
  },
  mixins: [followMixin]
}
</script>
```

```js
<template>
  <div class="container2">
    <h2> 作者：周杰伦  <button @click="followFn">{{loading?'loading...':'关注'}}</button> </h2>
  </div>
</template>
<script>
import {followMixin} from './mixins'
export default {
  name: 'Son',
  mixins: [followMixin]
}
</script>
<style scoped lang="less"></style>
```



**总结：** 在vue2.0中一些可复用的逻辑可以使用mixins来封装，当是需要考虑逻辑代码冲突问题。vue3.0的组合API很好的解决了这个问题，就不在推荐使用mixins了。



# 路由介绍

路由创建

- 安装  npm i vue-router@next

- 创建src/router/index.js

  - ~~~js
    import { createRouter, createWebHashHistory } from 'vue-router'
    const router= createRouter({
        history:createWebHashHistory(),
        routes:[]
    })
    export default router
    ~~~

- 在main.js中挂载

  - ~~~js
    import router from '@/router'
    createApp(App).use(router).mount("#app")
    ~~~

- 路由出口 router-view标签



## 路由基本使用

~~~js
vue3.x用法
  1：基本传值
      传： 
          import {useRouter} from 'vue-router'
          setup(){
            const router=useRouter()
            跳转方法中处理跳转  
            router.push('/xxx?id=123')
          }
          
      收
          import {useRoute} from 'vue-router'
          setup(){
            const route=useRoute()
            const id=route.query.id
          }

  2:动态路由匹配
      1：配制路由
         {
           path:'/home/:num',
           props:true,
           componet:...
         }
      2:传：
          import {useRouter} from 'vue-router'
          setup(){
            const router=useRouter()
            跳转方法中处理跳转  
            router.push('/xxx/123')
          }
       3:收：
         props:['num']

 3:name传参
     1：配制路由
         {
           path:'/home',
           name:'home',
           componet:...
         }
      2:传：
      query
         import {useRouter} from 'vue-router'
          setup(){
            const router=useRouter()
            跳转方法中处理跳转  
            router.push({
              name:'home',
              query:{
                test:666
              }
            })
          }



      params
       import {useRouter} from 'vue-router'
          setup(){
            const router=useRouter()
            跳转方法中处理跳转  
            router.push({
              name:'home',
              params:{
                paramsnum:777
              }
            })
          } 


        
       3:收：query传法，
           import {useRoute} from 'vue-router'
          setup(){
            const route=useRoute()
            const test=route.query.test
          }
   

      params用法：
         import {useRoute} from 'vue-router'
          setup(){
            const route=useRoute()
            const paramsnum=route.params.paramsnum
          }

~~~

# 在父组件调用子组件

**父组件**

```vue
<template>
<!-- 
    全局表单验证
    form表单组件内的一个validate
    this.$refs.ref值.validate()
    调用子组件内方法：
    1：获取子组件的实例对象
       在子组件标签上定义一个ref='target'
       setup(){
           const target=ref(null)
           // ...
           return {target}
       }
    2：通过实例对象调用方法
       target.value.方法名()
 -->
  <div>
      <button @click="btnClick">点击触发方法</button>
      <Son ref="target"></Son>
  </div>
</template>

<script>
import { defineAsyncComponent ,ref} from "vue";
export default {
    components:{
        Son:defineAsyncComponent(()=>import('./components/son.vue'))
    },
    setup(){
        const target = ref(null)
        function btnClick(){
            console.log(target);
            target.value.test(123)
        }
        return { target,btnClick}
    }
}
</script>

<style>

</style>
```

**子组件**

```vue
<template>
  <div class="s">
      <h3>son</h3>
  </div>
</template>

<script>
export default {
setup(){
    function test(str){
        console.log(str);
    }
    return {test}
 }
}
</script>

<style>
.s{
    width: 300px;
    height: 300px;
    border: 1px solid red;
}
</style>
```





# 在vue原型上挂载

**使用**

+ 需要现在main.js文件中定义一个原型属性

  + ```js
    import { createApp } from 'vue'
    import App from './App.vue'
    import './index.css'
    
    const app = createApp(App)
    
    // 在原型上加载属性需要config.globalProperties
    app.config.globalProperties.$myStr='华子拉屎'
    
    app.mount('#app')
    
    ```

  + 在原型上挂载需要使用`.config.globalProperties.$属性名=值`

+ 然后再组件中是用

  + ```vue
    <template>
      <!-- 
      获取当前组件的实例对象
         1:导入  import {getCurrentInstance} from 'vue'
         2:  setup(){
          const {proxy}=getCurrentInstance()
          // proxy就是当前组件的实例对象
         }
    
        在vue原型上挂载一些东西
           挂载：  
             const app=createApp(App)
             app.config.globalProperties.$xxx=值
           使用：
            import {getCurrentInstance} from 'vue'
        setup(){
          const {proxy}=getCurrentInstance()
          // proxy就是当前组件的实例对象
          proxy.$xxx===值
         }
    
     -->
      <div>
          <h3>在原型挂载属性</h3>
          <div>{{myStr}}</div>
          <button @click="getclick">点击</button>
      </div>
    </template>
    
    <script>
    import { getCurrentInstance, ref } from 'vue'
    export default {
        setup(){
            const com = getCurrentInstance()
            const myStr = ref('华子')
          function getclick(){
              console.log(com);
              myStr.value = com.proxy.$myStr
    
          }
           return {getclick,myStr} 
        }
    }
    </script>
    
    <style>
    
    </style>
    ```

# 可以用特殊变量 `$event` 把它传入方法：



```vue
<div @click="router.push({name: 'a',query:{type:$envent.row.type}})"></div>
<button @click="warn('Form cannot be submitted yet.', $event)">
  Submit
</button>
```

# teleport组件

可以指定将在`<teleport>`内容移动到目标元素

```vue
<teleport to="body">
	<video src="./my-movie.mp4">
</teleport>
```



























