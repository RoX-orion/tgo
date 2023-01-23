<template>
  <div>
  <h2 style="text-align: center">{{prop.title}}</h2>
  <img class="img-wrapper" :src="prop.img" alt="cover"/>
  <p class="summary">{{prop.summary}}</p>
  <div style="color: gray">{{formatTime(prop.date, '{y}-{m}-{d}')}}</div>
  </div>
</template>

<script setup lang="ts">
import { formatTime } from "@/util/time";

interface BlogCard {
  img: string;
  title: string;
  date: Date;
  summary: string;
}

const prop = defineProps<BlogCard>();
</script>

<style scoped>
.img-wrapper {
  width: 100%;
}

.summary {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}
</style>