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
      d="M9.00006 20.0001L3.55285 17.2765C3.21406 17.1071 3.00006 16.7608 3.00006 16.382V5.61809C3.00006 4.87471 3.78237 4.39122 4.44727 4.72367L9.00006 7.00006M9.00006 20.0001L15.0001 17.0001M9.00006 20.0001V7.00006M15.0001 17.0001L19.5528 19.2765C20.2177 19.6089 21.0001 19.1254 21.0001 18.382V7.61809C21.0001 7.23932 20.7861 6.89306 20.4473 6.72367L15.0001 4.00006M15.0001 17.0001V4.00006M15.0001 4.00006L9.00006 7.00006"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
