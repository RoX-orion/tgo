<template>
  <div class="container">
    <div class="search-wrapper">
      <input class="input" placeholder="搜索" @click="searchIssue"/>
    </div>

    <div class="filter-wrapper flex-row">
      <div class="btn-search">
        <span>所有</span>
        <span>Bug</span>
        <span>建议</span>
      </div>
      <div class="btn-sort">
        <span>热度</span>
        <span>时间</span>
      </div>
    </div>

    <div class="issue-wrapper">
      <div
        class="issue"
        v-for="i in list"
        :key="i.date">
        <issue
            :title="i.title"
            :summary="i.summary"
            :date="i.date"
            :img="i.img"
            :state="i.state"
            :platform="i.platform"
            :type="i.type"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import Issue from "./components/Issue.vue";

const list = reactive<Array<object>>([
  {
    img: 'http://198.211.49.104:9000/test/bug.png',
    title: '获取消息列表错误',
    summary: '对爱情的渴望，对知识的追求，对人类苦难不可遏制的同情，这三种纯洁但无比强烈的感情支配着我的一生。这三种感情就像飓风一样，在深深的苦海上，肆意地把我吹来吹去，吹到濒临绝望的边缘。',
    date: new Date(),
    platform: 'Android',
    type: 'Bug',
    state: 'Open'
  },
  {
    img: 'http://198.211.49.104:9000/test/tip.png',
    title: '获取消息列表错误',
    summary: '对爱情的渴望，对知识的追求，对人类苦难不可遏制的同情，这三种纯洁但无比强烈的感情支配着我的一生。这三种感情就像飓风一样，在深深的苦海上，肆意地把我吹来吹去，吹到濒临绝望的边缘。',
    date: new Date(),
    platform: 'Web',
    type: 'Tip',
    state: 'Open'
  },
  {
    img: 'http://198.211.49.104:9000/test/bug.png',
    title: '获取消息列表错误',
    summary: '对爱情的渴望，对知识的追求，对人类苦难不可遏制的同情，这三种纯洁但无比强烈的感情支配着我的一生。这三种感情就像飓风一样，在深深的苦海上，肆意地把我吹来吹去，吹到濒临绝望的边缘。',
    date: new Date(),
    platform: 'Android',
    type: 'Bug',
    state: 'Open'
  },
  {
    img: 'http://198.211.49.104:9000/test/tip.png',
    title: '获取消息列表错误',
    summary: '对爱情的渴望，对知识的追求，对人类苦难不可遏制的同情，这三种纯洁但无比强烈的感情支配着我的一生。这三种感情就像飓风一样，在深深的苦海上，肆意地把我吹来吹去，吹到濒临绝望的边缘。',
    date: new Date(),
    platform: 'Web',
    type: 'Tip',
    state: 'Open'
  },
  {
    img: 'http://198.211.49.104:9000/test/bug.png',
    title: '获取消息列表错误',
    summary: '对爱情的渴望，对知识的追求，对人类苦难不可遏制的同情，这三种纯洁但无比强烈的感情支配着我的一生。这三种感情就像飓风一样，在深深的苦海上，肆意地把我吹来吹去，吹到濒临绝望的边缘。',
    date: new Date(),
    platform: 'Android',
    type: 'Bug',
    state: 'Open'
  },
  {
    img: 'http://198.211.49.104:9000/test/bug.png',
    title: '获取消息列表错误',
    summary: '对爱情的渴望，对知识的追求，对人类苦难不可遏制的同情，这三种纯洁但无比强烈的感情支配着我的一生。这三种感情就像飓风一样，在深深的苦海上，肆意地把我吹来吹去，吹到濒临绝望的边缘。',
    date: new Date(),
    platform: 'Android',
    type: 'Bug',
    state: 'Open'
  },
  {
    img: 'http://198.211.49.104:9000/test/bug.png',
    title: '获取消息列表错误',
    summary: '对爱情的渴望，对知识的追求，对人类苦难不可遏制的同情，这三种纯洁但无比强烈的感情支配着我的一生。这三种感情就像飓风一样，在深深的苦海上，肆意地把我吹来吹去，吹到濒临绝望的边缘。',
    date: new Date(),
    platform: 'Android',
    type: 'Bug',
    state: 'Open'
  },
])
const searchIssue = () => {

}

const getIssueList = () => {
  return list;
}

(() => {
  getIssueList();
})();
</script>

<style scoped>
.container {
  padding: 15px;
}

.search-wrapper {
  max-width: 550px;
  height: 45px;
  margin: 20px auto;
}

.input {
  height: 100%;
  width: 100%;
  outline: none;
  border: rgba(0, 0, 0, .1) solid .12rem;
  border-radius: 6px;
  padding: 0 10px;
}

.input:focus {
  border: #409eff solid .12rem;
  border-radius: 4px;
}

.filter-wrapper {
  margin: 0 auto;
  max-width: 550px;
  justify-content: space-between;
}

.filter-wrapper span {
  font-size: 13px;
}

.btn-search span {
  padding-right: 30px;
}

.btn-sort span {
  padding-left: 30px;
}

.issue-wrapper {
  max-width: 570px;
  margin: 0 auto;
}

.issue {
  width: 100%;
  cursor: pointer;
  margin: 10px 0;
  padding: 15px;
}

.issue:hover {
  background-color: rgba(0, 0, 0, .04);
  border-radius: 7px;
}
</style>