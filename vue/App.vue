<template>
  <div class="app">
    <div id="head"></div>
    App- {{count}}
    <TestComponent someKey='value some'>
      <!-- <TestChildComponent></TestChildComponent> -->
    </TestComponent>

    <div class="father">
      <div class="print" ref="printDom">
        Here is something to print!
        <TestComponent></TestComponent>
      </div>
    </div>

    <button @click="handlePrint">打印</button>
    <button @click="count++">累加</button>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Print from './print'
  import TestComponent from './TestComponent'
  import TestChildComponent from './TestChildComponent'

  Vue.use(Print)

  export default {
    name: 'App',
    provide: {
      foo: 'App foo',
    },
    data () {
      return {
        count: 0,
        name: 'app name'
      }
    },
    components: {
      TestComponent,
      // TestChildComponent,
    },
    beforeMount () {
      console.log('-- beforeMount --', this.$el)
    },
    mounted () {
      console.log('-- mounted --', this.$el)
      // let child = new (Vue.extend(TestChildComponent))
      // console.log('Vue: ', child.$mount('#head'))
    },
    updated () {
      console.log('-- updated --')
    },
    methods: {
      handlePrint () {
        this.$print(this.$refs.printDom)
        let ref = this.$refs.printDom
        let prevDom = null
        let currentDom = ref
        let fragment = document.createDocumentFragment()

        while (currentDom && currentDom.tagName.toLowerCase() !== 'body') {
          if (prevDom) {
            let element = currentDom.cloneNode(false)
            element.appendChild(prevDom)
            prevDom = element
          } else {
            prevDom = currentDom.cloneNode(true)
          }

          currentDom = currentDom.parentElement
        }

        console.log('prevDom: ', prevDom)
        console.dir('fragment: ', fragment)
        console.dir(currentDom)
      },
    },
  }
</script>

<style scoped>
.father {

}
.father .print {
  color: red;
}
</style>
