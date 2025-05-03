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
      d="M7.99998 7V3M16 7V3M6.99998 11H17M4.99998 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H4.99998C3.89542 5 2.99998 5.89543 2.99998 7V19C2.99998 20.1046 3.89542 21 4.99998 21Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
