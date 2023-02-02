<template>
  <div class="container">
    <p>chnuisdhfvbyuzsdgbfvyug</p>
    <animated-sticker
      :size=160
      :tgsUrl=LOCAL_TGS_URLS.MonkeyIdle
      :playSegment={SEGMENT_COVER_EYES}
      noLoop
    />
  </div>

</template>

<script setup lang="ts">
import AnimatedSticker from "@/components/AnimatedSticker.vue";
import { LOCAL_TGS_URLS } from '@/assets/tgs/animatedAssets';
const SEGMENT_COVER_EYES: [number, number] = [0, 50];
</script>

<style scoped>
.container {
  width: 300px;
  height: 300px;
}
</style>
