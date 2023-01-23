<template>
  <div>
    <el-backtop :right="100" :bottom="100" />
    <nav-bar/>
    <app-main/>
  </div>
</template>

<script setup lang="ts">
import { NavBar } from "./components/index";
import { AppMain } from "./components/index";

</script>

<style scoped>

</style>