
import { b } from './b'

function a () {
  return 'a.mjs'
}
console.log('在 a.js 之中，b.done = %j', b)
// export let done = true
console.log('a.js 执行完毕')

export { a }
