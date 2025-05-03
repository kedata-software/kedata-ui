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
      d="M8.293 6.29291L2.586 11.9999L8.293 17.7069L9.707 16.2929L5.414 11.9999L9.707 7.70691L8.293 6.29291ZM15.707 17.7069L21.414 11.9999L15.707 6.29291L14.293 7.70691L18.586 11.9999L14.293 16.2929L15.707 17.7069Z"
      fill="currentColor"
    />
  </svg>
</template>
