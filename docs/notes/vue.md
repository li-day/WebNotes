# Vue2 + Vue3 全知识点笔记

## 一、Vue 基础核心
### 1. 框架基础
- **定义**：Vue 是渐进式 JavaScript 框架，核心是“数据驱动 DOM”，无需手动操作 DOM，专注于视图层。
- **版本核心差异**：
  | 维度         | Vue2                          | Vue3                          |
  |--------------|-------------------------------|-------------------------------|
  | 核心 API     | 选项式 API（Options API）      | 选项式 API + 组合式 API（Composition API） |
  | 性能         | 基于 `Object.defineProperty` 响应式，存在部分性能瓶颈 | 基于 `Proxy` 响应式，性能提升 1.5 倍，支持深层响应式 |
  | 体积         | 完整版约 20KB                  | 按需打包，体积更小            |
  | TypeScript 支持 | 需额外配置                    | 原生支持                      |
  | 生态         | 成熟（Vuex3、vue-router3）    | 升级（Pinia、vue-router4）    |
- **学习资源**：
  - Vue2 官方文档：[https://v2.cn.vuejs.org/](https://v2.cn.vuejs.org/)
  - Vue3 官方文档：[https://cn.vuejs.org/](https://cn.vuejs.org/)
  - 包管理：npm/yarn，用于安装依赖

### 2. 开发环境与工具
#### （1）VSCode 必备插件
- Vetur：Vue2 语法高亮、智能提示、格式化
- Vue Language Features (Volar)：Vue3 专属，支持 TypeScript 和组合式 API
- Path Intellisense：文件路径自动补全
- Live Server：本地实时预览页面
- ESLint：代码规范检查
- Prettier：代码格式化

#### （2）项目搭建工具对比
| 工具    | 适用版本 | 核心命令                                                                 | 特点                                  |
|---------|----------|--------------------------------------------------------------------------|---------------------------------------|
| vue-cli | Vue2/Vue3 | 1. 全局安装：`npm i -g @vue/cli`<br>2. 创建：`vue create 项目名`<br>3. 运行：`npm run serve` | 配置全面，支持自定义（路由、Vuex），适合实战 |
| vite    | Vue3     | 1. 创建：`npm create vite@latest 项目名 -- --template vue`<br>2. 安装依赖：`npm i`<br>3. 运行：`npm run dev` | 基于 ESModule，热更新快，打包体积小    |

### 3. 项目文件结构（通用+版本差异）
#### （1）通用基础结构
```
/项目根目录
  /node_modules    # 依赖包（npm i 生成）
  /public          # 静态资源（不编译，如 favicon.ico、index.html）
  /src
    /assets        # 静态资源（编译，如图片、全局样式）
    /components    # 公共组件（Button、Card 等）
    /utils         # 工具函数（日期格式化、请求封装）
    /views         # 页面组件（Home、About 等路由页面）
    /router        # 路由配置（vue-router）
    /store         # 状态管理（Vuex/Pinia）
    App.vue        # 根组件
    main.js        # 入口文件（初始化实例）
  package.json     # 项目配置（依赖、脚本）
  README.md        # 项目说明
```

#### （2）入口文件差异（main.js）
- Vue2：
  ```js
  import Vue from 'vue'
  import App from './App.vue'
  import router from './router'
  import store from './store'

  Vue.config.productionTip = false // 关闭生产环境提示

  new Vue({
    router, // 注入路由
    store,  // 注入状态管理
    render: h => h(App) // 渲染根组件
  }).$mount('#app') // 挂载到 #app 元素
  ```
- Vue3：
  ```js
  import { createApp } from 'vue' // 引入 createApp 函数
  import App from './App.vue'
  import router from './router'
  import store from './store'

  // 链式调用创建实例并挂载
  createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
  ```

### 4. 核心语法与指令（全覆盖）
#### （1）模板渲染（3 种方式）
- **Mustache 插值**：渲染变量/简单表达式，不覆盖标签内容
  ```html
  <div>{{ name }} - {{ age > 18 ? '成年' : '未成年' }}</div>
  ```
- **v-text**：完全覆盖标签内容，优先级高于插值
  ```html
  <div v-text="message"></div> <!-- 等价于 <div>{{ message }}</div> -->
  ```
- **v-html**：渲染 HTML 内容（注意 XSS 风险）
  ```html
  <div v-html="richText"></div> <!-- richText: '<span style="color:red">红色文本</span>' -->
  ```

#### （2）事件绑定（v-on/@）
- **基础用法**：
  ```html
  <!-- 无参数 -->
  <button @click="handleClick">点击</button>
  <!-- 带参数 -->
  <button @click="handleAdd(5, $event)">加 5</button> <!-- $event 为原生事件对象 -->
  ```
- **事件修饰符（完整 10 种）**：
  | 修饰符       | 作用                                  | 示例                          |
  |--------------|---------------------------------------|-------------------------------|
  | .stop        | 阻止事件冒泡                          | @click.stop="handleClick"     |
  | .prevent     | 阻止默认行为（如表单提交、a 跳转）      | @submit.prevent="handleSubmit"|
  | .capture     | 事件捕获模式（外层先触发）            | @click.capture="handleClick"  |
  | .self        | 仅自身触发（子元素不触发）            | @click.self="handleClick"     |
  | .once        | 事件仅触发一次                        | @click.once="handleClick"     |
  | .passive     | 提升滚动性能（不阻止默认滚动）        | @scroll.passive="handleScroll"|
  | .enter       | 回车键触发                            | @keyup.enter="handleEnter"    |
  | .tab         | Tab 键触发                             | @keyup.tab="handleTab"        |
  | .delete      | 删除/退格键触发                       | @keyup.delete="handleDelete"  |
  | .ctrl/.alt/.shift | 系统键组合触发                 | @click.ctrl="handleCtrlClick" |
- **修饰符串联**：
  ```html
  <button @click.stop.prevent="handleClick">阻止冒泡+默认行为</button>
  ```

#### （3）属性绑定（v-bind/:）
- **基础用法**：
  ```html
  <img :src="imgUrl" :alt="imgAlt" :class="{ active: isActive }">
  ```
- **对象/数组语法（class/style）**：
  ```html
  <!-- class 对象语法 -->
  <div :class="{ active: isActive, disabled: isDisabled }"></div>
  <!-- class 数组语法 -->
  <div :class="[activeClass, disabledClass]"></div>
  <!-- style 对象语法 -->
  <div :style="{ color: textColor, fontSize: '16px' }"></div>
  ```

#### （4）循环渲染（v-for）
- **遍历数组**：
  ```html
  <ul>
    <li v-for="(item, index) in list" :key="index">
      {{ index + 1 }}. {{ item.name }}
    </li>
  </ul>
  ```
- **遍历对象**：
  ```html
  <div>
    <p v-for="(value, key, index) in user" :key="key">
      {{ index + 1 }}. {{ key }}: {{ value }}
    </p>
  </div>
  ```
- **key 的作用**：唯一标识 DOM 节点，避免重复渲染，提升性能（推荐用 id，不用 index）

#### （5）条件渲染（v-if/v-show）
- **v-if/v-else-if/v-else**：DOM 层面添加/删除，适合切换频率低的场景
  ```html
  <template v-if="role === 'admin'">
    <p>管理员权限</p>
  </template>
  <template v-else-if="role === 'user'">
    <p>普通用户权限</p>
  </template>
  <template v-else>
    <p>游客权限</p>
  </template>
  ```
- **v-show**：CSS 层面 display:none，适合切换频率高的场景
  ```html
  <div v-show="isShow">显示/隐藏内容</div>
  ```

#### （6）v-model 双向绑定（全版本差异）
- **Vue2**：
  - 基础用法：
    ```html
    <input v-model="username" placeholder="输入用户名">
    ```
  - 本质：`:value + @input`
    ```html
    <input :value="username" @input="username = $event.target.value">
    ```
  - 修饰符：`.lazy`（失焦更新）、`.number`（转为数字）、`.trim`（去空格）
    ```html
    <input v-model.lazy.number.trim="age" type="number">
    ```

- **Vue3**：
  - 基础用法（同 Vue2）：
    ```html
    <input v-model="username">
    ```
  - 本质：`:modelValue + @update:modelValue`
    ```html
    <input :modelValue="username" @update:modelValue="username = $event">
    ```
  - 新增多 v-model 绑定（组件通信）：
    ```html
    <UserForm v-model:name="username" v-model:age="userAge"></UserForm>
    ```
  - 修饰符用法（同 Vue2，新增 `.capitalize` 首字母大写）：
    ```html
    <input v-model.capitalize="username">
    ```

#### （7）其他指令（全覆盖）
| 指令    | 作用                                  | Vue2/Vue3 支持 | 示例                          |
|---------|---------------------------------------|---------------|-------------------------------|
| v-pre   | 不解析模板（直接显示{{}}）            | 均支持        | <div v-pre>{{ 不解析 }}</div> |
| v-cloak | 解决模板闪烁（配合 CSS）               | Vue2 支持，Vue3 移除 | [v-cloak] { display: none }   |
| v-slot  | 插槽（缩写 #）                         | 均支持        | <slot name="header"></slot>    |
| v-memo  | 记忆化渲染（避免不必要更新）          | Vue3 新增      | <div v-memo="[name]">{{ name }}</div> |


### 5. 组件化开发（全流程）
#### （1）单文件组件（.vue）结构
```vue
<template>
  <!-- 模板：HTML 结构，Vue3 支持多根节点 -->
  <div class="my-component">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
// 逻辑：数据、方法、生命周期等
export default {
  name: "MyComponent", // 组件名（调试用）
  props: { /* 接收父组件数据 */ },
  data() {
    return { msg: "组件内容" };
  },
  methods: { /* 方法 */ }
};
</script>

<style scoped>
/* 样式：scoped 仅作用于当前组件 */
.my-component {
  color: #333;
}
</style>
```
- Vue3 `<script setup>` 语法糖（简化版）：
  ```vue
  <template>
    <p>{{ msg }}</p>
  </template>

  <script setup>
  // 无需 export default，直接定义
  const msg = "Vue3 语法糖组件";
  </script>
  ```

#### （2）组件通信（6 种方式全覆盖）
##### ① 父传子（props）
- Vue2 实现：
  ```vue
  <!-- 子组件 Child.vue -->
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
        default: "默认标题"
      },
      list: {
        type: Array,
        validator: (val) => val.length > 0 // 自定义验证
      }
    }
  };
  </script>

  <!-- 父组件 Parent.vue -->
  <template>
    <Child :title="parentTitle" :list="parentList"></Child>
  </template>
  <script>
  import Child from './Child.vue';
  export default {
    components: { Child }, // 注册子组件
    data() {
      return {
        parentTitle: "父组件标题",
        parentList: [1, 2, 3]
      };
    }
  };
  </script>
  ```

- Vue3 实现（`<script setup>`）：
  ```vue
  <!-- 子组件 Child.vue -->
  <script setup>
  // 用 defineProps 定义 props（无需导入）
  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    list: Array
  });
  </script>

  <!-- 父组件 Parent.vue -->
  <template>
    <Child :title="parentTitle" :list="parentList"></Child>
  </template>
  <script setup>
  import Child from './Child.vue'; // 无需注册，直接使用
  const parentTitle = "父组件标题";
  const parentList = [1, 2, 3];
  </script>
  ```

##### ② 子传父（$emit/emit）
- Vue2 实现：
  ```vue
  <!-- 子组件 Child.vue -->
  <template>
    <button @click="sendData">向父组件传值</button>
  </template>
  <script>
  export default {
    methods: {
      sendData() {
        // 触发自定义事件，传递参数
        this.$emit('child-event', '子组件数据', 100);
      }
    }
  };
  </script>

  <!-- 父组件 Parent.vue -->
  <template>
    <Child @child-event="handleChildData"></Child>
  </template>
  <script>
  import Child from './Child.vue';
  export default {
    components: { Child },
    methods: {
      handleChildData(data1, data2) {
        console.log("接收子组件数据：", data1, data2);
      }
    }
  };
  </script>
  ```

- Vue3 实现（`<script setup>`）：
  ```vue
  <!-- 子组件 Child.vue -->
  <template>
    <button @click="sendData">向父组件传值</button>
  </template>
  <script setup>
  // 用 defineEmits 定义可触发事件
  const emit = defineEmits(['child-event']);
  const sendData = () => {
    emit('child-event', '子组件数据', 100);
  };
  </script>

  <!-- 父组件 Parent.vue -->
  <template>
    <Child @child-event="handleChildData"></Child>
  </template>
  <script setup>
  import Child from './Child.vue';
  const handleChildData = (data1, data2) => {
    console.log("接收子组件数据：", data1, data2);
  };
  </script>
  ```

##### ③ 兄弟组件通信
- Vue2：EventBus（事件总线）
  ```js
  // 1. 创建总线（utils/bus.js）
  import Vue from 'vue';
  export default new Vue();

  // 2. 发送方组件
  import bus from './utils/bus';
  export default {
    methods: {
      sendMsg() {
        bus.$emit('brother-event', '兄弟组件数据');
      }
    }
  };

  // 3. 接收方组件
  import bus from './utils/bus';
  export default {
    mounted() {
      bus.$on('brother-event', (data) => {
        console.log("接收兄弟组件数据：", data);
      });
    },
    beforeDestroy() {
      bus.$off('brother-event'); // 销毁前解绑事件
    }
  };
  ```

- Vue3：Pinia（状态管理）或 provide/inject（推荐 Pinia）
  ```js
  // 用 Pinia 实现（参考“状态管理”部分）
  ```

##### ④ 跨层级通信（provide/inject）
- Vue2 实现：
  ```vue
  <!-- 祖先组件 -->
  <script>
  export default {
    provide() {
      return {
        theme: "dark", // 提供数据
        changeTheme: this.changeTheme // 提供方法
      };
    },
    methods: {
      changeTheme(newTheme) {
        console.log("切换主题为：", newTheme);
      }
    }
  };
  </script>

  <!-- 深层子组件 -->
  <script>
  export default {
    inject: ["theme", "changeTheme"], // 注入数据/方法
    mounted() {
      console.log("接收祖先主题：", this.theme);
      this.changeTheme("light"); // 调用祖先方法
    }
  };
  </script>
  ```

- Vue3 实现（组合式 API）：
  ```vue
  <!-- 祖先组件 -->
  <script setup>
  import { provide } from "vue";

  // 提供数据
  provide("theme", "dark");
  // 提供方法
  const changeTheme = (newTheme) => {
    console.log("切换主题为：", newTheme);
  };
  provide("changeTheme", changeTheme);
  </script>

  <!-- 深层子组件 -->
  <script setup>
  import { inject } from "vue";

  // 注入数据/方法
  const theme = inject("theme");
  const changeTheme = inject("changeTheme");

  console.log("接收祖先主题：", theme);
  changeTheme("light"); // 调用祖先方法
  </script>
  ```


#### （3）插槽（v-slot）
- **默认插槽**：
  ```vue
  <!-- 子组件 Child.vue -->
  <template>
    <div class="container">
      <slot></slot> <!-- 插槽出口 -->
    </div>
  </template>

  <!-- 父组件使用 -->
  <template>
    <Child>
      <p>插入到子组件的内容</p> <!-- 插槽内容 -->
    </Child>
  </template>
  ```

- **具名插槽**：
  ```vue
  <!-- 子组件 Child.vue -->
  <template>
    <div>
      <slot name="header"></slot> <!-- 头部插槽 -->
      <slot name="content"></slot> <!-- 内容插槽 -->
    </div>
  </template>

  <!-- 父组件使用 -->
  <template>
    <Child>
      <template #header> <!-- 缩写 # 替代 v-slot: -->
        <h1>页面标题</h1>
      </template>
      <template #content>
        <p>页面内容</p>
      </template>
    </Child>
  </template>
  ```

- **作用域插槽**（子传父数据）：
  ```vue
  <!-- 子组件 Child.vue -->
  <template>
    <div>
      <!-- 插槽传递数据 -->
      <slot :user="user" :age="18"></slot>
    </div>
  </template>
  <script setup>
  const user = { name: "张三" };
  </script>

  <!-- 父组件使用 -->
  <template>
    <Child>
      <!-- 接收子组件数据 -->
      <template #default="slotProps">
        <p>姓名：{{ slotProps.user.name }}，年龄：{{ slotProps.age }}</p>
      </template>
    </Child>
  </template>
  ```


### 6. 计算属性与监听器
#### （1）计算属性（computed）
- **Vue2 选项式 API**：
  ```js
  export default {
    data() {
      return { a: 1, b: 2 };
    },
    computed: {
      // 只读计算属性
      sum() {
        return this.a + this.b;
      },
      // 可写计算属性
      fullName: {
        get() {
          return this.firstName + " " + this.lastName;
        },
        set(newVal) {
          const [first, last] = newVal.split(" ");
          this.firstName = first;
          this.lastName = last;
        }
      }
    }
  };
  ```

- **Vue3 组合式 API**：
  ```vue
  <script setup>
  import { ref, computed } from "vue";

  const a = ref(1);
  const b = ref(2);
  // 只读计算属性
  const sum = computed(() => a.value + b.value);

  // 可写计算属性
  const firstName = ref("张");
  const lastName = ref("三");
  const fullName = computed({
    get() {
      return firstName.value + " " + lastName.value;
    },
    set(newVal) {
      const [first, last] = newVal.split(" ");
      firstName.value = first;
      lastName.value = last;
    }
  });
  </script>
  ```

#### （2）监听器（watch）
- **Vue2 选项式 API**：
  ```js
  export default {
    data() {
      return {
        count: 0,
        user: { name: "张三", age: 18 }
      };
    },
    watch: {
      // 监听基本类型
      count(newVal, oldVal) {
        console.log("count 变化：", newVal, oldVal);
      },
      // 监听对象属性（深度监听）
      "user.age": {
        handler(newVal) {
          console.log("年龄变化：", newVal);
        },
        immediate: true // 初始加载时执行一次
      },
      // 深度监听整个对象（性能消耗大，谨慎使用）
      user: {
        handler(newVal) {
          console.log("user 变化：", newVal);
        },
        deep: true
      }
    }
  };
  ```

- **Vue3 组合式 API**：
  ```vue
  <script setup>
  import { ref, reactive, watch } from "vue";

  const count = ref(0);
  const user = reactive({ name: "张三", age: 18 });

  // 监听 ref
  watch(count, (newVal, oldVal) => {
    console.log("count 变化：", newVal, oldVal);
  });

  // 监听 reactive 属性（需用函数返回）
  watch(
    () => user.age,
    (newVal) => {
      console.log("年龄变化：", newVal);
    },
    { immediate: true } // 初始执行
  );

  // 监听多个源
  watch([count, () => user.age], ([newCount, newAge]) => {
    console.log("count 或 age 变化：", newCount, newAge);
  });
  </script>
  ```

- **watchEffect（Vue3 新增）**：自动追踪依赖，无需指定监听源
  ```vue
  <script setup>
  import { ref, watchEffect } from "vue";

  const count = ref(0);
  // 自动监听 count 的变化
  watchEffect(() => {
    console.log("count 的值：", count.value);
  });
  </script>
  ```


### 7. 生命周期钩子（全版本）
#### （1）Vue2 生命周期（选项式 API）
| 阶段       | 钩子函数          | 触发时机                                  | 常用场景                          |
|------------|-------------------|-------------------------------------------|-----------------------------------|
| 初始化     | beforeCreate      | 实例创建前，数据/方法未初始化             | -                                 |
| 初始化     | created           | 实例创建完成，数据/方法已初始化，DOM 未挂载 | 发送初始数据请求                  |
| 挂载       | beforeMount       | 挂载前，模板已编译未渲染                  | -                                 |
| 挂载       | mounted           | 挂载完成，DOM 已生成                       | 操作 DOM、初始化第三方插件          |
| 更新       | beforeUpdate      | 数据更新前，DOM 未更新                     | 获取更新前 DOM 状态                |
| 更新       | updated           | 数据更新完成，DOM 已更新                   | 基于更新后的 DOM 执行操作          |
| 销毁       | beforeDestroy     | 实例销毁前，仍可访问实例                  | 清理定时器、事件监听              |
| 销毁       | destroyed         | 实例销毁完成，所有资源已释放              | -                                 |

#### （2）Vue3 生命周期（组合式 API）
| Vue2 选项式 API | Vue3 组合式 API     | 说明                          |
|---------------|-------------------|-------------------------------|
| beforeCreate  | -                 | setup 函数替代                 |
| created       | -                 | setup 函数替代                 |
| beforeMount   | onBeforeMount     | 组件挂载前                    |
| mounted       | onMounted         | 组件挂载后                    |
| beforeUpdate  | onBeforeUpdate    | 数据更新前                    |
| updated       | onUpdated         | 数据更新后                    |
| beforeDestroy | onBeforeUnmount   | 组件销毁前                    |
| destroyed     | onUnmounted       | 组件销毁后                    |
| activated     | onActivated       | 缓存组件激活时（keep-alive）  |
| deactivated   | onDeactivated     | 缓存组件失活时（keep-alive）  |
| errorCaptured | onErrorCaptured   | 捕获子组件错误                |

- **Vue3 使用示例**：
  ```vue
  <script setup>
  import { onMounted, onUnmounted } from "vue";

  onMounted(() => {
    console.log("组件挂载完成");
    // 初始化定时器
    const timer = setInterval(() => console.log("计时"), 1000);
    
    onUnmounted(() => {
      console.log("组件销毁，清理定时器");
      clearInterval(timer); // 清理资源
    });
  });
  </script>
  ```


## 二、Vue2 核心进阶（无遗漏）
### 1. 状态管理（Vuex3）
#### （1）核心概念
- **state**：全局状态（类似组件的 data）
- **mutations**：同步修改 state 的方法（唯一途径）
- **actions**：异步操作（可调用 mutations）
- **getters**：状态计算属性（类似 computed）
- **modules**：拆分模块（解决状态臃肿）

#### （2）完整示例
```js
// src/store/index.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 定义模块
const cartModule = {
  namespaced: true, // 开启命名空间
  state: {
    items: []
  },
  mutations: {
    addItem(state, payload) {
      state.items.push(payload);
    }
  },
  actions: {
    addItemAsync({ commit }, payload) {
      // 模拟异步请求
      setTimeout(() => {
        commit("addItem", payload);
      }, 1000);
    }
  },
  getters: {
    itemCount(state) {
      return state.items.length;
    }
  }
};

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => commit("increment"), 1000);
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    }
  },
  modules: {
    cart: cartModule // 注册模块
  }
});
```

#### （3）组件中使用
```vue
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";

export default {
  computed: {
    // 映射根状态
    ...mapState(["count"]),
    // 映射根 getters
    ...mapGetters(["doubleCount"]),
    // 映射模块状态（命名空间）
    ...mapState("cart", ["items"]),
    // 映射模块 getters
    ...mapGetters("cart", ["itemCount"])
  },
  methods: {
    // 映射根 mutations
    ...mapMutations(["increment"]),
    // 映射根 actions
    ...mapActions(["incrementAsync"]),
    // 映射模块 actions
    ...mapActions("cart", ["addItemAsync"])
  },
  mounted() {
    this.increment(); // 调用根 mutation
    this.incrementAsync(); // 调用根 action
    this.addItemAsync({ id: 1, name: "商品" }); // 调用模块 action
  }
};
</script>
```


### 2. 路由（vue-router3）
#### （1）路由配置
```js
// src/router/index.js
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // 路由懒加载（按需加载）
    component: () => import("../views/About.vue"),
    // 嵌套路由
    children: [
      {
        path: "info", // 子路由路径（不加 /）
        component: () => import("../views/AboutInfo.vue")
      }
    ]
  },
  {
    path: "/user/:id", // 动态路由参数
    name: "User",
    component: () => import("../views/User.vue")
  },
  {
    path: "*", // 通配符（404 页面）
    redirect: "/" // 重定向到首页
  }
];

const router = new VueRouter({
  mode: "history", // 路由模式（history/hash）
  base: process.env.BASE_URL,
  routes
});

// 全局路由守卫（beforeEach）
router.beforeEach((to, from, next) => {
  // 示例：登录验证
  if (to.path === "/admin" && !isLogin) {
    next("/login"); // 未登录跳转到登录页
  } else {
    next(); // 允许跳转
  }
});

export default router;
```

#### （2）组件中使用路由
```vue
<template>
  <div>
    <!-- 声明式导航 -->
    <router-link to="/">首页</router-link>
    <router-link :to="{ name: 'User', params: { id: 1 } }">用户 1</router-link>
    
    <!-- 编程式导航 -->
    <button @click="goAbout">去关于页</button>
    
    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    goAbout() {
      this.$router.push("/about"); // 跳转到 /about
      // 带参数跳转
      this.$router.push({ name: "User", params: { id: 2 } });
    }
  },
  mounted() {
    // 获取路由参数
    console.log("用户 ID：", this.$route.params.id);
    // 获取查询参数（?name=xxx）
    console.log("查询参数：", this.$route.query.name);
  }
};
</script>
```


## 三、Vue3 核心新特性（无遗漏）
### 1. 组合式 API 核心（Composition API）
#### （1）响应式 API（ref/reactive/toRefs）
- **ref**：处理基本类型响应式
  ```js
  import { ref } from "vue";
  const count = ref(0); // 初始值
  console.log(count.value); // 访问：0
  count.value++; // 修改：1
  ```

- **reactive**：处理对象/数组响应式
  ```js
  import { reactive } from "vue";
  const user = reactive({ name: "张三", age: 18 });
  user.age = 19; // 直接修改属性
  ```

- **toRefs**：将 reactive 对象转为 ref 对象（解构时保持响应式）
  ```js
  import { reactive, toRefs } from "vue";
  const user = reactive({ name: "张三", age: 18 });
  const { name, age } = toRefs(user); // 解构后仍响应式
  age.value = 19; // 需用 .value 修改
  ```

#### （2）生命周期与依赖注入
- 见前文“生命周期钩子”和“跨层级通信（provide/inject）”

#### （3）自定义组合函数（逻辑复用）
```js
// hooks/useCounter.js（自定义组合函数）
import { ref, computed } from "vue";

export function useCounter(initialValue = 0) {
  const count = ref(initialValue);
  const doubleCount = computed(() => count.value * 2);
  const increment = () => count.value++;
  const decrement = () => count.value--;

  return { count, doubleCount, increment, decrement };
}

// 组件中使用
<script setup>
import { useCounter } from "./hooks/useCounter";
const { count, increment } = useCounter(10); // 复用逻辑
</script>
```


### 2. 其他新特性
#### （1）Teleport（传送门）
```vue
<template>
  <button @click="show = true">打开弹窗</button>
  <!-- 将内容传送到 body 下 -->
  <teleport to="body">
    <div class="modal" v-if="show">
      <p>弹窗内容（在 body 下渲染）</p>
      <button @click="show = false">关闭</button>
    </div>
  </teleport>
</template>

<script setup>
import { ref } from "vue";
const show = ref(false);
</script>
```

#### （2）Suspense（异步加载）
```vue
<template>
  <Suspense>
    <!-- 异步组件 -->
    <template #default>
      <AsyncComponent></AsyncComponent>
    </template>
    <!-- 加载状态 -->
    <template #fallback>
      <p>加载中...</p>
    </template>
  </Suspense>
</template>

<script setup>
// 定义异步组件
const AsyncComponent = defineAsyncComponent(() => 
  import("./AsyncComponent.vue")
);
</script>
```

#### （3）Pinia（状态管理，替代 Vuex）
```js
// 1. 安装：npm install pinia
// 2. src/store/index.js
import { createPinia } from "pinia";
export const store = createPinia();

// 3. src/store/counter.js（定义 store）
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({ count: 0 }), // 状态
  getters: {
    doubleCount: (state) => state.count * 2 // 计算属性
  },
  actions: {
    increment() { this.count++; }, // 同步方法
    async incrementAsync() { // 异步方法
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.count++;
    }
  }
});

// 4. 组件中使用
<script setup>
import { useCounterStore } from "../store/counter";
const counter = useCounterStore();

console.log(counter.count); // 访问状态
counter.increment(); // 调用方法
</script>
```


## 四、通用进阶知识（无遗漏）
### 1. 单页应用（SPA）与多页应用（MPA）对比
| 特性         | SPA（单页应用）                  | MPA（多页应用）                  |
|--------------|----------------------------------|----------------------------------|
| 页面数量     | 1 个 HTML 页面                      | 多个 HTML 页面                     |
| 跳转方式     | 动态切换内容（无刷新）           | 页面整体刷新                     |
| 首屏加载     | 较慢（需加载所有 JS/CSS）         | 较快（仅加载当前页资源）         |
| 路由管理     | 前端路由（vue-router）           | 后端路由                         |
| 用户体验     | 流畅（无刷新）                   | 可能有空白期                     |
| SEO          | 较差（需 SSR/SSG 优化）            | 较好                             |
| 适用场景     | 后台管理系统、社交应用           | 官网、电商首页等对 SEO 要求高的场景 |

### 2. SEO 优化方案
- **服务端渲染（SSR）**：Nuxt.js（Vue 生态），服务器返回带数据的完整 HTML
- **静态站点生成（SSG）**：VuePress、VitePress，预渲染为静态 HTML 文件
- **动态渲染**：通过第三方服务（如 Prerender.io）为爬虫返回渲染后的页面
- **基础优化**：语义化标签（`<h1>`-`<h6>`、`<article>`）、合理的 title/meta 标签

### 3. 模块化开发（ES6 Module）
- **默认导出/导入**：
  ```js
  // utils/format.js
  export default function formatTime(time) { /* 格式化时间 */ }

  // 组件中导入
  import formatTime from "../utils/format.js";
  ```

- **命名导出/导入**：
  ```js
  // utils/math.js
  export const add = (a, b) => a + b;
  export const subtract = (a, b) => a - b;

  // 组件中导入
  import { add, subtract } from "../utils/math.js";
  ```

### 4. 模拟数据（mock.js）
```js
// 1. 安装：npm install mockjs --save-dev
// 2. src/mock/index.js
import Mock from "mockjs";

// 拦截 /api/users 请求
Mock.mock("/api/users", "get", () => {
  return Mock.mock({
    "code": 200,
    "data|5-10": [
      {
        "id|+1": 1, // 自增 ID
        "name": "@cname", // 随机中文姓名
        "age|18-60": 1, // 随机年龄
        "email": "@email" // 随机邮箱
      }
    ]
  });
});

// 3. main.js 中导入
import "./mock";
```


## 五、开发实践与工具（无遗漏）
### 1. 常用 UI 库
- Vue2：Element UI、Vuetify、Ant Design Vue（1.x）
- Vue3：Element Plus、Vuetify3、Ant Design Vue（2.x+）

### 2. 性能优化
- **代码层面**：
  - 路由懒加载（减少首屏 JS 体积）
  - 组件缓存（keep-alive）
  - 避免 v-for 与 v-if 同用
  - 使用 v-memo 减少不必要渲染（Vue3）
- **资源层面**：
  - 图片压缩与懒加载（vue-lazyload）
  - 合理使用 CDN 加速静态资源
  - 开启 Gzip 压缩

### 3. 调试工具
- Vue Devtools：浏览器插件，查看组件结构、状态、路由等
- Vue3 Devtools：支持组合式 API 调试
- VSCode 调试配置：通过 launch.json 配置断点调试

