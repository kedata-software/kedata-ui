<script setup lang="ts">
import type { SVGAttributes } from 'vue';

interface Props extends /* @vue-ignore */ SVGAttributes {}
const props = defineProps<Props>();
</script>
<template>
  <svg
    v-bind="props"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 19L3 12M3 12L10 4.99997M3 12L21 12"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
