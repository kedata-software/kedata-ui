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
      d="M6.06032 4.8603C9.34073 1.57989 14.6593 1.57989 17.9397 4.8603C21.2201 8.1407 21.2201 13.4593 17.9397 16.7397L12 22.6794L6.06032 16.7397C2.77992 13.4593 2.77992 8.1407 6.06032 4.8603ZM12 13.2C13.3255 13.2 14.4 12.1255 14.4 10.8C14.4 9.47451 13.3255 8.39999 12 8.39999C10.6745 8.39999 9.60002 9.47451 9.60002 10.8C9.60002 12.1255 10.6745 13.2 12 13.2Z"
      fill="currentColor"
    />
  </svg>
</template>
