<template>
  <div class="navbar-wrapper">
    <div class="router-wrapper">
      <div class="menu">
        <a href="#">首页</a>
        <a href="#">文档</a>
        <a href="#">API</a>
        <a href="#">博客</a>
        <a href="#">FAQ</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.navbar-wrapper {
  box-shadow: 0 2px 10px 1px rgba(0, 0, 0, .08);
}
.router-wrapper {
  height: 70px;
  max-width: 1000px;
  margin: 0 auto;
}

.menu {
  margin: 0;
}

.menu a {
  text-decoration: none;
  color: #409eff;
  padding: 20px;
}
</style>