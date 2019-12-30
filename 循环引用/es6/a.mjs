
import { b } from './b'

let a = 'a.mjs'

console.log('在 a.js 之中，b %j', b)
// export let done = true
console.log('a.js 执行完毕')

export { a }
