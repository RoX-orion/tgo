<template>
  <div>
    <el-backtop :right="50" :bottom="50" />
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