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
      d="M17.6568 16.6569C16.7202 17.5935 14.7615 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26233 19.576 7.34158 17.6553 6.34313 16.6569C3.21894 13.5327 3.21894 8.46734 6.34313 5.34315C9.46732 2.21895 14.5326 2.21895 17.6568 5.34315C20.781 8.46734 20.781 13.5327 17.6568 16.6569Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15 11C15 12.6569 13.6568 14 12 14C10.3431 14 8.99998 12.6569 8.99998 11C8.99998 9.34315 10.3431 8 12 8C13.6568 8 15 9.34315 15 11Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
