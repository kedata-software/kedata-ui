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
      d="M2.59935 5.99868C6.20927 5.9497 9.49836 4.57239 12 2.33334C14.5017 4.57239 17.7908 5.9497 21.4007 5.99868C21.5318 6.77961 21.6 7.58185 21.6 8.40003C21.6 14.6699 17.5929 20.0038 12 21.9806C6.4071 20.0038 2.40002 14.6699 2.40002 8.40003C2.40002 7.58185 2.46826 6.77961 2.59935 5.99868ZM16.4486 10.4485C16.9172 9.97989 16.9172 9.22009 16.4486 8.75147C15.9799 8.28284 15.2201 8.28284 14.7515 8.75147L10.8 12.7029L9.24855 11.1515C8.77992 10.6828 8.02013 10.6828 7.5515 11.1515C7.08287 11.6201 7.08287 12.3799 7.5515 12.8485L9.9515 15.2485C10.4201 15.7172 11.1799 15.7172 11.6486 15.2485L16.4486 10.4485Z"
      fill="currentColor"
    />
  </svg>
</template>
