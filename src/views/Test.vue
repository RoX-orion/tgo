<template>
  <div class="container">
    <p>chnuisdhfvbyuzsdgbfvyug</p>
    <animated-sticker
      :size=160
      :tgs-url="LOCAL_TGS_URLS.Test"
      :playSegment={SEGMENT_COVER_EYES}
      :noLoop="false"
     shared-canvas=""/>
  </div>

</template>

<script setup lang="ts">
// tgsUrl="http://198.211.49.104:9000/test/tgs/7996-rocket-fast.tgs"
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
