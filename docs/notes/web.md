

## html单词库

```css
<link rel="stylesheet" href="css文件路径">css引入
// 嵌套网页
<iframe src="danghang.html" width="100%" height="310px" frameborder="0"></iframe>
图片标签：
img src="" title="" alt="" 
src属性 是指图像文件路径
alt属性 是在图片加载不出来时替换成文本
title属性 是在鼠标悬停的时候显示
srcset属性 是在不同的屏幕上显示不同的图片
srcset=“url 2x， url 3x”

视频标签：video是一个双标签
 <video src="./media/mi.mp4" controls autoplay muted loop poster="./media/mi9.jpg"></video>
controls 播放控件
autoplay 自动播放 谷歌默认视频不自动播放 需要添加禁音才能实现自动播放
muted 禁音
loop 循环播放
poster 等待画面

音频标签：audio双标签
<audio src="./media/music.mp3" controls autoplay loop muted preload="auto"></audio>
controls 播放控件
autoplay 自动播放 谷歌默认音频不自动播放 需要用js解决
muted 禁音
loop 循环播放
preload 音频是否默认被加载auto 开/ none 关


a标签
a标签中href属性 设置链接的的位置必须写的属性
a中的target属性 可以设置连接打开方式
target属性中_blank 在新窗口打开
target属性中_self 在当前窗口打开
target属性中的name名 再估计盒子打开

表格标签
table标签
table中align属性 可以调整位置 
table中的border属性 可以设置边框
table中的cellpadding属性 可以设置单元格与内容之间的距离
table中的cellspacing属性 可以设置单元格与单元格之间的距离
table中的rules='all'属性 可以单元格与单元格之间间距
caption标签 表格的表格名
thead标签 表格的表头
tbody标签 表格的身体
tfoot 标签 表格的底部
rowspan属性 合并行
colspan属性 合并列

表单标签：
from 标签
action属性 是指提交的位置
method属性 可以选着提交方式
method属性中的post属性 提交时安全性强 
method属性中的get属性 提交时安全性差
input标签
input type="text”
type属性：
button 按钮
checkbox 复选框
file 上传文件
image 图片提交按钮
password 密码框
radio 单选按钮
reset 重置按钮
submit 提交按钮
text 文本框
HTML5新增加input表单type属性
email 邮箱
url 网址
date 日期
time 时间
number 数量
tel 手机号码
search  搜索
color 颜色
range 进度条
但是我们验证的时候必须添加form表单域
当我们点击提交按钮就可以验证表单了

input的name属性 定义input元素的名称
input的value属性 规定input元素的值
input的checked属性 规定 input元素首次加载被选中
input的maxlength属性 规定输入字段中的字符最大长度
input的placeholder属性 显示占位符
HTML5新增加的input属性
input的required属性 必填项
input的placeholder属性 占位符 提示信息
input的autofocus属性 自动获取聚焦
input的autocomplete属性 是否展开你的搜索记录 on打开 off关闭
input的multiple属性 多选文件上传

label标签
<label>男<input type="radio" name="sex1" value="男"></label>
label常用于与单选框复选框的点击文字选择

select下拉表单
<select><option value="广东省">广东省</option><option value="广东省">广东省</option></select>
select标签中的 selected属性 是可以设置下拉表单默认选中项

textarea文本域标签
文本域标签里的空格会正常解析
<textarea name="" id="" cols="30" rows="10"></textarea>
cols属性是展示行内字数 
rows属性是展示数列

文本格式标签
strong和b 加粗
em和i 倾斜
del和s 删除线
ins和u 下划线

特殊字符
&gt;  >大于号
&lt;  <小于号
&nbsp; 空格
&amp; &
&quot; “引号
&reg; ®	已注册
&copy;	© 版权
&trade;	™ 商标
&yen; ¥ 钱
```



## css单词库

```css
encodeURI('转码') 中文转换成uri码
decodeURI('')URI码转中文
<link rel="stylesheet" href="css文件路径">css引入
<iframe src="danghang.html" width="100%" height="310px" frameborder="0"></iframe>html引入

媒体查询
and两侧必须有空格 screen可以省略不写
@media screen and (max-widht:1200px) {      .box {	}   }
@media screen and (max-width:1200px) and (min-width:992px) {} 闭合区间

less的书写
    导入的功能 就是在一个less中导入另一个less文件
    语法：
        @import "被导入的less文件";
        @import与被引入的文件之间必须要有空格
        @import后面要以分号结束；
        @import被引入的less文件也可以省略扩展名
@import "02-base.less";


调试视口
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
meta                name="viewport" 用于设置视口
content             用于设置视口得相关信息width=device-width  将视口得宽度设置为当前屏幕的宽度
initial-scale       用于设置页面初次显示时的缩放比例
maximum-scale       用于设置页面最大的缩放比例
user-scalable       用于设置是否允许用户对页面进行缩放


width:12px; 宽度
height:12px; 高度


字体属性
font-family:"宋体"; 修改文字字体
font-size:12px; 修改字体大小
font-weight:400; （100-900，400等于normal不加粗，700等于bold加粗，数字不加单位） 设置字体的粗细
font-weight:normal; 默认不加粗字体
font-weight:bold;加粗字体
font-style:italic; 显示斜体字体样式
font-style:normal; 斜体变正常
复合属性：
font: font-style font-weight font-size/line-height font-family;顺序不能错
font: italic 700 16px 'Microsoft YaHei'; 顺序不能错 
font:16px 'Microsoft YaHei'; 可以不写字体样式、字体粗细、字体高度，但是不能不写字体大小与文字字体


文本属性
color:red; （#ff0000; 十六进制代码形式  rgb(255,0,0);rgb代码形式） 修改字体颜色
text-align:center;文字居中
text-align:left;左对齐
text-align:right;右对齐
text-decoration:none; 没有装饰线（取消a的下划线）
text-decoration:underline;下划线
text-decoration:overline; 上划线
text-decoration:line-through; 删除线
text-indent:2em; 首行缩进
line-height:26px;设置行间距  行高 
letter-spacing: 2px;设置文字间距
word-spacing:25px;段落空格间距
设置文案铺满盒子宽度
text-align: justify; // 针对Edge
text-align-last: justify;


链接伪类选择器：
a:link{}  把没有点击过（没有访问过的）链接选出来
a:visited{} 选择点击过的（访问过的）链接选出来
a:hover{} 选择鼠标经过的（停留的）链接选择出来
a:active{} 选择鼠标正在点击（按下）还没有弹起来的那个链接
hover 可以作用到任何标签 
为了确保生效，请按照lvha的循顺序声明 :link-:visited-:hover-:active


input伪类
:focus伪类选择器
input:focus{} 选择获取光标的input表单元素选取出来
input{ outline:none;}取消光标的默认样式
resize:none; 禁止文本域拖拽


显示display
display:block;  行内元素变成块元素
display:inline;   把块元素变成行内元素
display:inline-block;  把块元素或者行内元素变成行内块元素
解决行内块元素的缝隙 可以是font-size（字体大小）变成零


弹性布局 一般用于在父元素 控制子元素进行布局
display:flex; 弹性布局

justify-content: flex-start;用于设置多个子元素在主轴方向上的排列与分布
flex-start          默认从左向右排列
center              中间对齐
flex-end            从右向左排列
space-between       等距离分隔
space-around        等距离环绕
space-evenly        平均分

align-items: flex-start; 用于控制子元素在次轴上排列
flex-start		靠上对齐（默认）
flex-end		靠下对齐
center		居中
baseline		文字基线对齐
stretch		将子元素的高度设置为与父元素高度相同

flex-wrap: wrap; 	用于设置子元素换行
nowrap		不换行
wrap		换行（向下换行）
warp-reverse	换行（向上换行）

align-content: flex-start; 在多行情况下控制排列
flex- start		靠上对齐
flex-end		靠下对齐
center		居中
space-between	等距分隔
space-around	等距环绕
space-evenly	平均分
弹性布局控制子元素在水平 垂直 排列 分布
水平： justify-content
	取值：flex-start、flex-end、center、space-between、space-around、space-evenly
垂直： algin-items（单行）
	取值：flex-start、flex-end、center、space-between、space-around、space-evenly
	
           换行：flex-wrap
		取值：wrap
           align-content（多行）
                取值：flex-start、flex-end、center、space-between、space-around、space-evenly

flex	设置子元素对父元素剩余空间的占比
flex: 1;
order: -1;	用于设置单个子元素的排列顺序
	默认是0 
	值越小越靠前
align-self:flex-start; 用于单独控制某个子元素在次轴上的排列方式
	取值:flex-start 向上、flex-end向下

flex-direction: row; 用于修改主轴方向
row	水平，从左向右默认
row-reverse 水平，从右向左
column	 垂直，从上向下
column-reverse 垂直，从下向上

display:grid; 网格布局
划分网格
grid-template-rows:100px 100px 200px;
grid-template-columns:200px 300px;
grid-template-columns: repeat(5, 20%); 每行5个
复合写法
grid-template: 100px 100px 200px / 200px 300px;
间隔
grid-row-gap: 5px; 行
grid-column-gap: 5px; 列

浮动float
float:left; 左浮动
float:right; 右浮动
visibility:hidden; 隐藏（伪类）
float:content; 浮动到中间 中间浮动
类名:nth-child(3) {margin-right: 0;} 结构伪类选择器


清除浮动
clear: both; 额外标签法：在最后的一个浮动元素的后面 添加一个块级元素添加清除浮动核心代码 clear:both; 
清除浮动1
overflow: hidden; 溢出隐藏 给父盒子添加
清除浮动2
.clearfter::after{ content: "";（ 是伪元素必须给的属性 ） display: block;（伪元素默认是行内元素）  clear: both;（清除浮动）height:0; 看不到元素 visibility: hidden; 隐藏}在盒子内容的后面创建一个盒子
.clearfter{*zoom: 1; (解决上面出现的浏览器兼容问题 必须写)} 解决浏览器兼容
清除浮动3
.clearfix::before,.clearfix::after {content: ""; （ 是伪元素必须给的属性 ） display: table; （理解成在同一行显示的两个块级元素）}
 .clearfix::after{clear: both;}清除浮动
.clearfix { *zoom: 1; }解决浏览器兼容



背景background
background-color:red; 修改背景颜色
background-image:url(图片的位置); 修改背景图片
background-repeat:repeat(no-repeat不平铺, repeat-x横向平铺, repeat-y;纵向平铺);  默认纵横平铺
background-position:水平方向的位置 垂直方向的位置; 背景位置方位名词
background-position: top right(100px 50px; 固定单位 有顺序之分先水平后垂直, bottom 100px; 混合单位 有顺序之分先水平后垂直);背景位置固定
background-attachment:scroll(fixed 背景固定 不会随着滚动条而动); 背景随着盒子的滚动而滚动
background: 背景颜色 背景图片 背景平铺 背景固定 背景位置; 复合写法
background: red url("./images/logo.png") no-repeat fixed 20px 20px; 复合写法
background:rgba(125,125,125,0.5); 这是背景颜色半透明 背景半透明不会影响内容
opacity:0.5;  设置背景半透明  会影响内容
backgroun-size:cover;  等比例缩放，当背景图完全覆盖盒子时停止缩放
background-size:contain; 等比例缩放，当盒子完全包含背景图片停止缩放
background-size: 1000px 500px; 设置背景图片高度和宽度
background-image: linear-gradient(to right, red 50%, yellow 70%, blue, yellowgreen, orange, pink); 渐变色
object-fit:contain; 处理图片，保持原有尺寸


权重
color:red !important; 在后面加上!important优先执行 权重最大
继承 < 通配符 < 标签选择器 < 类选择器 < id选择器 < 行内样式 < !important


边框border
border: 10px solid yellowgreen; 复合写法
border-right(left左, top上, right右, bottom下 ): 20px(边框宽度) solid(边框样式:实线 solid 虚线dashed 点线dotted ) red(边框颜色);
border-collapse; 合并边框  这个属性是table的属性 合并相邻边框

边框圆角border-radius
border-radius:10px（length）; （数值的是表示高度的）边框圆角
border-radius:50%; (百分比是表示宽度的) 圆形

图片边框		利用边框图片属性，来设置边框效果
border-image-source: url('./images/border.jpg');  边框图片路径
border-image-width: 20px; 边框图片宽度
border-image-slice: 167 167 167 167;	边框的截取距离：给你四刀的机会把边框图片的四个角切出来，顺时针方向
border-image-repeat: repeat;	中间剩余部分排布方式（平铺）
border-image-repeat: round;	中间剩余部分排布方式（环绕）
border-image-repeat: stretch; 	中间剩余部分排布方式（拉伸）
border-image: url("images/border.jpg") 167/20px round;	组合写法


盒子阴影box-shadow
box-shadow: h-shodow(水平阴影的位置 必需) v-shadow(垂直阴影的位置 必需) blur(模糊距离 可选) spread(阴影尺寸 可选) color(阴影颜色 可选) inset(将外部阴影改成内部 可选); 用于盒子阴影


文字阴影text-shadow
text-shadow:h-shodow(水平阴影的位置 必需) v-shodow(垂直阴影的位置 必需) blur(模糊距离 可选) color(阴影颜色 可选); 用于文字阴影


内边距padding
内边距 是调盒子里面的距离 盒子边框距离内容的距离
padding: 20px; 四边一样
padding: 20px 50px; 对边一样
padding: 20px（上） 50px（右） 80px（下） 100px（左）;   复合写法 
padding-left(top上， right右，  bottom下， left左): 20px;  拆分写法


外边距margin
外边距 是调盒子与盒子之间的距离 盒子边框距离盒子边框的距离
写法与内边距差不多
margin: 50px 100px;复合写法
margin: 0 auto; 块元素居中
margin-top(top上， right右， bottom下， left左):20px; 拆分写法
overflow: hidden; 溢出隐藏


垂直对齐方式图片底部
vertical-align: baseline; 基线对齐 默认值
vertical-align: bottom;   底部对齐
vertical-align: middle;  中部对齐
vertical-align: top; 顶部对齐



这三句代码执行的效果是 单行文本超出显示省略号
white-space: nowrap;  /* 一行显示 不换行 */
overflow: hidden;   /* 溢出隐藏 */
text-overflow: ellipsis;   /* 文本超出用省略号代码 */

word-wrap:break-word; 自动换行
word-break: break-all; 强制英文单词换行


使用多行文本溢出显示省略号  需要适当调整高度
/* 1. 超出的部分隐藏 */
overflow: hidden;
/* 2. 文字用省略号替代超出的部分 */
 text-overflow: ellipsis;
/* 3. 弹性伸缩盒子模型显示 */
display: -webkit-box;
/* 4. 在第几行显示省略号 */
-webkit-line-clamp: 2;
/* 5. 设置或检索伸缩盒对象的子元素的排列方式 */
-webkit-box-orient: vertical;


鼠标样式
cursor: default; 鼠标默认样式
cursor: text; 鼠标文本样式
cursor: pointer; 鼠标小手样式
cursor: move; 鼠标移动样式
cursor: not-allowed; 鼠标禁止样式
cursor: zoom-in; 鼠标放大样式
cursor: none!important;隐藏鼠标
 


定位：position
position: relative; 相对定位 一般用于限制绝对定位的，给绝对定位的父级元素使用
position: absolute; 绝对定位 以最近一级有定位的祖先元素为单位对接 需要与相对定位配合使用更好
position: fixed; 固定定位
所有定位都需要边偏移也就是left，right，top，bottom
让定位的盒子定位到中间可以先走父盒子宽度的一半50%，往回走自身宽度的一半。代码如下：
position: absolute;
left: 50%;
top: 50%;
margin-left: -150px;
margin-top: -150px;
width: 300px; 
height: 300px;

显示隐藏
display:none; 不占位隐藏
display: block; 显示元素
visibility: hidden; 元素的可以见性  占位隐藏
visibility:visible; 元素显示
overflow: hidden 超出的内容隐藏
overflow:visible; 不做处理  超出显示
overflow: scroll; 给盒子添加滚动条  不管内容是否超出 都添加滚动条
overflow: auto; 如果内容超出 添加滚动条 如果没有内容超出就 不添加滚动条


设置三角形
 /* 宽高为0 边框三个透明色 一个边有颜色 */
width: 0;
height: 0;
margin: 0 auto;
border: 50px solid transparent;
border-bottom: 50px solid yellow;
直角三角形
width: 0;
height: 0;
margin: 100px auto;
border-top: 100px solid transparent;
border-right: 50px solid skyblue; 


/* 解决img底部缝隙 只要不是baseline就可以 */
 /* 推荐使用vertical-align 属性 */
/* 方法一 */
vertical-align: bottom;
/* 方法二 */
/* display: block; */



标准盒模型的border与padding向外扩展
css3盒模型的border与padding向内扩展
box-sizing: border-box; css3盒模型 怪异盒模型 ie和模型 c3
box-sizing: content-box;标准盒模型


伪元素选择器 (HTML5 +css3 技术提升）
:first-child 选择第一个子元素
:last-child 选择最后一个子元素
:nth-child(even) even偶数 odd基数 
:not(:last-child) 选择除了最后一个子元素的所有元素子元素
:first-of-type 选择种类的第一个元素
:last-of-type 选择种类的最后一个元素
:nth-of-type 指定元素的元素排序
:not(:first-of-type) 选择除了第一个子元素的所有子元素
:checked 它能匹配选中的元素

伪元素
div::before 在盒子的内容前面创建一个元素 默认行内元素
div::after 在盒子内容的后面创建一个元素 默认行内元素 


list-style:none; 取消li自带的圆点

font-size: calc(375px / 6.4); calc是css3新增的功能，用与进行简单的数学运算


less预处理语法
@import "02-base.less"; 在less文件引入less文件
@w:100px; 定义变量 储存数据 （：）后面的都是可以当数据保存
 width: @w; 使用变量
width: @w - 50;  less语法可以使用简单的 + - * / 运算符两侧需要由两侧空格  
font-size: (30px / 2); 除法需要用小括号 括起来

过渡	transition: 
transition-property: all; 设置需要应用过渡效果的样式，必选的 all 表示所有的
transition-duration: 1.5s; 设置过渡效果的时间 秒s
transition-delay: 3s; 用于设置过渡效果延迟的时间  单位：秒s
transition-timing-function: ease; 用于设置过渡效果速度曲线，取值：ease默认() linear  匀速

2d变换	transform:
transform:translate(x, y); 偏移 单位px， x=水平偏移  y=垂直偏移 负值就是反向移动 
transform: rotate(360deg); 旋转 单位deg， 正数为顺wrap时针旋转，负数为逆时针旋转
transform:scale(h,y); 放大或缩小 没有单位	h=水平缩放比例，v=垂直缩放比例，大于0的数，0-1表示缩小，按照自身比例的倍数放大，缩小
transform: skew(h,v); 倾斜， h 表示水平的倾斜角度 单位deg，v 表示垂直的倾斜角度 单位deg
transform: translate(100px,0) rotate(360deg); 如果是同时又旋转与偏移，要注意顺序

修改变换的基准点
 transform-origin: top left;
transform-origin: 100% 0;

3d变换
perspective: 800px; 设置视距

 transform: translateZ();
 transform: rotateX(); 沿着x轴
 transform: rotateY(); 沿着Y轴

帧动画
1.定义帧动画
@keyframes move {
            /* 动画开始的样式 */
            from{ left: 0px;}
            /* 动画结束的样式 */
            to {left: 200px;}
}
animation: move（动画名） 1s（时间） linear（ease或linear或steps） 3s（延迟时间）infinite（重复次数无限） alternate（方向） forwards（停止时的状态）;
animation-play-state: paused; 用于控制暂停动画
animation-play-state: running;运行
ateps()用于对动画进行分割
语法：
steps(n,start或end);
n表示分割几段
start   表示第1段不参与动画
end     表示最后一段不参与动画
animation: a 5s steps(5, end) infinite;
网址置灰
filter:progid:DXImageTransform.Microsoft.BasicImage(graysale=1);
-webkit-filter: grayscale(100%);

```



# 移动端布局

## 单词语法

````css
// 手机调试工具
<script src="https://cdn.bootcdn.net/ajax/libs/vConsole/3.9.0/vconsole.min.js"></script>
<script>
    // init vConsole
    new VConsole();
</script>
meta				name="viewport"用于设置视口
content				用于设置视口的相关信息
width=device-width	将视口的宽度设置为当前屏幕的宽度
initial-scale		用于设置页面初次显示时的所放比例	1.0为用户第一次登录时的界面缩放
maximum-scale		用于设置页面的最大缩放比例		1.0为缩放的倍数
user-scalable		用于设置是否允许用户对页面进行缩放	0为禁止缩放
viewport		视口，用于显示页面的那个区域（默认尺寸是980，并不是于屏幕设备的尺寸相同，所以需要通过设置i漱口的宽度，让页面再任何设备上都能于屏幕同宽）
background-size		用于设置背景图片的尺寸
      取值为：
	设置图片大小是必须要在前面加 /
	contain（包含）	图片会等比例缩放直到盒子将图片完全包含才会停止
	cover（覆盖）	图片会等比例覆盖，直到将盒子完全覆盖才会停止
	百分比		相对于盒子的宽高尺寸
	数值		指定背景图片的大小
srcset			根据不同的屏幕选择所显示的图片
   语法	    例：<img src="./imgs/sample.jpg" srcset="./imgs/sample@2x.jpg 2x, ./imgs/sample@3x.jpg 3x" alt="">
display：flex			开启弹性布局
justify-content：space-between	开启弹性布局后，子元素会共存于一行
justify-content			用于设置多个子元素在主轴上的排列
     取值为：
	flex-start			默认从左向右排列
	center			中间对齐
	flex-end			从右向左排列
	space-between		等距分隔
	space-around		等距环绕
	space-evenly		平均分
align-items		主要控制于单行情况下子元素在次轴上的排列方式
    取值为：
	flex-start		靠上对齐（默认）
	flex-end		靠下对齐
	center			居中
	baseline		文字基线对齐
	stretch			将子元素的高度设置为与父元素高度相同
flex-warp		默认如果子元素的宽度大于父元素的宽度，子元素会被压缩，用于设置子元素的换行
   取值为：
   	nowrap		不换行
	wrap		换行（向下换行）
	wrap-reverse	换行（向上换行）
align-content		用于多行子元素在次轴的排列和分布
  取值为：
  	flex-start	默认从左向右排列
	center		中间对齐
	flex-end	从右向左排列
	space-between	等距分隔
	space-around	等距环绕
	space-evenly	平均分
flex			当子元素的宽度和小于父元素的宽度时，可以使用flex来设置子元素的剩余占比
  取值：数值，百分比

order			用于设置单个子元素的排列顺序
			默认值是0值越小越靠前越大越靠后
align-self		用于单独控制某个子元素在次轴上的排列方式
  取值：flex-start
flex-direction		用于修改主轴的方向
  取值：
	row		水平，从左往右
	row-reverse	水平，从右往左
	column		垂直从上往下
	column-reverse	垂直从下往上

display:grid		开启网格布局
grid-template		划分网格
grid-row-gap: 5px	控制网格行间距
grid-column-gap:5px	控制表格列间距

em			是一个相对单位，相对于自身的font-size
			em各自为政，之作用于自己，如果整体效果要放大或者缩小需要对每一个使用em单位进行修改
rem			是一个相对单位，相对于html的font-size
			rem可以统一根据html标签的font-size来个控制页面中所有使用了rem单位的元素尺寸

rem在使用是分为两步
	1.编码阶段
	   需要对尺寸（根据ui的设计稿）转换为rem
	   由px转换为rem
	   1.1先将设计稿上的尺寸转换成编码尺寸
	   	400/2 = 200px
	   1.2将编码尺寸转换成为rem
	   	200px/html的字体大小	rem
		所要除的html的字体大小设置成多少都可以，主要是为了方便编码
		html的字体大小主要有两种方案：
		方案1：
		   取屏幕的十分之一，编码阶段参照设计搞
		   	320/10 = 32
			在使用32去除具体的尺寸
			200/32 = 6.25rem
		方案2：
		   去设计搞上屏幕尺寸的百分之一，作为一个奇数再用这个基础去除屏幕尺寸作为html的字体大小
			640/100 = 6.4
			320/6.4 = 50
			将这个50作为html的字体大小
			再将50去除具体的尺寸
			200/50 = 4rem
	2.显示阶段
	   浏览器会根据html的字体大小将代码中的rem转换成为px

如果想动态的设置html的font-size，需要借助别人写好的工具来实现
    flexible.js
    是淘宝公司为自己的移动端去动态的适配显示屏幕而书写的一个js文件
    flexible.js文件所完成的功能就是，动态的读取屏幕的尺寸，取十分之一的值设置给html的font-size


less的使用流程：
  前提：需要安装easy less插件
  1.创建less文件
  2.由less文件生成css文件（预编译）
      由于已经安装了easy less插件，所以easy less会自动将less文件转换成css文件
  3.引入编译后的文件

混入语法
    将共有的写法提取到一个类选择器中，之后再需要使用的地方直接使用类名
less语法还可以进行简单的+ - * 运算
     如果是除法要用小括号括起来
导入的功能 就是在一个less中导入另一个less文件
语法
@import"被导入的lesss文件"
@import 与引入的文件之间必须有空格
@import 后要以分号结束
被引入的less文件也可以省略扩展名

 响应式
     一套适配多种终端
 响应式的核心原理
     根据不同的屏幕尺寸应用不同的样式

媒体查询语法
and两侧必须由空格
@media screen and （屏幕尺寸）

大屏pc尺寸	大于1200px
小屏pc尺寸	大于992px
平板尺寸	大于760px
手机尺寸	小于768px

过渡效果
transition	复合属性
     transition默认是没有任何顺序的
     后面的是延迟时间前面的是持续时间
transition-property	设置需要应用的过渡效果样式（必填）
transition-duration	设置过渡下效果的持续时间 单位秒s
transition-delay	设置过渡的延迟时间
transition-timing-function  设置过渡速度的曲线
  取值：
  	ease	默认
	linear	匀速

transform	2d实现变换属性
  取值：
    translate(x,y)	实现偏移效果，如果只有一个值默认是水平方向的值
    translate(-50%,-50%)实现完美居中
    rotate(角度单位deg)	实现2d旋转效果
    	修改旋转中心
            transform-origin:left top ;
            transform-origin:right bottom ;
            transform-origin:left bottom ;
            transform-origin:right top ;
            transform-origin:100% 0 ;
    scale(x,y)		实现2d缩放效果
    	修改缩放的基准点 
            transform-origin: right;
            transform-origin: top;
            transform-origin: left;
      取值，大于0的数，0-1之间表示缩小，大于1表示放大
    skew(x,y)		实现2d倾斜效果
    	x	水平倾斜的角度
	y	垂直倾斜的角度

无论是2D还是3D使用的都是transform属性
transform	3d实现变换属性
	translateX()	和translate效果是一样的
	translateY()	和translate效果是一样的
	transform: rotateX();默认实现的是翻本的效果
        transform: rotateY();默认实现的是翻书的效果
        transform: rotateZ();默认与rotate()相同
    3D变换如果有近大远小的效果需要设置视距
    perspactive
         perspective: 像素;


帧动画
 有两个步骤
  定义帧动画
  为某个元素应用帧动画
  语法
  @keyframes 动画名{
  	from{

	}
	to{

	}
  }

animation: 帧动画名 持续时间 延迟时间 动画的速度曲线 重复的次数 方向 停止时的状态;
   animation-name	动画名
   animation-duration	持续时间
   animation-delay	延迟时间

   animation-timing-function	速度曲线
   	ease，linear，ease-in，ease-out
	steps(n,start|end)
                    n表示分割几段
                    start表示第一段不参与动画
                    end表示最后一段不参与动画

   animation-iteration-count	重复次数
   	infinite  无限次

   animation-direction	动画的重复效果
      alternate   往复的执行
      reverse	  从结束到开始，反向播放

   animation-fill-mode	停止的状态
      forwards	  结束时停留在终止的位置
      backwards   结束时停留在起始的位置

用于控制暂停动画
animation-play-state:paused;


百分比动画
 @keyframes move {
            0% {
                transform:translate(0);
            }
            20% {
                transform:translate(200px,0);
            }
            40% {
                transform:translate(200px,200px);
            }
            60% {
                transform:translate(400px,200px);
            }
            80% {
                transform:translate(400px,400px);
            }
            100% {
                transform:translate(0,400px);
            }
        }
````

# JS基础

## DOM和BOM

````js
浏览器有三种语言	Html/Css JavaScript
JavaScript有三个组成和部分
ECMAScript	就是JS的语法规则
DOM		WebAPI
BOM		WebAPI
````

## JS的语言规则

````js
JS的语言规则
1.JS是严格遵循大小写的
2.在JS中一般一条语句结束时是以分号标识，分号可以省略
3.一般一行代码仅书写一条语句，如果一行包含多条语句，语句之间必须包含分号

````

## JS输入输出语法

````js
输入
  方法一：prompt
    语法：
      prompt('提示信息')
      弹窗让用户输入信息
  方法二：confirm
    语法：
      confirm('提示信息')
      弹窗让用户确定

输出
  方法一：alert()
    语法：
      alert('内容')
      弹窗输出
  方法二：console.log()
    语法：
      console.log('内容')
      在控制台中输出
  方法三：document.write
    语法：
      documetn.write('内容')
      输出在页面中
      
    throw new Error('Missing parameter'); 丢出报错
````

## JS变量

````js
定义变量
 let 变量名 = 数据   定义变量的同时赋值，术语称之为初始化
 定义变量会在内存中申请一个空间，并为这个空间取一个名字

变量的操作
	 定义一个变量用于存储数据
        let a = 10;     //此处的10是程序员定义的
        let age = prompt('请输入年龄'); //此处的数据是由浏览者提供的

        1.读取变量内容（值）；
        alert(a);
        console.log(age);

        2.修改变量的值
        let b = 100;
        console.log(b);
        b = 200;
        console.log(b);

        注意 let声明的变量值能声明一次

        3.变量参与运算
        let c = 100;
        将变量c的值于300相加的结果赋予另一个变量d
        let d = c + 300;
        consloe.log(d);

变量的内存原理
	内存是由windows浏览器来维护的
	windows为了方便维护内存会给每个空间编码个号
	定义一个变量
        let a = 10;
        申请一个变量，同时为这个变量起个名字，在将数据10保存到这个空间中

        console.log(a + 100);
        在内存中查看是否有变量a的存在，如果有，就将空间中的数据10读取出来，
	与数据100进行运算，得到的结果输出显示

        a = a + 10;//在内存中查找是否有变量a存在，如果有就将空间中的的数值读取出来，
	与10进行运算相加，看到的结果保存到空间中，此时a空间的值被修改

变量的扩展操作
	一次定义多个变量（不推荐使用）
	let a,b,c;
	仅定义了变量，但变量的值没有定义
	let b ;	此时的值undefined（未定义）
	
交换两个变量的值
	let m = 10;
        let n = 20;

        交换两个变量的值
        第1步，定义第三个变量
        let tmp;

        第二步，将m赋值给tmp
        tmp = m;

        第三步，将n赋值给m
        m = n;

        第四步：将tmp 赋值给m
	n = tmp;

变量的命名规则
	1.变量名只能包含字母,数字,下划线，以及$
	2.不能以数字开头
	3.变量名不能使用JS的关键字
	4.如果变量名由多个单词组成，使用小驼峰命名法
	  除第一单词外，其后的首字母大写
	5.变量命名时尽量达到见名知意
````

## JS数据类型

````js
数据类型
   number数值类型:这是数学中的数字，可以时整数，小数，正数和负数
   
   String字符串类型，使用单引号或者双引号括起来的多个字符
   
	引号的嵌套：单引号中可以包含双引号，双引号也可以包含单引号
    
	  在使用引号定义字符串时
	  默认单引号中不能包含单引号
	  默认双引号中不能包含双引号
      
   Boolean布尔类型
   
   	布尔类型仅有两个值	true和false
	true和false的含义是由程序员赋予的
	true	可以表示男 false表示女
	true	可以表示对 false表示错
	true	可以表示同意 false表示不同意
	true	可以表示同意 false可以不同意
	布尔类型的值true与false本身并没有实际的意思，
	主要看程序员赋予他什么含义
        布尔值是不需要加引号的
   undefined类型
   	undefined类型仅有一个值，undefined未定义
	当定义了一个变量，但没有为这个变量赋值，其赋值就是undefined
   null类型
	null仅有一个值，其值就是null（空）

检查数据类型

	typeof()用于检查简单数据类型

	对于prompt()
	如果用户点击了确定按钮，我们接收到的就是String类型
	如果用户点击了取消按钮，我们接收到的就是null
    
	对于confirm()
	如果用户点击了确定按钮，我们接收到的就是true
	如果用户点击了取消按钮，我们接收到的就是false
````

## 运算符

````js
=	赋值运算符
  	运算规则，将右边的数据赋值给左边的变量
	Js中的=并不是数学的判断两个数是否相等的符号

  算数运算符是对Number类型的数据进行运算
  JS中的+ - * //用于数学中的运算规则相同

  %	取余（取模）
  	运算规则：求两个数相除的余数

  ++	自增运算符
  	运算规则，变量的值自增1

  --	自减运算符
  	运算规则，变量的值自减1

 +=，-=	自操作运算符
	可以用于任何数值进行操作
 +，+=	在字符串运算中主要进行的字符串的拼接操作

  +=	在一个字符串变量原值的基础上在拼接上新的字符串再赋值给自己

 + +=	在算术运算符中出现，又在字符串中出现
        参与运算的两个数，只要有一个是字符串，就会进行字符串拼接

比较运算符
 > < >= <=  与数学的运算规则相同
 ==	运算规则：判断两个数据的值是否相等，如果相等返回true 否则返回false
 !=	运算规则：判断两个数据的值是否相等，如果不相等返回true否则返回false

运算符的优先级
	算数运算符
        字符串运算符
        比较运算符
        赋值运算符
        一个式子中可能出现多种运算符，他们的运算优先级
        先乘除后加减 再比较<=,>=  最后赋值
        可以使用()来修改运算符的优先级

````

## Math对象

````js
Math对象是JS提供的一个工具，能通过Math对象进行一个比较复杂的数学运算
   1.获取圆周率
   	Math.PI()
   2.求最大值
   	Math.max()
   3.求最小值
   	Math.min()
   4.向下取整
   	Math.floor()
   5.向上取整
   	Math.ceil()
   6.生成一个随机的小数,函数包含0 但不包含1
   	Math.random
  7.函数返回一个数的平方根
  	Math.sqrt()
````

## 分支结构

````js
if单分支
          语法：
              if( 表达式。){
                  语句。。
              }else{
                  语句。。。
              }
           执行逻辑：
              当表达式成立()就执行if中的代码语句，
              不成立就跳过if，执行其后的代码	
 if双分支
              语句：
                if( 表达式1){
                    //代码语句1。。
                }else if(表达式2){
                    代码语句2.。
                }
            执行逻辑：
                首先判段表达式1是否成立，如果成立就执行代码块1
                当代码块1结束后不会再判断表达式2，而直接执行整个if后面的代码
                如果表达式1不成立，才来判断表达式2，如果表达式2成立立即执行代码块2
                ，如果不成立就退出
 if多分支
	    语法：
                if(表达式1){
                    代码块1
                }else if（表达式2）{
                    代码块2
                }else if(表达式3) {
                    代码块3
                }else{
                    代码块14
                }


            执行逻辑：
            自上而下的判断，表达式是否成立 如果成立就执行对应的代码块
            ，当代码块执行结束后直接整个if结构，执行其后的代码，
            如果不成李就一次判断其后的表达式
            如果所有的表达式都不成立，则执行缺省代码块
            else if 可以有多个，else也可以省略
````

## 数据类型扩展

````js
Number是数值类型，值有无数个，其中有两个特殊的值

   Infinity	无穷大
   NaN		Not a Number	不是一个数，最终结果无法使用数值来表示
   
   在Js中表示的数值是有范围的，我么你可以通过Number对象来查看这个范围
   Number.MAX_VALUE	记录这个JS能表示的最大的数
   Number.MIN_VALUE	记录这个JS能表示的最小的数

   在Js中有一个神奇的数，NaN，Nan都不等与自己本身
   
   如果就想判断一个变量的值是不是NaN，上面使用的运算符已经判断不了
   所以Js为我们提供了一个方法：isNaN();
   isNaN()可以 判断一个数值是不是NaN
   
   Srting类型扩展
   转意字符：  ``
          作用：
              1.去掉某个字符被Js赋予的特殊的功能
              2.为某些字符添加特殊的功能
	      \n  换行  \t  制表符  \r  换行
````

## 模板字符串

````js
模板字符串：就是定义字符中的一种新的语法
     
        定义字符串中使用 引号
          引号定义的字符串不能进行定义
          引号定义的字符串中的变量的值不能被解析出来

          模板字符串的定义语法
          是用反引号定义内容`
          可以换行定义字符串的内容
          模板字符串可以解析变量的值，需要使用${变量名}

	  	  字符串获取长度.length 
````

## 数据类型转换

````js
 不同的运算符有不同的运算符规则，为了能进行准确的运算，
   我们需要对数据类型进行转换

   ！默认只有相同的数据才可以进行转换，在进行某些计算时，Js会自动进行转换，根据运算符进行转换
     数据类型的转换有两种：
    1.隐式转换
        js自动进行的转换
	在进行数学运算时(除+ += ，因为+ += 优先进行字符串拼接操作)，
	如果参与运算的数据都不是number类型，就会触发数据类型的隐式转换
	当一个数据作为条件表达式时，会触发布尔值的隐式转换
	当进行+ += 操作时，如果有一个是字符串，那么不是字符串的数据就会触发字符串的隐式转换

	绝大多数的时候，JS的隐式转换都可以帮我们正确的进行计算
	唯独在进行+ += 运算时 要特别注意，是要进行字符串的拼接还是数学的运算
    2.强制转换
    程序员通过Number(),String(),Boolean()...方法进行的转换

````

## 数值的提取

````js
 parseInt()
   	作用：只能提取整数
	  是一个字符串中，从左往右一次提取整数，直到遇见第一个非数字结束提取
   parseFloat()
   	作用：提取小数
	  是一个字符串中，从左往右一次提取小数，直到遇见第一个非数字结束提取
自增自减运算符的扩展
	++ 自增
        前自增 ++a
          先自增再运算
        后自增 a++
          先运算再自增
````

## 运算符的扩展

````js
比较运算符
   > < >= <= == !=

    ===	全等比较
   运算规则，比较两个数据的值于类型是否完全相等，
   相同返回true，否则返回false
   与 == 的区别 仅判断值不判断类型

   ！== 不全等
    运算规则，判断两个数的数值和类型至少有一个不同
    如果至少有一个不同就返回true否则返回false
     === 更多的时候是为了判断，真的true或者真的false
    不是经过转换后的等效于true或false的值


   逻辑运算符

     比较运算符：仅能表示一个条件
     逻辑运算的作用：用于多个条件进行逻辑判断

     && 逻辑于   找假
       运算规则：如果参与的运算的两个操作数，同时
       为true，最终的结果就是true（只要有一个false结果就是false）

     || 逻辑非	 找真
       运算规则：如果参与的运算的两个操作数只要有一个true结果就是true

     ！ 逻辑非
       运算规则取反

	true再参加数学运算时，会进行隐式转换，转换成1

     逻辑短路
	 是在进行逻辑运算时，左侧已经决定了整个式子的结果时，js的一种特殊处理方式

     根据逻辑或的运算规则
     	 由于左侧已经决定了整个式子结果（只要有一个true结果就是true）
	 右侧不会再去运算，这种现象就称之为逻辑或短路

     根据逻辑非的运算规则
	 由于左侧的已经决定了整个式子的结果（只要有一个false结果就是false）
	 右侧不会再去运算，这种现象称之为逻辑于短路

     三元运算符
     	 语法：表达式1？表达式2：表达式3
	 运算规则：
	    首先判断表达式1是否成立，成立就执行表达式2不成立就执行表达式3
	    三元运算补就是简单的if双分支，一般只有if的代码块只有一条语句时
	    才可以使用三元运算符进行简化
````

## switch分支

````js
switch也是一种分支结构。
    switch后的变量与case后的值是全等比较
    语法：

    	switch(){
                case:值1
                    语句块1
                break;
                case:值2
                    语句块2
                break;
                case:值3
                    语句块3
                break;
                default:
                    缺省语句块1
            }

    执行逻辑：
    	根据switch后的变量于case后的值匹配情况将程序转向不同的语句块执行
	当某个语句块执行结束后，遇到了break，就跳出整个switch结构，继续
	执行代码，当所有的case的值都不匹配，就执行缺省语句块，case可以
	有多个，default也可以省略
    switch的穿透：
    	每个语句块后的break也是可以省略的，如果省略，会继续执行其后的代码
	块，不会判断其后的case值，直接执行
````

## if于switch的区别

````js
if分支
    	if条件可以表示一个范围，也可以表示一个具体的值
    swith分支
    	条件是一个具体的值，如果时对一个变量和具体值的比较，
	我们推荐使用switch，switch对于处理这种情况效率更高
````

## for循环

````js
循环：用于重复执行一段代码

    语法：

    	for(循环变量初始化;表达式;变量修改){
		执行语句
	}

    执行逻辑：
    	循环变量初始化	表达式	循环控制变量	循环三要素
	1.循环变量初始化，仅执行一次
	2.判断表达式是否成立，如果不成立直接结束循环结构执行其后的代码
	3.如果成立就执行循环体
	4.循环体里面的代码执行结束后再来执行循环控制的变量修改
	5.依次循环2 3 4次代码，直到表达式不成立


    箩筐思想：
    	由用户输入五个整数，对这几个数求和
	定义一个变量用于累加

	    let sum = 0;
	    for (let i = 0; i < 6; i++) {

                let n = Number(prompt());
                sum += n;

           }
            console.log(sum); 

	1.在循环外定义一个变量
	2.再循环之内将需要累加的数据加到这个变量上
	3.再循环结束后得到累加的结果

    注意：
    	累加变量要放在循环之外
	如果是求和就给初值赋值为0
	如果是求乘需要个初值赋值为1
	如果是字符串拼接需要个初值赋值为空字符串
````

## while循环

````js
while循环就是for循环的一种变型

    	while(表达式){
                //循环体
            }

	执行逻辑：
    	    判断表达式是否成立，如果不成立就结束循环，继续其后的代码执行
	    如果成立就执行循环体，循环体执行结束后，再判断表达式是否成立
	    依次规律循环往复的执行，直到表达式不成立

    while就是for循环的一个变型，
        语法中仅规定了表达式，另外两个要素需要我们自己不足

    do...while循环

	do{
                //循环体
            }while(表达式)

        执行逻辑：
            先执行依次循环体
            循环体执行结束后再判断循环体
            如果不成立就结束do..while循环结构
            如果成立就再次执行循环体，循环结束后再来判断表达式
            依次规律，循环往复的执行，直到表达式不成立
        
do...while循环与while循环的区别
	while循环先判断后执行
	do...while循环先执行一次后再判断

	continue  继续
            continue与break用于控制循环的，所以必须放在循环里
            continue用于跳过本次循环，继续下一次循环
	    当循环中某次执行到continue时，本次循环其后的代码将会被跳过
	break
            当某次循环执行到了break时，会直接结束循环
````

## for循环与while循环的区别

	for循环
	        for循环用于解决根据次数进行循环
	        循环次数已知
	    while循环
	         while循环用于根据条件循环，
	         循环次数未知

## 数组

### 简介

	数组就是一组数据的有序集合，能够储存多个数据
	数组又三个要素
	    元素：数组中的每一个数据就是数组的元素
	    下标：数组中的元素的序号，序号是从0开始的
	    数组的长度：数组中元素的个数就是数组的长度，读取数组的长度为 数组名.length

### 定义

````js
格式：
	    数组名[数值1，数值2，...]
	    数组中的数据可以是任何类型
	    此种定义的方式：定义数组的同时赋值，属于称之为初始化数组
            let arr = [20, 30, 40, 50];
            定义一个空数组
	    let arr1 = [];

````

## 数组元素的操作

````js
在定义数组时使用[]
	[]不但可以定义数组，还可以对数组中的元素进行操作
	1.读取数组中的元素
	    语法：
	    	数组名[下标]
	2.修改数组元素
	    语法：
	    	数组名[下标] = 值
		如果下标不存在，就是添加数组元素
	3.读取数组的长度
	    语法：
	    	数组名.length


在定义数组的时候使用[]
	注意：数组的操作必须通过下标
	如果所读取的下标不存在，值就为undefined
	JS中数组的下标是连续的
	数组的长度与最后一个元素下标的关系是相差为1
	数组的长度-1就是最后一个元素的下标
    
    
动态的添加数组元素
	利用数组的长度添加元素
	let arr = []
	arr[arr.length] = 值
````

遍历数组

```js
历数组
	由于某个需求，需要对数组的每个元素都要访问到
	语法逻辑：
	    1.使用循环控制变量来模拟数组下标的规律
	    2.循环内将循环控制变量作为下标
		let arr = [10,20,30,40,50];
		for (i = 0;i < arr.length ;i++) {
		   console.log(arr[i]);
		 }

    反转数组
        思想逻辑：
    	1.定义一个新数组
	2.遍历数组arr，倒序遍历
	3.将arr读取到的每个元素添加到Narr中
		let Narr = []
		for(let i = arr.length-1;i>=0;i--){
			nArr[nArr.length] = arr[i];
		 }
```

## 擂台思想

````js
主要用于求数组中的最大值和最小值
	思想逻辑：
	    1.定义一个擂台变量
	    2.从下标1开始遍历数组
	    3.将遍历得到的元素与擂台变量进行比较
	    	let arr = [9, 2, 6, 8, 96, 14, 15, 23, 5];
		let max = arr[0];
		for (let i = 1; i < arr.length; i++) {
			if (arr[i] > max) {
			max = arr[i];
			}
		}
````



## 函数

### 函数的定义

````js
1.函数用用于封装代码块的的
        2.函数必须调用才能将里面的代码执行，函数的调用必须在函数名后加()
    	定义:
    	function 函数名(){
	    //代码
	}
	默认函数的定义是不会自动运行的，必须通过函数名来调用这个函数
	调用:
	  函数名{}
````

### 函数作用域

````js
函数作用域
    	作用域是变量的访问范围，在JS中，函数是用于划分作用域的
	

    全局变量和局部变量
	全局作用域：在任何函数之外的全是全局作用域
		全局变量在任何的位置都可以访问
	局部作用域(函数作用域)：在函数内部的就是局部作用域
		局部变量只能在定义他的函数内部才能访问
````

### 变量的访问规则

	默认let声明的变量，在同一个作用域不可以声明多次
	    局部作用域访问变量时遵循就近原则，首先在当前函数内
	    查找，如果没有就往上一级查找

### 函数的参数

````js
函数的参数分为实参和形参
	形参是函数定义是的参数
	    function 函数名(形参列表){

	    }
	实参是函数调用时的参数
	    函数名(实参)

	形参的本质就是函数内的一个局部变量
	形参只有内部可见外部是无法访问的
	实参与形参之间是一种赋值的关系
	实参与形参之间是按顺序传递的
````

#### 参数的作用

	形参就是在写代码时不确定数据时的一个占位符
	实参就是在函数调用时将具体的数值传递给形参的
	实参与行参就是为了让函数更具有通用性

### 函数的拓展

#### arguments关键字

	arguments就是用于解决行参的不确定问题
	arguments是JS预定义的，在函数的内部使用
	arguments会将函数调用时将传递的实参组成一个伪数组

#### return关键字

作用：将函数内部的数据返回函数调用处
	特点：
	    1.当函数的内部执行到return后就会中断函数的执行
	    2.函数内部可以有多个return，无论哪个return被执行都会中断函数
	    3.函数内部如果没有return，默认返回的是undefined
	    4.函数内部的return会将数据返回到函数的调用处，函数的调用语句就可以当成数据使用

#### 匿名函数

````js
匿名函数是没有名字的
	 function(){

	 }
	 默认匿名函数会报错，因为不写函数名就无法使用该函数的名字调用里面的函数
	 在定义里面函数时，我们就要让这个式子函数调用(函数自调用)
	 函数自调用语法：
	 (function(行参列表){

	 }(实参列表))

````

#### 函数的两种定义形式

````js
函数的定义式
		调用代码可以在定义代码之前
		function 函数名(){}
	函数的表达式
		表达式必须先定义后调用
		let 函数名 = function(){{}
````

#### 回调函数

函数的参数是函数

准备一个函数，将这个函数传入

让调用者传递一个函数进来。当异步操作执行得时候，拿到了数据。就调用传进来得函数，并把这个数据作为参数传进去

```javascript
function demo2(callback){
  let a = 10
  let b = 20
  setTimeout(()=>{
    let c = a + b
    callback(c)
  })
}

demo2(data=>{
  console.log(data)
})

//function fn(data){
  //console.log(data)
//}

//demo2(fn)
```

## 对象

### 对象的基本操作

````javascript
 创建对象
    	语法：
	{键:值,键:值,键:值...}
	值可以是任意的类型
    	
    对象的成员
    	对象中的每一个 键：值 就是对象的一个成员
	成员又可以细分为属性与方法
	    属性：如果成员的值是非函数，那么这个成员就是对象的属性
	    方法：如果成员的值是函数，哪个这个成员就是对象的方法
	let obj = {
            name:'zhangsan',
            age:20,
            sex:'男',
            以上的都是属性
            sing:function(){
                console.log('hello');
            }    
        }

    属性的操作
    	对属性的操作要通过对象.属性名
    	访问属性
	    语法：对象.属性名
	修改属性
	    语法：对象.属性名 = 值
	    如果要修改的属性名不存在，则是添加操作
	删除属性
	    语法：delete(对象.属性名)
	
    方法的操作
    	属性的本质是变量
	方法的本质是函数
	方法调用
	    对象名.方法
	添加方法
	    对象名.方法 = function(){

	    }
	删除方法
	    delete(对象名.成员名)
````

### this关键字

	this关键字是预定义的
	Js提供他的目的就是在方法内访问当前对象的其他成员

````js
this用于方法内访问当前对象的其他成员
	1.定义在对象内的方法中的this代表当前对象
	2.通过添加的方法到对象上的方法中的this代表当前对象
	3.将方法单独进行定义，再赋值给多个对象，此时的this，谁调用了就代表哪个对象
	例：
	let obj = {
            name:'zangsan',
            age:20,
            say:function(){
                console.log(this.name);
            }
        }
        say()方法被obj对象调用了，所以say方法内的this就代表的.前obj这个对象
        obj.say();
````



### 值类型与引用类型

将一个变量a赋值给另一个变量b，修改其中的一个变量
	看是否影响另一个变量，这样就可以把数据类型又划分
	为值类型与引用类型


```js
值类型：将一个变量a赋值给另一个变量b，修改其中的一个变量，
	不影响另一个变量

引用类型：复杂数据类型(Array,Object)就是引用数据类型
```
### 冒泡排序法

```js
let arr = [123, 235, 365, 345, 1253, 64, 24, 25,];
 冒泡排序法的核心代码就是相等的两个进行比较，如果一个比后面的打，便交换位置    
外层循环用于控制比较多少轮
    for (let j = 1; j < arr.length - 1; j++) {
        内层循环用于获取没有比较的最大值，并保存到后面
        for (let i = 0; i < arr.length - j; i++) {
            如果前一个值比后一个值大在，则交换位置
            if (arr[i] > arr[i + 1]) {
                let tmp;
                tmp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = tmp;

            }
        }
    }
    console.log(arr);
```
### 对象数组

	如果一个数组中的元素都是数值，那么这个数组称之为数值数组
	    如果一个数组中的元素都是对象，那么这个数组称之为对象数组

### 对象的扩展

````js
中括号访问符
	let obj = {
		name：'zhansan',age:20,sex:'man'
	}
	让浏览器输入所要查询的属性
	let key = prompt('请输入要查询的信息')
	该成员被保存到一个变量中们想要通过这个变量访问具体成员的值
	此种情况就必须使用[]访问
	对象的成员不但可以通过.访问，还可以通过[]访问符进行访问
	[]访问符的特点可以将变量解析出来作为成员名
	console.log(obj[key])
````

### in关键字，可以判断成员是否存在

	语法：
	    成员名 in 对象名

### 统计次数

````js
例：
    	let arr = ['a', 'b', 'c', 'a', 'b', 'c', 'a', 'x', 'z','e','f','a','c'];
        let obj = {};
	for(i = 0 ;i< arr.length ;i++){
            let pro = arr[i];
            先进行遍历寻找，如果这个数组下标的值存在于对象中
            就对该数组下标所对应的值进行数量累加
            if(pro in obj){
                obj[pro]++;

            如果该数组下标所对应的值不存在于对象中
            就将该数组下标的所对应的值附加给对象的键
            并且值的数量赋值为1然后遍历进行数量累加
            }else {
                obj[pro]=1;
            }
        }
        console.log(obj);
````

### 对象的遍历

````js
for(变量 in 对象){}
	执行逻辑：
	for...in在遍历对象时，会依次读取成员的键并赋值给变量，
	这个变量中保存的就是成员键
	例：
	for(let k in obj){
           k变量中保存的是键 
           如果想通过这个变量读取到对应的值，需要使用[k]
           console.log(k+':'+obj[k]);
             console.log(obj[k]);
       }
````

## 构造函数

````js
构造函数时用于批量构造对象，
        什么是构造函数，就是函数，一般如果你只是这个函数要被new
	建议将这个函数名首字母大写
	定义一个构造函数
        function Person() {
            构造函数内的this就是代表所要构造出来的那个的对象
            console.log(this);
        }
        let o = new Person();
        构造出来对象时，向这个对象添加的方式添加成员

        console.log(o);
````

## new的工作流程

````js
当我们使用new调用了一个函数时JS执行了以下几步
   	1.创建了一个空对象
	2.将这个对象赋值给this关键字
	3.通过this向这个对象添加成员
	4，将这个对象return返回
````

## 系统构造函数

	系统除了提供了Object构造函数，还提供了很多的构造函数
	    Object，Array，Function，Boolean，Number，String
	    Js几乎为每一种数据类型都提供了一种构造函数
	    每个构造函数都可以构造相应的数据对象

## 数据类型检测

````js
	typeof用于检测简单数据类型
    const num = 123
    console.log(typeOf num) // "number"
	instanceof用于检测对象与构造函数的关系
    const a = {}
    console.log(a instanceof Object) // true
	有一个构造函数构造对象的过程也称之为实例化，扽到对象
	
    Object.prototype.toString.call("jerry") // 检测数据类型 
    
	判断数组：
	新版本的js新增的方法
	Array.isArray(),用于判断数组
	let arr = []
	console.log(Array.isArray(arr))
````

## JSON格式

### JSON简介

	JSON Javascript Object Notation	Js中的对象表示法
	JSON就是近年来用于两个计算机（两种语言）之间传递的一种格式
	两台计算机之间只能传递字符串(二进制)

### 对象,数组的JSON格式

````js
传递之前是一个对象
	let obj = {
            name:'zansang',
            age:20,
            sex:'man'
        }
	为了将对象传递给另一台电脑，我们需要将这个对象转换为JSON格式
	let jsonObj = '{"name":"zhangsan","age":20,"sex":"man"}';
	格式：外面时单引号，对象的成员名要使用双引号
    
    数组的JSON的格式
	let jsonArr = '[10,20,30]';
````

### JSON.parse & JSON.stringify

````js
	JS提供了一个对象，JSON，专用于JSON相关的转换
	两台计算机之间只能传递字符串
        JSON一种数据传递的格式，本质就是一个字符串

	JSON.stringify()
		用于将数组或对象转换成为JSON格式
	JSON.parse()
		用于将JSON格式转换成为对象或数组
````

## date对象

````js
创建date对象
    	date日期时间
	1.创建时间对象
	Date是JS提供的构造函数，就是为了构造时间日期对象
	语法1：获取当前的时间对象
	    let myDate1 = new Date();
	    console.log(myDare1);
	语法2：获取过去或将来的时间对象
	    let myDate2 = new Date(1980,1,16,12,12,12);
            console.log(myDate2);
	语法3：
	    let myDate3 = new Date('1980-1-1 12:12:12');
            console.log(myDate3);

    时间格式转换
    	例：
    	let myDate = new Date();
        toLocaleDateString    获取到的日期信息    2021/4/3
        console.log(myDate.toLocaleDateString());
        toLocaleTimeString()  获取到的时间信息    上午9:52:01
        console.log(myDate.toLocaleTimeString());
        toLocaleString()      获取日期和时间信息    2021/4/3上午9:53:36
        console.log(myDate.toLocaleString());

    提取时间信息
	例：
    	let myDate1 = new Date();
	获取年份
        console.log(myDate1.getFullYear());
	获取月份
        console.log(myDate1.getMonth());
	获取日期
        console.log(myDate1.getDate());
	获取天数
        console.log(myDate1.getDay());
	获取小时
        console.log(myDate1.getHours());
	获取分钟
        console.log(myDate1.getMinutes());
	获取秒数
        console.log(myDate1.getSeconds());

        getTime用于获取时间戳
        时间戳：
            从时间原点到时间对象所经历过的毫秒数
            时间原点：认为的规定从1970.1.1 0:0:0作为计算机世界的时间原点
            console.log(myDate1.getTime());

	时间函数的练习：
	需求封装一个函数，返回当前的日期与时间信息
        格式：2021-4-3 10:02:34
````

````js
function myTime() {
            let myDate1 = new Date();
            let year = myDate1.getFullYear();
            let month = String(myDate1.getMonth() + 1).padStart(2,'0');
            let date = String(myDate1.getDate()).padStart(2,'0');
            let h = String(myDate1.getHours()).padStart(2,'0');
            let m = String(myDate1.getMinutes()).padStart(2,'0');
            let s = String(myDate1.getSeconds()).padStart(2,'0');


            2.进行拼接
            let str = `${year}-${month}-${date} ${h}:${m}:${s}` 
            return str;
        }

        let ret = myTime();
        console.log(ret);
        
        padStart(总位数，填充的内容)在前面填充字符
        padEnd(总位数，填充的内容)在后面填充字符
        let str = '10';
        let a = str.padStart(4,'a');
````

## String对象

### 字符串的恒定性

	数组可以通过下标访问其中的元素
	字符串也可以看成一个由多个字符组成的一个序列
	所以字符串也可以使用下标访问其中的某个字符，但是不能进行修改

### 字符串的常用操作

````js
	indexof()用于查找字符出现的位置，如果查找不到返回-1
	
	substr(开始位置，读取长度)用于截取字符串，
    如果省略第二个参数，表示截取从开始位置到最后
    
	substring(开始位置，读取到的位置的下标)用于截取字符串，
    
    split(分隔符)，使用分隔符将字符串分割成数组并返回
	
    concat('内容')拼接字符串
	
    replace(查找内容，替换内容)用于替换字符串,只能提出第一个,替换全部需要需使用正则 /g
    replaceAll() 用于提出字符串,能提出全部
    
    includes(查找的内容) 查看是否包含这个内容，返回false或true
    
    test(查看的内容) 方法用于检测一个字符串是否匹配某个格式，是这个格式就返回true，不是则返回false
    
    toFixed(4) 保留小数点后4位
    
    toUpperCase() 用于把字符串转换为大写。
    
    toLowerCase() 用于把字符串转换为小写。
    
    lastIndexOf() 查找字符最后一个出现的位置
    
    repeat(重复的次数) 返回一个新字符串 可以重复字符串,不能为负数或Infinity

	padStart(6, '!') 用于头部补全，第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串。
	padEnd(6, '!')  用于尾部补全，第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串。
    
	trim() 消除字符串两端空格
    trimStart() 消除字符串头部空格
    trimEnd() 消除字符串尾部空格
    
    search() 用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。如果查找不到返回-1
    slice() 提取字符串的片断，并在新的字符串中返回被提取的部分。
    
````

### 字符串操作练习案例

````js
let url = 'http://www.xxx.com/admin/index.js?name=zhangsan&age=20&sex=男'
        先创建一个空对象
        let obj = {}
        然后查找字符串
        let pos = url.indexOf('?') +1;
        查找到所要的元素后进行截取
        let strLong = url.substr(pos);
        将截取到的自符串分割后得到一个长数组
        let arrLong = strLong.split('&');
        然后对数组进行遍历
        for(let i = 0;i<arrLong.length;i++){
            将遍历的到的数组再次进行分隔得到的数组赋值给arr
            let arr = arrLong[i].split('=');
            将arr的0下标作为对象的键，1下标作为对象的值
            obj[arr[0]] = arr[1];
        }
        输出对象
        console.log(obj);
````

## Array对象

### 数组常用方法

````js
	concat()链接两个数组
	join(连接符)使用连接符拼接数组中的元素并返回
    	例：
	let arr1 = ['one','two','three'];
        let arr = arr1.join('-');
        console.log(arr);

	let arr = [10,20,30,40]

	pop()	从数组尾部删除一个元素，并键删除的元素返回
	例：
	let del = arr.pop();
        console.log(arr);
        console.log(del);

	push()	向数组的尾部追加一个元素并返回数组的长度
	例：
	let len = arr.push(50);
        console.log(arr);
        console.log(len);

	shift()	从数组头部删除一个元素，并将删除的元素返回
	例：
	let del = arr.shift();
        console.log(arr);
        console.log(del);

	unshift()向头部插入一个元素并返回数组的长度
	例：
	let len = arr.unshift(1);
        console.log(arr);
        console.log(len);

	从数组中间删除或插入元素
	splice(开始位置，删除个数，新元素列表)
	在数组中从开始位置 删除指定个数的元素 也可以在删除的位置插入新的元素
	例：
	let  del = arr.splice(1,0,33,44,55,66,77,88,99);
        console.log(del);
        console.log(arr);


	reverse() 将数组元素的次序反转
    数组扁平化
    const arr = [1,[2,3],[4,5],6,[7,[8]]]
    arr.flat(Infinity)

 	slice() 选择数组的一部分，并返回新数组。
````

### 数组排序

````js
	//sort()用于实现数组的排序
	//sort默认的排序不是按照数值的大小进行排序，是根据字符进行排序
	//如果想要实现按照值的大小进行排序，必须通过以下几步
	//1.必须为sort()方法提供一个函数作为实参
	//2.被传递的函数必须由两个形参
	//3.如果想实现按值的大小进行排序，就return第一个参数-第二个参数

	//例：
	function fun(n1,n2) {
            return n1-n2; //从小到大排序
            return n2-n1;// 从大到小排序
        }
	let arr = [20,30,29,10,5,94,2,95,49];
        let a = arr.sort(fun);
        console.log(a);
````

### 数据去重练习案例

````js
//方法1：
	let arr = [10,20,30,30,40,10,20,30,4,10,20,30,4,];
        for(let i = arr.length-1;i>=0;i--){
		end = arr[i];
		for(let j=0;j<arr.length;j++){
                  if(arr[j]==end && i != j){
                     arr.splice(i,1);
                     break;
                 }
             }
         }
         console.log(arr);
	//方法2：
        //es6新增的方法，有兼容问题
        let arr = [10,20,30,40,10,20,30,4,10,20,30,4,6];
         //Set()es6继承函数
        let s = new Set(arr);
        console.log(s);
````



## 作用域链

作用域链：就是用于作用域形成的一个链条
    链式查找：当一个作用域内访问一个变量时，如果当前作用域没有这个变量，则向上找

```javascript
	块级作用域
	全局作用域：
    在函数之外
    函数（局部）作用域：
    在函数之内

    在es6中又新增了一种块级作用域
    只要语法中带有{}，这个{}就可以划分一个作用域
```
## 基本包装对象

````js

	只要是对象就可以通过.来操作,.运算符是对象的专属
        function Person() {
            
        }
        通过typeof可以查看到obj是一个对象
        let obj = new Person();
        既然是对象就可以通过.来向这个对象添加成员
        obj.name = "zhagnsan"; 

	JS的基本包装对象
	当Js进行.操作时，如果.前面不是对象，那么Js会将这个数据
        临时转换为对象，再在这个临时的对象上进行.操作，所以不是对象的数据使用.使用
        .操作不会报错,当本次.操作结束之后会将这个临时对象删除
        上面的语句类似于以下代码：
        let n = 10;
        n.xx = 'hello'
        let tmp = new Number (10);
        tmp.xx = 'hello'
        删除tmp对象

	这就是临时包装对象
        几乎所有的简单数据类型都是临时包装对象，排除undefined，null
        每种简单数据类型Js都为其提供了对应的构造函数，
        但是null和undefined没有对应的构造函数
````

# weiAPI

## WebAPI是什么

	Application Programming Interface(应用程序接口)，简称为接口
	    WebAPI，指的是实现网页功能的一堆函数和方法，实现网页功能的接口

## BOM和DOM

BOM
    Browser Object Model (浏览器对象模型)
    就是把浏览器当作一个对象来处理，调用它的属性和方法就能实现浏览器的对应功能

 DOM
    Document Object Model (文档对象模型)
    就是把网页内容当作一个对象来处理，调用他的属性和方法就能实现网页内容对应的功能

## DOM树

````js
	他是一个形容网页内容的名词
    网页内容组合起来就像是一个树状结构所以叫做DOM树
    网页的所有内容都是在document文档里面
    网页的内容不只是包含标签，标签里的属性，文字，这些也叫网页内容
    专业的说法为网页节点
    节点的类型
    	元素节点：标签
	属性节点：属性
	文本节点: 文字内容
	注释节点
	。。。。
````

## 根据id获取标签

````js
	变量名可以随便写
        如果找到了，那么久返回这个标签
        如果没找到，返回null
        let box = document.getElementById('box');
        let box = document.getElementById('box2');
        console.log(box);
        console.log(box2);

	浏览器为我们做了一个优化
        可以在Js里直接使用标签的id当变量来用，不会报错
        不推荐使用，因为他并不是标准语法
````

## 根据类名获取一堆标签

````js
	返回值是一个为数组，找到几个元素就返回长度为几的为数组
        伪数组：也有下边、长度、元素，但是没有真数组的那些方法，例如push
        let list = document.getElementsByTagName('div');
        list.push()//会报错，因为伪数组没有这些方法
        console.log(list);

	如果找不到也会返回一个伪数组只不过是长度为0的空数组
        let list2 = document.getElementsByTagsName('span');

	根据类名获取元素
        返回的也是伪数组，找不到就得到长度为0的空数组
````

## script标签的位置

````js
这里有一大段非常消耗时间的代码
        目前阶段如果在head里可能会获取不到文档的元素
        哪怕是写在最后，浏览器也会强制写到body前

        Vue 会有一套工具叫ESLint，工具
        会帮我们检查语法是否规范，如果不规范就报错
        其中他有一套标准语法规范，标准语法规范里就建议每局代码后面不加分号
        还有别的规范：例如声明了变量，但是没使用，也会报错
        Js里的字符串建议用的是单引号
````

## H5新增的查找元素的方法

````js
H5新增的方法就是为了方便用css选择器来找到元素
	通过id寻找
        let btn = document.querySelector('#btn');
        console.log(btn);

        通过类来找
        这个方法有个特点，永远只会匹配第一个
        如果找不到就得到null
        let my = documen.querySelector('.my');
        console.log(my);

        另外一个专门找一个堆元素的方法
        他返回的是一个伪数组，如果找不到得到的就是长度为0的空数组
        let myList = document.querySelectorAll('.my');

    获取特殊元素
    	像body，html，head这些特殊元素不用自己找，Js已经封装好了
        let body = document.querySelect('body');
        console.log(nody);

        获取body元素
        console.log(document.body);

        获取head元素
        console.log(document.head);

        获取html元素
        console.log(document.documentElement);

        获取document元素
        console.log(document);
````

##  操作属性

````js
		<a href="http://www.baodi.com"></a>
    	使用Js代码修改a标签的跳转
        let alink = document.querySelector('a');


        因为他现在返回到的不是对象，而是一个伪数组，所以后面改href和target那些没效果
        如过用的是document.querySelectorAll需要使用下标
        let alink = document.querySelectorAll('a')[0];

        改跳转就是改herf属性，对于标签他的本质是对象，但是会直接打印出标签
        把标签当对象来处理，他有什么属性就直接点什么属性来修改即可
        alink.href = 'http://itheima.cn';
        alink.id = 'xxx';
        alink.target = '_blank';
        console.log(alink);
````

## 事件

````js
	作用就是让网页具备交互能力，也就是用户在网页上做一个操作，网页有一些反应就叫交互

	事件其实就是说用户在网页上做了什么操作，然后网页有什么反应，这就叫做事件

	事件有三要素
	    1.事件源
	    	真正触发事件的元素，用户操作的是那个元素
	    2.事件类型：
	    	用户做的操作是什么，常见的有：点击，双击，鼠标移动，键盘按下
	    3.响应程序
	    	就是指出现什么效果
	点击事件
		元素.onclick = function(){}
````

## innerText和innerHTML

````javascript
	innerText
    	获取双标签内的文字
	也可以设置，设置就是改变双标签的文字内容

	他们都可以获取双标签里的内容，但是innerText只获取文本，innerHTML获取的内容
	还带有标签(相当于是获取双标签内所有内容)

	innerText在很久以前并不是一个标准语法，innerHTML一直都是标准语法
	赋值的区别
	    innerText赋值，就算给的有标签，也会把标签当作文本来显示
	    innerHTML赋值，给的是标签，就会把标签解析成dom元素

````

## 焦点事件

```js
焦点事件一般是给文本框，密码框，文本域来使用的
    focus	获得焦点事件
    blur	失去焦点事件
```

## 获取表单元素的值

属性叫：value
	就是取到这个表单元素的值，也可以修改

	单标签的表单元素只能用value获取元素的值
	双标签可以使用innerText和innerHTML来获取元素的值

## 字符串在开发中常用的方法

````js
	indexOf()
    	查找字符出现的位置
    toUpperCase()
    	转大写
    toLowerCase()
    	转小写
    trim()
    	去除两边空格
    substr()
    	字符串截取
    split()
    	切割成数组
    replace()
	替换
````

## 事件里的this

	函数如果直接调用，那么函数里的this代表window对象(暂时记住)
	函数如果说被某个对象当方法调用，那么这个this就是当前调用的对象(谁调用this就是谁)
	new关键字调用的构造函数那么里面的this是new创建出来的新对象
	事件里的this：谁绑定了这个事件，那么this就是谁（暂时理解为谁触发事件，this就是谁（这句话不严谨））

## 表单元素的一些属性

````js
	value：获取表单元素的值，例如可以拿到文本框输入的内容，也可以设置
	以下三个属性都叫布尔类型的属性，也就是只要写上就有效果，不写就没有对应的效果
	checked：
	    设置复选框或单选框的默认选中
	disabled：
	    禁用
	selected
	    设置下拉框选项的默认选中
````

## 鼠标移入和鼠标移出事件

	mouseover	鼠标移入
	mouseout	 鼠标移出

## onerror数据加载错误时触发

当视频的媒体数据或图片数据加载期间发生错误时执行

```html
<img src="image.gif" onerror="alert('图片不能被加载。')">
<video onerror="myFunction()">
```



## 操作自定义属性

````js
	元素.getAttribute(属性名)
	    获取自定义属性，他其实是获取任意行内属性，但是一般用来获取自定义的，因为自带属性用点语法更方便
	元素.setAttribute('属性名','属性值')
	    设置行内属性
	元素.removeAttribute('属性名')
	    删除任意行内属性
````

## 排他思想

	就是一个解决问题的思路，不是新的语法
	核心思想：让其他元素回复默认样式，让自己特殊

## 获取父子节点

````js
网页的每个内容都叫节点
	节点有：元素节点，文本节点，属性节点，注释节点等
	如何用代码获取父节点，子节点
	parentNode
	    获取父节点
	childNodes
	    获取子节点，是一个伪数组
	children
	    获取子元素，是一个伪数组，只包含元素(标签)
	  
    parentNode和parentElement
    他们都是找父元素，但是parentNode最高能找到document,parentElement最高只能找到html
	原因：document不是标签但是属于节点，html是标签，而parentElement是找标签
````

## 创建元素节点并添加

````js
语法：
    	document.createElement('标签名')
	想创建什么标签，就写什么标签名
	默认创建出来的元素的值是空，自己修改里面的内容
	创建好后只在内存中显示，想要添加到页面中就要成为页面中某个元素的子元素
    添加一个子元素
	元素.appendChild(元素对象)
````

## 三种常见添加元素方式的对比

````js
 document.write	最不常用
	缺点：
    	    必须严格控制位置才能在想要的地方添加内容，否则默认都是在body里
	    如果这句话西俄在要动态添加元素，会造成整个页面丢失
    document.createElement	常用
	优点：
    	    可以添加到任意位置里，不会覆盖原有的内容
	缺点：
	    如果创建的元素里包含多个子元素，就会比较麻烦
    document.innerHTML		常用
	优点：
	    如果创建多个子元素就会比较方便，只要进行字符串拼接就行了
	缺点：
	    会覆盖原本的内容如果不想覆盖用+=(其实本质上也有覆盖)
	    即使用+=也可能导致原来的元素事件丢失

    解释innerHTML用+=也是覆盖
	因为+=本质上也是进行重新赋值

    innerHTML大量直接+=耗性能
    	如果用innerHTML的+=，虽然能添加元素，但是如果写在循环里，循环多少次
	就会覆盖多少次，那么就会频繁的操作dom，这样极其消耗性能
	解决办法，用一个变量先拼接好内容，再循环完了之后，直接一次性赋值个innerHTML
````

## 删除元素

````js
语法：
	    父元素.removeChild(被删除的元素)
	    以上是之前标准就有的语法，所以所有浏览器都可以用
	    在最新的标准里允许自己删除
	    元素.remove()
	    但是有兼容问题，老浏览器不支持
````

## a标签不跳转

语法：``<a href="javascript:"></a>``

## 克隆元素

````js
语法：
	cloneNode()
	    如果不传或者传入false，代表浅克隆
	    如果传true，代表深克隆
	浅克隆和深克隆的共同点：
	    都是克隆标签本身，也就是说标签行内有什么，它就克隆什么 
	    都不包含JS添加的事件，行内事件包含(因为行内是写在标签本身的)
	浅克隆和深克隆的区别
	    在于克不克隆子节点，浅克隆不包含子节点，深克隆包含子节点
````

## 双击事件

dblclick

## 查找兄弟元素

````js
	查找上一个
	找节点	previousSibling
	找元素	precioisElementSibling,如果没有上一个兄弟元素就返回null
	查找下一个
	找节点	nextSibling
	找元素	nextElementSibling，如果没有下一个兄弟元素就返回null
````

## insertBefor

````js
	作用：也是添加子元素
	跟appendChild的区别：appendChild永远只能添加在最后面，而insertBefor可以指定位置
	语法：
	     insertBefore
	     参数1：要插入的新元素
	     参数2：在那个元素的前面
	 如果我要插入到某个元素的后面呢？
	     其实就是插入到这个元素的下一个兄弟元素的前面
	 如果我要保证永远在第一个呢？
	     就插入到下标0的子元素的前面
````

##  appedChild和insertBefore细节

appendChild和insertBefore插入的如果是已经存在的元素，那么相当于是移动这个元素

## 节点的三大特征

	nodeType		 节点类型，通过这个属性可以判断节点是标签还是文本，注释等
	nodeValue		节点值
	nodeName	       节点名
	获取属性节点	    元素.attributes，里面就有所有的属性节点

## 注册事件的另一种方法

````js
	以前的注册事件语法

	元素.on事件名 = 函数

	以前注册事件的语法，我们称之为0级事件

	现在的注册事件叫2级事件，语法为：
	元素.addEventListener('事件名',函数)

	这里的0级、2级其实指的是DOM的版本，分别对应DOM level0  DOM level2
	所以也简称为L0事件，L2事件
	事件名不用加on

	跟0级事件的区别：
	    0级事件对于同一个事件只能绑定一次，后面的会覆盖前面的
	    2级事件对于同一个事件能绑定多次，不会覆盖，只会依次调用
	这种addEventListener的形式有兼容问题，IE8和之前的浏览器不支持

	IE8和之前的浏览器也有2级事件，但是是IE自己弄出来的叫addchEvent
	这个方法早就被微软自己抛弃了，IE11都不支持它了
	语法：
		btn.attachEvent('onclick', function () {
			alert('被点1')
		})
````

## 删除事件

	用哪种方式添加的事件，就要用它对应的删除方法，例如我用0级事件绑定的，就要用0级的方式去移除，不能用2级的方式移除
	注册2级事件时，如果用的是匿名函数则无法删除
	删除0级元素的语法
	    元素.事件名 = null
	
	删除2级事件的语法
	元素.removeEventListener()
	匿名函数添加的2级事件，无法移除
	
	删除IE的添加2级事件语法
	元素.detachEvent('on事件名', 函数名)

## 事件流

````js
	指的是一次事件触发后，事件的完整流动过程(或者叫事件的完整调用过程)，所以叫做事件流
	事件的三个阶段
	    捕获阶段	从document一级一级的往下直到真正触发事件的元素(直接到目标元素)
	    目标阶段	就是真正触发事件的元素
	    冒泡阶段	从目标一级一级的往上到document
          
       /*如果以后面试遇到这个问题怎么说？（面试可能问：说一下事件流）
    	事件流一共分为三个阶段，分别为：捕获阶段，目标阶段，冒泡阶段
	先从捕获开始，捕获就是指从document一级一级往下直到找到真正触发事件的元素
	目标就是真正触发事件的元素，然后一级一级往上直到document就是冒泡*/
````

## 用代码展示事件捕获

	需要使用addEventListener添加事件才能看到，并且需要给这个方法加第三个参数，给一个true代表捕获
	语法：元素.addEventListener('事件名', 函数, true) // 传入true才代表事件捕获
	细节：不管是捕获还是冒泡，都只触发同名事件

## 事件冒泡

	事件冒泡默认存在，意思是你不用写任意特殊的代码，他都存在
	注意，哪怕目标灭有加事件，事件的流动过程依旧存在
	1.只触发同名事件
	2.不管绑没绑定事件，事件流动一直都存在，值时不绑定事件就不触发而已
	但是，事件的流动依旧存在

## 事件对象

	事件对象本质是一个对象，因为它包含了事件触发时的相关信息，就叫事件对象
	如何获取到这个对象：
	    在事件绑定的函数里，写一个形参，那么这个形参就是事件对象
	    形参的名字可以随便写，但是规范的写法时event，ev，e

## 事件对象的兼容

通过形参可以获取事件对象，但是这种获取方法，在IE8和之前的浏览器不支持
	IE8支持用window.event拿到事件对象

````js
	兼容语法：
	元素.onclick = function (e) {
	
		 e = e || window.event
	    
		 console.log(e)
	}

````

## 逻辑运算符的短路

	对于&&而言，左边为false就短路
	对于||而言，左边为true就短路
	短路：不执行右边的代码
	逻辑运算符的结果跟短没短路有关，如果短路了，
	结果就是左边式子的结果，如果每段路，就是右边式子的结果	

## 事件对象里的eventPhase属性

	phase是阶段的意思
	    所以e.eventPhase的得到的时他所处的事件流的阶段
	    1-捕获	 2-目标 	3-冒泡

## 阻止事件流动

事件对象.stopPropagarion()阻止事件流动

E8和之前的浏览器，只有冒泡没有捕获
    	因为事件捕获要用addEventListener而且第三个参数传入true才能看到
    但是IE8和之前连这个方法都不支持
    所有意味着它只有冒泡
    IE8不支持e.stopPropagation()只支持e.cancelBubble = true

## 获取事件源

	事件源：真正触发事件的元素(换句话说就是获取目标元素)
	语法：事件.target

## 事件对象里的target,currentTarget,this的说明

target得到目标元素，也就是真正触发事件的元素

currentTarget和this他们都是同一个东西，只是写法不一样，代表的时当前事件绑定的元素

currentTarget有兼容问题，IE8不支持，IE8只支持target和this,所有没必要用currentTarget，用this即可

## 事件委托

简单来说:就是想给某个元素加的事件，加到它的父级元素身上
	好处：节约内存，动态的添加子元素也会有事件

利用的原理：
	    利用的事件冒泡，子元素触发的事件，一定冒泡到父元素身上，
	    所以相当于给所有的子元素都加了

````js
但是一般情况下：可能需要限制哪些子元素触发，所以要拿到e.target做判断
	例如：

	父元素.on事件名 = function (e) { 
		 e = e || window.event
		if (e.target.特征 == 某个值) {
		   // 才触发
		}
	}

	// 例：
	ul.onclick = function (e) {
    
		 e = e || window.event
		if (e.target.tagName == 'LI') {
        
		    // 才触发代码
		 }
	}

	// 如果以后希望是满足某个类才触发，用className
	ul.onclick = function (e) {
    
		  e = e || window.event
		  if (e.target.className.indexOf('类名') != -1) {
        
		   // 才触发代码
		}
	}
````

## 阻止默认行为

````js
很多元素默认就有事件，例如a默认就有点击事件，但他点击事件默认行为是跳转
	所以如果不想让它执行他默认的行为，就可以e.preventDefailt()阻止事件默认行为
	也可以在事件里return false阻止默认行为
	但是e.preventDefault()可以写在任意位置，而return false要写在最后

    右键菜单事件	contextmenu

	document.addEventListener('contextmenu', function (e) {
		阻止事件默认行为
		它的默认行为是弹出菜单，我阻止默认行为就是阻止了弹出菜单
		e.preventDefault()
	})
````

## 选中开始事件selectstart	

````js
开始选中时会触发的事件
	document.addEventListener('selectstart', function (e) {
		阻止事件默认行为
      		它的默认行为是选中，所以我阻止默认行为就是阻止了选中
		e.preventDefault()
	})
````

## 事件对象，鼠标事件

	鼠标事件里的事件对象有哪些信息，主要学这个是为了学触发事件时，鼠标的坐标位置
	e.screenX,e.screenY:获得的是鼠标相对于屏幕左上角的位置
	e.clientX,e.slientY:获得的是鼠标相对于可是区域左上角的位置
	e.pageX,e.pageY:获得的是鼠标相对于页面左上角的位置

## 鼠标移动事件：mousemove

## 键盘事件

要按键盘触发
	keydown：鼠标按下事件，不区分大小写，同意当大写，任意键都会触发
	keypress：鼠标按下事件，区分大小写，只能触发输入内容的键，不会触发功能键
	keyup：鼠标弹起事件

## 事件对象-键盘信息

就是获取到用户按下的是哪个键
	语法：	e.keyCode
	这儿离获取的是键盘按下的键对应的ASCII码值
	13代表回车

## 定时器-setInterval

可以每隔一段事件执行一段代码
	语法：setInterval('执行的代码'，间隔时间)
	执行的代码可以是字符串也可以是一个回调函数，如果只有一句话，字符串很方便，如果多句要传入函数

	间隔时间，单位是毫秒

## 如何关闭定时器

用clearInterval传入定时器的id
	定时器的id怎么来？开去定时器的时候会有个返回值，返回值就是他的id

##   如何保证只有一个定时器

思想：开启新的定时器之前，先关掉上一个定时器

````js
例如：
	let timerID
	document.querySelector('#start').onclick = function () {

	开新定时器之前把原来的定时器关了
	clearInterval(timerID)
      
	开新定时器
	timerID = setInterval(function () {

		console.log('执行了')
		}, 1000)

	}
````

## 定时器-setTimeout

用法和setInterval一模一样
	区别：
	    setInterval只要不写代码停止，就会每个一段时间自动调用
	    setTimeout只会调用一次，他就相当于一个定制炸弹，炸完就没了
	使用clearTimeout(定时器的id)关闭定时器

## 时间换算算法

````js
把毫秒先转成秒  总毫秒 / 1000
	 算出天：parseInt(秒 / 60 / 60 / 24)
	let day = parseInt(timestamp / 60 / 60 / 24)
	 算出时：parseInt(秒 / 60 / 60 % 24)
	let hour = parseInt(timestamp / 60 / 60 % 24)
	 算出分： parseInt(秒 / 60 % 60) 
	 let min = parseInt(timestamp / 60 % 60)
	 算出秒
	let sec = parseInt(timestamp % 60)
````

## offset家族

````js
offsetWidth和offsetHeight获取的是盒子实际占用的宽高
	offsetLeft和offsetTop获取的是盒子到定位元素所参照的父级元素的距离
	offsetParent是获得定位参照的父元素
	他们都是只读的也就是只能读取，不饿能修改

    获取相对于盒子自身的x，y
    相对于自身x = e.pageX - 自身.offsetLift
	相对于自身x = e.pageY - 自身.offsetTop
	这个算法不通用，如果有定位父级，还要减去定位父级的offsetLeft，offsetTop以及父盒子的左右边框宽度

    offsetX和offsetY
    这两个都是事件对象的属性
	就是不用自己计算，直接获取到相对于自身的x和y
	这个在一些案例里会有bug（比如今天的放大镜案例如果用它就有bug），因为它不是标准属性，而是IE弄出来的非标准属性
	那么以后如果真的要获得相对于盒子自身的x和y，可以先用这个属性试一下，如果有bug，就自己算，没bug就直接用
````

## 鼠标按下与鼠标弹起事件

	mousedown	鼠标按下事件
	mouseup		鼠标弹起事件
	相当于就是把点击细分为按下，弹起两个事件

## client家族

	clientWidth和clientHeight就是获取可见区域的宽和高
	clientleft和clientTop获得的就是左，上边框的框度

## 获取浏览器的可见区域

window.innerWidth

window.innerHeight

## 模拟响应式布局

	resize事件：当尺寸发生改变会触发
	如果要监听浏览器发生尺寸改变，那么就写window.onresize

## scroll家族

```html
scrollWidth和scrollHeight
获取的是内容实际占用的宽和高

scrollLeft和scrollTop
或缺的是左边(上边)滚出去的距离

他是可以设置的，设置多少就往对应的方向滚出去多少
如何保证一定能滚到最下
元素.scrollTop = 元素.scrollHeights
```

## 获取页面滚出距离

	window.pageXOffset 和 window.pageYOffset

## 滚动事件：scroll

语法：window.onscroll = function(){}
	当滚动时会触发的事件

## 滚动事件: scrollIntoView

语法:  可以滚动元素的父容器,使其滚动到元素对用户可见

```javascript
document.querySelector('#activeItemTabs')?.scrollIntoView({
    behavior: 'auto'
  })
```



## 设置页面滚动距离

	window.scroll ( ) 与`window.scrollTo()` 一致都是设置页面滚动
	参数1，往左滚出去的距离
	参数2，往上滚出去的距离
	用来设置整个页面滚出去的距离

## window对象

	window对象代表整个浏览器
	window也是JS里的顶级对象
	含义1：所有用var声明的全局变量和function声明的全局函数
	都是window的属性和方法
	含义2：不管是BOM还是DOM都是在window里面

## 预解析

	用var声明的变量会提示到所在的作用与最顶端
	注意1：只要自己作用域里声明了变量，那么这个作用域就一定是自己的，绝不会是外面的
	注意2： var a,b,c 代表同时声明三个变量，相当于写的是 var a   var b  var c
	注意3： var a = b = c = 9  代表只声明 a， b和c都是直接赋值为9（直接赋值就是给window加属性）

>AO{
>
>a:
>
>}
>
>预解析：
>
>1. 创建一个对象（执行期上下文）
>2. 把形参与变量申明赋值undefined
>3. 把形参与实参统一
>4. 找函数申明，值赋予函数体
>
>在函数执行的前一刻

## window的name属性

window对象默认就有个name属性，特点：不管它赋任何值，都会被强制转换成字符串

##  window的两个方法

	window.open（）	打开一个网页
	window.close（）	关闭一个网页

## window的事件

	load事件：等页面资源加载完毕才调用的事件
	beforeunload
		可以离开前让用户返回，只要写一个return false
		如果你打开页面，什么都没操作，他不会弹出确认框问你是否离开，直接关闭
	unload
		关闭时调用，可以保存一些数据

## 本地存储localStorage

````js
把数据存储在浏览器的一套技术
	他叫localStorage，实际开发会用来存储页面的数据
	特点：localStorage存储的数据，只要自己不删，就一直存在
	方法：
	    setItem
	    参数1：key
	    参数2：数据
	    保存到本地数据

	    getItem
	    参数key
	    根据key取出数据，会以返回值返回，如果没有这个数据得到null

	    removeItem
	    参数key
	    根据可以去删除数据

	    clear
	    无参数，全部清空
	细节：
	    它只能保存字符串数据，就算你强行存别的数据，它也会转成字符串再存
	    它时按域名为单位来保存的，只能访问本域名下的本地存储数据，
	    访问不了别的网站的本地数据
	    它大约能存5M左右的数据

````

## 会话存储sessionStorage

````js
他叫sessionStorage，用法和localStorage一模一样
	它跟localStorage唯一的区别在于：它的`会话`一旦结束数据就删除了（暂时可以理解为关闭页面）
	所以可以把它理解为是一个短命版的localStorage
	作用：保存一些临时数据，不需要永久保存的
	以后面试可能会被问说说浏览器存储技术（localStroage、sessionStorage、cookie有什么区别）
  	cookie在node阶段学
````

## 本地存储和会话存储如何存储复杂类型

	可以先把数组和对象转成JSON字符串，在存储，就可以存了
	可是取出来的还是JSON字符串，所以去除来的时候再转回JS数据即可

## location对象

````js
属性：
	href:获取网址，或者也可以设置，设置结束跳转
    origin:获取域名网址,不会或者参数
	hash：获取#和#后面的内容
	search：获取？和？后面的内容
	方法：
	assign：跳转，跟href赋值一样
	reload：刷新
	replace：跳转，不会产生历史记录
````

```javascript
<script>
        /* 
            location对象代表浏览器中的地址栏
            它有一个极其重要的属性叫href，可以获取当前的地址栏上的网址
        */
        console.log(location.href);
        //    这个属性还可以设置,设置就相当于是跳转到新的页面
        // window.open()   //这个是打开新的页面，我们自己不会跳转
        location.href = "http://www.baidu.com"//跳转
        // 大事件
        /* 
            获取hash值，#和#后面内容就叫hash值
            你也可以称之为锚点值
            总而言之，就是获取#和#后面的内容
            学vue，并且学到vue路由跳转的原理时用的
            因为它是路由跳转的
        */
        console.log(location.hash);
        //    获取传递过来的参数
        // 就是获取？和？后面的内容
        console.log(location.search);
        document.querySelector('#btn1').onclick = function () {

            location.assign('http://www.baidu.com')
            // 我们用location.href就可以了
        }


        document.querySelector('#btn2').onclick = function () {

            // 刷新
            location.reload()
        }


        document.querySelector('#btn3').onclick = function () {

            // 也是跳转，只不过不会产生历史记录，就意味着不会后退
            location.replace('http://www.baidu.com')
        }
    </script>
```



## swiper插件

	轮播图的插件（除了可以做轮播图，也可以做一屏一屏滑动的效果）
	压缩文件和未压缩的区别：
	 压缩后的文件体积小，加载就快，所以上线一定要用压缩后的版本
	 未压缩文件体积大，加载慢，但是开发中可以方便查阅源代码

## navgator对象

````js

if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
		window.location.href = "";     //手机
	} else {
		window.location.href = "";     //电脑
	}
	navigator包含浏览器的信息，所以可以用来判断是pc端还是移动端访问

````

## history对象

	这代表了浏览器里的历史记录对象
	forwad	前进
	back	后退
	go	指定前进几个或者后退几个，正数是前进，负数是后退
	你要知道有这个对象，因为后面Vue-Router路由跳转的原理用到了history的前进和后退

##  H5新增的操作类

````javascript
以前我们要操作类，不管是添加还是删除都是用calssName
	他的缺点回覆盖原本的类，所以每次如果我要加一个类都要用+=，
	每次删除一个类要重新赋值或者用replace，所以H5提供了一个更好的
	操作类的方式classList他是一个伪数组，所以它里面包含了某个元素所有的类
	方法有：
		add	添加类，如果要添加多个，用逗号隔开
		remove	删除类，如果要删除多个，用逗号隔开
		toggle	切换类，原来有这个类就删除，没有这个类就添加
		replace	替换一个类
		contains判断是否包含某个类，有得到true没有得到false

````

## 利用类来实现动画效果

````js
核心思想：先写好一个类，类里面写好动画的样式，但是默认给元素不加这个类，
	当我点击某个按钮再给他添加这个类，就有动画了
````

## H5新增的操作自定义属性

```javascript
<!-- 自定义属性，我们可以随便写属性名，如果随便写就太好跟系统属性做区分 -->
  <!-- 
      自定义属性在H5里加了一个规范，要求你在自定义属性前面加data-前缀
      例如，你的自定义属性想叫name，那么你就要写data-name
  -->
  <div class="box" data-name="刘德华" data-height="150cm" data-tizhong="120kg" data-user-login-name="admin"></div>
```

```javascript
<script>
    // 如何操作自定义属性？ getAttribute  setAttribute removeAttribute
    // 很麻烦，1. 单词多 2.也不方便一次性拿到所有自定义属性

    // 所以H5里提供了一个新的属性叫 dataset 它里面就有所有的自定义属性
    // 它里面只有按规范写的自定义属性，也就是前面要有data-前缀
    let box = document.querySelector('.box')
    // 并且在JS获取的时候会自动把data-去掉
    console.log(box.dataset)
    console.log(box.dataset.name)
    console.log(box.dataset.height)
    console.log(box.dataset.tizhong)
    // 如果data-后面还有-，会把-去掉，并且-后面的首字母大写
    // 也就是遵循驼峰命名法
    console.log(box.dataset.userLoginName)

    // 也可以修改
    box.dataset.name = '张学友'
    // 如果是不存在的就是添加，添加到行内的时候会自动在前面加data
    box.dataset.age = 16
  </script>
```



##  懒加载

自定义属性可以保存一些程序员想保存的数据
	它有一个案例就是可以用在图片懒加载里
	什么叫图片懒加载？
	就是图片不需要显示的时候先不加载图片，等它需要显示了再去加载图片
	图片懒加载可以有效提升网站的加载速度（首屏的加载速度）

## 拖拽与拖拽开始和拖拽结束

H5里新增了拖拽，拖拽起来极其方便，有些元素默认就有拖拽效果，有些元素默认不允许拖拽
	一定要拖拽加行内属性，叫 draggable="true"
	拖拽：可以让元素被拖拽
	事件：
		dragstart	拖拽开始事件
		drag		拖拽中事件
		dragend		拖拽结束事件
		dragenter	拖拽进入事件
		dragleave	拖拽离开事件
		drop		拖放事件，既要拖到范围内也要在范围内松手，才会触发的事件
		dragover	拖拽悬停事件
		每个元素默认都有dragover事件，并且这个事件的默认行为是阻止元素被拖放进来
		所以如果我们希望监听drop(拖放)事件，那么就需要先写这个事件，并且阻止事件默认行为

## 

# 3.js高级

## 3.1面对对象

### 3.1.1 四种创建对象

1.利用内置够造函数

```javascript
// 创建一个空对象
let obj1 = new Object()
obj1.name = '逸哥'
```

2.利用字面量

```javascript
let obj2 = {
            name: '华子'
 }
```

3.利用工厂函数/模式创建对象

```javascript
function getObj(name) {
            // 3.1 先创建空对象
            let Obj = new Object()
            // 3.2 给空对象赋值
            Obj.name = name
            Obj.sayHi = function (){
                console.log('老牛逼了');
            }
              // 3.3 返回创建好的对象
            return Obj;
        }
        let obj3 = getObj('我逸哥')
        obj3.sayHi()
```

4.利用new关键字加自定义够造函数

```javascript
        // 参考系统内置的够造函数new Object()
        // new关键字的作用：
        // 4.1 创建一个空对象
        // 4.2 将this指向这个对象
        // 4.3 通过this给属性赋值
        // 4.4 返回创建好的对象
        function Person(name){
            this.name = name
            this.sayHi = function(){
                console.log('来个华子');
            }
        }    
        // new 自定义够造函数名()
        let obj4 = new Person('华子哥')    
        obj4.sayHi()
```

### 3.1.2解决构造函数的内存问题

1.全局函数

```javascript
function fun() {
            console.log('这是一个寂寞的天');
        }
        // 1.创建自定义构造函数
        function Person(name) {
            this.name = name
            this.sayHi = fun
            // 将全局函数fun赋值给sayHi
        }
        // 2.实例话对象
        let huazi = new Person('华子')
        let yige = new Person('逸哥')

        huazi.sayHi()
        yige.sayHi()

        // 3.比较两个方法是否是同一个
        console.log(huazi.sayHi == yige.sayHi)

        // 4.以上做法不是很好,全局函数会带来全局变量污染
        在一个作用域中,存在多个相同名字的变量
        后面的变量会把前面的给给覆盖
        function fun() {
            console.log('下着有些伤心的雨');
        }
        fun()
```

2.全局对象

```javascript
let obj = {
            fun: function () {
                console.log('这是一个寂寞的天');
            }
        }
        // 1.创建自定义构造函数
        function Person(name) {
            this.name = name
            this.sayHi = obj.fun
            // 将全局函数fun赋值给sayHi
        }
        // 2.实例话对象
        let huazi = new Person('华子')
        let yige = new Person('逸哥')

        huazi.sayHi()
        yige.sayHi()

        // 3.比较两个方法是否是同一个
        console.log(huazi.sayHi == yige.sayHi)

        function fun() {
            console.log('下着有些伤心的雨');
        }
        fun()
```

## 3.2原型对象

### 3.2.1原型对象是什么

原型对象:每当创建一个构造函数,系统都会自动生成一个与之对应的对象,这个对象就是原型对象。

原型对象,就相当于一个公用的仓库。

解决:解决相同的方法但是内存地址不同的问题,解决内存浪费的问题,不能够带有全局污染问题

```javascript
// 1.创建构造函数
function person(name){
            this.name = name 
        }

        // 2.找到原型对象:语法
            // 构造函数名.prototype
        // console.log(person.prototype);

        // 3. 对象的本质,就是一个存储数据的结构
        // 利用点语法即可让原型中保存数据
        person.prototype.sayHi = function(){
            console.log('这是一个寂寞的天');
        }

        // 4.实例化对象
        let huazi = new person('华子')
        let yige = new person('逸哥')

        huazi.sayHi()
        yige.sayHi()
        
        // 5.方法的地址是否相同
        console.log(huazi.sayHi == yige.sayHi);//true

        // 现在哪怕在声明一个一样的对象都不会对其有影响
        function sayHi(){
            console.log('下着有些伤心的雨');
        }
```

### 3.2.2原型的三角结构

```javascript
// 1.创建构造函数
        function Person(name){
            this.name = name
        }

        // 2.给原型添加方法
        Person.prototype.sayHi = function(){
            console.log('这是一个寂寞得天');
        }

        //3. 实例化对象
        let huazi = new Person('华子')

        // 4.在构造函数中,有一个属性:prototype,指向原型
        console.dir(Person)
        // console.dir()将数据以对象格式打印

        // 5.在实例化对象,有一个属性,:__proto__,指向原型
        console.log(huazi);

        // 6.在原型对象中,有一个属性:constructor,指向构造函数
        console.log(Person.prototype);
        console.log(Person.prototype.constructor);
        // console.log(huazi.__proto__);


        // 总结:
            // 构造函数中有prototype属性,指向原型
            // 实例化对象中有__proto__属性,指向原型
            // 原型对象中有constructor,指向构造函数
```

### 3.2.3继承对象的成员

1.混入式继承：遍历父对象的所以成员赋值给子对象

```javascript
遍历对象：for in
for(let key in ponyMa){
	teacher[key] = ponyMa[key]
}
console.log(teacher);
```

2.替换原型的方式来继承对象成员

```javascript
function Son(name){
            this.name = name
        }
        Son.prototype.girls = ['teacher','student','english']
        Son.prototype = ponyMa

        // 在修改原型后被实例化的对象，则会指向修改后的对象
        let teacher = new Son('老师')
        console.log(teacher);
        // 但是，原来的原型对象中成员就无法访问
        console.log(teacher.girls);
```

3.混合式继承，遍历父对象，将父对象的所有成员添加到子构造函数的原型中

```javascript
for(let key in ponyMa){
            // 将父对象的所有成员，添加到子构造函数的原型中
            Son.prototype[key] = ponyMa[key]
        }
        let teacher = new Son('老师')
```

### 3.2.4原型链结构

```javascript
// 只要是对象，就一定有__proto__属性，只要有__proto__属性，就一定指向一个原型

        //1.创建构造函数
        function Person(name){
            this.name = name 
        }

        // 2.添加原型方法
        Person.prototype.sayHi = function (){
            console.log('这是一个寂寞的天');
        }

        // 3. 实例化
        let teacher = new Person('老师')

        // 4.原型三角关系
        console.log(Person.prototype === teacher.__proto__);
        console.log(Person.prototype.constructor === Person);

        // 5.打印原型对象
        // 只要是原型对象，就会有constructor，指向一个构造函数
        console.log(Person.prototype);

        // 6.打印原型的原型
        console.log(teacher.__proto__.__proto__);
        
        // 7.只要是原型对象，就会有constructor，指向一个构造函数
        console.log(teacher.__proto__.__proto__.constructor);
        console.log(teacher.__proto__.__proto__.constructor === Object);

        // 8.只要是构造函数，就会有prototype，指向某一个原型
        console.log(Object.prototype === teacher.__proto__.__proto__);
```

### 3.2.5修改this指向

1.利用call来修改this

	函数名.call(修改后的this,其他参数)
	
	修改后的this：你最终要指向的对象
	
	其他参数：函数本身就需要的参数

```javascript
let teacher = {
            name: '老师',
            getSum: function (num1,num2){
                console.log(`我是：${this.name} 我今年${num1+num2}岁了`);
            }
        }
        teacher.getSum(10,20)

        
        let student = {
            name:'学生'
        }
        teacher.getSum.call(student,10,6)
        //call方法的主要使用场景，让A对象借用B对象的方法
```

2.利用apply方法修改this

函数名.apply(修改后的this,数组/伪数组结构)

```javascript
let teacher = {
            name:'老师',
            getSum: function(num1,num2,num3,num4){
                console.log(num1+num2+num3+num4);
                console.log(this.name);
            }
        }
        let student = {
            name:'学生'
        }
        let arr = [1,2,3,4];
        teacher.getSum.apply(student,arr)
        let arr2 = [10,20,30,40,50]
        console.log(Math.max.apply(Math,arr2));
        //apply的使用场景，大多时候不需要修改this,只是单纯利用apply自动遍历数组的特点
```

3.利用bind方法修改this指向

函数.bind(修改后的this,其他的参数)

```javascript
let teacher = {
            name: '老师',
            getSum: function (num1, num2, num3, num4) {
                console.log(num1 + num2 + num3 + num4);
                console.log(this.name);
            }
        }

        let student = {
            name: '学生'
        }
        // 利用bind来修改，不会立刻执行，而是返回一个修改后的函数
        let fun = teacher.getSum.bind(student,10,20)
        fun()
        
        利用bind方法修改this指向但是不要立即执行
        let fun = teacher.sayHi.bind(student,10,20)
        //如果这里传入需要的参数，那么参数就会被固定定下来，后期无法修改
        fun(20,30)//传入的20与30是没有作用
        
        let fun1 = teacher.sayHi.bind(student)
        fun1(10,20)
        fun1(100,30)
        情景：需要修改this，但是不需要立刻执行的时候
```

### 3.2.6  获取所有的样式

window.getComputedStyle(元素)[属性名]

`        console.log(window.getComputedStyle(box)['width']);`

对系统方法进行二次封装（将长名方法变短名方法）

```javascript
 function getStyle(elm,attr){
            return window.getComputedStyle(elm)[attr]
        }
```



## 3.3数组的新方法

### 3.3.1 forEach循环

`数组.forEach(function(value,index,array){xxxxxxx})`

value: 数组的值

 index: 数组的下标

array: 数组本身(最没有用)

```javascript
let arr = [1,2,3,4,5,6,7,8,9,10];
利用forEach求累加和
        let sum = 0
        arr.forEach(function(value){
            sum += value
        })
        console.log(sum);
```

### 3.3.2 filter数组的筛选

`数组名.filter(function(value,index,array){xxxx})`

函数执行完毕之后，会将满足条件的数据以数组结构返回

```javascript
let arr = [1,2,3,4,5,6,7,8,9,10];
let resArr = arr.filter(function(value){
            return value % 3 == 0
        })
        console.log(resArr);
```

### 3.3.3 some数组的查找

`数组名.some(function(value,index,array){xxxx})`

找到匹配的数据之后，会返回一个布尔值

注意：some方法查找数据，只要找到了，那么循环就会立刻结束

```javascript
let arr = ['teacher','student','chinese','english','drink']
let i
        let resArr = arr.some(function(value,index){
            i = index
            return value == 'chinese'
        })
        console.log(resArr,i);
```

## 3.4递归函数

递归函数：一个函数内部调用自己，形成循环

 递归作用，为了循环某段代码

递归能做的，循环也可以做，只是有些情况下，递归的代码会比循环要简洁（越简洁的代码，阅读性越差）

递归一定要有结束条件，否则就是死循环

### 3.4.1 单函数递归

```javascript
let i = 0;
        function fun(){
            console.log('这是一个寂寞的天');
            if(i < 10){
                i++
                fun()
            }
        }
        fun()
```

### 3.4.2 双函数递归

```javascript
 let i = 0
        function fun1(){
            console.log('这是一个寂寞的天')
            if(i < 5){
                i++
                fun2()
            }
        }
        function fun2(){
            console.log('下着有些伤心的雨')
            fun1()
        }
        fun1()
```

### 3.4.3 递归定时器

```javascript
function fun(){
            setTimeout(function(){
                console.log('这是一个炸弹！BOOM！！！');
                fun()
            },2000)
        }
        fun()
```

### 3.4.4 递归遍历dom结构

```javascript
let box = document.querySelector('#box');
    let arr = [];

    // 封装函数: 获得所有后代元素
    function getElms(elm) {
        // 遍历子元素
        // 只要找不到子元素,那么length=0,则循环就会结束
        for(let i = 0;i < elm.children.length;i++) {
            // 只要找到子元素,就添加到数组中
            arr.push(elm.children[i]);

            // 让当前的子元素去获得他们的子元素,并且追加到数组中
            getElms(elm.children[i]);
        }
    }
    getElms(box);

    console.log(arr);

    console.log($('#box').find('*'));
```

## 3.5闭包

闭包思想：在外部可以访问局部作用域内得变量(不存在内存问题)

```javascript
function getLover(){
            let lover = {
                name:'teacher',
                age:28,
                gender:'这是一个寂寞的天',
                sayHi: function (){
                    console.log('下着有些伤心的雨')
                }
            }
            // 创建一个闭包函数
            function closure(){
                return lover
            }
            // 将创建好得闭包函数，返回出去
            return closure
        }

        // 如果getLover调用多次，那就会开辟多个空间，比较浪费内存
        // 为了保证内存不浪费，所以getLover只调用一次，得到一个lover对象，并且将这个对象得地址保存起来

        let address = getLover()//接受返回得函数(里面有lover得内存地址)

        let student = address()
        let drink = address()
        let hot = address()
        let water = address()


        console.log(student)
        console.log(drink)
        console.log(hot)
        console.log(water)

        // 判断以上得对象是否相等
        console.log(student == drink);
        console.log(hot == drink);
        console.log(water == drink);
```

### 3.5.1沙盒模式

沙盒/沙箱/安全模式

可以让相同名字得代码，不会互相影响，相当于形成了多个独立空间

局部作用域：函数内得作用域称为局部作用域

匿名函数也是函数，也可以形成作用域

```javascript
// 1.匿名函数得子调用
        // 匿名函数得自调用，会形成一个独立作用域，作用域之间不会互相影响
        (function () {
            let num = 10;
            console.log(num);
        })();

        (function () {
            let num = 100;
            console.log(num);
        })();

        // 2.利用匿名函数，可以实现闭包效果
        // 闭包：让外部可以访问内部得变量
        // 我要自己些一个框架，流芳百世

        (function (w) {
            let mmp = {
                bgColor: function (elm, color) {
                    elm.style.backgroundColor = color;
                }
            }

            // 将mmp暴露给外界使用/暴露接口
            w.mmp = mmp;
        })(window)//传入window实参
        
        let box = document.querySelector('.box');
        mmp.bgColor(box,'yellow');
```

## 3.6 EC6中新增的属性

### 3.6.1构造类

```javascript
// 1.在ES6中，利用关键字class，来创建构造类
        // 构造类得作用也是用来创建对象
        class Person{
            // 接下所有得成员都写在这个括号中
            // 准备一个给构造器函数,赋值对象得属性
            constructor(name,age){
                this.name = name;
                this.age = age;
            };

            // 给对象准备方法
            sayHi(){
                console.log('这是一个寂寞的天');
            };
            game(){
                console.log('下着有些伤心的雨');
            }
        };

        // 2.通过构造类来实例化对象
        // 在ES6中，如果通过构造类创建对象，必须带有new关键字，否则报错
        let student = new Person('学生',18);
        console.log(student);
        student.sayHi();
        student.game();
```

### 3.6.2类继承

```javascript
// 1.创建父类
        class Person{
            constructor(name,gender){
                this.name = name;
                this.gender = gender;

            };
            sayHi(){
                console.log('这是一个寂寞的天');
            };
        };
        // 2.创建子类 
        //注意一定要些extends extends让Zha继承Person
        class Zha extends Person{
            constructor(name,gender,level){
                // 继承父类的成员
                // 在子类中要使用父类的成员，必须通过一个关键字：super
                // super == Person
                super(name,gender);
                this.level = level;
            }

            molest(){
                // 调用的父类的sayHi方法
                // 在子类中调用父类的方法，必须通过super
                super.sayHi();
                console.log('下着有些伤心的雨');
            }
        }

        let teacher = new Zha('老师','男',15);
        console.log(teacher);
        teacher.molest();
```

### 3.6.3 解构语法

将数组或对象，按照一一对应的关系，将结构中成员赋值给其他变量

```javascript
// 1.数组的解构
        let arr = ['teacher','student','chinese','english'];
        // 利用数组+下标
        // let name0 = arr[0]
        // let name1 = arr[1]
        // let name2 = arr[2]
        // let name3 = arr[3]

        // 利用解构语法来赋值
        let [name0,name1,name2,name3] = arr
        console.log(name0,name1,name2,name3);

        // 2.对象的解构
        let obj = {
            name: 'teacher',
            age: 19,
            gender:'男',
        }
        
        // 注意：准备的白能力必须跟对象的成员名一致
        let {name,age,gender} = obj;
        console.log(name);
        console.log(age);
        console.log(gender);

        // 如果想把对象的成员赋值给指定的变量
        let {name : username} = obj;
        console.log(username );
```

### 3.6.4扩展语法

将数组中的每一个成员，用逗号隔开，变成一具可执行的代码

扩展语法:    ...数组名

```javascript
// 1.合并数组
        let arr = [1,2,3,4,5];
        let arr1 = [6,7,8,9,10];
        // let arr2 = arr.concat(arr1)

        let arr2 = [...arr,...arr1]
        console.log(arr2);

        // 2.快速添加数据
        let arr3 = [1,2,3];
        let arr4 = [4,5,6];
        arr3.push(...arr4)
        console.log(arr3);

        // 3.快速使用数学方法
        let arr5 = [1,2,3,4,5,6,7,8,9,10,1,2,3,45,7]
        console.log(Math.max.apply(Math,arr5));
        console.log(Math.max(...arr5));
        console.log(Math.min(...arr5));

        // 4.将字符串为数组变成真数组
        let str = '这是一个寂寞的天';
        let arr6 = [...str];
        console.log(arr6);
```

## 3.7 箭头函数

```javascript
// 1.声明普通函数
        let fun = function (){
            console.log('这是一个寂寞的天');
        }
        fun();

        // 2.利用箭头函数语法来声明
        let fun1 = () => {
            console.log('下着有些伤心的雨');
        }
        fun1();

        // 3.利用箭头函数声明带参数的函数
        let getSum = (num1,num2) => {
            console.log(num1+num2);
        }
        getSum(10,20);

        // 4.如果函数体代码只有一句话，那么大括号可以省略
        let getSum1 = (num1,num2) => console.log(num1+num2);
        getSum1(40,20);

        // 5.如果我们的函数的参数只有一个，那么小括号也可以省略
        let eat = food => console.log(`今晚我要吃${food}`);
        eat('猪脚饭')
```

# 4.jQuery框架

## 4.1 jQuery入门

### 4.1.1jQuery文件导入

`<script src="./js/jquery/jquery-1.12.4.js"></script>`

### 4.1.2 jQuery入口函数

```javascript
原生js入口函数
window.onload : 等页面加载所有资源加载完毕
window.onload = function (){
            console.log('下着有些伤心的雨');
        }
jQuery的入口函数执行的时机比window.onload 快
第一个JQ代码的入口函数
$(document).ready(function(){
            $('#box').css({
                'width':'300px',
                'height':'300px',
                'border':'5px solid red'
            })
        })
第二种jQ代码入口函数
$(function(){
            $('#box').css({
                'width':'300px',
                'height':'300px',
                'border':'5px solid red'
            })
            console.log('这是一个寂寞的天');
        })
```

### 4.1.3 原生对象与jQ对象转换

使用原生代码获得的元素，称为原生DOM元素，只能使用原生的方法，无法使用jQ的方法。

使用jQ代码获得元素，称为jQ对象，只能使用jQ的方法，但是无法使用原生的方法。

```javascript
使用原生方法
        let box = document.querySelector('.box');
        // box.style.background = 'red'; // 原生方法

        // 将原生的box对象，变成jQ对象，加钱($)
        $(box).css('background','gold');
```

```javascript
使用jQ方法
        let $box1 = $('#box1');
        // $box1.css('background','blue');//jQ方法
        
        // 将jQ独享转换成原生对象
        // jQ对象其实就是将原生对象进行封装之后的产品
        // 5.1通过下标[0]的方式来获得原生
        // $box1[0].style.background = 'skyblue';

        // 5.2利用get方法来获取，通过下标获得
        $box1.get(0).style.background = 'green';
```

原生转jQ:加钱就可以了$(原生对象)

jQ转原生：通过下标 jQ对象[下标] jQ对象.get(下标)

### 4.1.4 隔行变色 

:odd     奇数

:even    偶数

```javascript
$(function(){
            // 分别获得奇数偶数
            // :odd     奇数
            // :even    偶数
            $('li:odd').css('backgroundColor','gold');
            $('li:even').css('backgroundColor','yellow');
        })
```

### 4.1.5 隐式迭代

for循环结构，显示迭代，看得见的循环代码。

隐士迭代，不需要程序员手动设置的循环结构，代码内部自动帮你循环，看不见的循环。

```javascript
$(function(){
            $('li').on('click', function(){
                console.log('我被点击了');
            })
        })
```

### 4.1.6 链式编程语法

链式编程：语法结构，可以节省代码

链式编程语法的核心：调用jQ方法的时候，会有一个返回值，而这个返回值就是调用方法的对象

```javascript
 $(function () {
        $('li').click(function () {
        	// 1.给每一个li标签设置点击事件
            // 2.给自己添加类名，移除兄弟的类名
            // $(this).addClass('active')
            // $(this).siblings().removeClass('active')

            // 3.链式编程语法
            $(this).addClass('active').siblings().removeClass('active')

            // 4.先获得当前的li标签的索引，让对应的div添加类名
            let index = $(this).index()
            // $('.main').eq(index).addClass('selected') //给对应div添加类名
            // $('.main').siblings().removeClass('selected') //将其他兄弟类名移除
            // 链式编程语法
            $('.main').eq(index).addClass('selected').siblings().removeClass('selected')
        })
    })
```



## 4.2 jQuery控制样式

### 4.2.1.获取或这是样式		css()

可以通过传入对象，一次性设置多个属性

```javascript
$(function () {
        // 1.利用css方法，获取/设置属性
        // 获取：传入属性名
        // 设置：传入属性名：属性值

        // 2.获得元素的样式属性，不管式行内还是内嵌
        $('#getBtn').click(function () {
            console.log($('#div1').css('width'));//带有单位：200px  
            console.log($('#div1').css('height'));//内嵌的也可以获得：也是带有单位
            console.log($('#div1').css('border'));
        })
        // 3.设置元素的样式属性
        $('#setBtn').click(function () {
            // 设置单一属性：传入属性名以及属性值
            // $('#div2').css('backgroundColor', 'red');

            // 设置多个属性：传入一个对象结构，对象中拥有所有要设置的属性内容
            // $('#div2').css({ 'width': '100px', 'height': '100px', 'backgroundColor': 'yellow' })
            // 同时设置多个标签的样式
            // 利用隐式迭代
            $('div').css({ 'width': '100px', 'height': '100px', 'backgroundColor': 'gold' })
        })
    })
```

## 4.3 jQuery属性选择器

### 4.3.1 基础选择器

1.标签选择器		$('div')

2.类选择器		$('.class')

3.id选择器		$('#id')

4.交集选择器		$('div.class')

5.并集选择器		$('div,span')

### 4.3.2层级选择器

1.后代选择器		$('div .class')

2.子代选择器		$('div>p')

### 4.3.3 位置选择器

1.利用下标		$('li:eq(1)')

2.利用奇数		$('li:odd')

3.利用偶数		$('li:even')

### 4.3.4 筛选选择器与选择器方法

1.获得所有的子元素	children()

`console.log($('#box').children());`

2.获得指定的子元素	children(参数)

`console.log($('#box').children('div'));`

3.获得所有后代的元素	 find('*')

`console.log($('#box').find('*'));`

获得指定的后代元素 	find(参数)

`console.log($('#box').find('span'));`

4.获取兄弟元素，除了自己 	siblings()

很多使用来排他

`console.log($('#tag').siblings());`

指定获得兄弟元素

```javascript
console.log($('#box').siblings('div'));
console.log($('#box').siblings('p'));
```

5.获得上一个/下一个兄弟元素

next(): 下一个 ---> nextElementsSiblings

prev(): 下一个 ---> prevElementsSiblings

```javascript
console.log($('#tag').next());
console.log($('#tag').prev());
```

6.获得前面所有兄弟元素/后面所有兄弟元素

nextAll()

prevAll()

```javascript
console.log($('#tag').nextAll());
console.log($('#tag').prevAll());
```

7.获得父元素		parent(): 获得父元素 		parents(): 获得父元素们

```javascript
console.log($('#tag').parent());
console.log($('#tag').parents());
console.log($('#tag').parents('.demo'));
```

## 4.4 jQ中的相关方法

### 4.4.1.鼠标点击事件		click()

### 4.4.2.鼠标移入移出事件	

mouseover		鼠标移入

mouseout		鼠标移出

会因为子元素的冒泡机制，导致重复调用

### 4.4.3鼠标进入离开事件

mouseenter		鼠标进入

mouseleave		鼠标离开

性能更好，不会重复调用

### 4.4.4 控制元素的显示或者隐藏

.show() --> display:block	显示

.hide() --> display:none 	隐藏

```javascript
$(function(){
        // 1.设置元素显示
        $('#show').click(function () {
            // 1.2.不带参数的show,相当于display:block
            // $('#div1').show();

            // 1.3. 带参数的show
            // 带时间参数
            // $('#div1').show(1000);

            // 带回调函数参数：
            // 做完show动画之后，再去执行传入的函数，则这个函数称为回调函数
            $('#div1').show(1000,function () {
                alert('动画已经做完了');
            })
        })

        // 2 设置元素隐藏
        $('#hide').on('click',function(){
            // 2.1 不带参数的hide
            // $('#div1').hide()

            // 2.3带参数的hide
            // 带时间参数
            // $('#div1').hide(1000)

            // 带回调函数的参数
            $('#div1').hide(1000,function(){
                alert('动画做完了');
            })
        })

        // 3.切换元素显示与隐藏
        // 原本显示，就隐藏；原本隐藏，就显示
        $('#toggle').click(function(){
            // 3.1 不带参数
            // $('#div1').toggle()

            // 3.2 带参数
            // 时间参数
            // $('#div1').toggle(1000)

            // 带回调函数
            $('#div1').toggle(1000,function(){
                alert('动画做完了了');
            })
        })
    })
```



### 4.4.5 获取元素下标	index

.eq() -->方法，可以传入变量

$(this).index();	获取当前元素的下标

```javascript
$(function () {
            // 给li标签设置点击事件
            $('li').click(function () {
                // 通过index方法，可以获得下标
                let index = $(this).index();
                // 让其他兄弟隐藏
                // siblings()
                $('#content div').eq(index).siblings().hide()

                // 让对应的下标的图片显示
                // :eq() -->写在选择器中，只能写准确的数字
                // .eq() -->方法，可以传入变量
                // .show() --> display:block
                // .hide() --> display:none
                $('#content div').eq(index).show()
            })
        })
```

### 4.4.6jQuery控制class类名

#### 1.添加类名		addClass('类名')

```javascript
$(function () {
		$('#addClass').click(function () {
            $('#div1').addClass('fontSize30')

            // 同时传入多个类名,类名之间空格隔开
            $('#div1').addClass('fontSize30 width200')
        })
   })
```



#### 2.移除类名 		removeClass('类名')

```javascript
$(function () {
		$('#removeClass').click(function () {
            // 不带参数,移出所有的类名
            $('#div2').removeClass()

            // 带参数
            $('#div2').removeClass('bgc')
        })
   })
```



#### 3.判断类名		hasClass('类名')

```javascript
$(function () {
		$('#hasClass').click(function () {
            // 判断元素是否拥有某个类名，返回布尔值
            console.log($('#div1').hasClass('food'));
            console.log($('#div1').hasClass('bgc'));
            console.log($('#div1').hasClass('fontSize30'));
        })
   })
```



#### 4.切换类名		toggleClass('类名')

```javascript
$(function () {
        // 先判断是否拥有某个类名，如果有，则移出；如果没有，则添加
        $('#toggleClass').on('click', function () {
            $('#div2').toggleClass('bgc')
            // $('body').toggleClass('open')
        })
    })
```

### 4.4.7 滑入滑出效果与淡入淡出效果

#### 4.4.7.1 滑入效果	slideDown()

```javascript
$('#slideDown').click(function(){
            // 1.2 不带参数版本
            // $('#div1').slideDown()

            // 1.3 带参数
            // 时间参数
            // $('#div1').slideDown(1000)

            // 带回调函数
            $('#div1').slideDown(1000,function(){
                alert('动画做完了');
            })
        })
```

#### 4.4.7.2 滑出效果	slideUp()

```javascript
$('#slideUp').click(function(){
            // 1.2 不带参数版本
            // $('#div1').slideUp()

            // 1.3 带参数
            // 时间参数
            // $('#div1').slideUp(1000)

            // 带回调函数
            $('#div1').slideUp(1000,function(){
                alert('动画做完了');
            })
        })
```

#### 4.4.7.3 切换		slideToggle()

```javascript
$('#slideToggle').click(function(){
            // 1.2 不带参数版本
            // $('#div1').slideToggle()

            // 1.3 带参数
            // 时间参数
            // $('#div1').slideToggle(1000)

            // 带回调函数
            $('#div1').slideToggle(1000,function(){
                alert('动画做完了');
            })
        })
```

#### 4.4.7.4 淡入效果		fadeIn()

```javascript
$('#fadeIn').click(function(){
            // 控制透明程度0-1
            // 1.1不带参数
            // $('#div1').fadeIn()

            // 1.2带参数
            // 带时间参数
            // $('#div1').fadeIn(1000)

            // 带回调函数
            $('#div1').fadeIn(1000,function(){
                alert('盒子显示完毕');
            })
        })
```

#### 4.4.7.5 淡出效果 		fadeOut()

```javascript
$('#fadeOut').click(function(){
            // 控制透明程度0-1
            // 2.1不带参数
            // $('#div1').fadeOut()

            // 1.2带参数
            // 带时间参数
            // $('#div1').fadeOut(1000)

            // 带回调函数
            $('#div1').fadeOut(1000,function(){
                alert('盒子显示完毕');
            })
        })
```

#### 4.4.7.6 淡入淡出切换		fadeToggle()

```javascript
$('#fadeToggle').click(function(){
            // 控制透明程度0-1
            // 3.1不带参数
            // $('#div1').fadeToggle()

            // 1.2带参数
            // 带时间参数
            // $('#div1').fadeToggle(1000)

            // 带回调函数
            $('#div1').fadeToggle(1000,function(){
                alert('盒子显示完毕');
            })
        })
```

#### 4.4.7.7 淡入淡出控制透明程度		fadeTo()

```javascript
$('#fadeTo').click(function(){

            // $('#div1').fadeTo(1000,.5)

            $('#div1').fadeTo(1000,.5,function(){
                alert('盒子显示完毕');
            })
        })
```



### 4.5呼吸轮播图案例

```javascript
<script>
    /* 
        需求:实现呼吸轮播图
        控制对应的li标签淡入.让其他li标签淡出
        注意:需要实现无限轮播的效果
            判断是否已经到最后一张或最开始一张

    */
    $(function () {
        // 1.准备一个变量,保存点击的次数
        let clickCount = 0

        // 2.给右箭头设置点击事件
        $('.arrow-right').click(function () {
            // 记录每次点击的次数
            // 3.每次点击需要clickCount自增
            clickCount++;

            // 4.限制最大点击的次数
            if (clickCount == $('li').length - 1) {
                // 此时应该显示第0张
                clickCount = 0
            }

            // 5.让对应索引的li标签淡入,其他兄弟标签淡出
            $('li').eq(clickCount).stop(false,true).fadeIn(1000).siblings().stop(false,true).fadeOut()
        })
        
        // 6.给左箭头设置点击事件
        $('.arrow-left').click(function () {
            // 7.点击次数clickCount自减
            clickCount--;

            // 8.限制最小的点击次数
            if (clickCount < 0) {
                // 此时应该显示最后一张
                clickCount = $('li').length - 1
            }

            // 9.让对应索引的li标签淡入,其他兄弟标签淡出
            $('li').eq(clickCount).stop(false,true).fadeIn(1000).siblings().stop(false,true).fadeOut()
        })

        // 10.自动轮播:利用定时器
        let timeId = setInterval(function () {
            // 持续调用右箭头事件
            $('.arrow-right').click();
        }, 2000)
        // 11.通过设置大盒子的鼠标移入移出,停止与开启定时器 
        $('.slider').mouseenter(function () {
            clearInterval(timeId);
        })
        
        $('.slider').mouseleave(function () {
            timeId = setInterval(function () {
                $('.arrow-right').click();
            }, 2000)
        })
    })
</script>
```

## 4.5 自定义动画		animate()

```javascript
animate()
        参数1：必须项，保存了需要修改的属性
        参数2：可选项，动画时间
        参数3：可选项，运动曲线，linear,swing (默认是swing)
        参数4: 可选项,回调函数
```

### 4.5.1.执行单一动画

```javascript
$('#btn').click(function(){
            // 1.执行单一动画
            $('#div1').animate(
                {
                    left:1000
                },2000,'linear',function(){
                    alert('动画结束');
                }
            )
        })
```

### 4.5.2.同时执行多个动画

```javascript
$('#btn').click(function(){
            // 2.同时执行多个动画
            $('#div1').animate({
                width:300,
                height:300,
                borderRadius:150,
                left:800,
                top:400
            },2000,function(){
                alert('动画结束了');
            })
        })
```

### 4.5.3.利用回调函数执行多组动画

```javascript
$('#btn').click(function () {
            // 3.利用回调函数执行多组动画
            $('#div1').animate({
                width: 200,
                height: 200
            }, 2000, function () {
                // 第二组动画
                $('#div1').animate({
                    borderRadius: 100
                }, 2000, function () {
                    // 第三组动画
                    $('#div1').animate({
                        left: 500
                    }, 2000, function () {
                        // 第四组动画
                        $('#div1').animate({
                            top: 400
                        }, 2000)
                    })
                })
            })
        })
```

### 4.5.3停止动画		stop()

stop()		停止动画； 一般直接使用stop方法不添加参数

参数1：是否清除动画队列

参数2：是否跳转到当前动画的最终效果

## 4.6 jQuery获取标签内容

1.获取标签所有的内容		html()

`console.log($('#box').html());`

2.获取标签文本的内容		text()

`console.log($('#box').text());`

3.获取表单内容			val()

`console.log($('#userName').val());`

## 4.7jQuery创建元素，并且追加到页面中

1.html()方法创建

```javascript
$('#btn').click(function(){
            // html()方法创建
            $('#box').html('<h1>这是一个寂寞的天</h1>');
            })
```

2.$()方法创建

```javascript
$('#btn').click(function(){
// $()方法创建
            let $elm = $('<h1>这是一个寂寞的天</h1>');

            // 利用append方法进行追加
            $('#box').append($elm)
            })
```

3.text()	创建文本

```javascript
$('#todocount').text('这是一个寂寞的天')
```



## 4.8 jQuery显示迭代

 隐式迭代：无法控制，并且看不见的循环

显式迭代：可以控制，并且可以看的见的循环

jq循环

```javascript
each循环方法
参数index ：下标
参数elm: 对应的元素
$('li').each(function(index,elm){
         // elm:当前下标对应的元素,是元素DOM对象
         // 所以需要加钱
         $(elm).css('opacity',($('li').length - index) / 10)
    })
```

## 4.9 jQuery中追加元素

### 4.9.1 append方法

 A.append(B):将B元素追加到A元素的最后

```javascript
        $('#btnAppend').click(function(){
            // $('#ul1').append($('#li3'))
            $('#ul2').append($('#li3'))
        })
```

### 4.9.2 prepend方法

A.prepend(B):将B元素插入到A元素的最前面

```javascript
$('#btnPrepend').click(function(){
            // 直接进行元素的位移
            // $('#ul1').prepend($('#li3'))
            $('#ul2').prepend($('#li3'))
        })
```

### 4.9.3 before方法

A.before(B):将B元素插入到A元素之前

```javascript
$('#btnBefore').click(function(){
            $('#li32').before($('#li3'))
        })
```

### 4.9.4 after方法

A.after(B).将B元素插入到A元素之后

```javascript
$('#btnAfter').click(function(){
            $('#li32').after($('#li3'))
        })
```

### 4.9.5 appendTo方法

B.appendTo(A):将B元素追加到A元素的最后

```javascript
$('#btnAppendTo').click(function(){
            $('#li3').appendTo($('#ul1'))
            $('#li3').appendTo($('#ul2'))
        })
```

### 4.9.6 prependTo方法

B.prependTo(A):将B元素插入到A元素的最前面

```javascript
$('#btnPrependTo').click(function(){
            // 直接进行元素的位移
            $('#li3').prependTo($('#ul1'))
            $('#li3').prependTo($('#ul2'))
        })
```

## 4.10 jQuery中清空元素

### 4.10.1 html() 

在jQ中使用html()赋值空值可以覆盖所有数据

`$('#ul1').html('')`

### 4.10.2 empty()

empty()方法:清空所有元素

`$('#ul1').empty()`

### 4.10.3 remove()

jQ中使用remove,建议自杀

`$('#li3').remove()`

## 4.11 jQuery中克隆元素	clone()

```javascript
jQ方法:clone()
// 参数为true就是深克隆,不写或者false就是浅克隆
// 不管深浅克隆都会复制内容
// 带上true可以克隆事件,不带上或者false不可以克隆事件
// 克隆一个元素
// let $newBox = $('#span1').clone();//不能克隆事件
let $newBox = $('#span1').clone(true);//克隆事件
// 把克隆的元素添加到div2中
$('#div2').append($newBox)
```

## 4.12 jQuery中控制表单控件的属性

1.attr()--->获取/设置

```javascript
// jQ中控制元素的属性：attr()
// 如果传入一个参数，则为获取
// 如果传入两个参数，则是设置
// 1.获取属性
        $('#btn1').click(function(){
            console.log($('img').attr('src'));
            console.log($('img').attr('alt'));
            console.log($('img').attr('title'));
            console.log($('img').attr('food'));
        })
 // 2.设置属性   
        $('#btn2').click(function(){
            $('img').attr('src','./img/images/992.gif')

            // 3.可以同时设置多个属性，传入对象结构
            $('img').attr(
                {
                    'src':'./img/images/992.gif',
                    'alt':'帅哥过来啊',
                    'title':'这是一个图片',
                    'food':'12元'
                }
            )
            
        })
```

2.removeAttr()--->移除属性

```javascript
// 移出指定属性
        $('#btn3').click(function(){
            $('img').removeAttr('food')
            // 可以同时设置多个属性
            $('img').removeAttr('food title')
        })
```

3.prop()--->获取/设置

```javascript
如果控制布尔值属性(checked,disabled,selected,那么就使用prop())
$('input').prop('checked',true)//被选中效果
$('#box2').prop('disabled',true)//输入禁止效果
```

## 4.13jQ中获取盒子模型大小与盒子定位距离

### 4.13.1获得盒子模型大小

#### 1.利用css方法获取	width/height

```javascript
 console.log($('div').css('width'));
 console.log($('div').css('height'))
```

#### 2.利用width()/height()：直接获得数值类型

```javascript
console.log($('div').width());
console.log($('div').height());
```

#### 3.获得盒子的真是宽度和高度；宽高 + border + padding

```javascript
console.log($('div').outerWidth());
console.log($('div').outerHeight());
```

#### 4.获得内容区域的宽高：宽高 + padding

```javascript
console.log($('div').innerHeight());
console.log($('div').innerWidth());
```

### 4.13.2获取盒子定位的距离

#### 1.利用offset方法获得数据

获取的是页面的到盒子的距离

```javascript
 $('#btn1').click(function () {
            // offset方法，会返回一个对象结构
            // 返回的是当前盒子与页面左上角的距离
            console.log($('.son').offset());
            console.log($('.son').offset().top);
            console.log($('.son').offset().left);
        })
```

#### 2.利用position方法获得数据

获取的是定位父元素到盒子的距离

```javascript
$('#btn2').click(function () {
            // position方法，返回一个对象结构
            // 返回时当前盒子与参考盒子的定位距离
            console.log($('.son').position());
            console.log($('.son').position().top);
            console.log($('.son').position().left);
        })
```

## 4.14jQuery中获取页面滚动的距离与内容滚动的距离

### 1.获得内容的滚动距离	 scrollLeft()		scrollTop()

```javascript
console.log($('div').scrollLeft());
console.log($('div').scrollTop());
```

### 2.直接设置滚动距离		在后面加参数就是设置滚动距离

```javascript
console.log($('div').scrollLeft(300));
console.log($('div').scrollTop(300));
```

### 3.配合animate方法，实现动画效果

```javascript
$('div').animate({
                scrollLeft:400,
                scrollTop:500
            },2000)
```

### 4.获得页面滚动距离		通过window对象获得,window是原生DOM对象，需要转换

```javascript
console.log($(window).scrollLeft());
console.log($(window).scrollTop());
```

### 5.利用animate让页面垂直滚动	通过给html/body设置动画

```javascript
$('body,html').animate({
                scrollTop:800,
            },1000)
```

## 4.15 jQuery中注册事件的方式与解绑方法

### 1.$元素.事件()	简单注册事件

不支持动态的注册，不管什么时候创建的元素，都不能拥有某个事件；无法同时注册多个事件

```javascript
$('div').click(function(){
                console.log('这是一个寂寞的天');
})
$('div').mouseenter(function(){
                console.log('下这有些伤心的雨');
})
```

### 2.利用bind方法注册事件

无法动态注册事件，可以同时注册多个事件

```javascript

$('div').bind('click mouseenter',function(){
         console.log('这是一个寂寞的天');
})
```

传入一个对象，不同的事件，不同的效果

````javascript
$('div').bind(
                {
                    click:function(){
                        console.log('这是一个寂寞的天');
                    },
                    mouseenter:function(){
                        console.log('下着有些伤心的雨');
                    },
                }
            )
````

### 3.delegate方法注册事件

动态的注册事件的核心，就是利用委托事件，冒泡机制

```javascript
$('body').delegate('div','click',function(){
                console.log('这是一个寂寞的天');
            })
```

### 4.on方法注册事件

#### 1.可以实现简单注册事件，可以实现动态注册事件

```javascript
$('div').on('click',function(){
                console.log('这是一个寂寞的天');
            })
 参数1：事件类型
 参数2：子元素
 参数3：执行函数
$('body').on('click','div',function(){
         	 console.log('这是一个寂寞的天');
})
```

#### 2.同时绑定多个事件

```javascript
$('div').on({
                click:function(){
                    console.log('点击事件');
                },
                mouseenter:function(){
                    console.log('鼠标进入事件');
                },
            })
```

### 5.jQuery中事件的解绑方法

off()			解绑事件

不带参数		解绑所有的事件绑定

` $('div').off()`

带参数		解绑指定的事件绑定

` $('div').off('mouseenter')`

多个参数空格隔开		解绑多个事件绑定

` $('div').off('click mouseenter')`

## 4.16jQuery中的事件对象

事件对象：每当任何一个事件被触发，系统都会生成对应的对象结构，这个对象中保存了事件触发的相关信息，这就叫事件对象

事件对象的鼠标触发点事件

### 1.pageX/Y：触发点与也页面做左上角的距离

```javascript
$('div').on('click', function (e) {
     console.log('参照距离:' + e.pageX, e.pageY);
  })
```

### 2.clientX/Y: 触发点与可视区的距离

```javascript
$('div').on('click', function (e) {
	console.log('参照距离:' + e.clientX, e.clientY);e.pageY);
  })
```

### 3.screenX/Y：触发点与电脑屏幕左上角距离

```javascript
$('div').on('click', function (e) {
    console.log('参照距离:' + e.screenX, e.screenY);
  })
```

### 4.事件对象的this与e.target

在原生中事件对象的this指向：谁调用就是谁

e.target指向：谁触发了事件就是谁

在jquery中，事件对象的this与e.target都是指向触发事件的元素

## 4.16 jQuery中多库共存

默认情况下，导入多个版本jQ，那么最终后面导入会覆盖前面的

```javascript
$(function(){
        // 问题：如果一个项目中，同时导入多个jQ版本，那么$这个关键字会代表哪个版本

        // 1.如何获取当前jQ的版本
        // 默认情况下，导入多个版本jQ，那么最终后面导入会覆盖前面的
        // console.log($.prototype.jquery);//3.5.1
        // console.log($.fn.jquery);//3.5.1
        
        // 2.需求：如何让jQ实现多库工存
        // 只有一个$，所以只能保存一个版本
        // 多准备几个$来保存不同版本的jQ
        // noConflict() 释放当前的jQ版本，返回值：被释放的jQ版本
        let $_3 = $.noConflict()
        let $_2 = $.noConflict()
        // console.log($.fn.jquery);//1.12
        // console.log($_2.fn.jquery);//2.2
        // console.log($_3.fn.jquery);//3.5

        // 3.在同一个项目中，可以通过不同的$名去访问不同版本的jQ对象
        // 实现了：多库工存

        // 4.沙盒模式
        // 自调用函数，可以形成独立的作用域，内部的白能力不会互相影响

        // jQ3.5版本的区域
        (function($){
            console.log($.fn.jquery);//3.5
        }($_3));

        // // jQ2.2版本的区域
        (function($){
            console.log($.fn.jquery);//2.2
        }($_2));

        // // jQ1.12版本的区域
        (function($){
            console.log($.fn.jquery);
        }($));
    })
```

## 4.17jQuery中插件的使用

jQ插件库之家：http://www.htmleaf.com/

jQ插件库：https://www.jq22.com/

# 5.Ajax

## 5.1 jQ中的数据请求

### get()请求方式

不带参数的get请求

```javascript
$.get({
                url:'https://autumnfish.cn/api/joke',//接口地址
                success:function(backData){//请求成功之后的回调函数，当请求成功之后，系统就会自动执行回调函数中的代码
                headers:{
                    'Authorization':localStorage.getItem('bignews69')
                }, 
                    console.log(backData);
                }
            })
```

带参数的get请求

```javascript
$.get({
                url:'https://autumnfish.cn/api/joke/list',
                传入参数的第一种写法，对象结构
                data:{
                    num:10
                },

                传参数的第二种写法，字符串结构
                data: 'num=5',

                success:function(backData){
                    console.log(backData);
                }
            })
            发起get请求获得书籍，对比有参数与没有参数的结果
            // 对比一个参数与多个参数的语法
            let name = '红楼梦'
            $.get({
                url:'http://www.liulongbin.top:3006/api/getbooks',
                // data:{
                //     publisher:'上海图书出版社'
                // },
                // data:'publisher=上海图书出版社',
                // data:'bookname=红楼梦&publisher=上海图书出版社',
                // data:{
                //     bookname:'红楼梦',
                //     publisher:'上海图书出版社',
                // },
                data:{
                    bookname:name
                },
                success:function(backData){
                    console.log(backData);
                    console.log(backData.data);
                }
            })
        })
```

### post()数据请求方式

```javascript
$(function(){
        // 获得当前服务器所有的书籍信息
        $('#get').click(function(){
            $.get({
                url:'http://www.liulongbin.top:3006/api/getbooks',
                success:function(backData){
                    console.log(backData);
                }
            })
        })

        // 利用post请求添加图书信息
        $('#post').click(function(){
            $.post({
                url:'http://www.liulongbin.top:3006/api/addbook',
                data:{
                    bookname:'华子看本子',
                    author:'透明人',
                    publisher:'里番库出版设'
                },
                success:function(backData){
                    console.log(backData);
                }
            })
        })
    })
```

### ajax()数据请求方式

```javascript
$.ajax(
            {
                type:'get',
                url:'http://www.liulongbin.top:3006/api/getbooks',
                // data:{
                    // bookname:'红楼梦'
                // },
                success:function(backData){
                    console.log(backData);
                }
            }
        )
        $.ajax(
            {
                type:'post',     
                url:'http://www.liulongbin.top:3006/api/addbook',
                data:{
                    bookname:'qwer',
                    author:'lol',
                    publisher:'拳头'
                },
                success:function(backData){
                    console.log(backData);
                }
            }
        )

```

### jQ中了解处理xml格式数据

```javascript
$.ajax(
            {
                url:'https://autumnfish.cn/api/food.xml',
                success:function(xmlData){

                    console.log(xmlData);

                    // 注意，此时是xml数据格式，无法使用对象的点语法
                    // xml格式数据类似html标签结构，所以我们也要用类似的标签操控方式

                    // 1.获得food数据
                    console.log(xmlData.getElementsByTagName('food'));

                    // 2.获得food的第0个数据
                    console.log(xmlData.getElementsByTagName('food')[0]);

                    // 3.获得food中第0个数据中的name数据
                    console.log(xmlData.getElementsByTagName('food')[0].getElementsByTagName('name')[0].innerHTML);
                }   
            }
        )
```



### 监听表单域的提交事件submit

submit() 点击提交按钮或表单域有提交动作

```javascript
 $('#form1').on('submit',function(e){
   e.preventDefault()
 }

```

### 音频的播放暂停事件

监听播放

play 	播放事件

pause 	暂停事件

```javascript
$('.audio_con>audio').on('play',function(){
      // console.log('播放');
      $('.player_con>img').addClass('playing');
    })

    $('.audio_con>audio').on('pause',function(){
      // console.log('暂停');
      $('.player_con>img').removeClass('playing');
    })
```



### 快速获取表单中的数据	serialize()

// 利用表单方法：serialize() 可以获得表单中的所有数据，以字符串形式存在，key1 = value1& key2= value2

但是serialize快速获得数据需要 必须保证控件得name值等于参数key

```javascript
let data = $(this).serialize()
```

## 5.2模板引擎	template



```javascript
<script src="./lib/template-web.js"></script>
<!-- 装备模板结构 -->
<script type="text/html" id="tpl-info">
        <!-- 原义输出:@ -->
<div>{{@ title}}</div>

<!-- 标准输出 -->
<div>姓名:{{name}}</div>
<div>年龄:{{age}}</div>
<div>介绍:{{gender}}</div>

<!-- 根据数据进行判断 -->
<div>
    级别:
    {{if isLv == 1}}
    五级孤儿
    {{else if isLv == 2}}
    六级孤儿
    {{else if isLv == 3}}
    七级孤儿
    {{/if}}
</div>

<!-- 
        循环语法
        {{each 数组名}}     {{/each}}
        {{$index}}  下标
        {{$value}}  对应的数据
     -->
<ul>
    {{each hobby}}
    <li>{{$index +1}} {{$value}}</li>
    {{/each}}
</ul>

<!-- 
        时间格式:只要年月日
        问题:传入的原始数据格式不满足需求,需要进一步修改
        利用模板引擎的过滤函数
        过滤函数的使用: 原始数据 | 过滤函数名
     -->
<div>
    游戏时间:{{time | getTime}}
</div>
</script>
<script src="./js/jquery-1.12.4.js"></script>
<script>
    $(function () {
        // 声明一个函数:过滤函数
        // 当原始数据不满足要求的时候,可以通过函数进行处理,最后将满足条件数据返回
        // 需要自定义一个函数,赋值给模板引擎去使用
        // template.defaults.imports.函数名= 函数
        template.defaults.imports.getTime = function (time) {
            // time是原始时间对象数据
            // 利用时间对象方法,获得年月日
            let year = time.getFullYear()
            let month = time.getMonth() + 1
            let day = time.getDate()
            let hour = time.getHours()
            let min = time.getMinutes()
            let sec = time.getSeconds()

            // 返回过滤好的数据
            return year + '-' + month + '-' + day + '-' + hour + '-' + min + '-' + sec
        }

        // 准备数据
        function dadas() {
            let data = {
                title: '<h1>逸哥快乐亚索</h1>',
                name: '亚索',
                age: 18,
                gender: '托儿索,孤儿索',
                isLv: 3,
                hobby: ['eq', 'q', 'w', 'qwer'],
                time: new Date()
            }
            // 调用模板方法template()
            let htmlStr = template('tpl-info', data)

            $('.container').html(htmlStr)
        }
        dadas()
        setInterval(dadas, 1000)
    })
</script>
```

## 5.3原生get请求

### 不带参数的原生get请求

```javascript
// 3.利用原生代码发起get请求
            // 3.1创建一个网络请求对象：XMLHttpRequest
            let xhr = new XMLHttpRequest()

            // 3.2设置open方法，决定了请求方式与接口地址
            xhr.open('get','https://autumnfish.cn/api/joke')

            // 3.3设置成功之后的回调函数onload
            xhr.onload = function(){
                // 3.4返回的数据保存在response
                console.log(xhr.response);
            }

            // 3.5调用send方法，发起请求
            xhr.send()
```

### 带参数的原生get请求

```javascript
// 1.创建xhr对下个
            let xhr = new XMLHttpRequest()
            let num = document.querySelector('#num').value
            // 2.设置open方法
            // 原生get请求带参数，将参数并接到url的末端
            // url + ? + key = value & key = value
            xhr.open('get','https://autumnfish.cn/api/joke/list?num='+num)

            // 3.设置会调函数onload
            xhr.onload = function(){
                console.log(xhr.response);//服务器响应回来的数据格式时json，无法直接使用

                // 将json转换成js对象
                console.log(JSON.parse(xhr.response));
            }

            // 4.调用send方法
            xhr.send()
```

## 5.4原生post请求

### 不带参数的post请求

```javascript
 // 1.创建xhr对象
        let xhr = new XMLHttpRequest()

        // 2.设置open方法
        xhr.open('post','https://autumnfish.cn/api/user/check')

        // 3.设置回调函数
        xhr.onload = function(){
            console.log(xhr.response);
        }

        // 4.调用send方法
        xhr.send()
```

### 带参数的post请求

```javascript
 // 1.创建xhr对象
        let xhr = new XMLHttpRequest()

        // 2.设置open方法
        xhr.open('post','https://autumnfish.cn/api/user/check')

        // 2.5设置请求头数据，针对post参数进行加密编译处理
        // xheader代码提示
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')

        // 3.设置回调函数
        xhr.onload = function(){
            console.log(xhr.response);
        }

        // 4.调用send方法，post请求的参数有send来决定
        xhr.send('username=李')
```

## 5.5原生处理xml格式数据

```javascript
let xhr = new XMLHttpRequest()
        xhr.open('get','https://autumnfish.cn/api/food.xml')
        xhr.onload = function(){
            console.log(xhr.responseXML);//以标签结构方式打印数据
            console.log(xhr.responseXML.getElementsByTagName('food')[0].getElementsByTagName('name')[0].innerHTML);
        }
        xhr.send()
```

## 5.6了解onreadystatechange方法

```javascript
// 1.创建xhr对象
        let xhr = new XMLHttpRequest()
        // 2.设置open方法
        xhr.open('get','https://autumnfish.cn/api/joke')

        // 3.设置onload方法
        // onload并不是原生的方法，不属于w3c的标准方法，而是火狐浏览器优化后的方法，沿用到现在
        // 原生的方法是onreadystatechange，监控网络请求状态码的改变，这个方法会执行很多次
        // onload方法是在原生onreadystatechange的基础上进行优化，指挥执行一次(请求结束的时候会执行)
        xhr.onload = function(){
            // 性能更好一些
            console.log('2');
        }

        xhr.onreadystatechange = function(){
            console.log('1');
        }

        // 4.调用send方法
        xhr.send()
```

## 5.7封装网络请求

```javascript
(function (w) { 
    // 准备一个对象，拥有get方法还有post方法
    let myjs = {
        get:function (option) {
            // 1.创建一个xhr对象
            let xhr = new XMLHttpRequest()
    
            // 2.设置open方法
            // get请求是否带有参数
            // 判断是否有参数
            if (option.data) {
                // 代表有传入参数
                option.url += '?'
                option.url += option.data
            }
            xhr.open('get', option.url)
    
            // 3.设置回调函数,onload
            xhr.onload = function () {
                // 由外界传入一个函数，然后我们将返回的数据给这个函数
                option.success(JSON.parse(xhr.response))
            }
            // 4.调用send方法
            xhr.send()
        },
        post:function (option){
            let xhr = new XMLHttpRequest()
            xhr.open('post',option.url)
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            xhr.onload = function(){
                option.success(xhr.response)
            }
            xhr.send(option.data)
        },

        ajax: function (option) { 
            let xhr = new XMLHttpRequest()
            if (option.type == 'get' || option.type == 'GET') {
                // get请求，需要判断是否拼接字符串
                if (option.data) {
                    // 代表有传入参数
                    option.url += '?'
                    option.url += option.data
                }
            }

            xhr.open(option.type, option.url)
            // 判断是否是post请求，设置请求头属性
            if (option.type == 'post' || option.type == 'POST') {
                xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            }

            xhr.onload = function () { 
                option.success(xhr.response)
            }

            // 判断是否为post请求，设置阐述
            if (option.type == 'post' || option.type == 'POST') {
                xhr.send(option.data)
            } else { 
                xhr.send()
            }
        }
    
    }

    // 暴露接口
    w.my = myjs
})(window)
```

## 5.8FormData获取表单数据

### new FormData(form对象原生dom对象)

```javascript

<script>
    $(function(){
        // 点击按钮后获得所有输入信息，包括上传图片
        $('#btn').on('click',function(e){
            e.preventDefault()

            // 1.快速获得数据
            // serialize：只能快速获得文字相关的数据，无法获得图片
            // let data = $('form').serialize()
            // console.log(data);

            // 2.利用FormData的方式来获得数据
            // 创建FormData对象
            // new FormData(form对象原生dom对象)
            let fd = new FormData($('form')[0])
            // 只要是fd对象创建完毕，则表单中所有的数据都存放在fd中

            console.log(fd);//formData结构的数据，是无法直接打印的

            // 3.利用get方法来查看formData对象中的数据
            console.log(fd.get('heroname'));
            console.log(fd.get('heroskill'));
            console.log(fd.get('heroicon'));
        })
    })
</script>
```

### 原生发起formData请求

```javascript
document.getElementById('btn').onclick = function(e){
        e = window.event || e;
        e.preventDefault()
        
        // 1.利用formData获得表单数据
        let fd = new FormData(document.querySelector('form'))

        // 2.创建xhr对象
        let xhr = new XMLHttpRequest()

        // 3.设置open方法
        xhr.open('post' ,'http://localhost:4399/hero/add')

        // 4.设置请求头
        // 因为本次数据已经使用formData进行打包/封装编译，所以不需要再次设置请求头
        // xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

        // 5.设置回调函数
        xhr.onload = function(){
            console.log(xhr.response);
        }
        // 6.调用send方法并传入参数
        // 直接传入formData对象即可
        xhr.send(fd)
        //重置表单元素
        document.querySelector('form').reset()
    }
```

### jQuery中formData中的post请求



```javascript
$(function(){
        // 添加点击事件
        $('#btn').on('click',function(e){
            e.preventDefault()

            // 1.获得formData对象数据
            let fd = new FormData($('form')[0])
            // console.log(fd.get('icon'));
            // 2.发起数据请求
            let localhost = 'localhost'
            $.ajax(
                {
                    type:'post',
                    url:'http://'+localhost+':4399/hero/add',
                    data:fd,//直接上传fd对象即可
                    // 如果利用jQ发起携带formData数据请求，需要关闭默认的数据编译方式
                    //ajax2.0可以不用设置请求头，但是jq帮我们自动设置了，这样的话需要我们自己取消掉
          		   contentType:false,//不要给我设置请求头
          		   //取消帮我们格式化数据，是什么就是什么
          		   processData:false,//不要把我传递的这个formData转成key=value这种格式的字符串
                    success:function(backData){
                        console.log(backData);
                    }
                }
            )
        })
```



## 5.8同步与异步的区别

同步代码：并不是同时执行某些代码，而是有顺序的执行

代码执行严格遵守从上到下的执行顺序，如果上面的代码没有执行完毕，则后面的代码无法执行

简单理解：一条只有单车道的公路(类型单线程)

```javascript
console.log('这是一个寂寞的天');
    for (let i = 0; i < 1000; i++) {
        console.log('华子拉屎带勺');
    }
    console.log('下着有些伤心的雨');
```

假设我们的网址要发起一个ajax请求，向服务器下载一个资源，但是这个资源很大，下载3分钟

页面上还有其他的内容要显示，请问需要等待这个资源下载完毕再去渲染其他结构吗？

不能用同步的方式去做请求

与同步相反的机制：异步

先执行主要的代码，将耗时操作放到异步线程池中去执行，等到耗时操作完成，再放到主线程去执行代码

```javascript
console.log('这是一个寂寞的天');
    $.ajax(
        {
            url:'https://autumnfish.cn/api/hero/info',
            data:{
                name:'李青'
            },
            success:function(backData){
                console.log(backData);
            }
        }
    )
    console.log('下这有些伤心的雨');
```

### 将ajax请求修改为同步操作

```javascript
console.log('这是一个寂寞的天');
    $.ajax(
        {
            async: false,
            url:'https://autumnfish.cn/api/hero/info',
            data:{
                name:'李青'
            },
            success:function(backData){
                console.log(backData);
            }
        }
    )
    console.log('下这有些伤心的雨');
```

如果两个ajax请求没有相关联系，则正常使用异步

 如果两个ajax请求由联系，则可以使用同步，但是还是建议不要用同步 

# change事件

监听上传按钮事件，当发生图片上传的时候执行下面的代码

```javascript
$(function(){
        /*
            需求
            1.监听上传按钮事件，当发生图片上传的时候执行下面的代码
            2.获得上传的图片文件数据
            3.根据图片的文件数据创建路径
            4.讲图片路径赋值给img即可
        */

        // 利用change事件来监听控件的变化
        $('input').on('change',function(){
            // 通过files数组获得上传的文件信息，通过原生对象请求
            // console.log(this.files);
            let picData = this.files[0]
            
            // 讲图片数据转成路径
            // URL.createObjectURL()
            let picUrl = URL.createObjectURL(picData)
            // console.log(picUrl);

            // 将生成的路径赋值给img标签
            $('img').attr('src',picUrl)
        })
    })
```



### 通过files数组获得上传的文件信息，通过原生对象请求

`console.log(this.files);`

### URL.createObjectURL()	讲图片数据转成路径

```javascript
let picData = this.files[0]
            
            // 讲图片数据转成路径
            // URL.createObjectURL()
            let picUrl = URL.createObjectURL(picData)

```

# 设置ajax的全局属性

利用ajaxSetup()专门设置ajax的全局属性

```javascript
$.ajaxSetup(
    {
        // 发送请求之前，会执行的函数
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', localStorage.getItem('bignews69'))
        },
        // 当请求错误时，会执行的函数
        error: function (xhr, status, error) { 
            if (error == 'Forbidden') { 
            alert('天天再想什么白嫖吗？滚回去重新登录！');
            // 跳转回登录页面
            window.location.href = './login.html'
            }
        }
    }
)
```

### 发送请求之前，会执行的函数

```javascript
beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', localStorage.getItem('bignews69'))
        },
```

### 当请求错误时，会执行的函数

```javascript
error: function (xhr, status, error) { 
            if (error == 'Forbidden') { 
            alert('天天再想什么白嫖吗？滚回去重新登录！');
            // 跳转回登录页面
            window.location.href = './login.html'
            }
        }
```



# git工具学习

`git init`	初始化

初始化成功后，会出现一个.git文件夹。我们需要隐藏

`git add .`			将修改的代码存储到仓库的暂存区

`git commit -m"本次提交代码的描述文字"`		描述

`git status`	查看当前的仓库状态，只要有working tree clean / nothing to commit 代表当前没有代码可以提交

`git stash push`  将文件给push到一个临时空间中
`git stash pop`  将文件从临时空间pop下来

`git push origin 分支名` 推送上远程仓库

`git push origin 分支名 -f` 强制推送上远程仓库 

`git config --global --unset user.email`	退出用户邮箱

`git config --global --unset user.nam`e	退出用户名

`git config --global user.email ""`		登录

`git config --global user.name ""`		

`git config --global --list`  查看git信息

`git credential-manager uninstall` 清除缓存的用户名和密码

`（快捷打开win+R，输入control） 点击凭据管理器 点击windows凭据删除你的git凭据即可`

`clear`		清除

`git log` 	查看日志 可以打印所有的信息：版本号，作者信息，提交事件，描述内容

`git log --oneline` 查看简单的日志 	只用一行打印日志信息：版本号，描述内容

`git reset --hard `版本号	 	回滚原来的版本

`git reflog`	查看仓库中的所有日志

`git reset --hard HEAD^`  回到当前上一个版本 多一个	HEAD^^     上上一个版本	HEAD^^^   上上上一个版本

`git remote add origin https`路径	连接远程仓库

`git push -u origin master`	将本地所有数据推送到远程仓库

会弹出一个窗口输入gitee账号还有密码（如果信息错误，打开控制面板——凭证管理——window管理——删除gitee信息——，再次重新推送输入）

`git remote` 	查看当前链接的远程仓库的库名

`git remote -v` 	查看链接的远程仓库地址

`git remote remove origin` 	取消

`git clone 地址路径`		克隆远程的仓库

`git checkout -b login origin/分支名` 拉取远程仓库的别的分支

`git branch` 分支名			创建分支

`git branch`		查看当前所有的分支

`git branch -a ` 查看所有的分支

`git checkout` 分支名		切换分支

`git checkout -b 分支名` 创建加切换

`git push --set upstream origin` 分支名		设置一个分支上传

`git merge` 分支名		合并分支内容

`git merge --abort` 取消合并

注意：必须切换回主分支才有权限合并其他分支

合并的时候会在vscode出现

```javascript
Accept Current Change	保存当前的

Accept Incoming Change	保存新加的

Accept Both Changes		保存两个

Compare Changes		对比两个

```

合并之后，在主分支进行add commit 操作，并且推送回远程仓库

`git branch -d `分支名		删除本地分支

`git push origin -d 分支名`			删除远程仓库分支

`git pull `		拉去远程仓库的代码，只会获得本地没有的数据

`git config --get core.ignorecase`  查看忽略文件名称大小写 

`git config core.ignorecase false`    true 忽略 false 不忽略

# ES6语法

## const 声明变量

canst和let一样，都是用来声明变量的

使用canst声明的，不能重新赋值，常量

一旦使用const声明1常量，那么就无法重新为起赋值

使用const声明常量的同时，要求必须初始化

```javascript
const num2 = 200
```

## 解构赋值

### 对象的解构赋值

快速的从对象中取出属性的值

语法：

        let/const{变量1，变量2.....} = 对象
    
            原理：将对象中的同名属性的值赋值给前面的同名变量
    
            注意点：前面的变量名要和对象的属性名一致 否则就是undefined

```javascript
const p1 = {
    name: '华子',
    age:19
}

const { name, age } = p1 

console.log('name='+name+'age='+age);
```

### 数组的解析赋值

快速的从数组中取除元素的值

        语法：
    
        let/const [变量1，变量2，变量3.....] = 数组名
    
        原理： 将数组中的元素的值依次的赋值给前面的变量
    
        注意：
    
            2.1 如果变量不够，就按照顺序是前面的
    
            2.2 如果要跳跃拿数组的元素
    
                那就使用逗号空开变量
    
                const [a1, , ,a4] = arr

```javascript
const arr = [10, 20, 30, 40]

// const a1 = arr[0]
// const a2 = arr[1]

// const [a1, a2, a3, a4] = arr
// console.log(a1, a2, a3, a4);

// const [a1, a2, a3] = arr
// console.log(a1, a2, a3);

const [a1, , ,a4] = arr
console.log(a1, a4);
```

## 函数参数的解构赋值

1. 如果1个函数的参数是1个对象

        别人在调用这个函数的时候，根本不知道这个对象要包含那些属性
        
        除非去查询相对应得文档

    2.如果函数得参数1个对象

        在定义得时候，使用ES6得方式来定义
        
        function demo({属性名1，属性名2....}){
        
            在函数内部直接使用属性名就可以
        
        }
        
        好处：
        
        调用者调用得时候：只要看到函数头，就知道要传入1个对象，并且对象中要包含什么属性，一目了然

```javascript
function testFn({ name, age }) { 
    console.log(name);
    console.log(age);
}

testFn({
    name: '华子',
    age:18
})
```

## 对象的简化赋值

在声明1个对象的时候，如果对象的属性和取值的变量名一致，就可以简写

```javascript
const name = 'teacher'
const age = 20

const p1 = {
    name,
    age
}
console.log(p1);
```

## 扩展运算符

### 对象的扩展运算符

在A对象中，如果想要赋值B对象中的属性，由一个极为简单的方法

那就是使用扩展运算符

作用：将对象扩展开来，放到另外1个对象中

注意：当两个对象中有相同属性的时候，后面就会覆盖前面的

```javascript
const p1 = {
    name: 'teacher',
    age: 30
}

// const p2 = {
//     score : 100,
//     name : p1.name,
//     age : p1.age
// }

// const p2 = {
//     score: 100,
//     ...p1
// }

const p2 = {
    ...p1,
    score: 100,
    age:21
}

console.log(p2);
```

### 数组的扩展运算符

把数组中的元素扩展到另外1个数组中

```javascript
const arr1 = [10, 20, 30]
const arr2 = [40, 50, 60]
const arr3 = [...arr1, ...arr2]

console.log(arr3);
```

### Set函数

>Set数据解构：
>
>        1.1 和数组类似，都是用来存储多个数据的
>    
>        1.2 与数组不同的是，Set不能存储重复的数据
>    
>    Set的使用
>    
>        2.1 创建
>    
>            const set = new Set()
>    
>        2.2 如何在set中存储数据
>    
>            调用set的add方法
>
>	2.3 如何查看set的长度
>
>		set.size
>	
>	Set的遍历
>	
>	for(let item of set名){
>	
>	item 代表set中的每一个数据
>	
>	}
>
>Set的其它操作
>
>        调用Set构造函数的时候，可以传入1个数组
>    
>        那么这个时候，这个Set中存储的就是这个数组的不重复数据
>    
>        去除数组中的重复数据

```javascript
const set = new Set([10, 20, 30, 30, 20, 10])

// 将set转换为数组
const arr = [...set]

// 数组去重
const arr1 = [...new Set([10, 20, 30, 30, 20, 10])]

console.log(arr);
console.log(arr1);

// const set = new Set()
// set.add('teacher')
// set.add('华子')
// set.add('逸哥')
// set.add('student')

// for (const item of set) { 
//     console.log(item);
// }

// console.log(set);
// console.log(set[0]);//undefined 没办法通过下标获取
```

## 箭头函数

### 1.函数的定义

>        ES6认为：这样定义函数太复杂了，我要搞一个简单的方式：箭头函数
>
>        箭头函数是用来简化函数的定义的
>
>        箭头函数的改造
>
>            1.1去掉原来的function
>            
>            1.2在参数的小括号和函数的大括号之间加一个箭头 =>

```javascript
// const say = function (name) { 
//     console.log('你是来拉屎的吧'+name);
// }


	const say = (name) => { 
     console.log('你是来拉屎的吧'+name);
 }
 say('华子')
//const getSum = function (num1, num2) { 
//     return num1+num2
// }
 const getSum = (num1, num2) => { 
     return num1 + num2
 }
 console.log(getSum(10,20))
```

### 2.箭头函数的简写形式

>  2.1 如果箭头函数的参数只有一个，那么可以省略参数的小括号
>
>              当参数是0个或者多个的时候，这个小括号不能省略
>        
>          2.2 如果箭头函数的函数体只有一句代码，那么这个时候就可以省略函数体的大括号
>        
>              如果省略了大括号，箭头函数会自动将这一句代码的结果作为函数的返回值返回
>        
>              不需要手动书写return

```javascript
const say = name => { 
    console.log('你是来拉屎的吧'+name);
 }
const getSum = (num1, num2) => num1 + num2
```

### 3. 箭头函数的本质：是1个匿名函数

        如果想要二次使用这个匿名箭头函数，那么就需要使用1个变量将其保存
    
        应用场景：回调函数
    
            回调函数我们几乎都是箭头函数



### 箭头函数中的this指向

> 1.方法中的this指向
>
>         方法是由谁调用的那么这个方法中的this就指向的是谁
>
>
>     
>
> 2. setTimeout/setInterval中的this指的是window

```javascript
 const p1 = {
     name: '华子',
     age: 19,
     sayHi() { 
         console.log('这是一个寂寞的天' + this.name);
         const that = this
         setTimeout(function()  { 
//             // 这里面this指的是window
             console.log(that.age+'下着有些伤心的雨');
         },2000)     }
 }
p1.sayHi()
```

3.箭头函数中的this指向

        箭头函数的this指向与上一级的this有一个绑定
    
        上一级的this指向谁，那么箭头函数的this指向谁

```javascript
const p1 = {
    name: '华子',
    age: 19,
    sayHi() { 
        console.log('这是一个寂寞的天' + this.name);
        setTimeout(() => { 
            console.log(this.age+'下着有些伤心的雨');
        },2000)
    }
}


p1.sayHi()
```



# nodejs

C:\Users\lyx\AppData\Roaming\npm\node_modules

## Node.js特点（记住三句话）

- 事件驱动
- 非阻塞IO模型（异步）
- 轻量和高效 

## cmd

```javascript
F:		进入f盘
cd 		进入文件
1. 进入REPL模式：命令行工具中输入命令node
2. 输入代码，回车立即执行.
3. 退出REPL：
   1. 两次CTRL+C
   2. CTRL+D
   3. .exit
4.cls 清除窗口
```

# node内置模块

Node.js自带的功能，Node.js一旦安装，那么这些模块也就都有了，可以直接使用

## fs模块可以用来操作磁盘上的文件

        读取文件的内容
    
        写入文件
    
        删除文件
    
        修改文件
    
        ......

### 导入模块

        使用require函数导入
    
        参数:模块名称

```javascript
const fs = require('fs')
```

## 读取文件fs.readFile()

        传入的回调函数的指向时机，文件读取完毕之后才会被执行

```javascript
const fs = require('fs')

fs.readFile('./data/1.txt', 'utf-8', (err, data) => { 
    // 如果err有值，代表读取的时候发送了错误，错误的信息就在这个err中
    // 如果err没有值，就代表读取成功，读取的数据在data
    if (err) return console.log('读取文件发生了错误，错误的信息'+err);//说明，读取的时候，发生了错误
    console.log(data);
})
// 同步读取文件
// const data = fs.readFileSync('./data/2.txt','utf-8')
// console.log(data);
```

### require()

当读取的文件是json文件则可以直接使用require()读取，用require读取的json文件会直接返回一个数组

````javascript
const stus = require('./data/stust.json')
````

### Buffer

fs.readFile方法，如果没有传递第2个参数（编码）

回调函数中的第2个参就是1个buffer类别的对象

这个对象中存储的就是 原始的字节数据

如何将buffer中字节数据转换成字符串?????

调用Buffer对象的toString方法，传入指定的编码就可以，如果省略，默认使用utf-8

```javascript
const fs = require('fs')

fs.readFile('./data/1.txt', (err, data) => { 
    if (err) return console.log('读取文件发生了错误，错误的信息' + err);
    
    console.log(data.toString());
})
```

## 同步与异步

### 异步

        当执行到异步代码的时候，会开启一个任务去执行这个异步，同时代码会继续向下执行
    
        setTimeout
    
        setInterval
    
        ajax
    
        ......
    
        回调的基本都是异步

````javascript
const fs = require('fs')
console.log(1);
fs.readFile('./data/1.txt', 'utf-8' , (err, data) => { 
    console.log(2);
    if (err) return console.log('读取文件发生了错误，错误的信息' + err);
    
    console.log(data);
})
console.log(3);
````



### 同步：

        从上到下执行每一句代码，只有上一句执行完毕之后，才会去执行下一句

### 时间循环

        栈：如果要执行代码，那么首先要将这给代码压到这个栈中才会被执行
    
        任何程序都存有1个入口函数main

## 写入文件fs.writeFile()

文件如果已经存在，则会覆盖文件的内容；如果文件不存在，就会创建文件并写入内容

```javascript
const fs = require('fs')
const { connect } = require('net')
const content = '这是一个寂寞的天是，下着有些伤心的雨'
fs.writeFile('./data/2.txt', content, 'utf-8', err => { 
    if(err) return console.log('写入失败'+err);
    console.log('写入成功');
})


// 同步写入文件
//fs.writeFileSync('./data/2.txt', content, 'utf-8', //err => { 
//    if(err) return console.log('写入失败'+err);
//    console.log('写入成功');
//})
```

## nodejs路径

Node.js中相对路径相对于谁？

        执行node命令是的工作路径
    
        所以为了保证我们在任意的地方执行这个js文件，可以正确的找到路径
    
        建议大家在写路径的时候，不要写相对路径 而是写 绝对路径

###      __dirname:可以获取到当前js文件所属的目录的绝对路径

```javascript
const fs = require('fs')
fs.readFile(__dirname+'/data/1.txt', 'utf-8', (err, data) => { 
    if(err) return console.log('读取失败'+err);
    console.log(data);
})
console.log(__dirname);
```

###       __filename：可以获取当前js文件的绝对路径

```javascript
console.log(__filename);
```

### 内置模块 ： path.join() 自动拼接路径，并根据操作系统自动决定分隔符的正反

1.拼接路径的时候，到底要不要加路径分隔符

    2.路径分隔符到底是正还是反的
    
        不同的操作系统 分隔符的正反是不一样的

```javascript
const fs = require('fs')
const path = require('path')

const fulPath = path.join(__dirname,'data','3.txt')

// fs.writeFile(__dirname + '/data/3.txt', '这是一个寂寞的天是，下着有些伤心的雨', 'utf-8', err => { 
//     if (err) return console.log(err);
//     console.log('华子拉屎不带纸');
// })
fs.writeFile(fulPath, '这是一个寂寞的天是，下着有些伤心的雨', 'utf-8', err => { 
    if (err) return console.log(err);
    console.log('华子拉屎不带纸');
})
```
## 内置模块http

作用：利用这个这个模块提供的功能，我们可以开发一个Web后台.

```javascript
 // 1.导入http模块
const http = require('http')

// 2.创建1个服务，这个服务就是用来处理来自客户端的http请求的
// 这个方法需要传入1个回调函数，req，res => {}
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type','text/plain; charset=utf-8')
    res.end('华子哥拉屎不带纸')
})

//3.开启服务，监听来自客户端的请求
    // 第一个参数 端口号
    // 第二个参数 回调 没有参数 服务开启成功之后会调用
    // 让这个http服务在3000这个端口上工作
// server.listen(3000, () => console.log('服务已经开启'))
server.listen(80, () => console.log('服务已经开启'))
```

### http中的req参数

只要有来自客户端的http请求，就会被触发.

req ==  request 请求.	req --> 这个参数中就封装了客户端发给服务端的数据，请求头和请求体的数据都能找到.

````javascript
console.log(req);
````



#### req.headers 可以拿到客户端发送过来的请求头

```javascript
console.log(req.headers);
```

#### req.url  拿到访问服务器的URL部分.

```javascript
 console.log(req.url);
```

#### req.method 拿到客户端访问服务端的方法 get post

```javascript
console.log(req.method);
```

#### 获取客户端的ip

```javascript
function getClientIp(req) {
    //客户端的IP地址，不同的浏览器，。它是放在不同的地方的.
    return req.headers['x-forwarded-for'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
};
const ipAdd =  getClientIp(req);
    console.log('收到了来自:'+ipAdd+'的请求');
```

## http中的res参数

res == response 简写；res对象的作用： 可以向响应头中写数据，也可以向响应体中写数据.

### res.statusCode设置响应状态码  

默认就是200

```javascript
res.statusCode = 200;
```

### res.setHeader()往响应头中添加数据

Content-Type: 指定响应的数据的类型(告诉浏览器响应体中的数据的类型)

- text/plain: 纯文本.
- text/html :  我给你的数据是html数据.

```javascript
res.setHeader('Content-Type', 'text/html;charset=utf-8');
```

### statusMessage 设置状态信息

```javascript
res.statusMessage = 'fuck you'
```

### res.write()向响应体中写数据

响应体中的数据： 是真正被浏览器解析的

write方法向响应体中写数据. 字符串，Buffer

```javascript
res.write('<h1>111</h1>');
    res.write('<h1>11</h1>');
```

### res.end()结束本次请求的处理，结束

**这个end方法必须要调用.向响应体中写入数据.这个方法只能调用1次.**

```javascript
res.end('<h1>111</h1>');
```

## toLowerCase()

将大写转换为小写

```javascript
const url = req.url.toLowerCase()
const method = req.method.toLowerCase()
```

## 案例01

```javascript
const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {
    // 回调的执行事件:只要接收到客户端http请求
    // 无论客户端URL后面是什么,都会触发这个方法
    // 1.要先拿到客户端访问的服务器端带的URL

    // toLowerCase() 将url转成小写
    const url = req.url.toLowerCase()
    res.setHeader('content-type','text/html;charset=utf-8')
    if (url == '/index.html') {
        res.end('我是首页')
    } else if (url == '/login.html') {
        res.end('我是登录页')
    } else if (url == '/bg.jpg') {
        // 将图片读取出来
        try {
            fs.readFileSync(path.join(__dirname, 'data', 'game.jpg'), (err, data)=>{
                // 读取成功 设置content-type
                res.setHeader('content-type','assets/jpeg')
                res.end(data)                
            })
        } catch (err) {
              
        }
        fs.readFileSync(path.join(__dirname, 'data', 'game.jpg',), (err, data) => {
            if (err) {
                // 读取的时候发生了错误
                res.statusCode = 500
                res.statusMessage = 'internal error'
                res.end()
            } else {
                // 读取成功 设置content-type
                res.setHeader('content-type','assets/jpeg')
                res.end(data)
            }
        })
        
    } else {
        res.statusCode = 404
        res.statusMessage = 'The visit to fail'
        res.end()
    }
    // res.end()
}).listen(80, () =>console.log('服务开启'))
```

### 案例优化

```javascript
const http = require('http');
const fs = require('fs');
const path = require('path');


http.createServer((req, res) => {
    
    const url = req.url.toLowerCase();
    
    const fileName =  path.join(__dirname, 'data', url);
    fs.readFile(fileName, (err, data) => {
        if(err){
            //读取的时候发生错误.
            //路径错误.
            res.statusCode = 404;
            return res.end();
        }
        //说明读取到了文件.
        res.end(data);
    });

}).listen(80, () => console.log('启动成功'));
```

# nodemon常见配置

- 安装：`npm install -g nodemon`
- 使用`nodemon`运行项目，取代之前的`node app.js`。`nodemon  [your app.js]`


- 在命令行指定应用的端口号：`nodemon ./server.js localhost 8080`
- 查看帮助，帮助里面有很多选项都是一目了然：`nodemon -h 或者 nodemon --help`
- 运行 debug 模式：`nodemon --debug ./server.js 80`
- 手动重启项目： `Nodemon` 命令运行的终端 窗口中输入 `rs` 两个字符，然后再按下回车键，就能手动重启 `Nodemon`了

# npm中的常用命令

1. `npm -v`：查看npm版本。
2. `npm init`：初始化后会出现一个`package.json`配置文件。可以在后面加上`-y` ，快速跳过问答式界面。
3. `npm install`：会根据项目中的`package.json`文件自动下载项目所需的全部依赖。
4. `npm install 包名 --save-dev`(`npm install 包名 -D`)：安装的包只用于开发环境，不用于生产环境，会出现在`package.json`文件中的`devDependencies`属性中。
5. `npm install 包名 --save`(`npm install 包名 -S`)：安装的包需要发布到生产环境的，会出现在package.json文件中的`dependencies`属性中。
6. `npm list`：查看当前目录下已安装的node包。
7. `npm list -g`：查看全局已经安装过的node包。
8. `npm --help`：查看npm帮助命令。
9. `npm install 包名 @版本号` ：下载指定版本
10. `npm update 包名`：更新指定包。
11. `npm uninstall 包名`：卸载指定包。
12. `npm config list`：查看配置信息。
13. `npm 指定命令 --help`：查看指定命令的帮助。
14. `npm info 指定包名`：查看远程npm上指定包的所有版本信息。
15. `npm config get registry`：查看当前的包的下载源
16. `npm config set registry https://registry.npm.taobao.org`： 修改包下载源，此例修改为了淘宝镜像。
17. `npm root`：查看当前包的安装路径。
18. `npm root -g`：查看全局的包的安装路径。
19. `npm ls 包名`：查看本地安装的指定包及版本信息，没有显示empty。
20. `npm ls 包名 -g`：查看全局安装的指定包及版本信息，没有显示empty。
21. `npm config set prefix E:\nodeJsNpm\npm`：修改npm默认的全局安装位置
22. `npm cache clear -f` : 清除第三方包 的缓存
22. `npm link` 可以帮助我们模拟包安装后的状态，它会在系统中做一个快捷方式映射，让本地的包就好像 install 过一样，可以直接使用。
22. `npm unlink 包名`  断开连接,但是需要到指定得目录一般是`C:\Users\Admin\AppData\Roaming\npm\node_modules\`

# npm插件推荐mime

mime根据文件的后缀名生成对应的Content-Type值

```javascript
const fileName = path.join(__dirname, 'www', req.url);
res.setHeader('Content-Type', mime.getType(fileName));
```

# Express插件包的使用

1.导入模块	`const express = require('express');`

2.创建express应用（服务）	`const app = express();`

3.注册路由	当客户端的URL是 /index的时候，这次请求就由这个回调来处理.

`app.get() ` : 只接收get请求，并且URL要和第1个参数完全匹配.

```javascript
const express = require('express');
onst app = express();
app.get('/index',(req,res)=>{
  res.send('hello world')
})
```

`app.post()` : 只接收delete请求，并且URL要和第1个参数完全匹配.

```javascript
app.post('/add', (req, res) => {
    res.send('Hi.....');
});
```

`app.delete()` : 只接收delete请求，并且URL要和第1个参数完全匹配.

```javascript
app.delete('/del', (req, res) => {
    res.send('del');
});
```

`app.use() ` : 不限制请求方法,客户端的URL的第1部分 和 第1个参数匹配 就可以.

```javascript
app.use('/admin', (req, res) => {
    res.send('admin----admin----');
});
```

`app.all()` : 不限制请求方法,URL必须完全匹配.

```javascript
app.all('/student', (req, res) => {
    res.send('student...');
});
```

4.开启服务 	`app.listen(80, ()=>console.log('服务开启成功'));`



## res.send()方法与res.end()区别

相同点： 都表示结束响应.

不同点:  end 参数 string buffer

             send  任意 如果不是string buffer，就会转换为json字符串
    
             send还会自动设置Content-Type

## express静态资源托管

```javascript
app.use(express.static('目录名'))
// 127.0.0.1
 app.use('/static', express.static('目录名'))
 // 127.0.0.1/static/index.html
```

## 获取URL串的的参数	 req.query

```javascript
//1. 导入模块.
const express = require('express');


//2.创建应用
const app = express();


//3.注册路由
//   URL在匹配的时候，是会忽略后面的参数.
app.get('/api/student', (req, res) => {
    //  如果浏览器通过URL传递了参数到服务器，在服务器端可以通过req.query拿到.
    //  req.query 是1个对象，这个对象以键值对的形式存储好了来自URL的参数.
    console.log(req.query);

    res.send('ok');
});

//4. 开始监听
app.listen(80, ()=>console.log('服务启动成功'));
```



### 获取post传递过来的数据	req.body

需要注册中间件 `app.use(express.urlencoded({extended: false}));`

````javascript
const express = require('express');


const app = express();

//注册路由
//不限制请求方法.
//  URL省略， 就代表匹配所有的URL
//  urlencoded方法返回的回调： 对post传递过来的数据进行编码转换，完成之后，req.body中才会有数据.
app.use(express.urlencoded({extended:false}));


app.post('/add', (req, res) => {
    //console.log(req.body);
    const {name, age} = req.body;
    console.log(name, age);
    res.send('ok');
});



app.listen(80, ()=>console.log('服务启动成功'));
````

# node.js中的模块

## 内置模块

Node.js自带的模块, 安装Node.js，内置的模块就会被一起安装.

        内置模块的运行效率是比较快的
    
        a. 直接被编译成二进制文件. 是CPU直接可以识别的.
    
        b. 有一些常用的内置模块，在你启动node.exe进程的时候就会被加载.
    
        fs
    
        path
    
        http

## 文件模块

在Node.js中，一个文件也可以作为一个模块.

        .js
    
        .json
    
        .node  是由C/C++语言编写的node模块.

## 第3方模块

	mime
	
	    express
	
	    通过npm下载的模块，我们将其叫做第3方模块.
	
	    第3方模块的本质其实就是一个文件模块.

# 如何加载模块

## .js文件的加载

`require('文件模块的路径')`

加载.js文件模块做的事情， 是先将这个文件模块中的代码执行了一次.

         这个时候，我们使用1个变量接收require的返回值，发现是一个空对象 { } 

## .json文件的加载

将这个文件中的内容读取出来，并转换为js对象.

##  加载.js文件模块为什么是一个空对象

每一个文件模块中，都有一个全局变量 叫做` module.exports`

   这个全局变量的默认值是一个空对象  {  }

   当这个文件模块被加载的时候，这个文件模块返回的就是 `module.exports` 的值.

# module.exports和exports的区别

>无论如何，一个文件模块向外界暴露数据，是通过`module.exports`.
>
>        最终加载这个文件模块拿到的数据，是`module.exports`的值.
>    
>        默认情况下， `module.exports` 指向的是1个空对象.
>
>`exports`默认情况下，也指向` module.exports`指向的对象.
>
>        无论如何，最终文件模块的返回值是 `module.exports`

### require加载模块的流程(了解，。根本不需要记)

require参数是一个文件模块的路径; 

如果给定的文件模块有后缀名，那么它就会根据这个路径找到这个文件模块加载.

如果根据这个路径，找不到这个文件. 那么就加载失败.

如果给定的文件模块没有带后缀名.

       .js
    
       .json
    
       .node
    
       会去找，是否有这个文件夹。如果有，它就认为这是一个第三方模块，然后就去加载这个第3方模块.
    
       加载失败..

require参数是一个模块的名称

        a. 它会先判断，这是否是一个内置模块，如果这是1个内置模块就加载.
    
        b. 它就认为是1个第3方模块.
    
           >  先在当前目录下，查找node_modules文件夹. 如果有，就进去找这个模块.
    
           >  如果当前目录下没有node_modules文件夹，那么就去上1级目录查找是否有这个文件夹.
    
           >  一直往上找，如果找到根目录，都没有node_modules文件夹，则加载失败.
    
        c. 如果在node_modules中找到了这个模块.
    
           >  先去找这个模块中的package.json文件.
    
              > 如果没有这个文件。直接去执行index.js 如果没有index.js就报错.
    
              > 如果有package.json 
    
                > main属性，指定入口文件的， 如果指定了入口文件。，就去执行这个入口文件.
    
                        如果没有指定入口文件。 index.js   index.json index.node 加载失败.

### 重点

       a. 加载文件模块的时候，可以不用写后缀名.
    
          .js
    
          .json
    
          .node
    
          建议还是写上后缀名。以提高效率.
    
       b. 查找第3方模块的时候，先在当前目录中找`node_modules`.
    
          如果没有，在上1级目录中找，直到找到根目录.

## mySQL(了解)

SQL语句

> 注释 	--空格
>
> -- 1.网表中新增数据
>
> insert into 表名(字段名1,字段名2,字段名3.....) value(值1,值2,值3.....)
>
> 查询数据表中的数据
>
> 查询指定的数据
>
> 语法：select 字段1,字段2,字段3,... from 表名
>
> 查询所有的数据 那么字段可以使用*
>
> `select * from student`
>
> 单条件查询
>
> select * from 表名 where 条件
>
> ```javascript
> select * from student where gender='女'
> select * from student where gender='男'
> select * from student where score>90
> ```
>
> select * from 表名 where 条件 in (xx,xx)
>
> ```sql
> select * from user where id in (1, 2)
> ```
>
> union 联合
>
> select 字段1 from 表名1 Union select 字段2 from 表名2
>
> ```sql
> SELECT * FROM app_user WHERE id=307064912
> union
> SELECT * FROM app_user WHERE id=105821463
> ```
>
> 多条件查询
>
> add表示并且
>
> `select * from student where gender='女' and score>=90`
>
> or表示或者
>
> 年龄大于20 或者 成绩小于80
>
> `select * from student where age>20 or score<80`
>
> 模糊查询
>
> like '%王%'
>
> `select * from student where name like '%花%'`
>
> 分页查询
>
> limit 从第几个开始取，取多少条
>
> limit n,m
>
> n从第n+1开始取，取m条
>
> `select * from student limit 5,3`
>
> 删除数据
>
> delete from 表名 where 条件
>
> `delete from student where name = '华子'`
>
> 删除所有数据
>
> `delete from 表名`
>
> 清空数据表，并重置id
>
> `truncate table student`
>
> 修改数据
>
> update 表名 set 字段1=新值1, 字段2=新值2... where 条件
>
> `update student set name='华子' where id=1`
>
> 以什么来排序
>
> `select * from student order by id`升序
>
> `select * from student order by id desc`降序

# mysql模块

>在Node.js中，我们可以使用mysql这个第3方模块，使用SQL语句来操作`MySQL`数据库。

## 使用步骤

下载mysql模块.	`npm install mysql`

导入模块 	`const mysql = require('mysql')`

使用模块		

```javascript
// 1.导入模块
const mysql = require('mysql')
// 定义来连接数据库的信息
const connection = mysql.createConnection(
    {
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database:'student'
    }
)

// 链接数据库
connection.connect()

/*
    query方法：有两个参数
    第一个参数：是一个SQL语句，它会讲这条SQL语句发送到数据库中取执行
    第二个参数：回调的执行时机，SQL语句执行完成之后
            error：如果在执行SQL语句的时候，发送了错误，这个error中是错误的信息
            error如果没有值，说萌执行成功
            如果成功执行了SQL语句，那么执行的结果就在第2个参数 results中
*/
connection.query('select * from student', (error, results) => {
    if (error) {
        console.log('执行失败：' + error);
    } else {
        console.log('执行成功');
        console.log(results);
    }
})

// 关闭连接
connection.end()

```

## nodemon工具

作用：只要检测到代码发生改变，就会自己动的帮助我们重启Node.js

安装：`npm install nodemon -g` 

	g：global全局

开启：`nodemon index.js`

## knex框架

作用：mysql模块的作用一样，在Node.js中操作数据库

	不需要使用sql语句，kenx操作数据就像操作js的对象一样

因为knex可以操作多种数据库，所以我们在下载的时候记得要下载两个模块 `npm install knex mysql`

写法：

>使用knex查询数据库中的数据
>
>//   knex是基于Promise封装的,
>
>//   a. 链式编程
>
>//   b. 在最后都有1个 .then()  当查询成功执行以后，就会触发这个回调，结果就是这个会掉的参数 results
>
>//                  .catch() 在查询的时候，发生了错误，就会触发这个回调， 错误的信息就在参数reason中.

### 导入knex模块，并设置连接信息

```javascript
const knex = require('knex')({
    client: 'mysql', //指定knex操作的数据库是MySQL数据库.
    connection: {
        host: '127.0.0.1', //数据库的地址
        user: 'root', //登录数据的用户名
        password: 'root', //登录数据库的密码
        database: 'dbstudy' //操作的数据库
    }
});
```

### 查询所有的数据

```javascript
knex('student')
    .select()
    .then( results=>{
        //要去数据库中查询数据，当查询完毕之后，就会触发这个回调.
        //查询到的结果就是results
        console.log(results )
    })
    .catch( reason => {
        console.log('查询发生错误,错误的详情：'+reason)
    })
```

### 查询指定的列.

```javascript
knex('student')
    .select('id','name','nickname')
    .then( results=>{
        //要去数据库中查询数据，当查询完毕之后，就会触发这个回调.
        //查询到的结果就是results
        console.log(results )
    })
    .catch( reason => {
        console.log('查询发生错误,错误的详情：'+reason)
    })
```

### 根据条件来查询

```javascript
knex('student')
    .select()
    .where('gender','=','女')  //where方法传入查询的条件.  参数1：列名  参数2：操作符,  参数3：值
    .then(results=>{
        console.log(results)
    })
    .catch(reason => {
        console.log('执行查询的时候发生错误：'+reason)
    })
```

```javascript
knex('student')
    .select()
    .where('age','>',20)  //where方法传入查询的条件.  参数1：列名  参数2：操作符,  参数3：值
    .then(results=>{
        console.log(results)
    })
    .catch(reason => {
        console.log('执行查询的时候发生错误：'+reason)
    })
```

### 模糊查询

```javascript
knex('student')
    .select()
    .where('nickname','like','%花%')  //where方法传入查询的条件.  参数1：列名  参数2：操作符,  参数3：值
    .then(results=>{
        console.log(results)
    })
    .catch(reason => {
        console.log('执行查询的时候发生错误：'+reason)
    })
```

### 多条件查询	and 	or

```javascript
knex('student')
    .select()
    .where('gender', '=','女')//where方法传入查询的条件.  参数1：列名  参数2：操作符,  参数3：值
    .andWhere('score', '>', 90)
    .then(results=>{
        console.log(results)
    })
    .catch(reason => {
        console.log('执行查询的时候发生错误：'+reason)
    })
```

```javascript
knex('student')
    .select()
    .where('nickname','like','%花%')  //where方法传入查询的条件.  参数1：列名  参数2：操作符,  参数3：值
    .orWhere('name', 'like', '%花%')
    .then(results=>{
        console.log(results)
    })
    .catch(reason => {
        console.log('执行查询的时候发生错误：'+reason)
    })
```

### 分页查询

```javascript
knex('student')
.select()
    .limit(5) //传入1个数字， 代表要取多少条数据
    .offset(10)     //传入1个数字，表示从第几个开始取.
    .then(results => {
        console.log(results)
    })
    .catch(reason => {
        console.log('执行查询的时候发生错误：' + reason)
    })
```

### 新增数据

```javascript
const  stu = {
    name:'罗志祥',
    nickname: '时间管理者',
    age: 45,
    gender: '男',
    score: 100,
    className: '湾湾班',
    avator: 'tupian.jpg'
}
knex('student')
.insert(stu)
.then(results=>{
    //当执行的是，新增的操作的时候，results直接就是新增的数据的id
    console.log(results)
})
.catch(reason => {
    console.log('执行查询的时候发生错误：' + reason)
})
```

如果没有传递列对应的值，那么在数据库中值就是NULL

```javascript
const  stu = {
    name:'刘德华',
    nickname: '华仔',
    age: 60
}
knex('student')
    .insert(stu)
    .then(results=>{
        //当执行的是，新增的操作的时候，results直接就是新增的数据的id
        console.log(results)
    })
    .catch(reason => {
        console.log('执行查询的时候发生错误：' + reason)
    })
```

### 修改数据

```javascript
knex('student')
    .update({
        gender: '男',
        score: 99,
        className: '大聪明',
        avator: 'yyds.jpg'
    })  //传入1个对象，就是以键值对的形式，传入要修改的数据
    .where('id', '=', 25)
    .then(results => {
        //当执行的是，修改操作的时候，results就是受影响的行数.
        console.log(results)
    })
    .catch(reason => {
        console.log('执行查询的时候发生错误：' + reason)
    })
```

### 删除数据

```javascript
knex('student')
    .delete()
    .where('nickname', '=', '时间管理者')
    .then(results => {
        //当执行的是，删除操作的时候，results就是受影响的行数.
        console.log(results)
    })
    .catch(reason => {
        console.log('执行查询的时候发生错误：' + reason)
    })
```

# multer模块接受文件

安装multer：`npm install multer`

写法

```javascript
const express = require('express');
const app = express();
//1. 导入multer模块
const multer = require('multer');
//2. 传递给服务端的文件，
//   指定浏览器传到服务器的文件，服务器将它存在什么地方.
const upload =  multer({dest: 'uploads/'});
//如何接收，浏览器传递过来的文件.
app.post('/api/upload', upload.single('touxiang'), (req, res)=>{
    //这个路由，就可以接收浏览器传递过来的文件.
    //1. 传过来的文件会自动帮助你存到 upload文件夹中.
    //2. 传过来的文件的key
    //3. 文件名随机生成的。它随机生成的这个文件名， 是绝对不会重复的.
    //4. 不会有后缀名.
    //使用了multer处理文件上传.
    //这个时候， req.body就可以拿到跟随文件一起上传上来的文本信息.
    //console.log(req.body);
    //console.log(req.file);
    //5. 可以拿到上传上来的文件，在服务器的文件中的名字.
    console.log(req.file.filename);
    res.send('ok');
});
app.listen(80, ()=>console.log('服务启动成功'));
```

## 注意

1. `multer`会将上传到服务器的文件保存到指定的目录呢，并且会为其取一个不会重读的文件名. `req.file.filename`获取该文件名.
2. 这个文件名不包含后缀名.

## 修改磁盘上的文件名

```javascript
const fs = require('fs');
const path = require('path');


const oldName = path.join(__dirname,'data/1.txt');
const newName = path.join(__dirname,'data/2.txt');


fs.rename(oldName, newName, err=>{
    if(err) return console.log(err);
    console.log('修改成功');
});
```

## 解决文件名的没有后缀的问题

````javascript
// 先取到文件本身的名字.
    const oldName = path.join(__dirname, '../public/upload',req.file.filename);
    // 取到文件本身的后缀名
    const arr = req.file.originalname.split('.');
    const hzm = arr[arr.length-1];
    const newName = oldName + '.' + hzm;
    // 改名字.
    fs.rename(oldName, newName, err=>{
        if(err) res.status(500).send({code:500, msg:'服务器内部发生错误'});
    });

    //指定数据库中avator的值是文件的名字
    stu.avator = req.file.filename + '.' + hzm;
````

# 路径参数

>到目前为止，浏览器向服务器传递数据的方式有如下几种
>
>1. URL后面跟1个问号     ?id=10
>   - 通过`req.query`拿到
>2. POST传递的数据
>   - 通过`req.body`拿到
>3. 文件数据
>   - 通过`multer`中间件接收

实际上，还有一种叫做`路径参数`的格式也可以浏览器传递、服务器接收数据. URL格式就像下面这样

`http://127.0.0.1/api/student/delete/1`

`http://127.0.0.1/api/student/delete/2`

`http://127.0.0.1/api/student/delete/3`

```javascript
app.get('api/student/delete/:id', (req, res) => {
  const id = req.params.id
  //注意：req.params.（参数名）与上面的api/student/delete/:（参数名）要一致
})
```

# 中间件

## Express的中间件

中间件就是是用来处理来自客户端的URL请求的。其实我们之前在app.get中写的回调函数就是一个我们自己写的中间件。**中间件就是一个函数，这个函数用来处理来自客户端的请求**，处理完毕之后，可以结束。也可以继续将这个请求交给下个符合条件的中间件函数继续处理。最终浏览器的请求经过多个中间件处理之后，返回数据。

**一个URL可能会有多个中间件对其进行匹配处理，比如下面专业的。**

```javascript
app.use('/', (req, res) => {
    console.log(1)
})

app.use('/student', (req, res) => {
    console.log(2)
})

app.get('/student/index', (req, res) => {
    log(3)
})

现在假如请求URL是   http://127.0.0.1/student/index
这个URL实际上，上面3个中间件都是可以匹配的。
但是，匹配到的只有第1个。
```

这是因为，默认情况下，只要有中间件处理了来自客户端的请求，这个请求就不会继续往后面流了。如果我们希望1个中间件对请求进行了处理之后，让后面的符合条件的中间件继续对这个请求做处理，那么这个时候就要用到中间件函数的第3个参数`next`, 它代表下1个符合条件的中间件，当第1个中间件处理完毕之后，调用1下`next`函数就会将请求转交到下1个中间件继续处理

```javascript
app.use('/', (req, res,next) => {
    console.log(1)
    next()
})

app.use('/student', (req, res, next) => {
    console.log(2)
    next()
})

app.get('/student/index', (req, res,next) => {
    log(3)
    next();
})
现在假如请求URL是   http://127.0.0.1/student/index
这个时候，上面3个中间件都是可以匹配的。
并且都会对这个请求进行处理。
```

## md5密码加密

**明文**

 存储密码的时候，在数据库中，不是以明文的形式存储. 因为这样很危险。别人只要攻破你的数据库，那么用户的密码就直接暴露了.

  CSDN -> 明文

将用户的密码进行加密，将加密后的密码存储在数据库中.

d5加密方式:   可以将一个字符串进行加密，加密成32位的字符串. 然后将加密后的数据存储在数据库中.

           md5加密的特点

1. 同样的字符串，使用md5加密得到的都是同1个密码.

2. 123456  ->   e10adc3949ba59abbe56e057f20f883e

3. 无法解密. 单向的， 只能加密，不能解密.

   md5 单向加密 同样的字符串加密结果是一样的.

使用：安装,`npm install md5`

导入	`const md5 = require('md5')`

用法：	`md5('123456') ；let password = 123456;md5(password)`

# JWT

>WT:  JSON Web Token 它的作用是用来做用户授权，也就是来限制一些接口只能由指定的用户访问.

https://jwt.io

##  原理

1. 客户端使用用户名和密码登录.
2. 如果用户名和密码正确，那么服务端就根据一个私钥加密生成一个Token(其实就是串乱七八糟的字符串)
3. 服务端将这个Token发回给客户端.  客户端可以选择保存在Cookie或者LocalStorge中.
4. 当客户端请求服务端的接口的时候，必须要带上这个Token, 不带Token直接拒绝。
5. 服务端会根据私钥解密客户端带过来的Token，如果可以解开，并且没有过期，则继续接口处理。
6. 否则就报错，提示Token无效，或者过期。无法继续接口处理。

> 
>
> 1. 服务端校验客户端的用户名和密码
> 2. 如果错误： 直接告诉浏览器 校验失败
> 3. 如果正确：
>    1. 根据一个私钥 生成1个Token  私钥 就是一个字符串.
>    2. 将这个Token发送给浏览器.
>    3. 浏览器将其保存起来.
>
>     浏览器去访问接口
>
> 1. 访问接口的时候，必须要带上token
> 2. 服务器接到请求之后
>    1. 先看有没有带token 如果没有直接拒绝
>    2. 如果有token 对token进行解密. 必须要用到生成token的时候 使用的私钥才能解密.
>    3. 再判断token是否过期， 或者是否被篡改.





## token的组成部分

1. `HEADER`
   - 是一个json对象，用来保存token的头部信息
   - 比如加密算法是什么
2. `PAYLOAD`
   - token中保存的主体信息
   - 比如我们自定义的信息，用户id号，用户名称等
   - 创建时间 
   - 过期时间
3. `VERIFY SIGNATURE`
   - 验证信息，
   - 只有正确的私钥才能验证成功

##  注意

1. 服务端用来生成Token的私钥，必须妥善保管，一旦泄露，别人也可以来解开你的Token
2. 服务器无法撤销已经发布的Token,只能静静的等待其过期.
3. 客户端要保管好自己的Token,不要泄露，否则别人可以使用你的Token，以你的身份访问接口。
4. Token在网络上是明文传输，为了保证其安全性，建议使用SSL, 也就是HTTPS协议。

## 生成Token

> 生成Token，使用1个第3方模块`jsonwebtoken`

```javascript
//1.调用jwt的sign方法，可以生成token
const jwt = require('jsonwebtoken');
const data = {
    uid: 12,
    name: 'jack'
}
const token = jwt.sign(data, "highven", { expiresIn: '1h' });
//第1个参数：就是token的主体信息 payload data
//第2个参数，是私钥字符串
//第3个参数：token过期时间.
```



## 验证Token

> 验证Token，使用1个第3方模块`express-jwt`

### 第一种方式

在需要验证的路由匹配的地方，加上一个中间件

`expressJWT({secret:"highven", algorithms: ['HS256']})`

secret:  私钥 必须要和生成token的私钥一致.

algorithms:  生成token加密方式,   我们在生成的时候使用的是默认方式 HS265

```javascript
app.get('/student', expressJWT({secret:"highven", algorithms: ['HS256']}), (req, res) => {
    res.send('所有学生返回');
});
```

当验证失败的时候，就不会进入到 req res回调函数中继续处理。而是直接报错。

自定义Token报错信息

```javascript
默认情况下，如果token失效，express服务器会返回1个html格式的字符串.
我们不希望它返回的是这个东西.
我们想自定义返回的内容

//自定义Token报错信息，放在最后注册。
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        //  这个需要根据自己的业务逻辑来处理（ 具体的err值 请看下面）
        let obj = {};
        obj.msg = 'token验证失败';
        obj.code = '606';
        obj.error = err;
        res.send(obj); //返回失败信息
    }
});
```

#### 特别提醒：

客户端在请求被保护的API时，就必须要带上Token，一般情况下是带在请求头中

`authorization`  其值设置为Token,  注意在发送的时候，前面要加1个Bearer空格



### 第二种方式

> 如果在每一个路由匹配的地方都去写上Token校验的话，明显是很麻烦的。我们可以使用中间件注册的方式来统一进行校验

```javascript
app.use(expressJWT({
    secret: "highven",
    algorithms: ['HS256']
}).unless({
    path: ['/api/user/login'] //排除的URL
}))
```

# Promise

**同步与异步：**

同步：代码从上到下执行，上面的代码没有执行完毕，下面的代码不会执行。

异步：某1段代码的执行不会阻塞后续的逻辑.

常见的异步操作：

>1. 定时器相关
>2. 事件
>3. $.ajax
>4. fs文件读写
>5. knex数据库操作
>6. 基本上传入了回调函数就是异步.

## Promise的基本使用

```javascript
//1.创建1个Promise对象.
const promise = new Promise();
//2.在构造函数中传入1个回调函数
//  这个回调函数:
//  a. 将我们的异步操作代码封装在这个回调函数中.
//  b. 该回调函数有两个参数 resolve, reject，这两个参数分别是函数.
//     我们封装的异步代码如果执行成功 就调用resolve
//                            失败 就调用reject
const promise = new Promise((resolve, reject) => {
    fs.readFile('./data/1.txt', 'utf-8', (err, data) => { 
    	if(err){
            reject(err);
        }else{
            resolve(data);
        }
    });
})
//这个promise对象中就封装了读取文件的异步操作.
//执行这个promise中的异步代码.
//当调用promise的then方法，就会开始去执行promise中的异步操作.
//当在异步操作中调用resolve的时候，就是调用then中的回调.
//当在异步操作中调用reject的时候，就是调用catch中的回调.
promise.then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})

//解决回调嵌套
//1. 定义一个函数，返回一个封装了读取文件的异步操作代码.
function hmReadFile(filename){
    const promise = new Promise((resolve, reject) => {
    	fs.readFile(filename, 'utf-8', (err, data) => { 
            if(err){
                reject(err);
            }else{
                resolve(data);
            }
    });    
    return promise;
}

//2. 调用这个方法，可以得到1个Promise对象.
hmReadFile('./data/1.txt')
    .then(data=>{
		console.log('1.txt: ' + data);        
    	//重要：这里可以return一个新的Promise对象. 可以在后面继续.then
    	return hmReadFile('./data/2.txt');
	})
    .then(data=>{
        console.log('2.txt: ' + data);
    })
	.catch(err => {
        log(err);
    })
```

**Promise的好处在于：调用的时候没有回调嵌套**

##  Promise的all方法

```javascript
//所有promise执行完毕后，触发then
//then的参数是1个数组，每一个promise的数据
Promise.all([pro1,pro2,pro3]).then(res=>{
    
})

//定时器案例.
function setTimeoutPro(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('异步执行成功，持续时间为'+time);
        }, time);
    });
}

const pro1 = setTimeoutPro(2000);
const pro2 = setTimeoutPro(3000);
const pro3 = setTimeoutPro(4000);

Promise.all([pro1,pro2,pro3]).then(res=>{
    console.log(res);//[2000,3000,4000]
});
```

## Promise的race方法

```javascript
//只要有1个执行完毕，就触发then
Promise.all([pro1,pro2,pro3]).then(res=>{
    
})

//定时器案例.
function setTimeoutPro(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('异步执行成功，持续时间为'+time);
        }, time);
    });
}

const pro1 = setTimeoutPro(2000);
const pro2 = setTimeoutPro(3000);
const pro3 = setTimeoutPro(4000);

Promise.race([pro1,pro2,pro3]).then(res=>{
    console.log(res);//2000
});
```

## Promise的allSettled

```js
// 不管失败成功执行所有promise
const submit = async ()=>{
    await Promise.allSettled([
    ...customForms.map(v => v.validate()),
    await customForm.value.validate()
  ]);
}
```



# 跨域访问

## 浏览器的同源策略

浏览器出于安全考虑，只允许ajax访问同源资源

**同源**

1. 协议 地址(主机) 端口 三者全部相同 就是同源.
2. 只要有一个不同，就是不同源.

## 解决办法

### 将前端文件托管在Expess

利用express的静态资源托管，中间件，这样他们就同源啦.

```javascript
app.use(express.static('public'))
```

### CORS

>CORS:   Cross Origin Resource Sharing
>
>           跨域资源共享
>    
>           HTML5推出的一种跨域解决方案. 一些低版本的浏览器不兼容. IE5 6 7 
>
>浏览器如果发现ajax请求是一个跨域请求, 浏览器会先发1个请求给接口，问是否允许跨域访问.

```javascript
//在允许跨域访问的接口，追加一个响应头
res.header("Access-Control-Allow-Origin", "*");
//这样就允许浏览器，可以跨域访问此接口

//统一设置允许跨域
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
})
```

**总结：**前端不需要做任何操作，后端:   只需要在响应头中加1个头 res.header("Access-Control-Allow-Origin", "*");

### JSONP

jsonp也是用来解决跨域访问的. 只不过这种方案是一种老旧的方案.

#### script的src属性

>1. src属性允许跨域.
>2. src属性可以是任意的接口。不是说一定要请求js文件
>3. 会将请求来的数据当做javascript代码，执行一次.

#### JSONP的原理

>1. 网页事先准备1个js函数. 
>2. 通过script的src属性，发起请求，并将函数名传递到服务器.
>3. 服务器处理请求，得到数据，返回  `函数名(数据)`

#### 原生实现JSONP

>1. 前端需要准备1个函数，这个函数接收1个参数，这个参数就是服务端要返回给你的数据
>2. 用script标签的src属性想服务端发起请求 ，通过src来进行跨域访问接口.
>3. 后端： 获取前端传给后端的函数的名字：函数名(数据)
>4. 用这个名字拼接1个函数调用，把数据传入.
>5. 返回到前端： 就会执行我们在第1步准备的这个函数.这个函数的参数有，是后端传的数据.

```javascript
//后端准备一个传递的数据
const stus = [
        { id: "1", name: 'jack1', nickname: '狗蛋1' },
        { id: "2", name: 'jack2', nickname: '狗蛋2' },
        { id: "3", name: 'jack3', nickname: '狗蛋3' }
    ];

    res.jsonp(stus);
    //会自动接收客户端的demo

    // const arr = JSON.stringify(stus);
    // res.send(demo+'(' + arr + ')');
```

````javascript
//前端准备的代码
<script>
	function demo(arr){
      console.log(arr)
	}
</script>
````



#### jQuey的JSONP

```javascript
$.ajax({
    url: ....
    dataType: 'jsonp',
    success: funtioin(data){
    	log(data)
     }
})
//动态创建script标签，设置src属性.
```

#### 服务端的jsonp

````javascript
res.jsonp(数据)
````

# parseInt



# node版本管理nvm

```
nvm ls ：列出所有已安装的 node 版本

nvm ls-remote ：列出所有远程服务器的版本（官方node version list）

nvm list ：列出所有已安装的 node 版本

nvm list available ：显示所有可下载的版本

nvm install stable ：安装最新版 node

nvm install [node版本号] ：安装指定版本 node

nvm uninstall [node版本号] ：删除已安装的指定版本

nvm use [node版本号] ：切换到指定版本 node

nvm current ：当前 node 版本

nvm alias [别名] [node版本号] ：给不同的版本号添加别名

nvm unalias [别名] ：删除已定义的别名

nvm alias default [node版本号] ：设置默认版本

```

