<template>
  <ul>
    <tree :itemData="treeData"></tree>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      treeData: {
        name: 'Tree',
        children: [
          { name: 'hello' },
          { name: 'wat' },
          {
            name: 'child folder',
            children: [
              {
                name: 'child folder',
                children: [
                  { name: 'hello' },
                  { name: 'wat' }
                ]
              },
              { name: 'hello' },
              { name: 'wat' },
              {
                name: 'child folder',
                children: [
                  { name: 'hello' },
                  { name: 'wat' }
                ]
              }
            ]
          }
        ]
      },
    }
  },
  components: {
    tree: () => import('./Tree')
  },
  methods: {
    
  },
}
</script>

<style>

</style>
