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
      d="M9.59999 3.59996C9.59999 2.93722 10.1372 2.39996 10.8 2.39996H13.2C13.8627 2.39996 14.4 2.93722 14.4 3.59996C14.4 4.26271 13.8627 4.79996 13.2 4.79996H10.8C10.1372 4.79996 9.59999 4.26271 9.59999 3.59996Z"
      fill="currentColor"
    />
    <path
      d="M7.19999 3.59996C5.8745 3.59996 4.79999 4.67448 4.79999 5.99996V19.2C4.79999 20.5254 5.8745 21.6 7.19999 21.6H16.8C18.1255 21.6 19.2 20.5254 19.2 19.2V5.99996C19.2 4.67448 18.1255 3.59996 16.8 3.59996C16.8 5.58819 15.1882 7.19996 13.2 7.19996H10.8C8.81176 7.19996 7.19999 5.58819 7.19999 3.59996Z"
      fill="currentColor"
    />
  </svg>
</template>
