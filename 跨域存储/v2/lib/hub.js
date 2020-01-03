class Hub {
  constructor () {
    this._initListener()
    this.map = {
      setItem: (key, value) => window.localStorage['setItem'](key, value),
      getItem: (key) => window.localStorage['getItem'](key),
    }
  }
  // 监听 client ifameWin.postMessage() 事件
  _initListener () {
    window.addEventListener('message', (e) => {
      let { method, key, value, id } = e.data
      // 处理对应的存储方法
      let result = this.map[method](key, value)
      // 返回给当前 client 的数据
      let response = {
        id,
        result,
      }
      // 把获取的数据，发送给 client 窗口
      window.parent.postMessage(response, '*')
    })
  }
}
