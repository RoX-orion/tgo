<template>
  <div class="navbar-wrapper">
    <div class="router-wrapper flex-row">
        <img
          class="avatar"
          src="../../assets/favicon.png" alt="TelegramX"
          width="32"
          height="32" @click="router.push('/')"/>
      <a
        class="route"
        v-for="route in routers"
        :key="route.path"
        @click="goTo(route.path)">
        {{route.name}}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useRouter } from "vue-router";

const routers = reactive([
  {name: '文档', path: '/document'},
  {name: 'API', path: '/api'},
  {name: '博客', path: '/blog'},
  {name: 'FAQ', path: '/faq'},
  {name: '社区', path: '/community'},
]);

const router = useRouter();
const goTo = (path: string) => {
  router.push(path);
}
</script>

<style scoped>
.avatar {
  padding: 20px;
  cursor: pointer;
  display: inline-block;
}
.navbar-wrapper {
  box-shadow: 0 2px 10px 1px rgba(0, 0, 0, .08);
}
.router-wrapper {
  overflow: hidden;
  height: 70px;
  max-width: 700px;
  margin: 0 auto;
}

.router-wrapper a {
  text-decoration: none;
  color: #409eff;
  padding: 20px 40px;
}

.route {
  display: inline-block;
  cursor: pointer;
  margin: auto 0;
}
</style>