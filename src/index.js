import React from "react"
import ReactDOM from "react-dom"
import * as serviceWorker from "./serviceWorker"

import "./styles/index.scss"
import App from "./views/App/App"

import FastClick from "fastclick"
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

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
