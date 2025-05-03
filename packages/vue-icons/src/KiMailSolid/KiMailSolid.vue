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
      d="M2.40401 7.06028L11.9999 11.8582L21.596 7.06021C21.5236 5.79979 20.4786 4.80001 19.2 4.80001H4.80001C3.52143 4.80001 2.47637 5.79982 2.40401 7.06028Z"
      fill="currentColor"
    />
    <path
      d="M21.6 9.74149L11.9999 14.5415L2.40001 9.74156V16.8C2.40001 18.1255 3.47452 19.2 4.80001 19.2H19.2C20.5255 19.2 21.6 18.1255 21.6 16.8V9.74149Z"
      fill="currentColor"
    />
  </svg>
</template>
