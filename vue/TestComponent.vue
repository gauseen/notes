
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
    render (h) {
      let vnodeForChild = this.$slots.default
      console.log('inject-foo: ', this.foo)
      console.log('vnodeForChild: ', vnodeForChild)
      console.log('TestComponent this: ', this.componentInstance)
      return h('section', this.name)
    },
  }
</script>
