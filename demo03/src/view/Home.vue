<template>
  <h1>hello vue</h1>
  <p>
    <a href="#/hello">Hello</a>

  </p>
  <p>
    <a href="#/">Home</a>
  </p>

  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>