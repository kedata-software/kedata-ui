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
      d="M12 21.6001C17.302 21.6001 21.6 17.302 21.6 12.0001C21.6 6.69812 17.302 2.40005 12 2.40005C6.69809 2.40005 2.40002 6.69812 2.40002 12.0001C2.40002 17.302 6.69809 21.6001 12 21.6001ZM16.4486 11.1515L12.8486 7.55153C12.3799 7.0829 11.6201 7.0829 11.1515 7.55153L7.5515 11.1515C7.08287 11.6202 7.08287 12.38 7.5515 12.8486C8.02013 13.3172 8.77992 13.3172 9.24855 12.8486L10.8 11.2971L10.8 15.6001C10.8 16.2628 11.3373 16.8001 12 16.8001C12.6628 16.8001 13.2 16.2628 13.2 15.6001V11.2971L14.7515 12.8486C15.2201 13.3172 15.9799 13.3172 16.4486 12.8486C16.9172 12.38 16.9172 11.6202 16.4486 11.1515Z"
      fill="currentColor"
    />
  </svg>
</template>
