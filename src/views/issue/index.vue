<template>
  <div class="container">
    <div class="search-wrapper">
      <div class="input" @click="searchIssue">

      </div>
    </div>

    <div class="filter-wrapper flex-row">
      <div>
        所有
      </div>
      <div>
        Bug
      </div>
      <div>
        建议
      </div>
      <div style="float: right; ">
        <div>热度</div>
        <div>时间</div>
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
import Footer from "@/layout/components/AppFooter.vue";

const list = reactive<Array<object>>([
  {
    img: 'http://198.211.49.104:9000/test/bug.png',
    title: '获取消息列表错误',
    summary: '对爱情的渴望，对知识的追求，对人类苦难不可遏制的同情，这三种纯洁但无比强烈的感情支配着我的一生。这三种感情就像飓风一样，在深深的苦海上，肆意地把我吹来吹去，吹到濒临绝望的边缘。',
    date: new Date(),
    platform: 'Android',
    type: 'bug',
    state: 'Open'
  },
  {
    img: 'http://198.211.49.104:9000/test/tip.png',
    title: '获取消息列表错误',
    summary: '对爱情的渴望，对知识的追求，对人类苦难不可遏制的同情，这三种纯洁但无比强烈的感情支配着我的一生。这三种感情就像飓风一样，在深深的苦海上，肆意地把我吹来吹去，吹到濒临绝望的边缘。',
    date: new Date(),
    platform: 'Web',
    type: 'tip',
    state: 'Open'
  },
  {
    img: 'http://198.211.49.104:9000/test/bug.png',
    title: '获取消息列表错误',
    summary: '对爱情的渴望，对知识的追求，对人类苦难不可遏制的同情，这三种纯洁但无比强烈的感情支配着我的一生。这三种感情就像飓风一样，在深深的苦海上，肆意地把我吹来吹去，吹到濒临绝望的边缘。',
    date: new Date(),
    platform: 'Android',
    type: 'bug',
    state: 'Open'
  },
  {
    img: 'http://198.211.49.104:9000/test/tip.png',
    title: '获取消息列表错误',
    summary: '对爱情的渴望，对知识的追求，对人类苦难不可遏制的同情，这三种纯洁但无比强烈的感情支配着我的一生。这三种感情就像飓风一样，在深深的苦海上，肆意地把我吹来吹去，吹到濒临绝望的边缘。',
    date: new Date(),
    platform: 'Web',
    type: 'tip',
    state: 'Open'
  },
  {
    img: 'http://198.211.49.104:9000/test/bug.png',
    title: '获取消息列表错误',
    summary: '对爱情的渴望，对知识的追求，对人类苦难不可遏制的同情，这三种纯洁但无比强烈的感情支配着我的一生。这三种感情就像飓风一样，在深深的苦海上，肆意地把我吹来吹去，吹到濒临绝望的边缘。',
    date: new Date(),
    platform: 'Android',
    type: 'bug',
    state: 'Open'
  },
  {
    img: 'http://198.211.49.104:9000/test/bug.png',
    title: '获取消息列表错误',
    summary: '对爱情的渴望，对知识的追求，对人类苦难不可遏制的同情，这三种纯洁但无比强烈的感情支配着我的一生。这三种感情就像飓风一样，在深深的苦海上，肆意地把我吹来吹去，吹到濒临绝望的边缘。',
    date: new Date(),
    platform: 'Android',
    type: 'bug',
    state: 'Open'
  },
  {
    img: 'http://198.211.49.104:9000/test/bug.png',
    title: '获取消息列表错误',
    summary: '对爱情的渴望，对知识的追求，对人类苦难不可遏制的同情，这三种纯洁但无比强烈的感情支配着我的一生。这三种感情就像飓风一样，在深深的苦海上，肆意地把我吹来吹去，吹到濒临绝望的边缘。',
    date: new Date(),
    platform: 'Android',
    type: 'bug',
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
  /*display: flex;*/
  /*flex-direction: column;*/
  /*justify-content: center;*/
}

.search-wrapper {
  max-width: 550px;
  height: 45px;
  border: rgba(0, 0, 0, .1) solid 2px;
  border-radius: 6px;
  outline: none;
  margin: 20px auto;
}

.input {
  height: 100%;
  width: 90%;
}

.input:focus {
  border: #409eff solid 2px;
  border-radius: 4px;
}

.filter-wrapper {
  margin: 0 auto;
  max-width: 550px;
}

.filter-wrapper div {
  padding: 5px 10px;
}

.issue-wrapper {
  max-width: 550px;
  margin: 0 auto;
}

.issue {
  padding: 15px;
  cursor: pointer;
}

.issue:hover {
  background-color: rgba(0, 0, 0, .04);
  border-radius: 7px;
}
</style>