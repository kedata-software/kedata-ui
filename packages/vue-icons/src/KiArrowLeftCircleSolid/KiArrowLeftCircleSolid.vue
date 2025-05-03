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
      d="M12 21.6001C17.302 21.6001 21.6 17.302 21.6 12.0001C21.6 6.69812 17.302 2.40005 12 2.40005C6.69811 2.40005 2.40004 6.69812 2.40004 12.0001C2.40004 17.302 6.69811 21.6001 12 21.6001ZM12.8486 9.24858C13.3172 8.77995 13.3172 8.02016 12.8486 7.55153C12.3799 7.0829 11.6201 7.0829 11.1515 7.55153L7.55151 11.1515C7.08288 11.6202 7.08288 12.38 7.55151 12.8486L11.1515 16.4486C11.6201 16.9172 12.3799 16.9172 12.8486 16.4486C13.3172 15.98 13.3172 15.2202 12.8486 14.7515L11.2971 13.2001H15.6C16.2628 13.2001 16.8 12.6628 16.8 12.0001C16.8 11.3373 16.2628 10.8001 15.6 10.8001H11.2971L12.8486 9.24858Z"
      fill="currentColor"
    />
  </svg>
</template>
