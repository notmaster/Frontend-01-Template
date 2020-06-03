# 第 8 周学习总结

[TOC]

## 1.重学CSS | CSS基本语法,CSS基础机制（二）

### 预习内容

- [CSS 选择器：如何选中 svg 里的 a 元素？](https://time.geekbang.org/column/article/84365)
- [CSS 选择器：伪元素是怎么回事儿？](https://time.geekbang.org/column/article/84633)

## 2.重学CSS | 排版与排版相关属性,绘制与绘制相关属性

### 预习内容

- [CSS 排版：从毕升开始，我们就开始用正常流了](https://time.geekbang.org/column/article/85745)
- [CSS Flex 排版：为什么垂直居中这么难？](https://time.geekbang.org/column/article/90148)

### 参考链接

<https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#flex-items>

### 参考代码

```html
<div style="font-size:50px;line-height:100px;background-color:pink;">
    <div style="vertical-align:text-bottom;overflow:visible;display:inline-block;width:1px;height:1px;">
        <div style="width:1000px;;height:1px;background:red;"></div>
    </div>
    <div style="vertical-align:text-top;overflow:visible;display:inline-block;width:1px;height:1px;">
        <div style="width:1000px;;height:1px;background:red;"></div>
    </div>
    <span>Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello </span>
    <div style="vertical-align:text-bottom;line-height:70px;width:100px;height:150px;background-color:aqua;display:inline-block">1</div>
    <div style="vertical-align:top;line-height:70px;width:100px;height:50px;background-color:aqua;display:inline-block">1</div>
    <div style="vertical-align:base-line;line-height:70px;width:100px;height:550px;background-color:plum;display:inline-block">1</div>
</div>
```

### 参考名词

IFC：inline formatting context
BFC：block formatting context

### Tips

大家请记住下面这个表现原则：如果一个元素具有 BFC，内部子元素再怎么翻江倒海、翻云覆雨，都不会影响外部的元素。所以，BFC 元素是不可能发生 margin 重叠的，因为 margin 重叠是会影响外部的元素的；BFC 元素也可以用来清除浮动的影响，因为如果不清除，子元素浮动则父元素高度塌陷，必然会影响后面元素布局和定位，这显然有违 BFC 元素的子元素不会影响外部元素的设定。
block-level 表示可以被放入 bfc
block-container 表示可以容纳 bfc
block-box = block-level + block-container
block-box 如果 overflow 是 visible， 那么就跟父 bfc 合并
