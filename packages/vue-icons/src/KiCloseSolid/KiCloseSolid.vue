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
      d="M5.1514 5.15148C5.62003 4.68285 6.37983 4.68285 6.84845 5.15148L11.9999 10.303L17.1514 5.15148C17.62 4.68285 18.3798 4.68285 18.8485 5.15148C19.3171 5.62011 19.3171 6.37991 18.8485 6.84854L13.697 12L18.8485 17.1515C19.3171 17.6201 19.3171 18.3799 18.8485 18.8485C18.3798 19.3172 17.62 19.3172 17.1514 18.8485L11.9999 13.6971L6.84845 18.8485C6.37983 19.3172 5.62003 19.3172 5.1514 18.8485C4.68277 18.3799 4.68277 17.6201 5.1514 17.1515L10.3029 12L5.1514 6.84854C4.68277 6.37991 4.68277 5.62011 5.1514 5.15148Z"
      fill="currentColor"
    />
  </svg>
</template>
