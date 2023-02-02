<template>

</template>

<script setup lang="ts">
import generateIdFor from '@/util/generateIdFor';

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
  sharedCanvas: HTMLCanvasElement;
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
const ID_STORE = {};
const containerId = () => generateIdFor(ID_STORE, true)
(({
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
  // if (!container) {
  //   return;
  // }
  const newAnimation = RLottie.init(
    "containerId",
    sharedCanvas,
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
})();
</script>

<style scoped>

</style>
