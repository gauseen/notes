export let b = 'b.mjs'

import { a } from './a'

console.log('在 b.js 之中，a = %j', a)
// export let done = true
console.log('b.js 执行完毕')
