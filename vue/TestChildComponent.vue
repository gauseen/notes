
<script>
  export default {
    name: 'TestChildComponent',
    data () {
      return {
        name: 'Child Test 123',
      }
    },
    render (h) {
      return h('div', this.name)
    },
  }
</script>
