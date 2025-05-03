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
      d="M2.40004 7.19999C2.40004 5.8745 3.47456 4.79999 4.80004 4.79999H9.60004L12 7.19999H16.8C18.1255 7.19999 19.2 8.2745 19.2 9.59999V10.8H9.60004C7.61181 10.8 6.00004 12.4118 6.00004 14.4V16.2C6.00004 17.1941 5.19415 18 4.20004 18C3.20593 18 2.40004 17.1941 2.40004 16.2V7.19999Z"
      fill="currentColor"
    />
    <path
      d="M7.20004 14.4C7.20004 13.0745 8.27456 12 9.60004 12H19.2C20.5255 12 21.6 13.0745 21.6 14.4V16.8C21.6 18.1255 20.5255 19.2 19.2 19.2H2.40004H4.80004C6.12552 19.2 7.20004 18.1255 7.20004 16.8V14.4Z"
      fill="currentColor"
    />
  </svg>
</template>
