<script setup lang="ts">
import { useMouseInElement } from '@vueuse/core';
import { ref } from 'vue';

const theBox = ref(null);
const { elementX, elementY } = useMouseInElement(theBox);
</script>

<template>
  <div
    ref="theBox"
    class="box w-[300px] relative h-[300px] mr-[20px]"
    :style="{ '--x': `${elementX}px`, '--y': `${elementY}px` }"
  >
    <div class="content"></div>
  </div>
</template>

<style scoped>
.box {
  padding: 2px;
  background-color: #00000000;
  border-radius: 15px;
  overflow: hidden;
  isolation: isolate;
}

.box {
  border-color: transparent;
}
.box::before {
  content: '';
  width: 100%;
  aspect-ratio: 1/1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  background: radial-gradient(
    250px circle at var(--x) var(--y),
    rgba(237, 237, 237, 1) 0%,
    rgb(251, 255, 40) 0%,
    rgb(236, 32, 255) 59%,
    rgba(255, 0, 0, 0) 100%
  );
}

.box::after {
  content: '';
  width: 100%;
  aspect-ratio: 1/1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
  background: radial-gradient(
    400px circle at var(--x) var(--y),
    rgba(237, 237, 237, 1) 0%,
    rgb(251, 255, 40) 0%,
    rgba(236, 32, 255) 59%,
    rgba(255, 0, 0, 0) 100%
  );
}

.box:hover::after {
  opacity: 1;
}

.box .content {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #000000;
  border-radius: inherit;
  border: 0px solid black;
  transition: border 0.2s ease-in-out;
  z-index: 1;
}
</style>
