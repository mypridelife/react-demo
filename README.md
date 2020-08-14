# demo

## 增加 craco

增加 craco.config.js 注入 webpack 配置

https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#installation

## 移动端 VW 适配方案

增加 postcss 等库

## 增加 styles

增加 normalize.css
增加 variables.scss

## 增加 fastclick

## 增加 antd-mobile

## 增加 axios

增加 axios 封装请求 request.js

## 增加 tailwindcss

去掉 normalize.css，因为 tailwindcss 已经包含

## 去掉 tailwindcss

原因 rem 和 vw 重复，不方便适配

## 引入 babel-plugin-import

按需引入 antd-mobile

## 增加 reset.css

## 解决 ios 中由于 fastclick 引起的 input focus 问题

```js
FastClick.attach(document.body)
FastClick.prototype.focus = function (targetElement) {
  var length
  //兼容处理:在iOS7中，有一些元素（如date、datetime、month等）在setSelectionRange会出现TypeError
  //这是因为这些元素并没有selectionStart和selectionEnd的整型数字属性，所以一旦引用就会报错，因此排除这些属性才使用setSelectionRange方法
  if (
    targetElement.setSelectionRange &&
    targetElement.type.indexOf("date") !== 0 &&
    targetElement.type !== "time" &&
    targetElement.type !== "month" &&
    targetElement.type !== "email"
  ) {
    length = targetElement.value.length
    targetElement.setSelectionRange(length, length)
    /*修复bug ios 11.3不弹出键盘，这里加上聚焦代码，让其强制聚焦弹出键盘*/
    targetElement.focus()
  } else {
    targetElement.focus()
  }
}
```
