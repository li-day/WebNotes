---

---

# 1.Go环境win环境搭建

## 1.下载安装Golang

- Go的[官方地址](https://go.dev/dl/) （需要VPN)
- Go的[官方镜像地址](https://golang.google.cn/dl/) （推荐)



## 2.安装软件

1. 这个没什么好说的，根据上面地址下载对应的软件双击下一步下一步就完了。
2. 安装完成后需要验证一下Go语言有没有安装成功
   1. 运行一下`go version`
      1. ![示例图片](/image/image-20250630112044711.png)
      2. 



## 3.Go语言开发工具

1. [vscode](https://code.visualstudio.com/download) 这个工具没啥好说，简洁/插件多
2. IDES的[GoLand](https://www.jetbrains.com/go/download/?section=windows) 这个收费。当然你也可以自行破解/淘宝购买激活码，或者支持一下官方

这个软件的安装与使用我就不过多的介绍



## 4.开始第一段Go语言的代码

先不解释代码意思，跟上节奏干就完了

1. 创建文件夹不多说,我这边`DomeDay1`

2. 创建文件`main.go`

3. ```go
   package main
   
   import "fmt"
   
   func main() {
       fmt.Println("Hello World")
   }
   ```

4. 在控制台运行`go run main.go`

5. 常用的指令

   1. 运行指令`go run xxx.go `
   2. 打包指令`go build xxx.go`   生成一个xxx.exe文件
   3. 格式化指令`go fmt xxx.go`


# 2.Go语言学习正文

>废话少说，干就完了
>
>ps: 没想好，先这样



## 1.定义变量/fmt包/Print/Println/Printf/Go语言注释

### 1.注释

 >这个没有啥好说的,懂得都懂 与js差不多 
 >
 >1. `//`  单行注释 编译工具都用快捷键CTRL+/
 >2. `/**/` 多行注释 编译工具都用快捷键CTRL+SHIFT+/

### 2.Println/Print/Printf 输出

```go
package main // 定义文件所属的包名 ***
import "fmt"

// 定义入口函数 ***
func main() {

	// 单行打印,在控制台输出 Go语言无需加分号
	fmt.Println("Hello World")        // 会在输出内容的末尾自动添加换行符,能够自动处理多个参数，参数之间会用空格分隔
	fmt.Print("Hello", "World", "\n") // 输出内容后不会添加换行符,可以处理多个参数，参数之间也是用空格分隔
	fmt.Printf("Hello World")         // 这是格式化输出函数，需要配合格式动词（像%s、%d）来使用, 输出结束后不会自动换行

	//	%d：用于格式化整数（如 123）
	//  %f：用于格式化浮点数（如 3.14）
	//	%v：通用格式，可以自动适配各种类型
	//	%t：用于格式化布尔值（true 或 false）
	//  %s：这是一个格式动词（Format Verb），用于表示「在此处插入一个字符串」。当你调用 fmt.Printf 时，可以通过参数传入具体的字符串，它会替换掉 %s 的位置
	var a = "World"
	fmt.Printf("Hello %s\n", a)
	fmt.Printf("年龄：%d 岁\n", 30)     // 输出：年龄：30 岁
	fmt.Printf("身高：%.2f 米\n", 1.75) // 输出：身高：1.75 米（%.2f 表示保留两位小数）
	fmt.Printf("是否为学生：%t\n", false) // 输出：是否为学生：false
    fmt.Printf("a=%v b=%v c=%v", 1, 2, 3) // 输出：a=1 b=2 c=3
    
    //	使用Printf 打印 一个变量的类型
	aa1 := 10
    fmt.Printf("aa1=%v aa1的类型: %T\n", aa1, aa1)
}


```



>ps: 格式动词  有很多类型不做过多的解释,有需要可以自行查看官方的[fmt](https://golang.google.cn/pkg/fmt/)
>
>



### 3.定义变量

```go
package main

import "fmt"

func getUserName() (string, int) {
	return "张三", 10
}

func main() {

	/*
		1.var 声明变量
		var 变量名 类型

		变量名是由字母,数字,下划线组成; 变量名首字母不能是数字且不能是Go语言的关键字,保留字
	*/

	var userName string // 不初始化默认是空
	fmt.Println(userName)

	//	初始化的方式
	//	1.
	var a string
	a = "李四"
	fmt.Println(a) // 李四

	//	2.
	var b string = "李四"
	fmt.Println(b) // 李四

	// Go 语言中变量不能在一个作用域下不能重复声明
	//var c int = 0
	//fmt.Println(c)
	//var c int = 10
	//fmt.Println(c)

	// 变量赋值
	var d int
	d = 1          // 赋值
	fmt.Println(d) // 1

	/*
		  2.一次性声明多个变量
		    var 变量名, 变量名 类型

		    var (
					变量名 类型
					变量名 类型
				)
	*/

	var a1, a2 string
	a1 = "aa"
	//a2 = 123 // 错误写法, Go语言中定义的类型是string类型,赋值的时候就一定要string类型
	fmt.Println(a1, a2)

	var (
		username string
		age      int
		sex      string
	)
	username = "王五"
	age = 19
	sex = "女"
	fmt.Println(username, age, sex)

	//	3.短变量声明法 在函数内部,可以使用简洁写法 := 方式声明并初始化 ps: 短变量只能用于声明局部变量,不能声明全局变量的声明

	c := "马六"
	fmt.Println(c)

	// 使用短变量一次声明多个变量, 并初始化变量
	c1, c2, c3 := 1, 2, 3
	fmt.Println(c1, c2, c3) // 1 2 3

	// 4. 匿名变量 在使用多次赋时如果想要忽略某个值,可以使用匿名变量 _ 表示匿名变量
	var userName1, _ = getUserName()
	fmt.Println(userName1)
	// 匿名变量不占用命名空间,不会分配内存,所以匿名变量之间不存在重复声明的问题
	var _, age1 = getUserName()
	fmt.Println(age1)
}



```



### 4.定义常量

```go
package main

import "fmt"

func main() {
	// 常量通过 const 声明 声明就需要赋值
	const a = 'a'
	fmt.Println(a)
	// 常量的值不可以改变
	// a = 'a1' // 错误无法运行代码

	// 多个常量声明
	const (
		a1 = "a1"
		a2 = "a2"
	)
	fmt.Println(a1, a2)

	// const 同时声明多个常量,如果省略了值则表示和上面一行的值相同

	const (
		b1 = 1
		b2
		b3
		b4
	)

	fmt.Println(b1, b2, b3, b4)

	//	const 常量结合iota的使用  ps: iota是golang语言的常量计数器,只能在常量表达式中使用
	// iota在const 关键字出现时将被重置为 0 (const 内部的第一行之前)
	const c1 = iota
	fmt.Println(c1) // 0

	// const 中每新增一行常量的声明将使iota计数一次(iota可理解为const语句中的行索引)
	const (
		c2 = iota
		c3
		c4
		c5
	)
	fmt.Println(c2, c3, c4, c5) // 0 1 2 3

	// const iota 使用 _ 跳过某些值
	const (
		c6 = iota
		c7
		_
		c8
	)

	fmt.Println(c6, c7, c8) // 0 1 3

	//	iota声明中插队
	const (
		cc1 = iota
		cc2 = 100
		cc3 = iota
		cc4
	)

	fmt.Println(cc1, cc2, cc3, cc4) // 0 100 2 3

	// 多个iota可以定义一行
	const (
		ccc1, ccc2 = iota + 10, iota + 100 // 10 100
		ccc3, ccc4                         // 11  101
		ccc5, cc6                          // 12 102
	)
	fmt.Println(ccc1, ccc2, ccc3, ccc4, ccc5, cc6)

}

```

>ps: iota是golang语言的常量计数器,只能在常量表达式中使用
>
>iota在const 关键字出现时将被重置为 0 (const 内部的第一行之前),const 中每新增一行常量的声明将使iota计数一次(iota可理解为const语句中的行索引)
>
>



## 2.Golang 数据类型介绍

Go语言中数据类型分为:

1. 基本数据类型
   1. 整型 int
   2. 浮点型
   3. 布尔型
   4. 字符串
2. 复合数据类型
   1. 数组
   2. 切片
   3. 结构体
   4. 函数
   5. map
   6. 通道(channel)
   7. 接口

### 1.整型 int

整型分为两个大类

1. 有符号整型按长度分为: 

   | 类型  |                             范围                             | 占用空间 | 有无符号 |
   | :---: | :----------------------------------------------------------: | :------: | :------: |
   | int8  |               (-128 到 127)   -2^7 到 2^7 - 1                | 1个字节  |    有    |
   | int16 |             (-32768 到 32767)  -2^15 到 2^15 - 1             | 2个字节  |    有    |
   | int32 |         (-2147483648到2147483647)   -2^31 到2^31 - 1         | 4个字节  |    有    |
   | int64 | (-9223372036854775808 到9223372036854775807)   -2^63 到2^63 - 1 | 8个字节  |    有    |

   

2. 无符号整型-只能表示正整数

   |  类型  |                   范围                    | 占用空间 | 有无符号 |
   | :----: | :---------------------------------------: | :------: | :------: |
   | uint8  |          (0 到 255)   0到2^8 - 1          |  1字节   |    无    |
   | uint16 |         (0 到 65535)   0到2^16- 1         | 2个字节  |    无    |
   | uint32 |      (0 到 4294967295)   0到2^32 - 1      | 4个字节  |    无    |
   | uint64 | (0 到 18446744073709551615)   0到2^64 - 1 | 8个字节  |    无    |

   

```go
package main

import (
	"fmt"
	"unsafe"
)

func main() {

	//	1.定义int类型
	var num int = 10

	fmt.Printf("num=%v 类型: %T \n", num, num)

	// 2.int8的范围演示 (-128 到 127) -2^7 到 2^7 - 1
	var num1 int8 = 98
	//var num1 int8 = 130 // 错误 不在int8范围内
	fmt.Printf("num1=%v 类型: %T \n", num1, num1)

	// unsafe.Sizeof 查看不同长度的整数的内存空间
	fmt.Println("num1的内存大小:", unsafe.Sizeof(num1))

	// 3.uint8的范围演示 (0 到 255) 0 到 2^8 - 1
	var num2 uint8 = 255
	//num2 = 256 // 错误 不在uint8 范围内
	fmt.Printf("num2=%v 类型: %T \n", num2, num2)
	// unsafe.Sizeof 查看不同长度的整数的内存空间
	fmt.Println("num2的内存大小:", unsafe.Sizeof(num2))

	//	4.int类型转换 直接使用类型
	var num3 int16 = 255
	var num4 int32 = 255

	fmt.Println(int32(num3) + num4) // 510

	// 高位向低位转换,需要注意类型范围
	var num5 int16 = 130
	fmt.Println(int8(num5)) // -126

	// 5.字面量语法 Go1.13版本后引入了数字字面量语法,这样便于开发者以二进制/八进制/16进制浮点数的格式定义数字
	// %d: 表示10进制 %b: 表示2进制 %o: 表示8进制 %x: 表示16进制
	num6 := 30
	fmt.Printf("num6=%d 类型: %T \n", num6, num6)
	fmt.Println("num6的内存大小:", unsafe.Sizeof(num6)) // 8 表示当前计算机为64位 int类型也就是int64

}

```



### 2.浮点型 float

>Go语言支持两种浮点型数:
>
>1. float32
>   1. 最大范围约为3.4e38
>      1. 可使用常量定义: `math.MaxFloat32`
>2. float64
>   1. 最大范围约为1.8e308
>   2. 可使用常量定义: `math.MaxFloat64`
>
>这两种浮点型数据格式遵循IEEE 754标准.
>
>

```go
package main

import (
	"fmt"
	"github.com/shopspring/decimal"
	"unsafe"
)

func main() {

	// 1.定义float类型
	var a float32 = 3.12

	fmt.Printf("a=%v, 类型: %T\n", a, a)
	fmt.Println(unsafe.Sizeof(a)) // float32 占用4个字节

	var a1 float64 = 3.12
	fmt.Printf("a=%v, 类型: %T\n", a1, a1)
	fmt.Println(unsafe.Sizeof(a1)) // float32 占用8个字节

	// 2. %f 输出float类型 %.2f 输出数据的时候保留2位小数
	var a2 float32 = 3.126458512546
	fmt.Printf("a2=%f\n", a2) // 默认六位小数 五舍六入
	fmt.Printf("a2=%.2f\n", a2)

	// 3. Go语言中浮点数默认是 根据系统来 64位的系统就是 float64 32位的系统就是 float32

	a3 := 3.141592653589793
	fmt.Printf("a3=%v, 类型: %T\n", a3, a3)

	// 4.Golang 科学计数法表示浮点类型
	var a4 float32 = 3.14e2 // 表示3.14 * 10的2次方
	fmt.Printf("a4=%v, 类型: %T\n", a4, a4)

	var a5 float32 = 3.14e-2 // 表示3.14 / 10的2次方
	fmt.Printf("a5=%v, 类型: %T\n", a5, a5)

	//	Golang 中 float 精度丢失的问题 几乎所有的编程语言都会有精度丢失的问题,这个是典型的二进制浮点数精度损失问题

	var a6 float64 = 1129.6
	fmt.Println(a6 * 100) // 期望112960 实际 112959.99999999999

	m1, m2 := 8.2, 3.8
	fmt.Println(m1 - m2) // 期望4.4 实际 4.3999999999999995

	//  可以使用第三方插件解决问题
	m3 := decimal.NewFromFloat(m1).Sub(decimal.NewFromFloat(m2))
	fmt.Println(m3) // 4.4

	// int 转 float
	var b1 int = 12
	b2 := float64(b1)
	fmt.Printf("b1类型: %T, b2类型: %T\n", b1, b2)

	// float 转 int  会截取丢失数据 不建议转换
	var b3 float64 = 1.723
	b4 := int(b3)
	fmt.Printf("b4=%v, 类型: %T\n", b4, b4)
}

```



### 3.布尔型 bool

>Go 语言中以bool类型进行声明布尔型数据, 布尔型数据只有 true 和 false 两个值
>
>注意: 
>
>1. 布尔型变量默认是false
>2. Go 语言中不允许将整型强制转化为布尔型
>3. 布尔型无法参加数值运算, 也无法与其他的类型进行转换
>
>

```go
package main

import "fmt"

func main() {

	// 1.布尔型变量默认是false
	var a bool
	fmt.Printf("a=%v, 类型: %T\n", a, a)

	//	2. Go 语言中不允许将整型强制转化为布尔型
	//var a1 = 1
	//if a1 { // 错误无法 运行报错
	//	fmt.Println("true")
	//}

	var a1 = true
	if a1 {
		fmt.Println("true")
	}

	// 3.布尔型无法参加数值运算, 也无法与其他的类型进行转换
	//a2 := 1
	//a3 := a2 + a1 // 报错了

	//var aa1 = "this is string"
	//if aa1 { // 运行报错了
	//	fmt.Println("true")
	//}
}

```



### 5.字符串 string

>Go语言中的字符串以原生数据类型出现, 使用字符串就像使用其他原生数据类型(int/bool/float等)一样.Go 语言里的字符串的内部实现使用UTF-8编码. 字符串为双引号("")中的内容, 可以在Go语言的源码中直接添加非ASCII码字符
>
>

#### 字符串转义符

| 转义符 |               含义               |
| :----: | :------------------------------: |
|  `\r`  |         回车符(返回行首)         |
|  `\n`  | 换行符(直接跳到下一行的同列位置) |
|  `\t`  |              制表符              |
|  `\'`  |              单引号              |
|  `\"`  |              双引号              |
|  `\\`  |              反斜杠              |

#### 多行字符串

Go语言中要定义一个多行字符串,就必须使用反引号字符  ``

#### 字符串常用的方法

|                方法                 |           介绍           |
| :---------------------------------: | :----------------------: |
|              len(str)               |          求长度          |
|          + 或 fmt.Sprintf           |        拼接字符串        |
|            strings.Split            |           分割           |
|          strings.contains           |       判断是否包含       |
| strings.HasPrefix,strings.HasSuffix |      前缀/后缀判断       |
|  strings.Index(),strings.LastIndex  |     字符串出现的位置     |
| strings.Join(a[]string, sep string) | join操作(数组合并字符串) |

