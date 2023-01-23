<template>
  <div class="container">
    <el-card
      class="blog-card-wrapper"
      v-for="i in list" :key="i.title"
      @click="">
      <blog-card 
        :title="i.title"
        :date="i.date"
        :summary="i.summary"
        :img="i.img"/>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import BlogCard from "./components/BlogCard.vue";
import { reactive } from "vue";

const list = reactive([
  {
    img: 'http://198.211.49.104:9000/test/test.png',
    title: '获取消息列表错误',
    summary: '对爱情的渴望，对知识的追求，对人类苦难不可遏制的同情，这三种纯洁但无比强烈的感情支配着我的一生。这三种感情就像飓风一样，在深深的苦海上，肆意地把我吹来吹去，吹到濒临绝望的边缘。对爱情的渴望，对知识的追求，对人类苦难不可遏制的同情，这三种纯洁但无比强烈的感情支配着我的一生。这三种感情就像飓风一样，在深深的苦海上，肆意地把我吹来吹去，吹到濒临绝望的边缘。对爱情的渴望，对知识的追求，对人类苦难不可遏制的同情，这三种纯洁但无比强烈的感情支配着我的一生。这三种感情就像飓风一样，在深深的苦海上，肆意地把我吹来吹去，吹到濒临绝望的边缘。',
    date: new Date(),
  },
  {
    img: 'http://198.211.49.104:9000/test/icon.jpg',
    title: '获取消息列表错误',
    summary: '对爱情的渴望，对知识的追求，对人类苦难不可遏制的同情，这三种纯洁但无比强烈的感情支配着我的一生。这三种感情就像飓风一样，在深深的苦海上，肆意地把我吹来吹去，吹到濒临绝望的边缘。',
    date: new Date(),
  },
  {
    img: 'http://198.211.49.104:9000/test/icon.jpg',
    title: '获取消息列表错误',
    summary: '对爱情的渴望，对知识的追求，对人类苦难不可遏制的同情，这三种纯洁但无比强烈的感情支配着我的一生。这三种感情就像飓风一样，在深深的苦海上，肆意地把我吹来吹去，吹到濒临绝望的边缘。',
    date: new Date(),
  },
  {
    img: 'http://198.211.49.104:9000/test/icon.jpg',
    title: '获取消息列表错误',
    summary: '对爱情的渴望，对知识的追求，对人类苦难不可遏制的同情，这三种纯洁但无比强烈的感情支配着我的一生。这三种感情就像飓风一样，在深深的苦海上，肆意地把我吹来吹去，吹到濒临绝望的边缘。',
    date: new Date(),
  },
  {
    img: 'http://198.211.49.104:9000/test/icon.jpg',
    title: '获取消息列表错误',
    summary: '对爱情的渴望，对知识的追求，对人类苦难不可遏制的同情，这三种纯洁但无比强烈的感情支配着我的一生。这三种感情就像飓风一样，在深深的苦海上，肆意地把我吹来吹去，吹到濒临绝望的边缘。',
    date: new Date(),
  },
  {
    img: 'http://198.211.49.104:9000/test/icon.jpg',
    title: '获取消息列表错误',
    summary: '对爱情的渴望，对知识的追求，对人类苦难不可遏制的同情，这三种纯洁但无比强烈的感情支配着我的一生。这三种感情就像飓风一样，在深深的苦海上，肆意地把我吹来吹去，吹到濒临绝望的边缘。',
    date: new Date(),
  },
  {
    img: 'http://198.211.49.104:9000/test/icon.jpg',
    title: '获取消息列表错误',
    summary: '对爱情的渴望，对知识的追求，对人类苦难不可遏制的同情，这三种纯洁但无比强烈的感情支配着我的一生。这三种感情就像飓风一样，在深深的苦海上，肆意地把我吹来吹去，吹到濒临绝望的边缘。',
    date: new Date(),
  },
]);
</script>

<style scoped>
.container {
  margin: 10px auto;
  max-width: 750px;
}

.blog-card-wrapper {
  margin: 30px 10px;
  cursor: pointer;
}
</style>