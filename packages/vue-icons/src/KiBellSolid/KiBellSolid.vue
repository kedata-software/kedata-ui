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
      d="M12.0001 2.39999C8.02361 2.39999 4.80006 5.62354 4.80006 9.59999V13.9029L3.95153 14.7515C3.60833 15.0947 3.50566 15.6108 3.6914 16.0592C3.87714 16.5076 4.3147 16.8 4.80006 16.8H19.2001C19.6854 16.8 20.123 16.5076 20.3087 16.0592C20.4945 15.6108 20.3918 15.0947 20.0486 14.7515L19.2001 13.9029V9.59999C19.2001 5.62354 15.9765 2.39999 12.0001 2.39999Z"
      fill="currentColor"
    />
    <path
      d="M12 21.6C10.0118 21.6 8.40002 19.9882 8.40002 18H15.6C15.6 19.9882 13.9882 21.6 12 21.6Z"
      fill="currentColor"
    />
  </svg>
</template>
