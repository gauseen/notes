<template>
  <keep-alive>
		<router-view :key="$route.fullPath">

      <keep-alive>
        <router-view :key="$route.fullPath"></router-view>
      </keep-alive>

    </router-view>
	</keep-alive>
</template>

<script>
export default {

}
</script>

<style>

</style>
