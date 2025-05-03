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
      d="M13.5 6.00006H5.25C4.65326 6.00006 4.08097 6.23711 3.65901 6.65907C3.23705 7.08103 3 7.65332 3 8.25006V18.7501C3 19.3468 3.23705 19.9191 3.65901 20.3411C4.08097 20.763 4.65326 21.0001 5.25 21.0001H15.75C16.3467 21.0001 16.919 20.763 17.341 20.3411C17.7629 19.9191 18 19.3468 18 18.7501V10.5001M7.5 16.5001L21 3.00006M21 3.00006H15.75M21 3.00006V8.25006"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
