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
      d="M4.00002 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8947 3.48043 21 3.73478 21 4V20C21 20.2652 20.8947 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4.00002C3.7348 21 3.48044 20.8946 3.29291 20.7071C3.10537 20.5196 3.00002 20.2652 3.00002 20V4C3.00002 3.73478 3.10537 3.48043 3.29291 3.29289C3.48044 3.10536 3.7348 3 4.00002 3ZM11.003 16L18.073 8.929L16.66 7.515L11.003 13.172L8.17402 10.343L6.76002 11.757L11.003 16Z"
      fill="currentColor"
    />
  </svg>
</template>
