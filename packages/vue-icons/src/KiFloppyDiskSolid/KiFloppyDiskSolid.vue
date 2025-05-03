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
      d="M5 21.0001H19C19.5304 21.0001 20.0391 20.7893 20.4142 20.4143C20.7893 20.0392 21 19.5305 21 19.0001V8.00006L16 3.00006H5C4.46957 3.00006 3.96086 3.21077 3.58579 3.58585C3.21071 3.96092 3 4.46963 3 5.00006V19.0001C3 19.5305 3.21071 20.0392 3.58579 20.4143C3.96086 20.7893 4.46957 21.0001 5 21.0001ZM7 5.00006H11V7.00006H13V5.00006H15V9.00006H7V5.00006ZM7 13.0001H17V19.0001H7V13.0001Z"
      fill="currentColor"
    />
  </svg>
</template>
