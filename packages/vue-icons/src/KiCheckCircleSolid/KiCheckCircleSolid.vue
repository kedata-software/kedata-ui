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
      d="M12 21.6C17.302 21.6 21.6 17.3019 21.6 12C21.6 6.69806 17.302 2.39999 12 2.39999C6.69809 2.39999 2.40002 6.69806 2.40002 12C2.40002 17.3019 6.69809 21.6 12 21.6ZM16.4486 10.4485C16.9172 9.97989 16.9172 9.2201 16.4486 8.75147C15.9799 8.28284 15.2201 8.28284 14.7515 8.75147L10.8 12.7029L9.24855 11.1515C8.77992 10.6828 8.02013 10.6828 7.5515 11.1515C7.08287 11.6201 7.08287 12.3799 7.5515 12.8485L9.9515 15.2485C10.4201 15.7172 11.1799 15.7172 11.6486 15.2485L16.4486 10.4485Z"
      fill="currentColor"
    />
  </svg>
</template>
