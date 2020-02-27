const createStore = (reducer) => {
  let state
  let listeners = []

  function getState () {
    return state
  }
  
  function dispatch (action) {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }

  // 订阅
  function subscribe(listener) {
    listeners.push(listener)

    return function unSubscribe () {
      listeners.filter(fn => fn !== listener)
    }
  }

  // 初始化 state
  dispatch({})

  return {
    getState,
    dispatch,
    subscribe,
  }
}
