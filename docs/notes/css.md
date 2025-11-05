# CSS核心知识点整理
## 一、基础语法与引入方式
### 1. 语法结构
```css
/* 选择器：要样式化的元素 */
选择器 {
  /* 属性：样式名称；值：样式具体效果 */
  属性1: 值1;
  属性2: 值2;
}
```

### 2. 引入方式
| 引入方式 | 语法 | 特点 |
|----------|------|------|
| 外部样式表 | `<link rel="stylesheet" href="css文件路径">` | 分离HTML与CSS，可复用，维护方便 |
| 内部样式表 | `<style>/* CSS代码 */</style>`（写在`<head>`中） | 单文件生效，无需额外请求 |
| 行内样式 | `<div style="color: red;">内容</div>` | 优先级最高，仅作用于单个元素，耦合度高 |

## 二、选择器
### 1. 基础选择器
| 选择器 | 语法 | 作用 | 示例 |
|--------|------|------|------|
| 元素选择器 | 标签名 | 选中所有该标签元素 | `div { color: red; }`（选中所有div） |
| 类选择器 | `.类名` | 选中所有含该类名的元素 | `.box { width: 100px; }` |
| ID选择器 | `#ID名` | 选中唯一含该ID的元素（ID不可重复） | `#header { height: 50px; }` |
| 通配符选择器 | `*` | 选中页面所有元素 | `* { margin: 0; padding: 0; }`（清除默认边距） |

### 2. 伪类选择器
#### 链接伪类（LVHA顺序，需严格遵循）
| 伪类 | 作用 | 示例 |
|------|------|------|
| `a:link` | 未访问过的链接 | `a:link { color: #333; }` |
| `a:visited` | 已访问过的链接 | `a:visited { color: #666; }` |
| `a:hover` | 鼠标悬停时的链接 | `a:hover { color: red; }`（可作用于所有元素） |
| `a:active` | 鼠标按下未弹起的链接 | `a:active { color: orange; }` |

#### 表单伪类
| 伪类 | 作用 | 示例 |
|------|------|------|
| `:focus` | 获得焦点的表单元素（如输入框） | `input:focus { border: 2px solid blue; }` |
| `:checked` | 被选中的单选/复选框 | `input:checked + span { color: red; }` |

#### 结构伪类
| 伪类 | 作用 | 示例 |
|------|------|------|
| `:first-child` | 选中父元素的第一个子元素 | `ul li:first-child { margin-left: 0; }` |
| `:last-child` | 选中父元素的最后一个子元素 | `ul li:last-child { margin-right: 0; }` |
| `:nth-child(n)` | 选中父元素的第n个子元素（n可为数字/`even`偶数/`odd`奇数） | `ul li:nth-child(2) { color: red; }` |
| `:not(选择器)` | 排除指定选择器的元素 | `ul li:not(:last-child) { margin-right: 10px; }` |

### 3. 伪元素选择器
| 伪元素 | 作用 | 示例 |
|--------|------|------|
| `::before` | 在元素内容**之前**插入内容（默认行内元素） | `.box::before { content: ""; display: block; width: 20px; }` |
| `::after` | 在元素内容**之后**插入内容（默认行内元素） | `.box::after { content: "后缀"; color: #999; }` |
| 注意 | `content`属性为必选（空值需写`content: ""`） | - |

## 三、盒子模型
### 1. 两种盒子模型
| 模型类型 | 语法 | 宽高计算方式 | 说明 |
|----------|------|--------------|------|
| 标准盒模型 | `box-sizing: content-box` | 宽高 = content（内容区） | 默认模型，border和padding会使盒子整体变大 |
| 怪异盒模型（CSS3） | `box-sizing: border-box` | 宽高 = content + padding + border | border和padding包含在宽高中，盒子整体大小不变 |

### 2. 盒子核心属性
#### 边框（`border`）
- 复合写法：`border: 宽度 样式 颜色;`，示例：`border: 1px solid #000;`
- 单独设置某边：`border-top`/`border-right`/`border-bottom`/`border-left`
- 边框样式取值：`solid`（实线）、`dashed`（虚线）、`dotted`（点线）、`none`（无边框）

#### 内边距（`padding`，内容与边框的距离）
- 复合写法：
  - `padding: 10px;`（四边均为10px）
  - `padding: 10px 20px;`（上下10px，左右20px）
  - `padding: 10px 20px 30px;`（上10px，左右20px，下30px）
  - `padding: 10px 20px 30px 40px;`（上→右→下→左，顺时针）
- 单独设置某边：`padding-top`/`padding-right`/`padding-bottom`/`padding-left`

#### 外边距（`margin`，盒子与盒子的距离）
- 写法与`padding`一致，示例：`margin: 0 auto;`（块元素水平居中）
- 特殊现象：
  - margin塌陷：父子元素垂直方向margin重叠，取较大值（解决：父元素加`overflow: hidden`或`border`）
  - margin合并：相邻兄弟元素垂直margin重叠，取较大值（解决：给其中一个元素加父容器并设置`overflow: hidden`）

## 四、布局相关属性
### 1. 显示模式（`display`）
| 值 | 作用 | 特点 | 示例元素 |
|----|------|------|----------|
| `block` | 块级元素 | 独占一行，可设置宽高 | `div`、`p`、`h1-h6` |
| `inline` | 行内元素 | 不独占一行，不可设置宽高（宽高由内容决定） | `span`、`a`、`i` |
| `inline-block` | 行内块元素 | 不独占一行，可设置宽高 | `img`、`input`、`button` |
| `none` | 隐藏元素 | 元素不显示，不占据页面空间 | 所有元素 |
| `flex` | 弹性布局容器 | 子元素按弹性布局排列 | 所有元素（父容器设置） |
| `grid` | 网格布局容器 | 子元素按网格排列 | 所有元素（父容器设置） |

### 2. 浮动（`float`，已逐渐被flex/grid替代，但需了解）
| 值 | 作用 | 示例 |
|----|------|------|
| `left` | 元素向左浮动 | `div { float: left; }` |
| `right` | 元素向右浮动 | `div { float: right; }` |
| `none` | 不浮动（默认） | `div { float: none; }` |

#### 清除浮动（解决浮动导致父元素高度塌陷）
| 方法 | 语法 | 特点 |
|------|------|------|
| 额外标签法 | 在最后一个浮动元素后加`<div style="clear: both;"></div>` | 简单，但增加无意义标签 |
| 父元素加`overflow` | 父元素设置`overflow: hidden;` | 简单，可能隐藏溢出内容 |
| 伪元素清除法（推荐） | ```css .clearfix::after { content: ""; display: block; clear: both; height: 0; visibility: hidden; } .clearfix { *zoom: 1; /* 兼容IE6/7 */ } ``` | 无额外标签，通用性强 |

### 3. 弹性布局（`flex`，现代布局核心）
#### 父容器属性（作用于`display: flex`的元素）
| 属性 | 作用 | 取值 | 示例 |
|------|------|------|------|
| `justify-content` | 子元素在**主轴**（默认水平）的排列方式 | `flex-start`（左对齐）、`center`（居中）、`flex-end`（右对齐）、`space-between`（两端对齐，中间间距相等）、`space-around`（等距环绕，两端间距为中间一半）、`space-evenly`（等距分布，所有间距相等） | `justify-content: space-between;` |
| `align-items` | 子元素在**次轴**（默认垂直）的排列方式（单行） | `flex-start`（上对齐）、`center`（居中）、`flex-end`（下对齐）、`baseline`（文字基线对齐）、`stretch`（子元素高度拉伸至与父容器一致，子元素无固定高度时生效） | `align-items: center;` |
| `flex-wrap` | 子元素是否换行 | `nowrap`（不换行，默认）、`wrap`（换行，向下）、`wrap-reverse`（换行，向上） | `flex-wrap: wrap;` |
| `align-content` | 子元素在次轴的排列方式（多行，需配合`flex-wrap: wrap`） | 取值同`justify-content` | `align-content: center;` |
| `flex-direction` | 修改主轴方向 | `row`（水平从左到右，默认）、`row-reverse`（水平从右到左）、`column`（垂直从上到下）、`column-reverse`（垂直从下到上） | `flex-direction: column;` |

#### 子元素属性（作用于flex容器的子元素）
| 属性 | 作用 | 取值 | 示例 |
|------|------|------|------|
| `flex` | 子元素对父容器剩余空间的占比 | 数字（如`1`、`2`，值越大占比越大） | `flex: 1;`（子元素均分剩余空间） |
| `order` | 子元素排列顺序 | 数字（默认0，值越小越靠前） | `order: -1;`（子元素排在最前面） |
| `align-self` | 单独设置子元素在次轴的排列方式（覆盖父容器`align-items`） | 取值同`align-items` | `align-self: flex-end;`（该子元素下对齐） |

### 4. 网格布局（`grid`，适合复杂网格排列）
#### 父容器核心属性
| 属性 | 作用 | 示例 |
|------|------|------|
| `grid-template-rows` | 定义网格**行高** | `grid-template-rows: 100px 100px;`（2行，每行高100px） |
| `grid-template-columns` | 定义网格**列宽** | `grid-template-columns: 200px 300px;`（2列，列宽200px、300px） |
| `grid-template-columns: repeat(5, 20%);` | 5列，每列宽20% |
| `grid-row-gap` | 行与行之间的间距 | `grid-row-gap: 10px;` |
| `grid-column-gap` | 列与列之间的间距 | `grid-column-gap: 10px;` |
| 复合写法 | `grid-template: 100px 100px / 200px 300px;`（rows / columns） |

## 五、字体与文本样式
### 1. 字体属性（`font`相关）
| 属性 | 作用 | 取值/示例 |
|------|------|-----------|
| `font-family` | 字体类型 | `font-family: "Microsoft YaHei", sans-serif;`（优先微软雅黑，无则用无衬线字体） |
| `font-size` | 字体大小 | `font-size: 16px;`（默认16px，推荐用`px`或`rem`） |
| `font-weight` | 字体粗细 | `normal`（400，默认）、`bold`（700，加粗）、`100-900`（数字，无单位） |
| `font-style` | 字体风格 | `normal`（默认）、`italic`（斜体） |
| 复合写法 | `font: font-style font-weight font-size/line-height font-family;`（顺序不可乱，`font-size`和`font-family`必写） | `font: italic 700 16px/24px "Microsoft YaHei";` |

### 2. 文本属性（`text`相关）
| 属性 | 作用 | 取值/示例 |
|------|------|-----------|
| `color` | 文本颜色 | `color: red;`、`color: #ff0000;`、`color: rgb(255,0,0);`、`color: rgba(255,0,0,0.5);`（半透明） |
| `text-align` | 文本水平对齐 | `left`（左对齐）、`center`（居中）、`right`（右对齐）、`justify`（两端对齐，需配合`text-align-last: justify`兼容Edge） |
| `text-decoration` | 文本装饰线 | `none`（无装饰线，常用于取消`a`标签下划线）、`underline`（下划线）、`overline`（上划线）、`line-through`（删除线） |
| `text-indent` | 首行缩进 | `text-indent: 2em;`（2个字符宽度，`em`为相对单位，相对于当前字体大小） |
| `line-height` | 行高（文本上下间距） | `line-height: 24px;`（固定值）、`line-height: 1.5;`（倍数，相对于字体大小） |
| `letter-spacing` | 字符间距 | `letter-spacing: 2px;`（字符之间的距离） |
| `word-spacing` | 单词间距 | `word-spacing: 10px;`（英文单词之间的距离，中文无效） |

### 3. 文本溢出处理
#### 单行文本溢出显示省略号
```css
white-space: nowrap; /* 文本不换行 */
overflow: hidden;    /* 溢出内容隐藏 */
text-overflow: ellipsis; /* 溢出部分显示省略号 */
```

#### 多行文本溢出显示省略号（需固定高度）
```css
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box; /* 弹性盒模型 */
-webkit-line-clamp: 2; /* 显示2行，超出省略 */
-webkit-box-orient: vertical; /* 文本垂直排列 */
```

## 六、背景与边框样式
### 1. 背景属性（`background`相关）
| 属性 | 作用 | 取值/示例 |
|------|------|-----------|
| `background-color` | 背景颜色 | `background-color: #f5f5f5;` |
| `background-image` | 背景图片 | `background-image: url("./images/bg.jpg");`（需写`url()`，路径为图片地址） |
| `background-repeat` | 背景图片平铺方式 | `repeat`（默认，纵横平铺）、`no-repeat`（不平铺）、`repeat-x`（水平平铺）、`repeat-y`（垂直平铺） |
| `background-position` | 背景图片位置 | 方位词（`top`/`center`/`bottom`/`left`/`right`）或数值（`background-position: 50px 100px;`，水平→垂直） |
| `background-attachment` | 背景图片是否随滚动条滚动 | `scroll`（默认，随滚动）、`fixed`（固定，不随滚动） |
| `background-size` | 背景图片大小 | `cover`（图片等比缩放，完全覆盖容器，可能裁剪）、`contain`（图片等比缩放，完全放入容器，可能留空）、`100px 200px`（固定宽高）、`50%`（相对于容器宽高） |
| 复合写法 | `background: 颜色 图片 平铺 固定 位置/大小;` | `background: #f5f5f5 url("./bg.jpg") no-repeat fixed center/cover;` |

#### 背景渐变（`background-image: linear-gradient()`）
```css
/* 从左到右，红色→黄色→蓝色，渐变断点50%、70% */
background-image: linear-gradient(to right, red 50%, yellow 70%, blue);
```

### 2. 边框进阶样式
#### 边框圆角（`border-radius`）
| 写法 | 作用 | 示例 |
|------|------|------|
| `border-radius: 10px;` | 四边角均为10px圆角 | - |
| `border-radius: 10px 20px;` | 左上、右下10px；右上、左下20px | - |
| `border-radius: 50%;` | 正圆形（需容器宽高相等）或椭圆形（宽高不等） | - |

#### 盒子阴影（`box-shadow`）
语法：`box-shadow: 水平阴影 垂直阴影 模糊距离 阴影大小 阴影颜色 内阴影;`
示例：
```css
/* 外阴影：水平10px，垂直10px，模糊5px，大小3px，红色半透明 */
box-shadow: 10px 10px 5px 3px rgba(255,0,0,0.5);
/* 内阴影：在最后加inset */
box-shadow: 5px 5px 10px rgba(0,0,0,0.3) inset;
```

#### 文字阴影（`text-shadow`）
语法：`text-shadow: 水平阴影 垂直阴影 模糊距离 阴影颜色;`
示例：
```css
text-shadow: 2px 2px 4px rgba(0,0,0,0.5); /* 文字添加黑色半透明阴影 */
```

## 七、CSS3进阶特性
### 1. 过渡（`transition`，平滑动画效果）
语法：`transition: 过渡属性 过渡时间 延迟时间 速度曲线;`
| 取值 | 作用 | 示例 |
|------|------|------|
| 过渡属性 | 要过渡的CSS属性（`all`表示所有属性） | `transition-property: width;` |
| 过渡时间 | 动画持续时间（单位：s/ms，必写） | `transition-duration: 0.5s;` |
| 延迟时间 | 动画延迟开始时间（单位：s/ms） | `transition-delay: 0.2s;` |
| 速度曲线 | 动画速度变化 | `ease`（默认，慢→快→慢）、`linear`（匀速）、`ease-in`（慢→快）、`ease-out`（快→慢） |

示例：
```css
/* 鼠标悬停时，宽度从100px过渡到200px，持续0.5s，匀速 */
.box {
  width: 100px;
  transition: width 0.5s linear;
}
.box:hover {
  width: 200px;
}
```

### 2. 2D变换（`transform`，元素变形）
| 变换类型 | 语法 | 作用 | 示例 |
|----------|------|------|------|
| 平移 | `translate(x, y)` | 元素沿x轴、y轴平移（单位：px/%） | `transform: translate(50px, 30px);`（向右50px，向下30px） |
| 旋转 | `rotate(角度)` | 元素顺时针/逆时针旋转（单位：deg，正数顺时针，负数逆时针） | `transform: rotate(30deg);`（顺时针旋转30度） |
| 缩放 | `scale(x, y)` | 元素沿x轴、y轴缩放（数值，1为原大小，>1放大，<1缩小） | `transform: scale(1.2, 0.8);`（水平放大1.2倍，垂直缩小0.8倍） |
| 倾斜 | `skew(x角度, y角度)` | 元素沿x轴、y轴倾斜（单位：deg） | `transform: skew(10deg, 5deg);`（水平倾斜10度，垂直倾斜5度） |
| 复合变换 | 多个变换组合（注意顺序：平移在前，旋转在后，避免旋转影响方向） | `transform: translate(50px) rotate(30deg);` |

#### 变换基准点（`transform-origin`）
默认基准点为元素中心点（`50% 50%`），可修改：
```css
transform-origin: top left; /* 基准点为左上角 */
transform-origin: 100px 200px; /* 基准点为元素内(100px,200px)位置 */
```

### 3. 3D变换（`transform`+`perspective`）
- 需先给父容器设置`perspective: 800px;`（视距，值越小3D效果越明显）
- 常用3D变换：
  | 语法 | 作用 | 示例 |
  |------|------|------|
  | `translateZ(z)` | 元素沿z轴平移（z值越大，元素越靠前） | `transform: translateZ(50px);` |
  | `rotateX(角度)` | 元素沿x轴旋转（类似"翻书"效果） | `transform: rotateX(45deg);` |
  | `rotateY(角度)` | 元素沿y轴旋转（类似"开门"效果） | `transform: rotateY(90deg);` |

### 4. 帧动画（`@keyframes`+`animation`，复杂动画）
#### 步骤1：定义帧动画
```css
/* 动画名：move，从左到右平移 */
@keyframes move {
  from { /* 动画开始状态 */
    transform: translateX(0);
  }
  to { /* 动画结束状态 */
    transform: translateX(200px);
  }
}

/* 或用百分比定义多关键帧（更灵活） */
@keyframes move {
  0% { transform: translateX(0); }
  50% { transform: translateX(150px) rotate(30deg); } /* 中间状态 */
  100% { transform: translateX(200px); }
}
```

#### 步骤2：应用动画
语法：`animation: 动画名 持续时间 延迟时间 速度曲线 重复次数 方向 停止状态;`
| 取值 | 作用 | 示例 |
|------|------|------|
| 动画名 | 对应`@keyframes`定义的名称 | `animation-name: move;` |
| 持续时间 | 动画执行时间（单位：s/ms，必写） | `animation-duration: 1s;` |
| 延迟时间 | 动画延迟开始时间 | `animation-delay: 0.5s;` |
| 速度曲线 | 动画速度变化 | `linear`（匀速）、`ease`（默认）、`steps(n, start/end)`（分步动画，n为步数） |
| 重复次数 | 动画执行次数 | `infinite`（无限次）、`3`（执行3次） |
| 方向 | 动画执行方向 | `normal`（默认，正向）、`alternate`（往复执行，正向→反向→正向...） |
| 停止状态 | 动画结束后停留的状态 | `forwards`（停留于结束状态）、`backwards`（停留于开始状态） |

示例：
```css
.box {
  animation: move 1s linear 0.2s infinite alternate forwards;
}
```

#### 控制动画播放/暂停
```css
/* 暂停动画 */
.box:hover {
  animation-play-state: paused;
}
/* 继续播放 */
.box:active {
  animation-play-state: running;
}
```

### 5. 媒体查询（响应式布局核心）
语法：`@media 媒体类型 and (条件) { 样式 }`
- 媒体类型：`screen`（屏幕，常用，可省略）、`print`（打印）
- 条件：常用`max-width`（最大宽度，小于等于该值时生效）、`min-width`（最小宽度，大于等于该值时生效）

示例（响应式适配不同屏幕宽度）：
```css
/* 屏幕宽度≤1200px时生效 */
@media (max-width: 1200px) {
  .container {
    width: 900px;
  }
}

/* 屏幕宽度在992px~1200px之间时生效（闭合区间） */
@media (min-width: 992px) and (max-width: 1200px) {
  .container {
    width: 900px;
  }
}

/* 屏幕宽度≤768px（手机端）时生效 */
@media (max-width: 768px) {
  .container {
    width: 100%;
    padding: 0 10px;
  }
}
```

## 八、Less预处理（CSS增强工具）
### 1. 基础语法
#### 变量（`@`定义，复用值）
```less
// 定义变量（可存储颜色、尺寸等）
@primary-color: #ff4400;
@base-font-size: 16px;

// 使用变量
.box {
  color: @primary-color;
  font-size: @base-font-size;
}
```

#### 运算（支持`+`/`-`/`*`/`/`，注意`/`需加括号）
```less
@width: 200px;
.box {
  width: @width - 50; // 150px（单位可省略，需统一）
  height: (@width / 2); // 100px（除法需加括号）
  font-size: @base-font-size * 1.2; // 19.2px
}
```

#### 导入文件（`@import`，合并多个Less文件）
```less
// 导入其他Less文件（可省略.less后缀）
@import "base"; // 导入base.less
@import "component/button"; // 导入component目录下的button.less
```

#### 嵌套（减少选择器层级，更清晰）
```less
// 嵌套写法（对应CSS：.nav .link）
.nav {
  width: 100%;
  .link {
    color: #333;
    &:hover { // &代表父选择器（.nav .link:hover）
      color: @primary-color;
    }
  }
}
```

### 2. 编译与使用
- 需安装编译工具（如VSCode插件`Easy Less`），自动将`.less`文件编译为`.css`文件
- 项目中引入编译后的`.css`文件使用