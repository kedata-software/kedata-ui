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
      d="M19.9999 7V5C19.9999 3.897 19.1029 3 17.9999 3H4.99994C3.34594 3 1.99994 4.346 1.99994 6V18C1.99994 20.201 3.79394 21 4.99994 21H19.9999C21.1029 21 21.9999 20.103 21.9999 19V9C21.9999 7.897 21.1029 7 19.9999 7ZM17.9999 16H15.9999V12H17.9999V16ZM4.99994 7C4.74246 6.98848 4.49934 6.87809 4.32121 6.69182C4.14309 6.50554 4.04367 6.25774 4.04367 6C4.04367 5.74226 4.14309 5.49446 4.32121 5.30818C4.49934 5.12191 4.74246 5.01152 4.99994 5H17.9999V7H4.99994Z"
      fill="currentColor"
    />
  </svg>
</template>
