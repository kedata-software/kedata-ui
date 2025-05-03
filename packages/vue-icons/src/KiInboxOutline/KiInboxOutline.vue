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
      d="M7.99994 4H5.99994C4.89537 4 3.99994 4.89543 3.99994 6V18C3.99994 19.1046 4.89537 20 5.99994 20H17.9999C19.1045 20 19.9999 19.1046 19.9999 18V6C19.9999 4.89543 19.1045 4 17.9999 4H15.9999M11.9999 3V11M11.9999 11L14.9999 8M11.9999 11L8.99994 8M3.99994 13H6.58573C6.85094 13 7.1053 13.1054 7.29283 13.2929L9.70705 15.7071C9.89458 15.8946 10.1489 16 10.4142 16H13.5857C13.8509 16 14.1053 15.8946 14.2928 15.7071L16.707 13.2929C16.8946 13.1054 17.1489 13 17.4142 13H19.9999"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
