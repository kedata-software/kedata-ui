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
      d="M11 15L7.99998 12M7.99998 12L11 9M7.99998 12L16 12M2.99998 12C2.99999 7.02944 7.02942 3 12 3C16.9705 3 21 7.02944 21 12C21 16.9706 16.9705 21 12 21C7.02942 21 2.99998 16.9706 2.99998 12Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
