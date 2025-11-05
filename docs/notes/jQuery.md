# jQuery核心知识模块整理
jQuery是一款轻量级的JavaScript库，核心目标是“write less, do more”，通过简化DOM操作、事件处理、动画效果和AJAX交互，大幅提升前端开发效率。本文基于前端开发常用场景，对jQuery核心模块进行整理优化，补充实战案例与注意事项，覆盖从基础使用到进阶技巧的全流程。


## 一、jQuery基础入门（环境搭建与核心概念）
### 1.1 jQuery环境引入（两种方式）
jQuery需先引入到HTML文档中，才能使用其API，推荐两种引入方式：

#### 方式1：CDN引入（推荐，无需下载本地文件）
直接通过公共CDN加载jQuery，适用于大多数项目，支持自动选择最近节点，加载速度快。
```html
<!-- 引入jQuery 3.x 最新稳定版（推荐，兼容ES5，支持大部分浏览器） -->
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

<!-- 若需兼容IE8及以下，引入jQuery 1.x 版本（3.x不支持IE8） -->
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
```

#### 方式2：本地引入（需下载文件）
1. 从[jQuery官网](https://jquery.com/)下载压缩版（`jquery.min.js`，体积小，用于生产环境）或未压缩版（`jquery.js`，用于开发调试）。
2. 将文件放入项目目录（如`js/`文件夹），通过相对路径引入：
```html
<script src="./js/jquery.min.js"></script>
```

#### 引入注意事项
- 引入顺序：**先引入jQuery，再引入自定义JS文件**（自定义JS需依赖jQuery）。
- 避免重复引入：多次引入jQuery会覆盖之前的`$`/`jQuery`变量，可能导致冲突或功能异常。


### 1.2 jQuery核心语法与入口函数
#### 核心语法结构
jQuery的核心语法通过`$()`或`jQuery()`函数实现，格式如下：
```javascript
// 语法：选择器（获取DOM元素） + 方法（操作元素）
$(selector).method();

// 示例：选择id为"box"的元素，设置其文本内容
$("#box").text("Hello jQuery");
```
- `$`：jQuery的简写别名，与`jQuery`等价（如`jQuery("#box")`与`$("#box")`效果一致）。
- `selector`：选择器，支持CSS选择器（如`#id`、`.class`、`element`）和jQuery自定义选择器（如`:odd`、`:even`）。
- `method`：jQuery方法，用于操作DOM、绑定事件、设置样式等。

#### 入口函数（DOM加载完成后执行）
jQuery入口函数用于确保代码在**DOM树完全加载完成后执行**（避免DOM未渲染时操作元素导致报错），替代原生JS的`DOMContentLoaded`事件。

| 语法 | 说明 | 场景推荐 |
|------|------|----------|
| `$(document).ready(function() { // 代码 })` | 标准写法，明确绑定到document的ready事件 | 需兼容旧版本jQuery或强调语义时 |
| `$(function() { // 代码 })` | 简写写法，与上面等价，代码更简洁 | 日常开发首选，高效简洁 |

#### 入口函数与原生JS的区别
```javascript
// jQuery入口函数（DOM加载完成后执行，无需等待图片、样式加载）
$(function() {
  console.log("DOM已加载，可操作元素");
});

// 原生JS（需等待所有资源加载完成，包括图片、样式）
window.onload = function() {
  console.log("所有资源已加载，可操作元素");
};
```


### 1.3 jQuery对象与原生DOM对象的转换
jQuery选择器返回的是**jQuery对象**（封装了原生DOM元素的集合），而非原生DOM对象，二者方法不能混用（如jQuery对象不能调用`innerHTML`，原生DOM不能调用`text()`）。

#### 1. 原生DOM对象 → jQuery对象
通过`$(原生DOM对象)`即可转换，转换后可使用jQuery方法。
```javascript
// 1. 获取原生DOM对象
const nativeDiv = document.getElementById("box");

// 2. 转换为jQuery对象
const $jqueryDiv = $(nativeDiv);

// 3. 使用jQuery方法操作
$jqueryDiv.css("color", "red").text("已转换为jQuery对象");
```

#### 2. jQuery对象 → 原生DOM对象
jQuery对象是类数组结构，可通过**索引**或`get(index)`方法获取原生DOM对象。
```javascript
// 1. 获取jQuery对象
const $divs = $("div");

// 2. 转换为原生DOM对象（两种方式）
const nativeDiv1 = $divs[0]; // 方式1：通过索引（推荐，简洁）
const nativeDiv2 = $divs.get(1); // 方式2：通过get()方法

// 3. 使用原生DOM方法操作
nativeDiv1.innerHTML = "已转换为原生DOM对象";
nativeDiv2.style.color = "blue";
```


## 二、jQuery选择器（高效获取DOM元素）
jQuery选择器完全兼容CSS选择器，并扩展了多个实用选择器，核心目标是“精准、高效地获取DOM元素”。

### 2.1 基础选择器（CSS标准选择器）
| 选择器 | 语法 | 功能 | 示例 |
|--------|------|------|------|
| ID选择器 | `$("#id")` | 选择指定ID的单个元素 | `$("#box")` → 选择id为"box"的元素 |
| 类选择器 | `$(".class")` | 选择指定类名的所有元素 | `$(".item")` → 选择所有class为"item"的元素 |
| 元素选择器 | `$("element")` | 选择指定标签的所有元素 | `$("div")` → 选择所有div元素 |
| 通配符选择器 | `$("*")` | 选择页面所有元素 | `$("*")` → 选择所有元素（慎用，性能较低） |
| 组合选择器 | `$("selector1, selector2")` | 选择多个选择器匹配的元素 | `$("#box, .item")` → 选择id为"box"和class为"item"的元素 |

### 2.2 层级选择器（按DOM层级关系选择）
| 选择器 | 语法 | 功能 | 示例 |
|--------|------|------|------|
| 后代选择器 | `$("parent descendant")` | 选择父元素下的所有后代元素（含子、孙等） | `$("ul li")` → 选择ul下所有li元素 |
| 子选择器 | `$("parent > child")` | 选择父元素下的直接子元素（不含孙元素） | `$("ul > li")` → 选择ul的直接子li元素 |
| 相邻兄弟选择器 | `$("prev + next")` | 选择prev元素的下一个相邻兄弟元素 | `$(".active + li")` → 选择class为"active"的li的下一个li |
| 通用兄弟选择器 | `$("prev ~ siblings")` | 选择prev元素之后的所有兄弟元素 | `$(".active ~ li")` → 选择class为"active"的li之后的所有li |

### 2.3 jQuery扩展选择器（高频实用）
| 选择器 | 语法 | 功能 | 示例 |
|--------|------|------|------|
| 奇数索引选择器 | `:odd` | 选择索引为奇数的元素（索引从0开始） | `$("li:odd")` → 选择li中索引1、3、5...的元素 |
| 偶数索引选择器 | `:even` | 选择索引为偶数的元素 | `$("li:even")` → 选择li中索引0、2、4...的元素 |
| 首元素选择器 | `:first` | 选择匹配元素的第一个 | `$("li:first")` → 选择第一个li元素 |
| 尾元素选择器 | `:last` | 选择匹配元素的最后一个 | `$("li:last")` → 选择最后一个li元素 |
| 可见元素选择器 | `:visible` | 选择可见的元素（display≠none、visibility≠hidden） | `$("div:visible")` → 选择所有可见的div |
| 隐藏元素选择器 | `:hidden` | 选择隐藏的元素 | `$("div:hidden")` → 选择所有隐藏的div |
| 包含文本选择器 | `:contains(text)` | 选择包含指定文本的元素 | `$("div:contains('jQuery')")` → 选择包含"jQuery"文本的div |
| 属性选择器 | `[attr]`/`[attr=value]` | 选择含指定属性或属性值匹配的元素 | `$("input[type='text']")` → 选择type为text的input |

### 2.4 选择器实战案例（隔行变色）
```html
<ul>
  <li>列表项1</li>
  <li>列表项2</li>
  <li>列表项3</li>
  <li>列表项4</li>
  <li>列表项5</li>
</ul>

<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script>
$(function() {
  // 奇数索引li（1、3、5）设为红色
  $("li:odd").css("color", "red");
  // 偶数索引li（0、2、4）设为蓝色
  $("li:even").css("color", "blue");
  // 第一个li加粗
  $("li:first").css("font-weight", "bold");
});
</script>
```


## 三、jQuery DOM操作（核心功能）
jQuery简化了原生DOM的CRUD（创建、读取、更新、删除）操作，提供了直观的API，无需关注浏览器兼容性。

### 3.1 文本内容操作（text()、html()、val()）
用于获取或设置元素的文本、HTML内容或表单值，覆盖原生JS的`innerText`、`innerHTML`、`value`。

| 方法 | 功能 | 语法 | 示例 |
|------|------|------|------|
| `text()` | 获取/设置元素的纯文本内容（不解析HTML标签） | 获取：`$(selector).text()`<br>设置：`$(selector).text("新文本")` | `$("#box").text("Hello")` → 设置#box的文本为"Hello" |
| `html()` | 获取/设置元素的HTML内容（解析HTML标签） | 获取：`$(selector).html()`<br>设置：`$(selector).html("<b>新HTML</b>")` | `$("#box").html("<b>加粗文本</b>")` → #box显示加粗文本 |
| `val()` | 获取/设置表单元素的值（如input、select、textarea） | 获取：`$(selector).val()`<br>设置：`$(selector).val("新值")` | `$("input[type='text']").val("用户名")` → 设置输入框值为"用户名" |

#### 实战案例（表单值交互）
```html
<input type="text" id="username" placeholder="请输入用户名">
<button id="btn">获取用户名</button>
<div id="result"></div>

<script>
$(function() {
  $("#btn").click(function() {
    // 1. 获取输入框的值
    const username = $("#username").val();
    // 2. 验证值是否为空
    if (username.trim() === "") {
      $("#result").text("用户名不能为空！").css("color", "red");
    } else {
      $("#result").html(`欢迎您，<b>${username}</b>！`).css("color", "green");
    }
  });
});
</script>
```


### 3.2 属性操作（attr()、prop()、removeAttr()）
用于操作元素的属性（如`src`、`href`、`class`、`checked`等），需区分“普通属性”和“布尔属性”（如`checked`、`disabled`）。

| 方法 | 功能 | 适用场景 | 示例 |
|------|------|----------|------|
| `attr(name)` | 获取元素的普通属性值 | 非布尔属性（src、href、class等） | `$("img").attr("src")` → 获取图片的src属性 |
| `attr(name, value)` | 设置元素的普通属性值 | 给元素添加或修改普通属性 | `$("a").attr("href", "https://jquery.com")` → 设置链接地址 |
| `prop(name)` | 获取元素的布尔属性值 | 布尔属性（checked、disabled、selected等） | `$("input[type='checkbox']").prop("checked")` → 判断复选框是否选中（返回true/false） |
| `prop(name, value)` | 设置元素的布尔属性值 | 控制布尔属性的状态 | `$("input[type='checkbox']").prop("checked", true)` → 选中复选框 |
| `removeAttr(name)` | 删除元素的指定属性 | 移除不需要的属性 | `$("img").removeAttr("title")` → 删除图片的title属性 |

#### 关键区别：attr() vs prop()
- **attr()**：操作元素的“属性节点”，返回值为字符串（如复选框未选中时，`attr("checked")`返回`undefined`，选中时返回`"checked"`）。
- **prop()**：操作元素的“DOM属性”，返回值为布尔值（如复选框未选中时，`prop("checked")`返回`false`，选中时返回`true`）。
- **推荐原则**：布尔属性用`prop()`，普通属性用`attr()`。


### 3.3 样式操作（css()、addClass()、removeClass()）
jQuery提供多种方式操作元素样式，支持直接设置CSS属性或通过类名控制样式（推荐后者，符合“样式与逻辑分离”原则）。

| 方法 | 功能 | 语法 | 示例 |
|------|------|------|------|
| `css(property)` | 获取元素的CSS属性值 | `$(selector).css("属性名")` | `$("#box").css("width")` → 获取#box的宽度 |
| `css(property, value)` | 设置单个CSS属性 | `$(selector).css("属性名", "值")` | `$("#box").css("color", "red")` → 设置文字颜色为红色 |
| `css({property1: value1, property2: value2})` | 批量设置CSS属性 | 传入对象，多个属性同时设置 | `$("#box").css({width: "200px", height: "200px", backgroundColor: "blue"})` |
| `addClass(className)` | 为元素添加类名 | `$(selector).addClass("类名1 类名2")` | `$("#box").addClass("active big")` → 添加active和big类 |
| `removeClass(className)` | 为元素删除类名 | `$(selector).removeClass("类名1 类名2")` | `$("#box").removeClass("active")` → 删除active类 |
| `toggleClass(className)` | 切换元素的类名（有则删，无则加） | `$(selector).toggleClass("类名")` | `$("#box").toggleClass("active")` → 切换active类状态 |

#### 实战案例（点击切换样式）
```html
<style>
.box { width: 200px; height: 200px; border: 1px solid #000; }
.active { background-color: red; border-color: blue; }
</style>

<div class="box" id="box"></div>
<button id="toggleBtn">切换样式</button>

<script>
$(function() {
  $("#toggleBtn").click(function() {
    // 切换.box的active类（点击一次加，再点击删）
    $("#box").toggleClass("active");
    // 同时修改文本内容
    const isActive = $("#box").hasClass("active"); // 判断是否有active类
    $(this).text(isActive ? "取消样式" : "切换样式");
  });
});
</script>
```


### 3.4 DOM增删改（append()、prepend()、remove()）
用于动态创建、添加、删除DOM元素，比原生JS的`createElement()`、`appendChild()`更简洁。

| 方法 | 功能 | 语法 | 示例 |
|------|------|------|------|
| `append(content)` | 向元素内部**末尾**添加内容（子元素） | `父元素.append(子元素)` | `$("ul").append("<li>新列表项</li>")` → 向ul末尾添加li |
| `prepend(content)` | 向元素内部**开头**添加内容（子元素） | `父元素.prepend(子元素)` | `$("ul").prepend("<li>首列表项</li>")` → 向ul开头添加li |
| `after(content)` | 向元素**后面**添加兄弟元素 | `元素.after(兄弟元素)` | `$("li.active").after("<li>兄弟项</li>")` → 在.active的li后面加兄弟li |
| `before(content)` | 向元素**前面**添加兄弟元素 | `元素.before(兄弟元素)` | `$("li.active").before("<li>兄弟项</li>")` → 在.active的li前面加兄弟li |
| `remove(selector)` | 删除元素（含自身及所有子元素） | `元素.remove()`或`元素.remove("选择器")` | `$("li.active").remove()` → 删除所有class为active的li |
| `empty()` | 清空元素的所有子元素（保留自身） | `元素.empty()` | `$("ul").empty()` → 清空ul的所有li，保留ul本身 |

#### 实战案例（动态添加/删除列表项）
```html
<input type="text" id="itemInput" placeholder="输入列表项内容">
<button id="addBtn">添加项</button>
<ul id="itemList"></ul>

<script>
$(function() {
  // 1. 添加列表项
  $("#addBtn").click(function() {
    const content = $("#itemInput").val().trim();
    if (content === "") return;
    // 向ul末尾添加li，同时添加删除按钮
    const li = $(`<li>${content} <button class="delBtn">删除</button></li>`);
    $("#itemList").append(li);
    // 清空输入框
    $("#itemInput").val("");
  });

  // 2. 删除列表项（事件委托，处理动态添加的按钮）
  $("#itemList").on("click", ".delBtn", function() {
    $(this).parent("li").remove(); // 找到父元素li并删除
  });
});
</script>
```


## 四、jQuery事件处理（交互核心）
jQuery统一了浏览器事件模型，简化了事件绑定、解绑和触发，支持事件委托（处理动态元素事件）。

### 4.1 基础事件绑定（click()、mouseover()、blur()等）
jQuery将常用事件封装为方法，直接调用即可绑定事件处理函数，无需使用`addEventListener`。

| 事件方法 | 功能 | 示例 |
|----------|------|------|
| `click(handler)` | 绑定点击事件 | `$("button").click(function() { // 点击后执行 })` |
| `mouseover(handler)` | 绑定鼠标移入事件 | `$("div").mouseover(function() { $(this).css("color", "red") })` |
| `mouseout(handler)` | 绑定鼠标移出事件 | `$("div").mouseout(function() { $(this).css("color", "black") })` |
| `focus(handler)` | 绑定元素获取焦点事件（如输入框） | `$("input").focus(function() { $(this).css("border", "1px solid blue") })` |
| `blur(handler)` | 绑定元素失去焦点事件 | `$("input").blur(function() { $(this).css("border", "1px solid #ccc") })` |
| `keydown(handler)` | 绑定键盘按下事件 | `$(document).keydown(function(e) { if (e.keyCode === 13) console.log("回车被按下") })` |

#### 事件对象（event）
事件处理函数中可接收`event`对象，包含事件相关信息（如触发元素、键盘按键、鼠标位置等）。
```javascript
$("button").click(function(e) {
  console.log("触发事件的元素：", e.target); // 原生DOM元素
  console.log("当前绑定事件的元素：", this); // jQuery对象（可直接用$(this)）
  e.preventDefault(); // 阻止默认行为（如阻止链接跳转、表单提交）
  e.stopPropagation(); // 阻止事件冒泡
});
```


### 4.2 通用事件绑定（on()、off()、trigger()）
`on()`是jQuery统一的事件绑定方法，支持绑定多个事件、事件委托，功能比基础事件方法更强大；`off()`用于解绑事件；`trigger()`用于手动触发事件。

#### 1. on() 绑定事件
| 语法 | 功能 | 示例 |
|------|------|------|
| `on(eventName, handler)` | 绑定单个事件 | `$("button").on("click", function() { // 执行代码 })` |
| `on(eventName, data, handler)` | 绑定事件并传递数据 | `$("button").on("click", {name: "jQuery"}, function(e) { console.log(e.data.name) })` |
| `on({event1: handler1, event2: handler2})` | 批量绑定多个事件 | `$("div").on({mouseover: function() {}, mouseout: function() {} })` |
| `on(eventName, selector, handler)` | 事件委托（绑定到父元素，处理子元素事件） | `$("ul").on("click", "li", function() { // 处理li的点击事件 })` |

#### 2. off() 解绑事件
| 语法 | 功能 | 示例 |
|------|------|------|
| `off(eventName)` | 解绑指定事件 | `$("button").off("click")` → 解绑button的点击事件 |
| `off(eventName, handler)` | 解绑指定事件的指定处理函数 | `function handleClick() {}; $("button").off("click", handleClick)` |
| `off()` | 解绑元素的所有事件 | `$("button").off()` → 解绑button的所有事件 |

#### 3. trigger() 手动触发事件
```javascript
// 1. 手动触发button的点击事件
$("button").trigger("click");

// 2. 触发事件时传递额外参数
$("input").on("focus", function(e, msg) {
  console.log("获取焦点，提示：", msg);
});
$("input").trigger("focus", "请输入用户名"); // 输出：获取焦点，提示：请输入用户名
```

#### 事件委托实战（处理动态元素）
动态添加的元素（如前面案例中添加的列表项）无法直接绑定事件，需通过“事件委托”将事件绑定到父元素上：
```html
<ul id="parentList">
  <!-- 动态添加的li会在这里生成 -->
</ul>
<button id="addLi">添加li</button>

<script>
$(function() {
  // 1. 动态添加li
  $("#addLi").click(function() {
    $("#parentList").append("<li>动态列表项</li>");
  });

  // 2. 事件委托：将li的点击事件绑定到父元素#parentList上
  $("#parentList").on("click", "li", function() {
    $(this).css("color", "red"); // 点击动态li时，文字变红
  });
});
</script>
```


## 五、jQuery动画效果（提升交互体验）
jQuery内置了多种动画效果，支持显示/隐藏、淡入淡出、滑动、自定义动画，无需编写复杂CSS动画。

### 5.1 基础显示隐藏动画（show()、hide()、toggle()）
| 方法 | 功能 | 语法 | 示例 |
|------|------|------|------|
| `show(speed, easing, callback)` | 显示隐藏的元素（默认无动画，指定speed后有过渡效果） | `元素.show(速度, 缓动函数, 回调函数)` | `$("#box").show(1000)` → 1秒内显示#box |
| `hide(speed, easing, callback)` | 隐藏显示的元素 | `元素.hide(速度, 缓动函数, 回调函数)` | `$("#box").hide("slow")` → 慢速隐藏#box |
| `toggle(speed, easing, callback)` | 切换元素的显示/隐藏状态 | `元素.toggle(速度, 缓动函数, 回调函数)` | `$("#box").toggle(500)` → 500毫秒内切换#box状态 |

- `speed`：动画时长，可选值为`"slow"`（600ms）、`"fast"`（200ms）、毫秒数（如`1000`）。
- `easing`：缓动函数，可选`"swing"`（默认，变速）或`"linear"`（匀速）。
- `callback`：动画结束后执行的函数。


### 5.2 淡入淡出动画（fadeIn()、fadeOut()、fadeToggle()）
通过修改元素的`opacity`（透明度）实现动画，不改变元素的宽高。

| 方法 | 功能 | 示例 |
|------|------|------|
| `fadeIn(speed, callback)` | 淡入隐藏的元素 | `$("#box").fadeIn(1000)` → 1秒内淡入#box |
| `fadeOut(speed, callback)` | 淡出显示的元素 | `$("#box").fadeOut("slow")` → 慢速淡出#box |
| `fadeToggle(speed, callback)` | 切换淡入/淡出状态 | `$("#box").fadeToggle(500)` → 500毫秒切换透明度 |
| `fadeTo(speed, opacity, callback)` | 淡到指定透明度（0~1） | `$("#box").fadeTo(1000, 0.5)` → 1秒内淡到50%透明度 |


### 5.3 滑动动画（slideDown()、slideUp()、slideToggle()）
通过修改元素的`height`实现滑动效果，常用于下拉菜单、折叠面板。

| 方法 | 功能 | 示例 |
|------|------|------|
| `slideDown(speed, callback)` | 向下滑动显示元素 | `$(".menu").slideDown(500)` → 500毫秒下拉显示菜单 |
| `slideUp(speed, callback)` | 向上滑动隐藏元素 | `$(".menu").slideUp(500)` → 500毫秒上滑隐藏菜单 |
| `slideToggle(speed, callback)` | 切换滑动状态 | `$(".menu").slideToggle(300)` → 300毫秒切换菜单显示/隐藏 |

#### 实战案例（折叠面板）
```html
<style>
.panel-header { padding: 10px; background: #f5f5f5; cursor: pointer; }
.panel-content { padding: 10px; border: 1px solid #eee; display: none; }
</style>

<div class="panel">
  <div class="panel-header">面板1</div>
  <div class="panel-content">面板1的内容，点击标题可折叠/展开</div>
</div>
<div class="panel">
  <div class="panel-header">面板2</div>
  <div class="panel-content">面板2的内容，点击标题可折叠/展开</div>
</div>

<script>
$(function() {
  // 点击面板标题，切换内容的滑动状态
  $(".panel-header").click(function() {
    // 切换当前面板的内容
    $(this).next(".panel-content").slideToggle(300);
    // 关闭其他面板的内容（可选）
    $(this).parent(".panel").siblings().find(".panel-content").slideUp(300);
  });
});
</script>
```


### 5.4 自定义动画（animate()）
通过`animate()`可自定义元素的CSS属性动画（如位置、宽高、透明度等），支持多组属性和队列动画。

#### 语法
```javascript
$(selector).animate(
  properties, // 要修改的CSS属性（对象形式）
  speed,      // 动画时长（可选）
  easing,     // 缓动函数（可选）
  callback    // 动画结束回调（可选）
);
```

#### 实战案例（自定义移动动画）
```html
<style>
#box { width: 100px; height: 100px; background: red; position: relative; }
</style>

<div id="box"></div>
<button id="moveBtn">移动盒子</button>

<script>
$(function() {
  $("#moveBtn").click(function() {
    $("#box")
      // 1. 向右移动200px，同时变大
      .animate({ left: "200px", width: "200px", height: "200px" }, 1000)
      // 2. 动画队列：上一步结束后，向下移动100px，变蓝色
      .animate({ top: "100px", backgroundColor: "blue" }, 800)
      // 3. 动画队列：上一步结束后，回到原点
      .animate({ left: 0, top: 0, width: "100px", height: "100px", backgroundColor: "red" }, 1000);
  });
});
</script>
```


## 六、jQuery AJAX（异步数据交互）
jQuery封装了原生`XMLHttpRequest`，提供了简洁的AJAX API，支持GET、POST等请求方式，无需处理复杂的浏览器兼容性。

### 6.1 基础AJAX方法（$.ajax()）
`$.ajax()`是jQuery AJAX的核心方法，支持配置所有AJAX参数，灵活性最高。

#### 语法
```javascript
$.ajax({
  url: "请求地址",        // 必选，后端接口地址（如"/api/getData"）
  type: "请求方式",      // 可选，默认"GET"，可设"POST"、"PUT"等
  data: "请求数据",      // 可选，发送给后端的数据（对象或字符串）
  dataType: "响应数据类型",// 可选，预期后端返回的数据类型（"json"、"html"、"text"等）
  success: function(res) {}, // 可选，请求成功后的回调函数（res为后端返回数据）
  error: function(err) {},   // 可选，请求失败后的回调函数（err为错误信息）
  complete: function() {}   // 可选，请求完成后（无论成功/失败）执行的回调
});
```

#### 实战案例（GET请求获取数据）
```javascript
// 向后端请求用户列表数据
$.ajax({
  url: "https://api.example.com/users", // 后端接口地址
  type: "GET",
  dataType: "json", // 预期返回JSON格式数据
  success: function(res) {
    console.log("请求成功，用户数据：", res);
    // 渲染数据到页面（示例：遍历用户列表）
    let html = "";
    res.forEach(user => {
      html += `<li>${user.name} - ${user.age}岁</li>`;
    });
    $("#userList").html(html);
  },
  error: function(err) {
    console.error("请求失败：", err);
    $("#userList").text("获取用户数据失败！").css("color", "red");
  }
});
```


### 6.2 简化AJAX方法（$.get()、$.post()）
针对常用的GET和POST请求，jQuery提供了简化方法，无需配置过多参数。

#### 1. $.get()（GET请求）
```javascript
// 语法：$.get(url, data, success, dataType)
$.get(
  "https://api.example.com/users", // 请求地址
  { page: 1, limit: 10 },          // 请求参数（分页：第1页，每页10条）
  function(res) {                 // 成功回调
    console.log("GET请求成功：", res);
  },
  "json"                          // 响应数据类型
);
```

#### 2. $.post()（POST请求）
```javascript
// 语法：$.post(url, data, success, dataType)
$.post(
  "https://api.example.com/login", // 登录接口地址
  { username: "admin", password: "123456" }, // 登录参数
  function(res) {                 // 成功回调
    if (res.code === 200) {
      alert("登录成功！");
    } else {
      alert("登录失败：" + res.msg);
    }
  },
  "json"                          // 响应数据类型
);
```


### 6.3 JSONP请求（跨域数据交互）
由于浏览器的同源策略，AJAX无法直接请求不同域名的接口，jQuery的`$.ajax()`支持JSONP（JSON with Padding）方式实现跨域请求（需后端配合支持JSONP）。

#### 示例
```javascript
$.ajax({
  url: "https://api.other-domain.com/data", // 跨域接口地址
  type: "GET",
  dataType: "jsonp", // 关键：指定数据类型为jsonp
  jsonp: "callback", // 后端接收JSONP回调函数名的参数名（默认"callback"）
  jsonpCallback: "handleData", // 自定义回调函数名（可选，默认自动生成）
  success: function(res) {
    console.log("JSONP跨域请求成功：", res);
  }
});

// 自定义JSONP回调函数（需与jsonpCallback一致）
function handleData(res) {
  console.log("JSONP回调函数执行：", res);
}
```


## 七、jQuery工具方法（通用功能）
jQuery除了操作DOM和事件，还提供了一系列工具方法（以`$.`开头），用于处理数据、对象、数组等。

| 方法 | 功能 | 示例 |
|------|------|------|
| `$.each(obj, callback)` | 遍历数组或对象 | `$.each([1,2,3], function(index, value) { console.log(index, value) })` → 遍历数组 |
| `$.trim(str)` | 去除字符串两端空格 | `$.trim("  hello jquery  ")` → 返回"hello jquery" |
| `$.isArray(obj)` | 判断是否为数组 | `$.isArray([1,2,3])` → 返回true；`$.isArray({})` → 返回false |
| `$.parseJSON(str)` | 将JSON字符串解析为JS对象 | `$.parseJSON('{"name":"jQuery"}')` → 返回{name: "jQuery"} |
| `$.extend(target, obj1, obj2)` | 合并对象（将obj1、obj2的属性合并到target） | `const obj = $.extend({}, {a:1}, {b:2})` → obj为`{a:1, b:2}` |

#### 实战案例（遍历数组与对象）
```javascript
// 1. 遍历数组
const arr = ["jQuery", "Vue", "React"];
$.each(arr, function(index, value) {
  console.log(`索引${index}：${value}`); // 输出：索引0：jQuery，索引1：Vue...
});

// 2. 遍历对象
const user = { name: "张三", age: 20, gender: "男" };
$.each(user, function(key, value) {
  console.log(`${key}：${value}`); // 输出：name：张三，age：20...
});
```


## 八、jQuery注意事项与最佳实践
1. **避免过度使用jQuery**：jQuery虽便捷，但在现代前端框架（Vue、React）中使用场景减少，简单DOM操作可直接用原生JS（如`document.querySelector()`）。
2. **减少DOM查询**：jQuery选择器每次调用都会重新查询DOM，频繁查询会影响性能，建议将常用jQuery对象缓存到变量中：
   ```javascript
   // 不好的写法（多次查询DOM）
   $("#box").css("color", "red");
   $("#box").text("Hello");

   // 好的写法（缓存jQuery对象）
   const $box = $("#box");
   $box.css("color", "red").text("Hello"); // 链式调用，仅查询一次DOM
   ```
3. **链式调用优先**：jQuery方法支持链式调用（如`$().css().text().click()`），可减少代码量，提升可读性。
4. **事件委托优于直接绑定**：动态添加的元素需用事件委托（`on(event, selector, handler)`），避免重复绑定事件。
5. **版本选择**：
   - 新项目推荐使用jQuery 3.x（体积小、性能好，支持ES5）。
   - 需兼容IE8及以下，选择jQuery 1.x（3.x不支持IE8）。
6. **避免与其他库冲突**：若项目中同时使用其他库（如Prototype），可能存在`$`变量冲突，可通过`jQuery.noConflict()`释放`$`别名：
   ```javascript
   jQuery.noConflict(); // 释放$，此时只能用jQuery()，不能用$()
   jQuery("#box").text("避免冲突");
   ```


## 九、jQuery常用插件推荐
jQuery生态丰富，有大量成熟插件可扩展功能，减少重复开发：
1. **jQuery UI**：官方UI组件库，包含对话框、日期选择器、拖拽等组件（[官网](https://jqueryui.com/)）。
2. **jQuery Validate**：表单验证插件，支持自定义验证规则（[官网](https://jqueryvalidation.org/)）。
3. **Swiper**：基于jQuery的轮播图插件，支持触摸滑动、动画过渡（[官网](https://swiperjs.com/)）。
4. **DataTables**：表格插件，支持排序、分页、搜索等功能（[官网](https://datatables.net/)）。

通过以上模块的整理，可系统掌握jQuery的核心用法，结合实战案例快速应用到项目开发中，提升前端开发效率。