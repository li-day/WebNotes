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
      1. ![image-20250630112044711](C:\Users\24978\AppData\Roaming\Typora\typora-user-images\image-20250630112044711.png)	
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

