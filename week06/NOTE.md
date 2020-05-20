# 第 6 周学习总结

[TOC]

## 1.浏览器工作原理 | 有限状态机

### 参考名词

- Mealy ：在计算理论中，米利型有限状态机（英语：Mealy machine）是基于它的当前状态和输入生成输出的有限状态自动机（更精确的叫有限状态变换器）。这意味着它的状态图将为每个转移边包括输入和输出二者。与输出只依赖于机器当前状态的摩尔有限状态机不同，它的输出与当前状态和输入都有关。但是对于每个 Mealy 机都有一个等价的 Moore 机，该等价的 Moore 机的状态数量上限是所对应 Mealy 机状态数量和输出数量的乘积加 1（|S’|=|S|*|Λ|+1）。

## 2.浏览器工作原理 | HTTP协议+语法与词法分析（三）

### 参考链接

https://html.spec.whatwg.org/multipage/parsing.html#data-state
https://html.spec.whatwg.org/multipage/parsing.html#tagopen-state
https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inselect
[浏览器：一个浏览器是如何工作的？（阶段一）](https://time.geekbang.org/column/article/80240)
[浏览器：一个浏览器是如何工作的？（阶段二）](https://time.geekbang.org/column/article/80260)

### 参考代码

```html
<html maaa=a >
<head>
    <style>
body div #myid{
    width:100px;
    background-color: #ff5000;
}
body div img{
    width:30px;
    background-color: #ff1111;
}
    </style>
</head>
<body>
    <div>
        <img id="myid"/>
        <img />
    </div>
</body>
</html>
```

## 3.浏览器工作原理 | CSS计算，排版,渲染，合成（一）

### 参考链接

[浏览器：一个浏览器是如何工作的（阶段三）](https://time.geekbang.org/column/article/80311)
[浏览器：一个浏览器是如何工作的？（阶段四）](https://time.geekbang.org/column/article/81730)
[浏览器：一个浏览器是如何工作的？（阶段五）](https://time.geekbang.org/column/article/82397)
https://www.w3.org/TR/CSS2/
https://github.com/wintercn/JSinJS
如何通过 link 异步加载 css，没有类似 script 的官方 async 属性，但可以参考这篇文章 hack： https://juejin.im/post/5d8873526fb9a06b155dfbca

