# 欢迎来到TkJS

这是一个免费，轻量的开源API。

你是否也遇到过这些问题？

 想写一个web网页，但不会html。

 想快速搭建个网页，不想搬VUE或react等重型框架。

 想要一个类似于Python Tkinter那样简单直观的写法。

TkJS就是这样的一个API.

**什么是TkJS?**

**TkJS是一个JavaScript DOM API.**为了轻便而存在。我们不需要下载到本地，也不需要npm，只需要

<script src="https://tkjsapi.github.io/api/tkjs/tkinterjs.js"></script>
一行代码即可应用.

# Hello world程序（第0课）

目标

用TkJS写出第一个TkJS程序（显示“hello world”）



所用API

`tkinterjs.js/tk/Tk()窗口组件`

`tkinterjs.js/tk/Label(master,class_,id,text)文本组件`



定义你的的一个窗口吧



```
let root = tk.Tk(); //窗口

tk.title("Hello world"); //标题

let lab = tk.Label(root,"_class_name","id_name","hello world");

//创建一个文本，等同于

//<p class="_class_name" id="id_name">hello world</p>

//其中 root等同于document.body


```

接着我们需要用html应用

方法1（用script标签）：

```html
<!DOCTYPE html>
<html>
    <body>
        <script src="https://tkjsapi.github.io/api/tkjs/tkinterjs.js"></script>
        <!--引入,必须在body中-->
        
        <script>
        	let root = tk.Tk();
            //...
            //实现你的逻辑
        </script>
        <!--逻辑，必须在body中-->
    </body>
</html>
```

方法2(本地文件)：

```javascript
//文件1：index.js(可以换成别的路径)
let root = tk.Tk();
//...
//实现你的逻辑
```

```html
<!DOCTYPE html>
<html>
    <body>
        <script src="https://tkjsapi.github.io/api/tkjs/tkinterjs.js"></script>
        <script src="./index.js"></script>
        <!--换成你的路径-->
    </body>
</html>
```



你学会了吗?

# Button (第1课)

目标

写出一个带有样式的Button



所用API

`tkinterjs.js/tk/Tk()`

`tkinterjs.js/tk/Button(master,class_,id,text,onclick)`

`tkinterjs.js/tkStyle/BackgroundColor(element,color)`

`tkinterjs.js/tkStyle/FontColor(element,color)`



没错，有一个叫tkStyle的API用于控制样式。详细文档详见TkStyle。



首先让我们定义一个按钮

```javascript
let root = tk.Tk();//窗口

let btn = tk.Button(root,"class_btn","id_btn","click me!",function(){ //基本参数
    alert("clicked!"); //点击事件
});
```



等同于

`<button class="class_btn" id="id_btn" onclick="alert('clicked')">click me!</button>`



接下来，让我们加入样式，让按钮变成黑色的。

```javascript
let root = tk.Tk();//窗口

let btn = tk.Button(root,"class_btn","id_btn","click me!",function(){ //基本参数
    alert("clicked!"); //点击事件
});

tkStyle.BackgroundColor(btn,"#000000");//背景颜色 -> 黑色
tkStyle.FontColor(btn,"#ffffff")//字体颜色 -> 白色
```

同理，你可以将#000000,#ffffff换成其他颜色，我就不再赘述。

你学会了吗？



# TkStyle (第2课)

目标

学会基本的tkStyle方法



所用API

`tkinterjs.js/tkStyle/BackgroundColor(element,color)`

`tkinterjs.js/tkStyle/FontColor(element,color)`

`tkinterjs.js/tkStyle/BorderRadius(element,sizepx)`



## BackgroundColor

用于设置背景颜色



### 参数:element

受作用的元素

```javascript
let root=tk.Tk();
//root可以作为element的参数
tkStyle.Background(root,"black");
//将窗口背景设置为黑色
```

### 参数:color

受作用的元素的背景颜色



#### Tips：颜色编码

##### RGB颜色模式

R：红色

G：绿色

B：蓝色

RGB代表一个颜色拆解后3种颜色的量

通常我们会将R,G,B三种颜色的最大值当成255(即ff_16)



##### 十六进制表示

每一个十六进制颜色编码的开头必须是#(表示十六进制颜色编码，否则不会加载)。

后面加上3个十六进制2位数（比如00,1a,ff,b5)(0-9,a,b,c,d,e,f)，数字越大，就越偏向于这个颜色。



##### 常用颜色

| 颜色 | 编码      | 说明               |
| :--- | :-------- | :----------------- |
| 黑色 | `#000000` | 所有通道为 0       |
| 白色 | `#ffffff` | 所有通道为最大值   |
| 红色 | `#ff0000` | 红色拉满，绿蓝为 0 |
| 绿色 | `#00ff00` | 绿色拉满           |
| 蓝色 | `#0000ff` | 蓝色拉满           |
| 紫色 | `#7a5cff` | 混合色             |



##### RGB函数表示

这个表达方法只作用于JavaScript,CSS,html

`rgb(r,g,b)`

r,g,b必须是`>=0`,`<=255`的整数。



##### 16进制和10进制的互换

###### 16 -> 10

举个例子，将f670_16转换成_10
$$
0×16^0+7×16^1+6×16^2+15×16^3 = 63088_{10}
$$

###### 10->16

举个例子,将63088_10转换成_16
$$
第一步:\quad63088\div16 = 3943 \cdots 0\\
第二步:\quad3943\div16=246 \cdots7\\
第三步:\quad246\div16=15\cdots6\\
第四步:\quad15\div16=0\cdots15(f)\\
(0,7,6,f)倒序后\\
(f,6,7,0)\\
结果为f670\\
所以f670_{16}=63088_{10}
$$


## FontColor

用于设置字体颜色



### 参数:element

受作用的元素



### 参数:color

受作用的元素的设置颜色



### 示例代码

```javascript
let root = tk.Tk();

let lab = tk.Label(root,"_classname_lab","_id_lab","一段平平无奇的文本");//定义文本

tkStyle.BackgroundColor(lab,"#000000");//十六进制颜色编码,表示黑色
tkStyle.FontColor(lab,"#ffffff");//十六进制颜色编码,表示白色
```



## BorderRadius

用于设置圆角



### 参数:element

受作用的元素



### 参数:圆角大小

受作用的元素圆角大小



### 示例代码

```javascript
let root = tk.Tk();

let btn = tk.Button(root,"_classname_btn","_id_btn","点我",function(){
    console.log("hello tkjs!");
});//定义按钮

tkStyle.BackgroundColor(btn,"#000000");//十六进制颜色编码,表示黑色
tkStyle.FontColor(btn,"#ffffff");//十六进制颜色编码,表示白色
tkStyle.BorderRadius(btn,12);
```



你学会了吗？

# 所用控件API（第3课）

目标

学习 TkJS 中所有控件的**参数、用法、返回值**，并能够合理运用它们搭建页面。

------

# 1. 核心控件

## 1.1 [tk.Tk](https://tk.tk/)()

### 参数

无

### 返回值

`document.body`（DOM 元素）

### 示例

javascript

```
let root = tk.Tk();
// root 就是 document.body，所有控件都挂在这里
```



------

## 1.2 tk.title()

### 参数

- `tit`：字符串，要设置的标题

### 返回值

无

### 示例

javascript

```
tk.title("我的 TkJS 应用");
// 浏览器标签页显示 "我的 TkJS 应用"
```



------

# 2. 布局控件

## 2.1 tk.Frame()

### 参数

- `master`：父容器（一般是 root）
- `class_`：CSS 类名（可选，默认 `"tk.frame"`）
- `id`：元素 ID（可选，默认 `"tk"`）
- `width`：宽度，单位 px（可选，默认 `100`）
- `height`：高度，单位 px（可选，默认 `100`）

### 返回值

创建的 div 元素

### 示例

javascript

```
let root = tk.Tk();
let frame = tk.Frame(root, "my_frame", "f1", 300, 200);
// 创建了一个 300x200 的容器
```



------

## 2.2 tk.DragFrame()

### 参数

- `master`：父容器
- `class_`：CSS 类名（可选，默认 `"tk.dragbox"`）
- `id`：元素 ID（可选，默认 `"tk"`）

### 返回值

创建的 div 元素（可拖拽）

### 示例

javascript

```
let drag = tk.DragFrame(root, "drag_box", "d1");
drag.textContent = "拖我！";
// 创建一个可以拖动的方框
```



------

# 3. 显示控件

## 3.1 tk.Label()

### 参数

- `master`：父容器
- `class_`：CSS 类名（可选，默认 `"tk.label"`）
- `id`：元素 ID（可选，默认 `"tk"`）
- `text`：显示的文本（可选，默认 `"hello tkjs!"`）

### 返回值

创建的 p 元素

### 示例

javascript

```
let lab = tk.Label(root, "my_label", "l1", "你好，TkJS！");
// 显示 "你好，TkJS！"
```



------

## 3.2 tk.Image()

### 参数

- `master`：父容器
- `class_`：CSS 类名
- `id`：元素 ID
- `src`：图片地址（URL 或路径）

### 返回值

创建的 img 元素

### 示例

javascript

```
let img = tk.Image(root, "my_img", "i1", "https://example.com/photo.jpg");
// 显示一张图片
```



------

# 4. 交互控件

## 4.1 tk.Button()

### 参数

- `master`：父容器
- `class_`：CSS 类名（可选，默认 `"tk.button"`）
- `id`：元素 ID（可选，默认 `"tk"`）
- `text`：按钮文字（可选，默认 `"hello tkjs!"`）
- `onclick`：点击事件函数（可选，默认弹窗 `"hello tkjs!"`）

### 返回值

创建的 button 元素

### 示例

javascript

```
let btn = tk.Button(root, "my_btn", "b1", "点我", function(){
    alert("你点击了按钮！");
});
```



------

## 4.2 tk.Entry()

### 参数

- `master`：父容器
- `class_`：CSS 类名（可选，默认 `"tk.entry"`）
- `id`：元素 ID（可选，默认 `"tk"`）

### 返回值

创建的 input 元素

### 示例

javascript

```
let entry = tk.Entry(root, "my_entry", "e1");
// 用户可以在里面输入文字
```



------

## 4.3 tk.Text()

### 参数

- `master`：父容器
- `class_`：CSS 类名（可选，默认 `"tk.text"`）
- `id`：元素 ID（可选，默认 `"tk"`）
- `width`：宽度，单位 ch（可选，默认 `50`）
- `height`：高度，单位 em（可选，默认 `50`）

### 返回值

创建的 textarea 元素

### 示例

javascript

```
let text = tk.Text(root, "my_text", "t1", 40, 10);
// 创建了一个 40 列宽、10 行高的文本框
```



------

# 5. 列表控件

## 5.1 tk.Listbox

### 参数

- `master`：父容器
- `class_`：CSS 类名（可选，默认 `""`）
- `id`：元素 ID（可选，默认 `""`）

### 返回值

Listbox 对象

### 方法

- `appEnd(ele)`：在列表末尾添加一个元素
- `deleteEnd()`：删除列表最后一个元素
- `getObj()`：返回底层的 ul 元素

### 示例

javascript

```
let list = new tk.Listbox(root, "my_list", "l1");
let item = tk.ListboxLine(list.getObj(), "item_class", "i1", "苹果");
list.appEnd(item);
// 列表显示：苹果
```



------

## 5.2 tk.ListboxLine()

### 参数

- `master`：父容器（通常是 Listbox 的 ul）
- `class_`：CSS 类名（可选，默认 `"tk.textbox"`）
- `id`：元素 ID（可选，默认 `"tk"`）
- `ele`：显示的文本内容

### 返回值

创建的 li 元素

### 示例

javascript

```
let item = tk.ListboxLine(list.getObj(), "item_style", "i1", "香蕉");
list.appEnd(item);
// 列表添加 "香蕉"
```



------

# 6. 综合运用示例

## 6.1 搭建一个完整的页面

javascript

```
let root = tk.Tk();
tk.title("TkJS 综合示例");

// 创建一个标签
let lab = tk.Label(root, "title_lab", "l1", "欢迎来到 TkJS");

// 创建一个输入框
let entry = tk.Entry(root, "input_style", "e1");

// 创建一个按钮
let btn = tk.Button(root, "btn_style", "b1", "提交", function(){
    let val = tkEvent.getInputValueById("e1");
    alert("你输入了：" + val);
});

// 创建一个列表
let list = new tk.Listbox(root, "list_style", "l1");
let item1 = tk.ListboxLine(list.getObj(), "item_style", "i1", "项目一");
let item2 = tk.ListboxLine(list.getObj(), "item_style", "i2", "项目二");
list.appEnd(item1);
list.appEnd(item2);
```



------

## 6.2 添加样式

javascript

```
tkStyle.BackgroundColor(root, "#f0f0f0");
tkStyle.FontColor(lab, "#333333");
tkStyle.BorderRadius(btn, 10);
tkStyle.BoxShadow(btn, 2, 2, 5, "#888888");
```



你学会了吗？



# TkJS(Compose API) (进阶第0课)

Compose API可以让tkjs像原版Tkinter（python）一样，可以通过键值对参数来进行编写。就比如python中的

```python
import tkinter as tk

root = tk.Tk()
lab = tk.Label(master=root,text="hello tkinter!")

root.mainloop()
```

API文件位于`https://tkjsapi.github.io/api/tkjs/compose/tkjs.js`,可以通过两种方法引入。（和‘第0课’中的方法一致，把链接换成上文所述）

除此以外，单独定义一个控件时，不会自动挂载。并且tkc.Tk()函数加入了ele参数，接受数组数据。

**警告：Compose API依赖于原版tkjs，请先引入tkinterjs.js(原版)后再进行引入。**



# TkJS(Compose API) 文本+参数传递 （进阶第1课）

目标

使用TkJS Compose API写出一个基础页面，显示出”hello world”



使用API

`tkinterjs.js/tk`

`tkinterjs.js/tkStyle`

`compose/tkjs.js/tkc/Tk()`

`compose/tkjs.js/tkc/CLabel(conf)`

`compose/tkjs.js/Attr(conf={})`



## Attr函数

用于生成默认配置，也可以加入自定义参数。

### 参数：conf

用于加入自定义参数



## CLabel方法

用于创建文本

### 参数：conf

接受对象和Attr返回值。

输入的对象完全决定了控件数据。



js代码

```javascript
let root = tkc.Tk([
    tkc.CLabel(
    	Attr(
        	{ text:"hello world"} 
        )//可以替换为{text:"hello world",id:"id_",class_:"class_"}
    )
]);
```

你学会了吗？





# TkJS(Compose API) 所有控件（进阶第2课）



## 控件列表



|  控件   |      作用      |                             用法                             |
| :-----: | :------------: | :----------------------------------------------------------: |
|   Tk    |   获取主窗口   |                       `tkc.Tk([...])`                        |
| CLabel  |    创建文本    | `tkc.CLabel(Attr(...))`;`tkc.Tk([tkc.Label(Attr(...)),...])` |
| CButton |    创建按钮    |                   `tkc.CButton(Attr(...))`                   |
| CFrame  |    创建框架    |                    `tkc.Frame(Attr(...))`                    |
| CEntry  |   创建输入框   |                   `tkc.CEntry(Attr(...))`                    |
| CImage  |   创建图片框   |                   `tkc.CImage(Attr(...))`                    |
|  CText  | 创建多行输入框 |                    `tkc.CText(Attr(...))`                    |



## Attr用法列表

### 共有参数

#### class_

控件类名，用于CSS。

#### id

控件id，同样用于css

若不需要CSS可传入空字符串。



**class_和id适用于所有控件。**



### 独有参数

| 控件    | Attr参数列表                                   |
| ------- | ---------------------------------------------- |
| CLabel  | Attr({text:"文本"})                            |
| CButton | Attr({text:"文本",onclick:function(...){...}}) |
| CFrame  | Attr({width:数字,height:数字})                 |
| CEntry  | 无独有参数                                     |
| CImage  | Attr({src:"链接"})                             |
| CText   | Attr({width:数字,height:数字})                 |



你学会了吗？





