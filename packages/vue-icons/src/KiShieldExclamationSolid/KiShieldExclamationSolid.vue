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
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2.33334C9.49836 4.57239 6.20927 5.9497 2.59935 5.99868C2.46826 6.77961 2.40002 7.58185 2.40002 8.40003C2.40002 14.6699 6.4071 20.0038 12 21.9806C17.5929 20.0038 21.6 14.6699 21.6 8.40003C21.6 7.58185 21.5318 6.77961 21.4007 5.99868C17.7908 5.9497 14.5017 4.57239 12 2.33334ZM13.2 16.8C13.2 17.4627 12.6628 18 12 18C11.3373 18 10.8 17.4627 10.8 16.8C10.8 16.1373 11.3373 15.6 12 15.6C12.6628 15.6 13.2 16.1373 13.2 16.8ZM13.2 8.39999C13.2 7.73725 12.6628 7.19999 12 7.19999C11.3373 7.19999 10.8 7.73725 10.8 8.39999V12C10.8 12.6627 11.3373 13.2 12 13.2C12.6628 13.2 13.2 12.6627 13.2 12V8.39999Z"
      fill="currentColor"
    />
  </svg>
</template>
