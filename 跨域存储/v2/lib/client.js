class Client {
  constructor (hubUrl) {
    this.hubUrl = hubUrl
    // 所有请求的 id 值（累加）
    this.id = 0
    // 所有请求消息映射
    this._requests = {}
    // 获取 iframe window 对象
    this._iframeWin = this._createIframe(this.hubUrl).contentWindow
    this._initListener()
  }
  // 
  getItem (key, callback) {
    this._requestFn('getItem', {
      key,
      callback,
    })
  }
  setItem (key, value, callback) {
    this._requestFn('setItem', {
      key,
      value,
      callback,
    })
  }
  _requestFn (method, { key, value, callback }) {
    // 发消息时，请求对象格式
    let req = {
      id: this.id++,
      method,
      key,
      value,
    }
    // 请求 id 和回调函数的映射
    this._requests[req.id] = callback
    // 向 iframe “中转页面”发送消息
    this._iframeWin.postMessage(req, '*')
  }
  // 初始化监听函数
  _initListener () {
    // 监听 iframe “中转页面”返回的消息
    window.addEventListener('message', (e) => {
      let { id, result } = e.data
      // 找到“中转页面”的消息对应的回调函数
      let currentCallback = this._requests[id]
      if (!currentCallback) return
      // 调用并返回数据
      currentCallback(result)
    })
  }
  // 创建 iframe 标签
  _createIframe (hubUrl) {
    const iframe = document.createElement('iframe')
    iframe.src = hubUrl
    iframe.style = 'display: none;'
    window.document.body.appendChild(iframe)
    return iframe
  }
}
