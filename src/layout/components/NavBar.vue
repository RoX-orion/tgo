<template>
  <div class="navbar-wrapper flex-row">
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
    <div class="login-wrapper">
      <a href="https://github.com/login/oauth/authorize?client_id=243ef50beb4293ee5f97&redirect_uri=http://127.0.0.1:8080/github-callback&scope=user">
        <span style="color: #409eff;">登录</span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, reactive} from "vue";
import {useRoute, useRouter} from "vue-router";

const routers = reactive([
  {name: '文档', path: '/document'},
  {name: 'API', path: '/api'},
  {name: '博客', path: '/blog'},
  {name: 'FAQ', path: '/faq'},
  {name: '社区', path: '/community'},
]);

const router = useRouter();
const route = useRoute();
const goTo = (path: string) => {
  router.push(path);
}
</script>

<style scoped>
.avatar {
  cursor: pointer;
  margin: auto 0;
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
  padding: 0 40px;
}

.route {
  display: inline-block;
  cursor: pointer;
  margin: auto 0;
  line-height: 1rem;
}

.login-wrapper {
  margin: auto 15px;
}
</style>
