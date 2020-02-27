<template>
  <section>
    <h1 class="title">{{name}}</h1>
  </section> 
</template>

<script>
  export default {
    name: 'TestComponent',
    inject: ['foo'],
    // props: ['someKey'],
    inheritAttrs: false,
    data () {
      return {
        name: 'test 123',
      }
    },
    // render (h) {
    //   let vnodeForChild = this.$slots.default
    //   console.log('inject-foo: ', this.foo)
    //   console.log('vnodeForChild: ', vnodeForChild)
    //   console.log('TestComponent this: ', this.componentInstance)
    //   return h('section', this.name)
    // },
  }
</script>

<style scoped>
.title {
  color: red;
}
</style>
