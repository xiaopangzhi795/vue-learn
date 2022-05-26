<template>
  <NavBar :nav-bar-list="navBarList" :default-active="defaultIndex"></NavBar>
  <button @click="addNav">添加导航</button>

  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script setup lang="ts">
  import NavBar from "@/components/NavBar.vue";
  import {onBeforeMount, onMounted} from "vue";
  import {ref} from "vue";
  import store from "@/store";


  const navBarList = store.state.navBarList;
  const defaultIndex = ref("#/");

  onBeforeMount(() => {
    store.commit("addNavBar", {
      name: "home",
      title: "home",
      index: "/",
      path: "/"
    });
    store.commit("addNavBar", {
      name: "hello",
      title: "hello",
      index: "/hello",
      path: "/hello"
    });
  })

  const addNav = () => {
    store.commit("addNavBar", {
      name: "hello2",
      title: "你好",
      index: "/hello",
      path: "/hello"
    });
  }
</script>

<style scoped>

</style>