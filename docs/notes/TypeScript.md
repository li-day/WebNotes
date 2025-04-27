使用ts `npm install typescript -g`全局安装ts模块

在`cmd`使用 `tsc` 可以对你写的 ts `tsc 01_Hello.ts` 代码进行转化编译成 JS 执行成功后回有一个js文件



### ts指定类型

1. 当对变量的声明喝赋值时同时进行的时候，ts编译器会自动判断变量的类型，所以变量的声明与赋值时同时进行的就是可以省略掉类型声明

2. | 类型       |       例子        |              描述 |
   |----------|:---------------:|----------------:|
   | number   |   `1,2,5,-1`    |            任意数字 |
   | string   |    `'1','2'`    |           任意字符串 |
   | boolean  |   true,false    |             布尔值 |
   | 字面量      |       自身        | 限制变量的值如`1 \| 2` |
   | any      |        *        |            任意类型 |
   | unknown  |        *        |        类型安全的any |
   | void     |    undefined    |             没有值 |
   | never    |       没有值       |          不能是任何值 |
   | object   | `{name: '张三'}`  |         任意的JS对象 |
   | array    |   `[1,2,3,4]`   |         任意的JS数组 |
   | tuple    |    `[3, 6]`     |         固定长度的数组 |
   | enum     | `enum a {A, B}` |              枚举 |
3.

```typescript
let a: number;// a 就是nmber 数字类型
a = 10
let b:string; // b 就是一个string 字符串类型
b = 'hello world' 
// 声明完变量直接进行赋值
let c:boolean = true
c = false
// 如果变量的声明喝赋值时同时进行的，ts可以自动对变量进行类型检测
let d = false
d = true
// 给函数指定类型
function sum (a:number,b:number){
    return a + b
}
sum (1,2)
// 给函数返回值加上类型
function sum1 (a:number,b:number):number{
    return a + b
}
sum1(1,2)

// 字面量进行类型声明
let a: 10;
a = 10; // 这样写就类型类似于常量声明

// | 是或的意思 来连接多个类型（联合类型）
let b: "male" | "female";
b = "male"
b = "female"

let c: number | string
c = 1
c = '123'

// any 表示的是任意类型， 一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
let d: any
d = 1
d = 'hello'
d = true
d = { name: '1' }

// unknown 表示未知类型
let e: unknown
e = 10
e = 'hello'
e = true

let s: string
// d的类型是any 它是可以赋值给任意变量不报错
s = d

e = 'hello world'

// unknown 实际上就是一个类型安全的any
// unknown 类型的变量，不能直接赋值给其他变量
// s = e //会报错
if (typeof e === 'string') {
    s = e
}

// 类型断言 可以用来告诉解析器变量的实际类型
/* 
    语法：
        变量 as 类型
        <类型>变量
*/
s = e as string
s = <string>e

// 函数会根据 return 来自动判断类型
function fn(a) {
    if (a > 1) {
        return true
    } else {
        return 1
    }
}

// void 用来表示空， 以函数为例，就表示没有返回值的函数 
// 你可以写 return undefined 和 return null
function fn1(): void {
    //    return 1
}
// never 表示永远不会返回结果
function fn2(): never {
    throw new Error('报错')
}

// object 表示一个js对象
{
    let a: object
    a = {}
    a = function () { }

    // {} 用来指定对象中可以包含哪些属性
    // 语法: {属性名:属性值,属性名:属性值}
    // 属性名?:属性值 则表示就是这个属性名 是可选
    let b: { name: string, age?: number }
    b = { name: '张三', age: 12 }

    // [key: string]: any 表示任意类型的属性
    let c: { name: string, [key: string]: any }
    c = {
        name: '张三', age: 12, a: {}, 1: '123'
    }

    /* 
        设置函数结构的类型声明
            语法： (形参:类型, 形参:类型....) => 返回值类型
     */
    let d: (a: number, b: number) => number

    d = function (a, b) {
        return a + b
    }
    d(1, 23)


    /* 
      数组的类型声明
        类型[]
        Array<类型>
    */
    // string[] 表示字符串类型的数组 
    let e: string[]
    e = ['1', '2', '3']
    // number[] 表示数值类型的数组
    let f: number[]
    // Array<number> 也是表示数值类型的数组
    let g: Array<number>


    /* 
        元组，元组就是固定长度的数组
            语法： [类型,类型]
    */
    let h: [string, number]
    h = ["hello", 123]


    /* 
      enum 枚举
    */
    enum Gender {
        male = 1,
        female = 0
    }
    let i: { name: string, gender: Gender }
    i = {
        name: '张三',
        gender: Gender.male
    }

    // & 表示且的意思
    let j: { name: string } & { age: number }
    j = { name: '张三', age: 123 }
    
    // 类型的别名 
    type myType = {
        k: 1 | 2 | 3 | 4 | 5
    }
    let k: myType['k']
    k = 2
}

```

**注：如果写了与类型不一样的就是类型 会显示报错**



### 配置文件 tsconfig.json

`tsc index.ts -w` 检测ts文件是否改变

创建`tsconfig.json`   在执行`tsc -w` 可以检测目录下的所有ts文件

1. ts编译器的配置文件，ts编译器可以根据它的信息来对代码进行编译
2.

**配置选项**

1. `include`

    1. 定义希望被编译文件所在的目录

    2. 默认：["**/\*"]

    3. 路径： ** 表示任意目录    * 表示任意文件

    4. ```json
      "include":["src/**/*","tests/**/*"] // 所有src和tests目录下的文件都会被编译
      ```

2. `exclude`

    1. 定义需要排除在外的目录

    2. 默认值：`["node_modules","bower_components", "jspm_packages"]`

    3. ```json
      "exclude":["./src/hello/**/*"] // src下的hello目录下不会被编译
      ```

3. ###### `extends`

    1. 定义被继承的配置文件

    2. ```json
      "extends": "./configs/base" // 当前配置文件中自动包含confi目录下的base.json中所有配置信息
      ```

4.  `files`

1. 指定被编译文件的列表，只有需要编译的文件少时才会用到

2. ```json
      "files":[
          "core.ts",
          "type.ts"
          ....
      ] // 列表中的文件都会被ts编译器所编译
      ```

5. `compilerOptions`

    1. 编译选项是配置文件非常重要也比较复杂的配置选项

    2. 在`compilerOptions`中包含多个子选项，用来完成对编译的配置

        1. 项目目录

            1. `target`

                1. 设置ts代码编译的目录版本

                2. 可选值：

                    1. ES3（默认）、ES5、ES6/ES2015、 ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext

                    2. ```json
                  "compilerOptions":{
                      "target":"ES6"
                  }
                  ```

            2. `lib`

                1. 指定代码运行时所包含的库

                2. 可选值

                    1. ES5、ES6/ES2015、 ES7/ES2016、ES2017、ES2018、ES2019、ES2020、ESNext、DOM、WebWorker、ScriptHost....

                    2. ```json
                  "compilerOptions":{
                      "target":"ES6",
                      "lib": ["ES6","DOM"]
                  }
                  ```

            3. `module`

                1. 设置编译后代码使用的模块化系统

                2. 可选值

                    1. CommonJS、UMD、AMD、System、ES2020、EsNext、None

                    2. ```json
                  "compilerOptions":{
                      "target":"ES6",
                      "lib": ["ES6","DOM"],
                      "module": "ES6"
                  }
                  ```

            4. `outDir`

                1. 指定编译后的文件所在目录

                2. ```json
               "compilerOptions":{
                   "target":"ES6",
                   "lib": ["ES6","DOM"],
                   "module": "ES6",
                   "outDir": "./dist",
               }
               ```

            5. `outFile`

                1. 设置outFile后, 会将所有的全局作用域中的代码会合并到同一个文件中

                2. ```json
               "compilerOptions":{
                   "target":"ES6",
                   "lib": ["ES6","DOM"],
                   "module": "adm",
                   "outDir": "./dist",
                   "outFile": "./dist/app.js",
               }
               ```

                3. **注意：outFile设置后需要把module 属性改为 adm或system**

            6. `allowJs`

                1. 是否对js文件进行编译,默认是false

                2. ```json
               "compilerOptions":{
                   "target":"ES6",
                   "lib": ["ES6","DOM"],
                   "module": "ES6",
                   "outDir": "./dist",
                   "allowJs": true,
               }
               ```

            7. `checkJs`

                1. 是否检查js代码是否符合语法规范,默认是false

                2. ```json
               "compilerOptions":{
                   "target":"ES6",
                   "lib": ["ES6","DOM"],
                   "module": "ES6",
                   "outDir": "./dist",
                   "allowJs": true,
                   "checkJs": true,
               }
               ```

            8. `removeComments`

                1. 是否移出注释 默认是false

                2. ```json
               "compilerOptions":{
                   "target":"ES6",
                   "lib": ["ES6","DOM"],
                   "module": "ES6",
                   "outDir": "./dist",
                   "allowJs": true,
                   "checkJs": true,
                   "removeComments": true,
               }
               ```

            9. `noEmit`

                1. 不生成编译后的文件

                2. ```json
               "compilerOptions":{
                   "target":"ES6",
                   "lib": ["ES6","DOM"],
                   "module": "ES6",
                   "outDir": "./dist",
                   "allowJs": true,
                   "checkJs": true,
                   "removeComments": true,
                   "noEmit": false,
               }
               ```

            10. `noEmitOnError`

                1. 当有错误时不生成编译后的文件 默认是false

                2. ```json
                "compilerOptions":{
                    "target":"ES6",
                    "lib": ["ES6","DOM"],
                    "module": "ES6",
                    "outDir": "./dist",
                    "allowJs": true,
                    "checkJs": true,
                    "removeComments": true,
                    "noEmit": false,
                    "noEmitOnError": true,
                }
                ```

            11. `strict`

                1. 所有严格检查的总开关

                2. ```json
                "compilerOptions":{
                    "target":"ES6",
                    "lib": ["ES6","DOM"],
                    "module": "ES6",
                    "outDir": "./dist",
                    "allowJs": true,
                    "checkJs": true,
                    "removeComments": true,
                    "noEmit": false,
                    "noEmitOnError": true,
                    "strict": true,
                }
                ```

            12. `alwaysStrict`

                1. 用来设置编译后的文件是否使用严格模式 默认是false

                2. ```json
                "compilerOptions":{
                    "target":"ES6",
                    "lib": ["ES6","DOM"],
                    "module": "ES6",
                    "outDir": "./dist",
                    "allowJs": true,
                    "checkJs": true,
                    "removeComments": true,
                    "noEmit": false,
                    "noEmitOnError": true,
                    "strict": true,
                	"alwaysStrict": true,    
                }
                ```

            13. `noImplicitAny`

                1. 不允许隐式的any类型 默认是false

                2. ```json
                "compilerOptions":{
                    "target":"ES6",
                    "lib": ["ES6","DOM"],
                    "module": "ES6",
                    "outDir": "./dist",
                    "allowJs": true,
                    "checkJs": true,
                    "removeComments": true,
                    "noEmit": false,
                    "noEmitOnError": true,
                    "strict": true,
                	"alwaysStrict": true, 
                    "noImplicitAny": true,
                }
                ```

            14. `noImplicitThis`

                1. 不允许不明确类型的this 也就是any 默认是false

                2. ```json
                "compilerOptions":{
                    "target":"ES6",
                    "lib": ["ES6","DOM"],
                    "module": "ES6",
                    "outDir": "./dist",
                    "allowJs": true,
                    "checkJs": true,
                    "removeComments": true,
                    "noEmit": false,
                    "noEmitOnError": true,
                    "strict": true,
                	"alwaysStrict": true, 
                    "noImplicitAny": true,
                    "noImplicitThis": true,
                }
                ```

            15. `strictNullChecks`

                1. 严格的检查空值 默认是false

                2. ```json
                "compilerOptions":{
                    "target":"ES6",
                    "lib": ["ES6","DOM"],
                    "module": "ES6",
                    "outDir": "./dist",
                    "allowJs": true,
                    "checkJs": true,
                    "removeComments": true,
                    "noEmit": false,
                    "noEmitOnError": true,
                    "strict": true,
                	"alwaysStrict": true, 
                    "noImplicitAny": true,
                    "noImplicitThis": true,
                    "strictNullChecks": true,
                }
                ```

            16. 还有需要

                1. ````json
                {
                  "compilerOptions": {
                
                    /* 基本选项 */
                    "target": "es5",                       // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
                    "module": "commonjs",                  // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
                    "lib": [],                             // 指定要包含在编译中的库文件
                    "allowJs": true,                       // 允许编译 javascript 文件
                    "checkJs": true,                       // 报告 javascript 文件中的错误
                    "jsx": "preserve",                     // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
                    "declaration": true,                   // 生成相应的 '.d.ts' 文件
                    "sourceMap": true,                     // 生成相应的 '.map' 文件
                    "outFile": "./",                       // 将输出文件合并为一个文件
                    "outDir": "./",                        // 指定输出目录
                    "rootDir": "./",                       // 用来控制输出目录结构 --outDir.
                    "removeComments": true,                // 删除编译后的所有的注释
                    "noEmit": true,                        // 不生成输出文件
                    "importHelpers": true,                 // 从 tslib 导入辅助工具函数
                    "isolatedModules": true,               // 将每个文件作为单独的模块 （与 'ts.transpileModule' 类似）.
                
                    /* 严格的类型检查选项 */
                    "strict": true,                        // 启用所有严格类型检查选项
                    "noImplicitAny": true,                 // 在表达式和声明上有隐含的 any类型时报错
                    "strictNullChecks": true,              // 启用严格的 null 检查
                    "noImplicitThis": true,                // 当 this 表达式值为 any 类型的时候，生成一个错误
                    "alwaysStrict": true,                  // 以严格模式检查每个模块，并在每个文件里加入 'use strict'
                
                    /* 额外的检查 */
                    "noUnusedLocals": true,                // 有未使用的变量时，抛出错误
                    "noUnusedParameters": true,            // 有未使用的参数时，抛出错误
                    "noImplicitReturns": true,             // 并不是所有函数里的代码都有返回值时，抛出错误
                    "noFallthroughCasesInSwitch": true,    // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）
                
                    /* 模块解析选项 */
                    "moduleResolution": "node",            // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
                    "baseUrl": "./",                       // 用于解析非相对模块名称的基目录
                    "paths": {},                           // 模块名到基于 baseUrl 的路径映射的列表
                    "rootDirs": [],                        // 根文件夹列表，其组合内容表示项目运行时的结构内容
                    "typeRoots": [],                       // 包含类型声明的文件列表
                    "types": [],                           // 需要包含的类型声明文件名列表
                    "allowSyntheticDefaultImports": true,  // 允许从没有设置默认导出的模块中默认导入。
                
                    /* Source Map Options */
                    "sourceRoot": "./",                    // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
                    "mapRoot": "./",                       // 指定调试器应该找到映射文件而不是生成文件的位置
                    "inlineSourceMap": true,               // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
                    "inlineSources": true,                 // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性
                
                    /* 其他选项 */
                    "experimentalDecorators": true,        // 启用装饰器
                    "emitDecoratorMetadata": true          // 为装饰器提供元数据的支持
                  }
                }
                ````

                2.

### 接口定义类结构 interface

1. 用来定义一个类中应该包含哪些属性和方法
2. 同时接口也可以当成类型声明区使用

```typescript
interface myInterface {
    name: string
    age:number
}


const obj:myInterface = {
    name: '123',
    age:123
}

```

1. 接口可以定义多个 一样的 会合并成一个

2. 接口可以在定义的时候去限制类的结构

    1. 接口中的所有的属性都不能有实际的值

    2. 接口只定义对象的结构，而不考虑实际值

    3. 定义类时，可以实用类去实现一个接口，实现接口就是时类满足接口的要求

    4. ```typescript
      interface myInter{
          name:string
          say():void
      }
      class MyClass implements myInter {
          name: string
          constructor(name: string) {
              this.name = name
          }
          say(): void {
              console.log("hello world");
          }
      }
      ```

### 类属性的封装

TS可以在属性前添加属性的修饰符

1. `public` 修饰的属性可以在任意位置访问修改 默认是这个

2. `private` 私有属性，私有属性只能在类内部进行访问修改

    1. ```typescript
      interface myInter{	
          name:string
          say():void
      }
      class MyClass implements myInter {
          private name: string
          constructor(name: string) {
              this.name = name
          }
          say(): void {
              console.log("hello world");
          }
      }
      
      const per = new MyClass('张三')
      console.log(per.name) // 报错
      ```

    2.

3. `protected` 受保护的属性，只能在当前类和当前类的子类中使用和访问

    1. ```typescript
      class A {
          protected _name:string
      }
      class B extends A {
          say(){
              console.log(this._name)
          }
      }
      ```

    2.

4. ts中设置getter方法的方式

    1. ```typescript
      class Person {
          private _name: string
          private _age: number
          constructor(_name: string, _age: number) {
              this._name = _name
              this._age = _age
          }
          get name() {
              return this._name
          }
          set name(value: string) {
              this._name = value
          }
          get age() {
              return this._age
          }
          set age(value: number) {
              if (value < 0) return
              this._age = value
          }
      }
      
      const pre1 = new Person('张三', 20)
      console.log(pre1.name,pre1.age)
      
      ```

5. 可以直接将属性定义在构造函数中

    1. ```typescript
      class C {
          constructor(public name:string, public age: number){}
      }
      const c = new C('张三',12)
      ```

### 泛型

泛型可以指定多个

`T extends Inter` 表示泛型T必须是`Inter`实现类

```typescript
function fun<T,k>(a:T,b:k):T{
    return a
}
// 可以直接调用具有泛型的函数 
fn (10,'123') // 不指定泛型，ts可以自动对类型进行推断，但不是所有的都可以
fn<number,string>(10,123) // 指定泛型

interface Inter {
    length:number
}
function fn3<T extends Inter>(a:T):number{
    return a.length
}


```

### 高级技巧

用了一段时间的 `typescript` 之后，深感中大型项目中 `typescript` 的必要性，它能够提前在编译期避免许多 bug，如很恶心的拼写问题。而越来越多的 `package` 也开始使用 `ts`，学习 `ts` 已是势在必行。

以下是我在工作中总结到的比较实用的 `typescript` 技巧。

## 01 keyof

`keyof` 与 `Object.keys` 略有相似，只不过 `keyof` 取 `interface` 的键。

```typescript
interface Point {
    x: number;
    y: number;
}

// 相当于:
// type keys = "x" | "y"
type keys = keyof Point;
```

假设有一个 `object` 如下所示，我们需要使用 `typescript` 实现一个 `get` 函数来获取它的属性值

```typescript
const data = {
    a: 3,
    hello: 'world'
}

function get(o: object, name: string) {
    return o[name]
}
```

我们刚开始可能会这么写，不过它有很多缺点

1. 无法确认返回类型：这将损失 ts 最大的类型校验功能
2. 无法对 key 做约束：可能会犯拼写错误的问题

这时可以使用 `keyof` 来加强 `get` 函数的类型功能，有兴趣的同学可以看看 `_.get` 的 type 标记以及实现

```typescript
function get<T extends object, K extends keyof T>(o: T, name: K): T[K] {
    return o[name]
}
```

对于 `keyof`，另一个好用的小技巧是 `keyof any`，请看以下示例

```typescript
// 以下两者等效，但适用 keyof 更加简短
type PropertyName = keyof any;
type PropertyName = string | number | symbol;
```

## 02 Required & Partial & Pick

既然了解了 `keyof`，可以使用它对属性做一些扩展， 如实现 `Partial` 和 `Pick`，`Pick` 一般用在 `_.pick` 中

```typescript
type Partial<T> = {
    [P in keyof T]?: T[P];
};

type Required<T> = {
    [P in keyof T]-?: T[P];
};

type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

interface User {
    id: number;
    age: number;
    name: string;
};

// 相当于: type PartialUser = { id?: number; age?: number; name?: string; }
type PartialUser = Partial<User>

// 相当于: type PickUser = { id: number; age: number; }
type PickUser = Pick<User, 'id' | 'age'>
```

> `Pick`、`Required`、`Partial` 这几个类型已内置在 Typescript 中原生实现

## 03 Condition Type

类似于 js 中的 `?:` 运算符，可以使用它扩展一些基本类型

```typescript
type isTrue<T> = T extends true ? true : false

// 相当于 type t = false
type t = isTrue<number>

// 相当于 type t = false
type t = isTrue<false>
```

## 04 never & Exclude & Extract & Omit

官方文档对 `never` 的描述如下

> the never type represents the type of values that never occur.

结合 `never` 与 `conditional type` 可以推出很多有意思而且实用的类型，比如 `Exclude` 与 `Extract`

```typescript
type Exclude<T, U> = T extends U ? never : T;

// 相当于: type A = 'a'
type A = Exclude<'x' | 'a', 'x'>
type A = Exclude<'x' | 'a', 'x' | 'y' | 'z'>

// 与 Exclude 实现刚好相反，Exclude 取差集，而 Extract 取交集
type Extract<T, U> = T extends U ? T : never;

// 相当于: type A = 'x'
type A = Exclude<'x' | 'a', 'x'>
```

结合 `Exclude` 推出 `Omit` 的写法

```typescript
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

interface User {
    id: number;
    age: number;
    name: string;
};

// 相当于: type PickUser = { age: number; name: string; }
type OmitUser = Omit<User, "id">
```

> `Exclude`、`Extract`、`Omit` 这几个类型已内置在 Typescript 中原生实现

## 05 typeof

顾名思义，`typeof` 代表取某个值的 type，可以从以下示例来展示他们的用法

```typescript
const a: number = 3

// 相当于: const b: number = 4
const b: typeof a = 4
```

在一个典型的服务端项目中，我们经常需要把一些工具塞到 `context` 中，如config，logger，db models, utils 等，此时就使用到 `typeof`。

```typescript
import logger from './logger'
import utils from './utils'

interface Context extends KoaContect {
    logger: typeof logger,
    utils: typeof utils
}

app.use((ctx: Context) => {
    ctx.logger.info('hello, world')

    // 会报错，因为 logger.ts 中没有暴露此方法，可以最大限度的避免拼写错误
    ctx.loger.info('hello, world')
})
```

## 06 is

在此之前，先看一个 `koa` 的错误处理流程，以下是对 `error` 进行集中处理，并且标识 `code` 的过程

```typescript
app.use(async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        let code = 'BAD_REQUEST'
        if (err.isAxiosError) {
            code = `Axios-${err.code}`
        } else if (err instanceof Sequelize.BaseError) {

        }
        ctx.body = {
            code
        }
    }
})
```

在 `err.code` 处，会编译出错，提示 `Property 'code' does not exist on type 'Error'.ts(2339)`。

此时可以使用 `as AxiosError` 或者 `as any` 来避免报错，不过强制类型转换也不够友好

```typescript
if ((err as AxiosError).isAxiosError) {
    code = `Axios-${(err as AxiosError).code}`
}
```

此时可以使用 `is` 来判定值的类型

```typescript
function isAxiosError (error: any): error is AxiosError {
    return error.isAxiosError
}

if (isAxiosError(err)) {
    code = `Axios-${err.code}`
}
```

在 `GraphQL` 的源码中，有很多诸如此类的用法，用以标识类型

```typescript
export function isType(type: any): type is GraphQLType;

export function isScalarType(type: any): type is GraphQLScalarType;

export function isObjectType(type: any): type is GraphQLObjectType;

export function isInterfaceType(type: any): type is GraphQLInterfaceType;
```

## 07 interface & type

`interface` 与 `type` 的区别是什么？可以参考以下 `stackoverflow` 的问题

[https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types(opens new window)](https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types)

一般来说，`interface` 与 `type` 区别很小，比如以下两种写法差不多

```typescript
interface A {
    a: number;
    b: number;
};

type B = {
    a: number;
    b: number;
}
```

其中 `interface` 可以如下合并多个，而 `type` 只能使用 `&` 类进行连接。

```typescript
interface A {
    a: number;
}

interface A {
    b: number;
}

const a: A = {
    a: 3,
    b: 4
}
```

## 08 Record & Dictionary & Many

这几个语法糖是从 `lodash` 的类型源码中学到的，平时工作中的使用频率还挺高。

```typescript
type Record<K extends keyof any, T> = {
    [P in K]: T;
};

interface Dictionary<T> {
    [index: string]: T;
};

interface NumericDictionary<T> {
    [index: number]: T;
};

const data:Dictionary<number> = {
    a: 3,
    b: 4
}
```

实际上可用 `Record` 代替 `Dictionary` 与 `NumericDictionary`

```typescript
// 以下二者等价:
type A = Record<string, any>
type B = Dictionary<any>
```

> `Record` 已内置在 Typescript 中原生实现，在平时中仅使用 `Record` 即可

## 09 infer & Return Type & Parameters Type

通过 `infer`，可类型推导出函数参数及返回值类型。

这里有一个有关协变与逆变的概念，看不懂可跳过。

*函数的返回值类型是协变的，而参数类型是逆变的。*，见 [逆变与协变(opens new window)](https://juejin.cn/post/6844904066821128199)

```ts
function id(x: number): number {
    return x
}

type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never
```

> ReturnType 与 Parameters 已内置在 Typescript 中原生实现

## 10 使用 const enum 维护常量表

相比使用字面量对象维护常量，`const enum` 可以提供更安全的类型检查

```typescript
// 使用 object 维护常量
const TODO_STATUS {
    TODO: 'TODO',
        DONE: 'DONE',
        DOING: 'DOING'
}
// 使用 const enum 维护常量
const enum TODO_STATUS {
    TODO = 'TODO',
    DONE = 'DONE',
    DOING = 'DOING'
}

function todos (status: TODO_STATUS): Todo[];

todos(TODO_STATUS.TODO)
```

## 11 VS Code Tips & Typescript Command

使用 VS Code 有时会出现，使用 `tsc` 编译时产生的问题与 `vs code` 提示的问题不一致

找到项目右下角的 `Typescript` 字样，右侧显示它的版本号，可以点击选择 `Use Workspace Version`，它表示与项目依赖的 typescript 版本一直。

或者编辑 `.vs-code/settings.json`

```json
{
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

## 12 Typescript Roadmap

最后一条也是最重要的一条，翻阅 `Roadmap`，了解 `ts` 的一些新的特性与 bug 修复情况。

[Typescript Roadmap](https://github.com/Microsoft/TypeScript/wiki/Roadmap)