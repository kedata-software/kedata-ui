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
      d="M15 17H20L18.5951 15.5951C18.214 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 9.99998 3.89543 9.99998 5V5.34142C7.6696 6.16509 5.99998 8.38757 5.99998 11V14.1585C5.99998 14.6973 5.78593 15.2141 5.40492 15.5951L3.99998 17H8.99998M15 17V18C15 19.6569 13.6568 21 12 21C10.3431 21 8.99998 19.6569 8.99998 18V17M15 17H8.99998"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
