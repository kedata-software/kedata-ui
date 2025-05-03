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
      d="M17 8.00006H19C20.1046 8.00006 21 8.89549 21 10.0001V16.0001C21 17.1046 20.1046 18.0001 19 18.0001H17V22.0001L13 18.0001H9C8.44772 18.0001 7.94772 17.7762 7.58579 17.4143M7.58579 17.4143L11 14.0001H15C16.1046 14.0001 17 13.1046 17 12.0001V6.00006C17 4.89549 16.1046 4.00006 15 4.00006H5C3.89543 4.00006 3 4.89549 3 6.00006V12.0001C3 13.1046 3.89543 14.0001 5 14.0001H7V18.0001L7.58579 17.4143Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
