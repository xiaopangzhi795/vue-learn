<script setup lang="ts">
import {ref} from "vue";

const header = ref([
  {
    name: "名字"
  }
]);

const msg = "hello table";

const isOption = false;

const isShow = () => {
  return !isOption;
}

</script>

<template>
  {{ msg }}
  <table>
    <thead>
    <tr>
      <th></th>
      <th v-for="(item, index) in header" v-text="item.name"></th>
      <th :class="{nShow: isShow}"><slot name="option"><button @click="console.log('click option button');">操作</button></slot></th>
    </tr>
    </thead>
  </table>

</template>

<style scoped lang="less">
@import "../assets/table.less";

</style>