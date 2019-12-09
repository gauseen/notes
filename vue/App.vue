<template>
  <div>
    <div id="head"></div>
    App
    <TestComponent someKey='value some'>
      <!-- <TestChildComponent></TestChildComponent> -->
    </TestComponent>
  </div>
</template>

<script>
  import Vue from 'vue'
  import TestComponent from './TestComponent'
  import TestChildComponent from './TestChildComponent'

  export default {
    name: 'App',
    provide: {
      foo: 'App foo',
    },
    data () {
      return {
        name: 'app name'
      }
    },
    components: {
      TestComponent,
      // TestChildComponent,
    },
    mounted () {
      let child = new (Vue.extend(TestChildComponent))
      console.log('Vue: ', child.$mount('#head'))
    },
  }
</script>
