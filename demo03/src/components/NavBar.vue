<template>
  <el-menu
      :default-active="defaultActive"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      router=true
  >
      <el-menu-item v-for="bar in navBarList" :index="bar.path" v-text="bar.title"></el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">

  /*接收参数*/
  const props = defineProps({
    navBarList: {
      type: Array,
      default() {
        return []
      }
    },
    defaultActive: String
  })

  /*选中事件*/
  const handleSelect = (index: string) => {
    console.log(index);
  };
</script>

<style scoped>

</style>