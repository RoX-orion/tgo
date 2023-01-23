<template>
  <div class="flex-row">
    <img :src="props.img" alt="cover" width="80" height="80"/>
    <div class="context-wrapper">
      <span class="title-wrapper" v-cloak>{{props.title}}</span>
      <div class="summary-wrapper" v-cloak>{{props.summary}}</div>
      <div class="info">
        <span>{{formatTime(props.date, '{y}-{m}-{d}')}}</span>
        <el-divider direction="vertical" />
        <span>{{props.type}}</span>
        <el-divider direction="vertical" />
        <span>{{props.platform}}</span>
        <el-divider direction="vertical" />
        <span>{{props.state}}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatTime } from "@/util/time";

interface Issue {
  img: string;
  title: string;
  summary: string;
  date: Date;
  platform?: string;
  type: 'bug' | 'tip';
  state: string;
}

const props = defineProps<Issue>();
</script>

<style scoped>
.context-wrapper {
  overflow: hidden;
  position: relative;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title-wrapper {
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}

.summary-wrapper {
  padding-top: 5px;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.info {
  font-size: 12px;
  color: gray;
}
</style>