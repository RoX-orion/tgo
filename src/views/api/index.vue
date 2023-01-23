<template>
  <div class="container">
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose">
      <el-sub-menu index="1">
        <template #title>
          <span>Auth</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">AcceptLoginToken</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-menu-item index="2">
        <template #title>Chat</template>
      </el-menu-item>
    </el-menu>

    <div class="info-wrapper">
      <h3>auth.AcceptLoginToken</h3>
      <p>Accept QR code login token, logging in the app that generated it.</p>
      <h3>Parameters</h3>
      <h3>Result</h3>

    </div>
  </div>

</template>

<script setup lang="ts">

import { ref } from 'vue'

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}

.el-menu-vertical-demo {
  margin-top: 1px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
  min-height: 400px;
}

.info-wrapper {
  padding: 15px;
}
</style>