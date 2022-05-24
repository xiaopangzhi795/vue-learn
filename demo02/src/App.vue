<script setup lang="ts">

import Table from "./components/Table.vue";
const msg = "hello vue";

</script>

<template>
  {{ msg }}

  <Table />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
