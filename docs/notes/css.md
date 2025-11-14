# CSS单词库整合手册
## 一、CSS基础引入与嵌套
| 功能描述 | 语法/代码示例 | 说明 |
|----------|---------------|------|
| CSS引入 | `<link rel="stylesheet" href="css文件路径">` | 外部引入CSS文件的标准语法 |
| 中文转URI码 | `encodeURI('转码内容')` | 将中文等特殊字符转换为URI编码 |
| URI码转中文 | `decodeURI('URI编码内容')` | 将URI编码还原为中文 |
| 嵌套网页 | `<iframe src="目标页面路径" width="100%" height="310px" frameborder="0"></iframe>` | 嵌入其他网页，frameborder="0"隐藏边框 |

## 二、视口设置（移动端核心）
| 属性 | 语法示例 | 功能说明 |
|------|----------|----------|
| 视口元标签 | `<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">` | 适配移动端显示 |
| width=device-width | - | 视口宽度等于设备屏幕宽度 |
| initial-scale | initial-scale=1.0 | 页面初次显示的缩放比例 |
| maximum-scale | maximum-scale=1.0 | 页面最大缩放比例 |
| user-scalable | user-scalable=0 | 0为禁止用户缩放，1为允许 |

## 三、基础样式属性
### 3.1 宽高与盒模型
| 属性 | 语法示例 | 功能说明 |
|------|----------|----------|
| 宽度 | `width: 12px;` / `width: 100%;` | 设置元素宽度，支持固定值和百分比 |
| 高度 | `height: 12px;` / `height: auto;` | 设置元素高度，auto为自动适应内容 |
| 标准盒模型 | `box-sizing: content-box;` | border和padding向外扩展（默认） |
| CSS3盒模型 | `box-sizing: border-box;` | border和padding向内扩展，不改变元素总宽高 |

### 3.2 字体属性
| 属性 | 语法示例 | 取值说明 |
|------|----------|----------|
| 字体类型 | `font-family: "宋体", "Microsoft YaHei";` | 指定字体，多个字体用逗号分隔，优先级从左到右 |
| 字体大小 | `font-size: 12px;` / `font-size: calc(375px / 6.4);` | 支持固定值、calc计算 |
| 字体粗细 | `font-weight: 400;` / `font-weight: normal;` / `font-weight: bold;` | 100-900取值，400=normal，700=bold，无单位 |
| 字体样式 | `font-style: italic;` / `font-style: normal;` | italic为斜体，normal为正常样式 |
| 复合属性 | `font: font-style font-weight font-size/line-height font-family;` | 示例：`font: italic 700 16px 'Microsoft YaHei';`，顺序不可乱 |

### 3.3 文本属性
| 属性 | 语法示例 | 功能说明 |
|------|----------|----------|
| 文本颜色 | `color: red;` / `color: #ff0000;` / `color: rgb(255,0,0);` | 支持英文单词、十六进制、RGB格式 |
| 文本对齐 | `text-align: center;` / `text-align: left;` / `text-align: right;` | 文本水平对齐方式 |
| 两端对齐 | `text-align: justify;` + `text-align-last: justify;` | 使文本铺满容器宽度（Edge浏览器适配） |
| 文本装饰 | `text-decoration: none;` / `underline;` / `overline;` / `line-through;` | none取消下划线（常用于a标签），underline下划线，overline上划线，line-through删除线 |
| 首行缩进 | `text-indent: 2em;` | 首行缩进2个字符宽度 |
| 行高 | `line-height: 26px;` | 设置行间距，可用于垂直居中 |
| 字符间距 | `letter-spacing: 2px;` | 单个字符之间的间距 |
| 单词间距 | `word-spacing: 25px;` | 英文单词之间的间距 |

### 3.4 背景属性
| 属性 | 语法示例 | 取值说明 |
|------|----------|----------|
| 背景颜色 | `background-color: red;` / `background: rgba(125,125,125,0.5);` | rgba支持半透明，不影响内容 |
| 背景图片 | `background-image: url(图片路径);` | 引入背景图片 |
| 背景平铺 | `background-repeat: no-repeat;` / `repeat-x;` / `repeat-y;` | no-repeat不平铺，repeat-x横向平铺，repeat-y纵向平铺 |
| 背景位置 | `background-position: top right;` / `100px 50px;` | 支持方位名词、固定单位，先水平后垂直 |
| 背景固定 | `background-attachment: fixed;` / `scroll;` | fixed背景不随滚动条移动，scroll跟随移动 |
| 背景大小 | `background-size: cover;` / `contain;` / `1000px 500px;` | cover完全覆盖盒子，contain完全包含在盒子内 |
| 背景复合写法 | `background: red url("图片路径") no-repeat fixed 20px 20px;` | 顺序：颜色 图片 平铺 固定 位置 |
| 渐变色背景 | `background-image: linear-gradient(to right, red 50%, yellow 70%, blue);` | 线性渐变，支持多颜色节点 |

### 3.5 边框属性
| 属性 | 语法示例 | 取值说明 |
|------|----------|----------|
| 边框复合写法 | `border: 10px solid yellowgreen;` | 顺序：宽度 样式 颜色 |
| 单边边框 | `border-right: 20px dashed red;` | 支持left/top/right/bottom，样式：solid实线、dashed虚线、dotted点线 |
| 边框合并 | `border-collapse: collapse;` | 用于表格，合并相邻边框 |
| 边框圆角 | `border-radius: 10px;` / `border-radius: 50%;` | 数值为圆角半径，50%可实现圆形（需宽高相等） |
| 边框图片 | `border-image: url("边框图片路径") 167/20px round;` | 组合写法：路径 截取距离/边框宽度 排布方式 |
| 边框图片截取 | `border-image-slice: 167 167 167 167;` | 顺时针方向截取边框图片四个角 |
| 边框图片排布 | `border-image-repeat: repeat;` / `round;` / `stretch;` | repeat平铺，round环绕，stretch拉伸 |

### 3.6 内边距与外边距
| 属性 | 语法示例 | 功能说明 |
|------|----------|----------|
| 内边距（padding） | 复合写法：`padding: 20px;` / `20px 50px;` / `20px 50px 80px 100px;` | 分别对应：四边相同、上下/左右、上/右/下/左 |
| 单边内边距 | `padding-left: 20px;` | 支持top/right/bottom/left |
| 外边距（margin） | 复合写法：`margin: 50px 100px;` | 写法同padding |
| 单边外边距 | `margin-top: 20px;` | 支持top/right/bottom/left |
| 块元素居中 | `margin: 0 auto;` | 水平居中，需设置宽度 |
| 溢出处理 | `overflow: hidden;` / `visible;` / `scroll;` / `auto;` | hidden溢出隐藏，scroll强制显示滚动条，auto自动判断 |

## 四、选择器
### 4.1 基础选择器与伪类
| 选择器类型 | 语法示例 | 功能说明 |
|------------|----------|----------|
| 链接伪类（LVHA顺序） | `a:link{}` / `a:visited{}` / `a:hover{}` / `a:active{}` | link未访问，visited已访问，hover鼠标经过，active鼠标按下 |
| input聚焦伪类 | `input:focus{}` | 选择获取光标的input元素 |
| 结构伪类 | `:first-child` / `:last-child` / `:nth-child(even)` / `:nth-child(odd)` | 分别对应：第一个子元素、最后一个子元素、偶数子元素、奇数子元素 |
| 排除伪类 | `:not(:last-child)` | 选择除最后一个子元素外的所有元素 |
| 类型伪类 | `:first-of-type` / `:last-of-type` / `:nth-of-type(n)` | 按元素类型选择对应位置的元素 |
| 选中伪类 | `:checked` | 匹配选中的单选框、复选框等元素 |

### 4.2 伪元素
| 伪元素 | 语法示例 | 功能说明 |
|--------|----------|----------|
| 内容前插入 | `div::before{ content: ""; display: block; }` | 在元素内容前创建虚拟元素，默认行内元素 |
| 内容后插入 | `div::after{ content: ""; display: block; }` | 在元素内容后创建虚拟元素，默认行内元素 |

## 五、布局相关
### 5.1 显示模式
| 显示属性 | 语法示例 | 功能说明 |
|----------|----------|----------|
| 块元素 | `display: block;` | 独占一行，可设置宽高，行内元素转块元素 |
| 行内元素 | `display: inline;` | 不独占一行，不可设置宽高，块元素转行内元素 |
| 行内块元素 | `display: inline-block;` | 不独占一行，可设置宽高 |
| 消除行内块缝隙 | `父元素font-size: 0;` | 解决inline-block元素之间的默认间距 |
| 隐藏元素（不占位） | `display: none;` | 元素隐藏且不占据页面空间 |
| 隐藏元素（占位） | `visibility: hidden;` | 元素隐藏但保留占位空间 |
| 显示元素 | `visibility: visible;` | 元素正常显示 |

### 5.2 浮动布局
| 浮动属性 | 语法示例 | 功能说明 |
|----------|----------|----------|
| 左浮动 | `float: left;` | 元素向左浮动 |
| 右浮动 | `float: right;` | 元素向右浮动 |
| 中间浮动 | `float: content;` | 元素向中间浮动 |
| 清除浮动-额外标签法 | `<div style="clear: both;"></div>` | 在最后一个浮动元素后添加块级元素 |
| 清除浮动-overflow法 | `父元素{ overflow: hidden; }` | 给浮动元素的父容器添加 |
| 清除浮动-伪元素法 | `.clearfix::after{ content: ""; display: block; clear: both; height: 0; visibility: hidden; }` + `.clearfix{ *zoom: 1; }` | 兼容各浏览器，不添加额外标签 |
| 清除浮动-双伪元素法 | `.clearfix::before,.clearfix::after{ content: ""; display: table; }` + `.clearfix::after{ clear: both; }` + `.clearfix{ *zoom: 1; }` | 更完善的清除浮动方案 |

### 5.3 弹性布局（Flex）
| 属性 | 语法示例 | 取值说明 | 适用对象 |
|------|----------|----------|----------|
| 开启弹性布局 | `display: flex;` | - | 父元素 |
| 主轴排列 | `justify-content: flex-start;` | flex-start（左到右）、center（居中）、flex-end（右到左）、space-between（等距分隔）、space-around（等距环绕）、space-evenly（平均分） | 父元素 |
| 次轴排列（单行） | `align-items: flex-start;` | flex-start（靠上）、center（居中）、flex-end（靠下）、baseline（文字基线对齐）、stretch（拉伸填满） | 父元素 |
| 换行设置 | `flex-wrap: wrap;` | nowrap（不换行）、wrap（向下换行）、wrap-reverse（向上换行） | 父元素 |
| 次轴排列（多行） | `align-content: flex-start;` | 取值同justify-content | 父元素 |
| 主轴方向 | `flex-direction: row;` | row（水平左到右）、row-reverse（水平右到左）、column（垂直上到下）、column-reverse（垂直下到上） | 父元素 |
| 子元素占比 | `flex: 1;` | 数值表示子元素对剩余空间的占比 | 子元素 |
| 子元素排序 | `order: -1;` | 默认0，值越小越靠前 | 子元素 |
| 单个子元素次轴排列 | `align-self: flex-start;` | 取值同align-items，单独控制某个子元素 | 子元素 |

### 5.4 网格布局（Grid）
| 属性 | 语法示例 | 功能说明 |
|------|----------|----------|
| 开启网格布局 | `display: grid;` | 父元素设置 |
| 划分网格（行） | `grid-template-rows: 100px 100px 200px;` | 定义每行高度，多个值用空格分隔 |
| 划分网格（列） | `grid-template-columns: 200px 300px;` / `grid-template-columns: repeat(5, 20%);` | repeat(5,20%)表示5列，每列20% |
| 网格复合写法 | `grid-template: 100px 100px 200px / 200px 300px;` | 顺序：行 列 |
| 行间距 | `grid-row-gap: 5px;` | 网格行与行之间的间距 |
| 列间距 | `grid-column-gap: 5px;` | 网格列与列之间的间距 |

## 六、特殊效果
### 6.1 阴影效果
| 阴影类型 | 语法示例 | 取值说明 |
|----------|----------|----------|
| 盒子阴影 | `box-shadow: h-shadow v-shadow blur spread color inset;` | h-shadow（水平阴影，必需）、v-shadow（垂直阴影，必需）、blur（模糊距离）、spread（阴影尺寸）、color（阴影颜色）、inset（内部阴影） |
| 文字阴影 | `text-shadow: h-shadow v-shadow blur color;` | 取值同box-shadow，无spread和inset |

### 6.2 鼠标样式
| 语法示例 | 效果说明 |
|----------|----------|
| `cursor: default;` | 默认鼠标样式（箭头） |
| `cursor: text;` | 文本选择样式（I型） |
| `cursor: pointer;` | 小手样式（常用于可点击元素） |
| `cursor: move;` | 移动样式（十字箭头） |
| `cursor: not-allowed;` | 禁止样式 |
| `cursor: zoom-in;` | 放大样式 |
| `cursor: none!important;` | 隐藏鼠标 |

### 6.3 文本溢出处理
| 效果 | 语法组合 | 说明 |
|------|----------|------|
| 单行文本溢出省略 | `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;` | 必须同时设置三个属性 |
| 多行文本溢出省略 | `overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;` | -webkit-line-clamp控制显示行数，需配合高度调整 |
| 自动换行 | `word-wrap: break-word;` | 英文单词自动换行 |
| 强制换行 | `word-break: break-all;` | 强制英文单词拆分换行 |

### 6.4 三角形制作
| 三角形类型 | 语法示例 | 说明 |
|------------|----------|------|
| 正三角形 | `width: 0; height: 0; border: 50px solid transparent; border-bottom: 50px solid yellow;` | 宽高为0，三边透明，一边有颜色 |
| 直角三角形 | `width: 0; height: 0; border-top: 100px solid transparent; border-right: 50px solid skyblue;` | 按需设置相邻两边透明，另外一边有颜色 |

### 6.5 图片相关处理
| 功能 | 语法示例 | 说明 |
|------|----------|------|
| 响应式图片 | `<img src="默认图" srcset="url 2x, url 3x" alt="">` | 根据屏幕分辨率加载不同图片 |
| 图片适配 | `object-fit: contain;` | 保持图片原有尺寸比例适配容器 |
| 消除img底部缝隙 | `vertical-align: bottom;` / `display: block;` | 解决图片与文字对齐时的默认缝隙 |

## 七、定位相关
| 定位方式 | 语法示例 | 定位基准 | 特点 |
|----------|----------|----------|------|
| 相对定位 | `position: relative;` | 自身原有位置 | 不脱离文档流，可通过top/right/bottom/left偏移 |
| 绝对定位 | `position: absolute;` | 最近一级有定位的祖先元素 | 脱离文档流，需配合相对定位使用 |
| 固定定位 | `position: fixed;` | 浏览器窗口 | 脱离文档流，固定在窗口某个位置，不随滚动条移动 |
| 定位居中 | `position: absolute; left: 50%; top: 50%; margin-left: -150px; margin-top: -150px; width: 300px; height: 300px;` | 先移动父元素50%，再回移自身一半宽度/高度 |

## 八、过渡与变换
### 8.1 过渡（transition）
| 属性 | 语法示例 | 取值说明 |
|------|----------|----------|
| 过渡复合写法 | `transition: all 1.5s 3s ease;` | 顺序：过渡属性 持续时间 延迟时间 速度曲线 |
| 过渡属性 | `transition-property: all;` | 指定需要过渡的样式，all表示所有样式 |
| 持续时间 | `transition-duration: 1.5s;` | 过渡效果的时间，单位秒（s） |
| 延迟时间 | `transition-delay: 3s;` | 延迟多久开始过渡，单位秒（s） |
| 速度曲线 | `transition-timing-function: ease;` / `linear;` | ease默认（慢-快-慢），linear匀速 |

### 8.2 2D变换（transform）
| 变换类型 | 语法示例 | 取值说明 |
|----------|----------|----------|
| 偏移 | `transform: translate(x, y);` | x水平偏移，y垂直偏移，支持负值 |
| 旋转 | `transform: rotate(360deg);` | 单位deg，正数顺时针，负数逆时针 |
| 缩放 | `transform: scale(h, v);` | h水平缩放，v垂直缩放，0-1缩小，大于1放大 |
| 倾斜 | `transform: skew(h, v);` | h水平倾斜角度，v垂直倾斜角度，单位deg |
| 组合变换 | `transform: translate(100px, 0) rotate(360deg);` | 可组合多个变换，注意顺序 |
| 变换基准点 | `transform-origin: top left;` / `100% 0;` | 默认为元素中心，可指定方位或坐标 |

### 8.3 3D变换
| 变换类型 | 语法示例 | 说明 |
|----------|----------|------|
| 视距设置 | `perspective: 800px;` | 父元素设置，实现近大远小的3D效果 |
| Z轴偏移 | `transform: translateZ();` | 沿Z轴移动，正值靠近观察者 |
| X轴旋转 | `transform: rotateX();` | 沿X轴旋转，类似翻本效果 |
| Y轴旋转 | `transform: rotateY();` | 沿Y轴旋转，类似翻书效果 |
| Z轴旋转 | `transform: rotateZ();` | 沿Z轴旋转，同2D的rotate() |

## 九、帧动画（animation）
| 动画相关 | 语法示例 | 说明 |
|----------|----------|------|
| 定义帧动画 | `@keyframes move { from{ left: 0px; } to { left: 200px; } }` | from为起始状态，to为结束状态 |
| 百分比动画 | `@keyframes move { 0% {transform:translate(0);} 20% {transform:translate(200px,0);} 100% {transform:translate(0,400px);} }` | 支持多关键帧，0%为起始，100%为结束 |
| 应用动画 | `animation: move 1s linear 3s infinite alternate forwards;` | 顺序：动画名 持续时间 速度曲线 延迟时间 重复次数 方向 停止状态 |
| 动画暂停/运行 | `animation-play-state: paused;` / `running;` | paused暂停，running运行 |
| 动画分割 | `animation: a 5s steps(5, end) infinite;` | steps(n,start/end)，n为分割段数，start第一段不参与，end最后一段不参与 |
| 重复次数 | `animation-iteration-count: infinite;` | infinite无限次，可指定具体次数 |
| 动画方向 | `animation-direction: alternate;` / `reverse;` | alternate往复执行，reverse反向执行 |
| 停止状态 | `animation-fill-mode: forwards;` / `backwards;` | forwards停在结束位置，backwards停在起始位置 |

## 十、媒体查询（响应式核心）
| 语法格式 | 示例代码 | 说明 |
|----------|----------|------|
| 基础语法 | `@media screen and (max-width: 1200px) { .box {} }` | screen可省略，and两侧必须有空格 |
| 区间查询 | `@media screen and (max-width: 1200px) and (min-width: 992px) {}` | 闭合区间，匹配992px-1200px的屏幕 |
| 常见断点 | - | 大屏PC（>1200px）、小屏PC（>992px）、平板（>760px）、手机（<768px） |

## 十一、Less预处理语法
| 功能 | 语法示例 | 说明 |
|------|----------|------|
| 导入Less文件 | `@import "02-base.less";` | @import与文件名之间有空格，结尾加分号，可省略扩展名 |
| 定义变量 | `@w: 100px;` | 变量名前加@，可存储尺寸、颜色等 |
| 使用变量 | `width: @w;` | 直接引用变量名 |
| 运算语法 | `width: @w - 50;` / `font-size: (30px / 2);` | +-*两侧需有空格，除法需加括号 |
| 混入语法 | 定义：`.common { padding: 10px; }` 使用：`.box { .common; }` | 提取公共样式，直接引用类名 |

## 十二、表单相关CSS
| 功能 | 语法示例 | 说明 |
|------|----------|------|
| 取消input聚焦边框 | `input { outline: none; }` | 清除默认聚焦时的边框样式 |
| 禁止文本域拖拽 | `resize: none;` | 用于textarea，禁止调整大小 |
| 表单元素选中 | `input:checked{}` | 匹配选中的单选框、复选框 |

## 十三、特殊字符与文本格式
### 13.1 特殊字符
| 显示效果 | 语法 | 说明 |
|----------|------|------|
| > | `&gt;` | 大于号 |
| < | `&lt;` | 小于号 |
| 空格 | `&nbsp;` | 不换行空格 |
| & | `&amp;` | 和号 |
| " | `&quot;` | 双引号 |
| ® | `&reg;` | 已注册标识 |
| © | `&copy;` | 版权标识 |
| ™ | `&trade;` | 商标标识 |
| ¥ | `&yen;` | 人民币符号 |

### 13.2 文本格式标签
| 效果 | 标签示例 | 说明 |
|------|----------|------|
| 加粗 | `<strong>文本</strong>` / `<b>文本</b>` | 两者均为加粗效果 |
| 倾斜 | `<em>文本</em>` / `<i>文本</i>` | 两者均为倾斜效果 |
| 删除线 | `<del>文本</del>` / `<s>文本</s>` | 两者均为删除线效果 |
| 下划线 | `<ins>文本</ins>` / `<u>文本</u>` | 两者均为下划线效果 |

## 十四、权重规则
| 选择器/语法 | 权重优先级 | 说明 |
|-------------|------------|------|
| `!important` | 最高 | 例：`color: red !important;`，优先执行 |
| 行内样式 | 高 | 元素style属性中的样式 |
| ID选择器 | 中高 | `#id{}` |
| 类选择器 | 中 | `.class{}` |
| 标签选择器 | 中低 | `div{}` |
| 通配符 | 低 | `*{}` |
| 继承样式 | 最低 | 从父元素继承的样式 |

