<template>
  <li>
    <div>
      {{itemData.name}}
      <span @click="toggle" v-if="isFolder">{{isOpen ? '-' : '+'}}</span>
    </div>

    <ul v-if="isFolder" v-show="isOpen">
      <tree v-for="(childItem, index) in itemData.children" :itemData="childItem" :key="index"></tree>
    </ul>
  </li>
</template>

<script>

export default {
  name: 'Tree',
  props: {
    itemData: {},
  },
  data () {
    return {
      isOpen: false,
    }
  },
  computed: {
    isFolder () {
      return this.itemData.children && this.itemData.children.length
    },
  },
  components: {
    tree: () => import('./Tree')
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style>

</style>
