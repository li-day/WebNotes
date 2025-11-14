# CSS 单词库与单词语法整合手册
## 一、CSS 引入与基础配置
### 1. CSS 引入方式
```html
<!-- 外部 CSS 文件引入 -->
<link rel="stylesheet" href="css文件路径">

<!-- 嵌套网页（iframe 结合 CSS 布局） -->
<iframe src="danghang.html" width="100%" height="310px" frameborder="0"></iframe>
```

### 2. 调试视口设置（移动端适配核心）
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
```
- `width=device-width`：视口宽度等于屏幕宽度
- `initial-scale=1.0`：初始缩放比例
- `maximum-scale=1.0`：最大缩放比例
- `user-scalable=0`：禁止用户缩放（0 为禁止，1 为允许）

### 3. 中文与 URI 码转换
```css
encodeURI('转码')  // 中文转换成 URI 码
decodeURI('')     // URI 码转中文
```

## 二、媒体查询（响应式核心）
### 1. 基础语法
```css
/* and 两侧必须有空格，screen 可省略 */
@media screen and (max-width: 1200px) {
  .box {}
}

/* 闭合区间（多条件匹配） */
@media screen and (max-width: 1200px) and (min-width: 992px) {}
```

### 2. 常见屏幕尺寸断点
- 大屏 PC：大于 1200px
- 小屏 PC：大于 992px
- 平板：大于 768px
- 手机：小于 768px

## 三、Less 预处理语法
### 1. 导入文件
```less
/* @import 与文件名间需空格，结尾加分号，可省略扩展名 */
@import "02-base.less";
```

### 2. 变量定义与运算
```less
/* 定义变量 */
@w: 100px;

/* 使用变量 */
width: @w;

/* 运算（加减乘直接写，除法需加括号） */
width: @w - 50;          /* 减法 */
font-size: (30px / 2);   /* 除法 */
```

### 3. 混入语法
```less
/* 提取公共样式到类选择器 */
.common-style {
  margin: 0 auto;
  padding: 10px;
}

/* 直接使用类名调用公共样式 */
.box {
  .common-style;
}
```

## 四、核心样式属性
### 1. 基础尺寸与盒模型
#### （1）基础尺寸
```css
width: 12px;   /* 宽度 */
height: 12px;  /* 高度 */
```

#### （2）盒模型类型
```css
box-sizing: border-box;  /* CSS3 盒模型（border 和 padding 向内扩展） */
box-sizing: content-box; /* 标准盒模型（border 和 padding 向外扩展） */
```

#### （3）内边距（padding）
```css
/* 复合写法 */
padding: 20px;          /* 四边统一 */
padding: 20px 50px;     /* 上下 20px，左右 50px */
padding: 20px 50px 80px 100px; /* 上、右、下、左 */

/* 拆分写法 */
padding-top: 20px;
padding-right: 50px;
padding-bottom: 80px;
padding-left: 100px;
```

#### （4）外边距（margin）
```css
/* 复合写法（与 padding 一致） */
margin: 50px 100px;
margin: 0 auto; /* 块元素水平居中 */

/* 拆分写法 */
margin-top: 20px;
margin-right: 50px;
margin-bottom: 80px;
margin-left: 100px;
```

### 2. 字体属性
```css
/* 单个属性 */
font-family: "宋体", "Microsoft YaHei"; /* 字体（多个用逗号分隔，兼容 fallback） */
font-size: 12px;                       /* 字体大小 */
font-weight: 400;                      /* 字重（400=normal，700=bold，100-900 无单位） */
font-style: italic;                    /* 斜体（normal 为默认） */

/* 复合属性（顺序：style → weight → size/line-height → family） */
font: italic 700 16px/26px "Microsoft YaHei";
font: 16px "Microsoft YaHei"; /* 可省略 style、weight、line-height */
```

### 3. 文本属性
```css
/* 文本颜色（三种写法） */
color: red;
color: #ff0000;
color: rgb(255, 0, 0);

/* 文本对齐 */
text-align: left;    /* 左对齐（默认） */
text-align: center;  /* 居中 */
text-align: right;   /* 右对齐 */
text-align: justify; /* 两端对齐（配合 text-align-last: justify 兼容 Edge） */

/* 文本装饰线 */
text-decoration: none;        /* 无装饰线（取消 a 标签下划线） */
text-decoration: underline;   /* 下划线 */
text-decoration: overline;    /* 上划线 */
text-decoration: line-through;/* 删除线 */

/* 其他文本属性 */
text-indent: 2em;    /* 首行缩进（2em 为两个字宽度） */
line-height: 26px;   /* 行高 */
letter-spacing: 2px; /* 字符间距 */
word-spacing: 25px;  /* 单词间距（英文有效） */
```

### 4. 背景属性
```css
/* 单个属性 */
background-color: red;                          /* 背景色 */
background-image: url(图片路径);                 /* 背景图 */
background-repeat: no-repeat;                   /* 平铺方式（no-repeat/x/y） */
background-position: top right;                 /* 背景位置（方位词/固定单位/混合单位） */
background-attachment: fixed;                   /* 背景固定（scroll 为滚动） */
background-size: cover;                         /* 背景图尺寸（cover/contain/具体数值） */
background: rgba(125, 125, 125, 0.5);           /* 背景半透明（不影响内容） */
opacity: 0.5;                                   /* 整体半透明（影响内容） */

/* 渐变色背景 */
background-image: linear-gradient(to right, red 50%, yellow 70%, blue);

/* 复合写法（顺序：color → image → repeat → attachment → position） */
background: red url("./images/logo.png") no-repeat fixed 20px 20px;
```

### 5. 边框属性
#### （1）基础边框
```css
/* 复合写法（宽度 → 样式 → 颜色） */
border: 10px solid yellowgreen;

/* 单方向边框 */
border-top: 20px solid red;
border-right: 15px dashed blue;
border-bottom: 10px dotted orange;
border-left: 5px double pink;

/* 合并表格边框 */
border-collapse: collapse; /* 仅适用于 table 元素 */
```

#### （2）边框圆角
```css
border-radius: 10px;  /* 固定数值（圆角大小） */
border-radius: 50%;   /* 百分比（圆形/椭圆形，基于元素宽高） */
```

#### （3）边框图片
```css
/* 单个属性 */
border-image-source: url('./images/border.jpg'); /* 图片路径 */
border-image-width: 20px;                        /* 边框宽度 */
border-image-slice: 167 167 167 167;             /* 截取距离（顺时针：上右下左） */
border-image-repeat: round;                      /* 排布方式（repeat/round/stretch） */

/* 复合写法 */
border-image: url("images/border.jpg") 167/20px round;
```

### 6. 阴影效果
#### （1）盒子阴影
```css
/* 语法：h-shadow（必选）→ v-shadow（必选）→ blur（可选）→ spread（可选）→ color（可选）→ inset（可选） */
box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.3); /* 外部阴影 */
box-shadow: inset 5px 5px 10px 2px rgba(0, 0, 0, 0.3); /* 内部阴影 */
```

#### （2）文字阴影
```css
/* 语法：h-shadow（必选）→ v-shadow（必选）→ blur（可选）→ color（可选） */
text-shadow: 2px 2px 4px #666;
```

### 7. 显示与隐藏
```css
/* display（不占位） */
display: none;   /* 隐藏元素 */
display: block;  /* 显示为块元素 */
display: inline; /* 显示为行内元素 */
display: inline-block; /* 显示为行内块元素 */

/* visibility（占位） */
visibility: hidden; /* 隐藏元素（保留位置） */
visibility: visible; /* 显示元素 */

/* overflow（溢出处理） */
overflow: hidden; /* 溢出隐藏 */
overflow: visible; /* 溢出显示（默认） */
overflow: scroll; /* 强制显示滚动条 */
overflow: auto;   /* 溢出时显示滚动条 */
```

### 8. 鼠标样式
```css
cursor: default;    /* 默认样式 */
cursor: text;       /* 文本样式（输入框） */
cursor: pointer;    /* 小手样式（链接/按钮） */
cursor: move;       /* 移动样式 */
cursor: not-allowed;/* 禁止样式 */
cursor: zoom-in;    /* 放大样式 */
cursor: none !important; /* 隐藏鼠标 */
```

### 9. 文本溢出处理
#### （1）单行文本溢出省略
```css
white-space: nowrap;    /* 不换行 */
overflow: hidden;       /* 溢出隐藏 */
text-overflow: ellipsis;/* 省略号替代 */
```

#### （2）多行文本溢出省略
```css
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;         /* 弹性伸缩盒子模型 */
-webkit-line-clamp: 2;        /* 第 2 行后省略 */
-webkit-box-orient: vertical; /* 子元素垂直排列 */
```

### 10. 其他基础样式
```css
/* 换行控制 */
word-wrap: break-word;  /* 自动换行 */
word-break: break-all;  /* 强制英文单词换行 */

/* 垂直对齐（针对行内/行内块元素） */
vertical-align: baseline; /* 基线对齐（默认） */
vertical-align: bottom;   /* 底部对齐 */
vertical-align: middle;   /* 中部对齐 */
vertical-align: top;      /* 顶部对齐 */

/* 解决 img 底部缝隙（二选一） */
img {
  vertical-align: bottom;
  /* display: block; */
}
```

## 五、布局方式
### 1. 弹性布局（Flex）
#### （1）开启弹性布局
```css
.parent {
  display: flex; /* 父元素开启弹性布局，子元素成为弹性项 */
}
```

#### （2）主轴方向（flex-direction）
```css
flex-direction: row;          /* 水平从左到右（默认） */
flex-direction: row-reverse;  /* 水平从右到左 */
flex-direction: column;       /* 垂直从上到下 */
flex-direction: column-reverse; /* 垂直从下到上 */
```

#### （3）主轴对齐（justify-content）
```css
justify-content: flex-start;  /* 从起始端对齐（默认） */
justify-content: center;      /* 居中对齐 */
justify-content: flex-end;    /* 从末端对齐 */
justify-content: space-between; /* 两端对齐，中间等距 */
justify-content: space-around; /* 等距环绕（两侧间距为中间一半） */
justify-content: space-evenly; /* 完全等距 */
```

#### （4）次轴对齐（单行：align-items）
```css
align-items: flex-start;  /* 从起始端对齐（默认） */
align-items: center;      /* 居中对齐 */
align-items: flex-end;    /* 从末端对齐 */
align-items: baseline;    /* 文字基线对齐 */
align-items: stretch;     /* 子元素高度拉伸至父元素高度 */
```

#### （5）次轴对齐（多行：align-content）
```css
/* 需配合 flex-wrap: wrap 使用 */
align-content: flex-start;
align-content: center;
align-content: flex-end;
align-content: space-between;
align-content: space-around;
align-content: space-evenly;
```

#### （6）换行控制（flex-wrap）
```css
flex-wrap: nowrap;       /* 不换行（默认，子元素会压缩） */
flex-wrap: wrap;         /* 向下换行 */
flex-wrap: wrap-reverse; /* 向上换行 */
```

#### （7）子元素属性
```css
/* 剩余空间占比（数值越大占比越高） */
flex: 1;

/* 排列顺序（默认 0，值越小越靠前） */
order: -1;

/* 单独控制子元素次轴对齐 */
align-self: flex-start;  /* 向上 */
align-self: flex-end;    /* 向下 */
align-self: center;      /* 居中 */
```

### 2. 网格布局（Grid）
#### （1）开启网格布局
```css
.parent {
  display: grid;
}
```

#### （2）划分网格
```css
/* 单个属性 */
grid-template-rows: 100px 100px 200px; /* 行高（3 行） */
grid-template-columns: 200px 300px;    /* 列宽（2 列） */
grid-template-columns: repeat(5, 20%); /* 重复 5 列，每列 20% */

/* 复合写法（rows / columns） */
grid-template: 100px 100px 200px / 200px 300px;
```

#### （3）网格间距
```css
grid-row-gap: 5px;    /* 行间距 */
grid-column-gap: 5px; /* 列间距 */
```

### 3. 浮动布局（Float）
#### （1）浮动属性
```css
float: left;   /* 左浮动 */
float: right;  /* 右浮动 */
/* float: content; 中间浮动（部分浏览器支持） */
```

#### （2）清除浮动
```css
/* 方法 1：额外标签法（在最后一个浮动元素后加块级元素） */
.clear {
  clear: both;
}

/* 方法 2：父元素 overflow: hidden */
.parent {
  overflow: hidden;
}

/* 方法 3：伪元素清除法（推荐） */
.clearfix::after {
  content: "";       /* 伪元素必加属性 */
  display: block;    /* 转为块元素 */
  clear: both;       /* 清除浮动 */
  height: 0;         /* 隐藏元素 */
  visibility: hidden;
}
.clearfix {
  *zoom: 1; /* 兼容 IE 浏览器 */
}

/* 方法 4：双伪元素清除法 */
.clearfix::before,
.clearfix::after {
  content: "";
  display: table;
}
.clearfix::after {
  clear: both;
}
.clearfix {
  *zoom: 1;
}
```

### 4. 定位布局（Position）
#### （1）定位类型
```css
position: static;   /* 静态定位（默认，无偏移） */
position: relative; /* 相对定位（相对于自身原位置，不脱离文档流） */
position: absolute; /* 绝对定位（相对于最近有定位的祖先元素，脱离文档流） */
position: fixed;    /* 固定定位（相对于浏览器窗口，脱离文档流） */
```

#### （2）边偏移（配合定位使用）
```css
left: 10px;   /* 距离左侧 */
right: 10px;  /* 距离右侧 */
top: 10px;    /* 距离顶部 */
bottom: 10px; /* 距离底部 */
```

#### （3）定位居中技巧
```css
/* 绝对定位水平垂直居中 */
.child {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -150px; /* 自身宽度的一半 */
  margin-top: -150px;  /* 自身高度的一半 */
  width: 300px;
  height: 300px;
}
```

## 六、选择器
### 1. 基础选择器
- 通配符选择器：`*`（匹配所有元素）
- 标签选择器：`div`、`p`、`a`（匹配指定标签）
- 类选择器：`.class`（匹配指定类名元素）
- ID 选择器：`#id`（匹配指定 ID 元素，唯一）
- 行内样式：`style=""`（元素内直接定义）

### 2. 伪类选择器
#### （1）链接伪类（LVHA 顺序）
```css
a:link {}    /* 未访问的链接 */
a:visited {} /* 已访问的链接 */
a:hover {}   /* 鼠标悬浮的链接（可作用于所有元素） */
a:active {}  /* 鼠标按下的链接 */
```

#### （2）表单伪类
```css
input:focus {} /* 获取光标的表单元素 */
input:checked {} /* 选中的复选框/单选框 */
```

#### （3）结构伪类
```css
:first-child {}          /* 第一个子元素 */
:last-child {}           /* 最后一个子元素 */
:nth-child(even) {}      /* 偶数子元素（even=偶数，odd=奇数） */
:nth-child(3) {}         /* 第 3 个子元素 */
:not(:last-child) {}     /* 排除最后一个子元素 */
:first-of-type {}        /* 同类型第一个元素 */
:last-of-type {}         /* 同类型最后一个元素 */
:nth-of-type(2) {}       /* 同类型第 2 个元素 */
```

### 3. 伪元素选择器
```css
/* 行内元素，需配合 content 属性 */
div::before {
  content: ""; /* 必加属性 */
  /* 其他样式 */
}
div::after {
  content: "文本";
  /* 其他样式 */
}
```

### 4. 选择器权重
- 继承：0
- 通配符选择器：1
- 标签选择器：10
- 类选择器/伪类选择器：100
- ID 选择器：1000
- 行内样式：10000
- `!important`：最高权重（优先级最高，需加在属性值后）

## 七、动画与过渡
### 1. 过渡（Transition）
#### （1）基础语法
```css
/* 复合属性（顺序：property → duration → timing-function → delay） */
transition: all 1.5s ease 0.3s;

/* 单个属性 */
transition-property: all; /* 作用属性（all 为所有属性） */
transition-duration: 1.5s; /* 过渡时长（必选，单位 s/ms） */
transition-delay: 0.3s; /* 延迟时间 */
transition-timing-function: ease; /* 速度曲线（ease/linear） */
```

### 2. 2D 变换（Transform）
```css
/* 偏移（x=水平，y=垂直） */
transform: translate(100px, 50px);
transform: translate(-50%, -50%); /* 居中常用 */

/* 旋转（单位 deg，正数顺时针，负数逆时针） */
transform: rotate(30deg);

/* 缩放（x=水平，y=垂直，大于 1 放大，0-1 缩小） */
transform: scale(1.2, 1.5);

/* 倾斜（x=水平角度，y=垂直角度） */
transform: skew(10deg, 5deg);

/* 组合变换（顺序影响结果） */
transform: translate(100px, 0) rotate(30deg);

/* 变换基准点（默认中心 center center） */
transform-origin: top left; /* 左上角 */
transform-origin: 100% 0;   /* 右上角 */
```

### 3. 3D 变换（Transform）
```css
/* 父元素设置视距（产生近大远小效果） */
.parent {
  perspective: 800px;
}

/* 3D 变换属性 */
transform: translateZ(50px); /* Z 轴偏移 */
transform: rotateX(45deg);  /* 绕 X 轴旋转（翻本效果） */
transform: rotateY(45deg);  /* 绕 Y 轴旋转（翻书效果） */
transform: rotateZ(45deg);  /* 绕 Z 轴旋转（同 2D rotate） */
```

### 4. 帧动画（Animation）
#### （1）定义帧动画
```css
/* 方式 1：from → to（简单动画） */
@keyframes move {
  from {
    left: 0;
  }
  to {
    left: 200px;
  }
}

/* 方式 2：百分比（复杂动画） */
@keyframes move {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(200px, 0);
  }
  40% {
    transform: translate(200px, 200px);
  }
  100% {
    transform: translate(0, 400px);
  }
}
```

#### （2）应用帧动画
```css
/* 复合属性（顺序：name → duration → timing-function → delay → iteration-count → direction → fill-mode） */
animation: move 1s linear 0.3s infinite alternate forwards;

/* 单个属性 */
animation-name: move; /* 动画名（与 @keyframes 一致） */
animation-duration: 1s; /* 时长（必选） */
animation-delay: 0.3s; /* 延迟时间 */
animation-timing-function: linear; /* 速度曲线（ease/linear/steps） */
animation-iteration-count: infinite; /* 重复次数（infinite 为无限） */
animation-direction: alternate; /* 方向（alternate 往复，reverse 反向） */
animation-fill-mode: forwards; /* 停止状态（forwards 停在结束，backwards 停在起始） */
animation-play-state: paused; /* 暂停动画（running 为运行） */

/* steps 分步动画（n 为分段数，start/end 控制是否包含首尾段） */
animation: move 5s steps(5, end) infinite;
```

### 5. 特殊效果
#### （1）三角形绘制
```css
/* 正三角形 */
.triangle {
  width: 0;
  height: 0;
  border: 50px solid transparent; /* 三边透明 */
  border-bottom: 50px solid yellow; /* 底部上色 */
}

/* 直角三角形 */
.right-triangle {
  width: 0;
  height: 0;
  border-top: 100px solid transparent;
  border-right: 50px solid skyblue;
}
```

#### （2）网址置灰
```css
filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1); /* IE 兼容 */
-webkit-filter: grayscale(100%); /* 现代浏览器 */
```

## 八、特殊字符与 HTML 配合属性
### 1. 特殊字符编码
| 显示效果 | 编码       |
|----------|------------|
| >        | &gt;       |
| <        | &lt;       |
| 空格     | &nbsp;     |
| &        | &amp;      |
| "        | &quot;     |
| ®        | &reg;      |
| ©        | &copy;     |
| ™        | &trade;    |
| ¥        | &yen;      |

### 2. 图片标签（img）配合 CSS
```html
<img 
  src="图片路径" 
  alt="加载失败提示文本" 
  title="鼠标悬浮提示" 
  srcset="图片1 2x, 图片2 3x" /* 不同屏幕显示不同图片 */
>
```

### 3. 视频标签（video）配合 CSS
```html
<video 
  src="视频路径" 
  controls /* 播放控件 */
  autoplay /* 自动播放（需配合 muted 兼容谷歌） */
  muted /* 禁音 */
  loop /* 循环播放 */
  poster="封面图片路径" /* 等待画面 */
></video>
```

### 4. 音频标签（audio）配合 CSS
```html
<audio 
  src="音频路径" 
  controls /* 播放控件 */
  autoplay /* 自动播放（谷歌需 JS 解决） */
  loop /* 循环播放 */
  muted /* 禁音 */
  preload="auto" /* 自动加载（none 为不加载） */
></audio>
```