# HTML核心知识点整理

## 一、文档结构标签
- `<html>`：HTML文档根标签，包含`<head>`和`<body>`
- `<head>`：文档头部，存放元数据（如`<meta>`、`<title>`、`<link>`）
- `<body>`：文档主体，存放页面可见内容

## 二、图片标签（`<img>`）
| 属性 | 作用 | 示例 |
|------|------|------|
| `src` | 图片文件路径（必选） | `<img src="./images/pic.jpg">` |
| `alt` | 图片加载失败时的替代文本 | `<img src="./pic.jpg" alt="风景图">` |
| `title` | 鼠标悬停时显示的提示文本 | `<img src="./pic.jpg" title="海边风景">` |
| `srcset` | 不同屏幕密度加载不同图片 | `<img src="pic.jpg" srcset="pic@2x.jpg 2x, pic@3x.jpg 3x">` |

## 三、视频标签（`<video>`，双标签）
| 属性 | 作用 | 示例 |
|------|------|------|
| `src` | 视频文件路径 | `<video src="./media/video.mp4">` |
| `controls` | 显示播放控件（暂停/播放、音量等） | `<video src="./video.mp4" controls>` |
| `autoplay` | 页面加载完成后自动播放（需配合`muted`） | `<video src="./video.mp4" autoplay muted>` |
| `muted` | 视频静音（解决部分浏览器`autoplay`限制） | `<video src="./video.mp4" autoplay muted>` |
| `loop` | 视频循环播放 | `<video src="./video.mp4" loop>` |
| `poster` | 视频加载时显示的封面图 | `<video src="./video.mp4" poster="./cover.jpg">` |

## 四、音频标签（`<audio>`，双标签）
| 属性 | 作用 | 示例 |
|------|------|------|
| `src` | 音频文件路径 | `<audio src="./media/music.mp3">` |
| `controls` | 显示音频控件 | `<audio src="./music.mp3" controls>` |
| `autoplay` | 自动播放（部分浏览器需JS辅助） | `<audio src="./music.mp3" autoplay>` |
| `loop` | 循环播放 | `<audio src="./music.mp3" loop>` |
| `preload` | 音频预加载策略（`auto`自动加载，`none`不加载） | `<audio src="./music.mp3" preload="auto">` |

## 五、链接标签（`<a>`）
| 属性 | 作用 | 示例 |
|------|------|------|
| `href` | 链接目标地址（必选） | `<a href="https://www.baidu.com">百度</a>` |
| `target` | 链接打开方式（`_blank`新窗口，`_self`当前窗口） | `<a href="https://baidu.com" target="_blank">百度</a>` |
| 阻止跳转 | `href="javascript:"` | `<a href="javascript:">点击不跳转</a>` |

## 六、嵌套网页标签（`<iframe>`）
```html
<iframe 
  src="subpage.html"  <!-- 嵌套页面路径 -->
  width="100%"        <!-- 宽度 -->
  height="310px"      <!-- 高度 -->
  frameborder="0"     <!-- 取消边框（0为无，1为有） -->
></iframe>
```

## 七、表格标签
### 核心结构
```html
<table>
  <caption>表格标题</caption> <!-- 表格名称，居中显示在表格上方 -->
  <thead> <!-- 表格头部 -->
    <tr> <!-- 行 -->
      <th>表头单元格</th> <!-- 表头，默认加粗居中 -->
    </tr>
  </thead>
  <tbody> <!-- 表格主体（核心内容区） -->
    <tr>
      <td>普通单元格</td>
    </tr>
  </tbody>
  <tfoot> <!-- 表格底部 -->
    <tr>
      <td>底部单元格</td>
    </tr>
  </tfoot>
</table>
```

### 表格属性
| 属性 | 作用 | 示例 |
|------|------|------|
| `align` | 表格整体对齐方式（`left`/`center`/`right`） | `<table align="center">` |
| `border` | 表格边框宽度（单位：px） | `<table border="1">` |
| `cellpadding` | 单元格内容与边框的内边距 | `<table cellpadding="5">` |
| `cellspacing` | 单元格之间的间距 | `<table cellspacing="0">` |
| `rules` | 显示单元格边框（`all`显示所有边框） | `<table rules="all">` |

### 单元格合并
- 合并行：`rowspan="合并行数"`，示例：`<td rowspan="2">合并2行</td>`
- 合并列：`colspan="合并列数"`，示例：`<td colspan="3">合并3列</td>`

## 八、表单容器（`<form>`）
| 属性 | 作用 | 示例 |
|------|------|------|
| `action` | 表单提交的目标地址（后端接口） | `<form action="/api/submit">` |
| `method` | 提交方式（`get`/`post`） | `<form method="post">` |
| - | `get`：参数拼在URL后，安全性低，有长度限制 | - |
| - | `post`：参数在请求体中，安全性高，无长度限制 | - |

## 九、输入框（`<input>`）
| `type`值 | 作用 | 关键属性 | 示例 |
|----------|------|----------|------|
| `text` | 单行文本框 | `placeholder`（提示文本）、`maxlength`（最大字符数） | `<input type="text" placeholder="请输入姓名" maxlength="10">` |
| `password` | 密码框（输入内容隐藏） | - | `<input type="password" placeholder="请输入密码">` |
| `radio` | 单选按钮（需同`name`值分组） | `checked`（默认选中） | `<input type="radio" name="sex" checked>男` |
| `checkbox` | 复选框 | `checked` | `<input type="checkbox" name="hobby" checked>篮球` |
| `file` | 文件上传 | `multiple`（支持多文件上传） | `<input type="file" multiple>` |
| `submit` | 提交按钮（触发表单提交） | - | `<input type="submit" value="提交">` |
| `reset` | 重置按钮（清空表单内容） | - | `<input type="reset" value="重置">` |
| `button` | 普通按钮（需配合JS实现功能） | - | `<input type="button" value="点击">` |

## 十、HTML5新增`input`类型
| `type`值 | 作用 | 说明 |
|----------|------|------|
| `email` | 邮箱输入框 | 提交时自动校验格式（需包裹在`<form>`中） |
| `url` | 网址输入框 | 自动校验URL格式 |
| `date` | 日期选择器 | 弹出系统日期面板 |
| `time` | 时间选择器 | 弹出系统时间面板 |
| `number` | 数字输入框 | 只允许输入数字，带上下调节按钮 |
| `tel` | 手机号输入框 | 移动端弹出数字键盘 |
| `search` | 搜索框 | 部分浏览器会显示"清除"按钮 |
| `color` | 颜色选择器 | 弹出颜色面板 |
| `range` | 进度条（滑块） | 可通过`min`/`max`设置范围 |

## 十一、其他表单元素
- 下拉选择框（`<select>`+`<option>`）
  ```html
  <select>
    <option value="gd">广东省</option>
    <option value="bj" selected>北京市</option> <!-- selected：默认选中 -->
  </select>
  ```
- 文本域（`<textarea>`，多行输入）
  ```html
  <textarea 
    rows="5"  <!-- 显示行数（高度） -->
    cols="30" <!-- 显示列数（宽度） -->
    resize="none" <!-- 禁止拖拽调整大小 -->
  ></textarea>
  ```
- 标签关联（`<label>`，点击文本可选中对应表单元素）
  ```html
  <!-- 方式1：通过for关联input的id -->
  <label for="username">用户名：</label>
  <input type="text" id="username">
  
  <!-- 方式2：嵌套input -->
  <label>性别：<input type="radio" name="sex">男</label>
  ```

## 十二、文本格式标签
| 标签 | 作用 | 说明 |
|------|------|------|
| `<strong>`/`<b>` | 文字加粗 | `<strong>`强调语义，`<b>`仅样式加粗 |
| `<em>`/`<i>` | 文字倾斜 | `<em>`强调语义，`<i>`仅样式倾斜 |
| `<del>`/`<s>` | 删除线 | `<del>`强调语义，`<s>`仅样式删除线 |
| `<ins>`/`<u>` | 下划线 | `<ins>`强调语义，`<u>`仅样式下划线 |

## 十三、特殊字符（转义字符）
| 特殊字符 | 转义代码 | 说明 |
|----------|----------|------|
| `>` | `&gt;` | 大于号 |
| `<` | `&lt;` | 小于号 |
| 空格 | `&nbsp;` | 非换行空格（多个连续生效） |
| `&` | `&amp;` | 和号 |
| `"` | `&quot;` | 双引号 |
| `®` | `&reg;` | 注册商标符号 |
| `©` | `&copy;` | 版权符号 |
| `™` | `&trade;` | 商标符号 |
| `¥` | `&yen;` | 人民币符号 |

## 十四、视口设置（移动端适配核心）
```html
<meta 
  name="viewport" 
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
>
```
| `content`属性 | 作用 |
|---------------|------|
| `width=device-width` | 视口宽度等于设备屏幕宽度 |
| `initial-scale=1.0` | 页面初始缩放比例为1（无缩放） |
| `maximum-scale=1.0` | 页面最大缩放比例为1 |
| `user-scalable=0` | 禁止用户手动缩放页面（0为禁止，1为允许） |