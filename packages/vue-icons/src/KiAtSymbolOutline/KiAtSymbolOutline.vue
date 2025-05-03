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
      d="M16 12C16 9.79086 14.2091 8 12 8C9.79085 8 7.99998 9.79086 7.99998 12C7.99998 14.2091 9.79085 16 12 16C14.2091 16 16 14.2091 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9705 3 12 3C7.02942 3 2.99998 7.02944 2.99998 12C2.99998 16.9706 7.02942 21 12 21M16.5 19.7942C15.08 20.614 13.5295 21.0029 11.9999 21.0015"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
