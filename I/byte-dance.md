- 自我介绍
- 说一下开发项目时遇到最难的问题
- promise
  - 封装一个方法，满足调用 1 个接口时 3s 内无响应，返回错误
  - 封装一个方法，满足调用 3 个接口，一个有响应就返回结果，响应都错返回错误状态
- history 与 hash 路由区别
- common.js 循环引用输出先后顺序（https://es6.ruanyifeng.com/#docs/module-loader#%E5%BE%AA%E7%8E%AF%E5%8A%A0%E8%BD%BD）
- common.js 规范中 module.exports 与 exports 的区别
- js 线程阻塞渲染相关，如下：

```js
// 问：boxEle 文字怎么显示？

let boxEle = document.querySelector('.box')
boxEle.style.color = 'red'
let start = Date.now()
while (Date.now() - start < 2 * 1000) {

}
boxEle.style.color = 'blue'

// 追问：如果有问题，该如何实现？
```

- 浏览器多个 tab 之间如何共享数据
- location 对象下有哪些字段
  - location.search 包括 '?' 吗？
  - location.hash 包括 '#' 吗？
- 事件模型，事件委托（https://zhuanlan.zhihu.com/p/44943587）
- nodeType 有哪些类型
- 如何解决跨域，cors 跨域必须带的响应头有哪些
- jwt 原理
- 说一说你所做的与前端工程化相关的事情
