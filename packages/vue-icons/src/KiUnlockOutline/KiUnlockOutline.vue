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
      d="M8.00003 11V7C8.00003 4.79086 9.79089 3 12 3C14.2092 3 16 4.79086 16 7M12 15V17M6.00003 21H18C19.1046 21 20 20.1046 20 19V13C20 11.8954 19.1046 11 18 11H6.00003C4.89546 11 4.00003 11.8954 4.00003 13V19C4.00003 20.1046 4.89546 21 6.00003 21Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
</template>
