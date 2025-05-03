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
      d="M3.99994 7V17C3.99994 19.2091 7.58166 21 11.9999 21C16.4182 21 19.9999 19.2091 19.9999 17V7M3.99994 7C3.99994 9.20914 7.58166 11 11.9999 11C16.4182 11 19.9999 9.20914 19.9999 7M3.99994 7C3.99994 4.79086 7.58166 3 11.9999 3C16.4182 3 19.9999 4.79086 19.9999 7M19.9999 12C19.9999 14.2091 16.4182 16 11.9999 16C7.58166 16 3.99994 14.2091 3.99994 12"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>
</template>
