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
      d="M12 2.00006C6.46999 2.00006 1.99999 6.47006 1.99999 12.0001C1.99999 17.5301 6.46999 22.0001 12 22.0001C17.53 22.0001 22 17.5301 22 12.0001C22 6.47006 17.53 2.00006 12 2.00006Z"
      fill="currentColor"
    />
  </svg>
</template>
