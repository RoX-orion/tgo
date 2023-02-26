<template>
  <div ref="containerRLottie" class="test"></div>
</template>

<script setup lang="ts">
import generateIdFor from '@/util/generateIdFor';
import {onMounted, onUnmounted, ref} from "vue";

export type OwnProps = {
  animationId?: string;
  className?: string;
  style?: string;
  tgsUrl: string;
  play?: boolean | string;
  playSegment?: [number, number];
  speed?: number;
  noLoop?: boolean;
  size: number;
  quality?: number;
  color?: [number, number, number];
  isLowPriority?: boolean;
  forceOnHeavyAnimation?: boolean;
  sharedCanvas?: HTMLCanvasElement;
  sharedCanvasCoords?: { x: number; y: number };
  onClick?: NoneToVoidFunction;
  onLoad?: NoneToVoidFunction;
  onEnded?: NoneToVoidFunction;
  onLoop?: NoneToVoidFunction;
};
type RLottieInstance = import('@/lib/rlottie/RLottie').default;
type RLottieClass = typeof import('@/lib/rlottie/RLottie').default;
let lottiePromise: Promise<RLottieClass>;
let RLottie: RLottieClass;
let container: HTMLDivElement

// Time for the main interface to completely load
const LOTTIE_LOAD_DELAY = 3000;
const ID_STORE = {};

let newAnimation: RLottieInstance;

async function ensureLottie() {
  if (!lottiePromise) {
    lottiePromise = import('@/lib/rlottie/RLottie') as unknown as Promise<RLottieClass>;
    RLottie = (await lottiePromise as any).default;
  }

  return lottiePromise;
}
// setTimeout(ensureLottie, LOTTIE_LOAD_DELAY);
// await ensureLottie();
const containerId = generateIdFor(ID_STORE, true);

const prop = defineProps<OwnProps>();

let containerRLottie = ref<any>(null);

onMounted(() => {
  container = containerRLottie.value;
  init(prop);
});

onUnmounted(() => {
  newAnimation.removeContainer(containerId);
});

const init = async ({
   animationId,
   className,
   style,
   tgsUrl,
   play,
   playSegment,
   speed,
   noLoop,
   size,
   quality,
   isLowPriority,
   color,
   forceOnHeavyAnimation,
   sharedCanvas,
   sharedCanvasCoords,
   onClick,
   onLoad,
   onEnded,
   onLoop,
  }: OwnProps
) => {
  if (!container) {
    return;
  }
  await ensureLottie();
  newAnimation = RLottie.init(
    containerId,
    container,
    onLoad,
    animationId || generateIdFor(ID_STORE, true),
    tgsUrl,
    {
      noLoop,
      size,
      quality,
      isLowPriority,
      coords: sharedCanvasCoords,
    },
    color,
    onEnded,
    onLoop,
  );
  if (speed) {
    newAnimation.setSpeed(speed);
  }
  newAnimation.play();
}
</script>

<style scoped>

</style>
