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
      d="M4.79991 4.79999C4.79991 3.47451 5.87443 2.39999 7.19991 2.39999H16.7999C18.1254 2.39999 19.1999 3.47451 19.1999 4.79999V19.2C19.8627 19.2 20.3999 19.7373 20.3999 20.4C20.3999 21.0627 19.8627 21.6 19.1999 21.6H15.3999C14.8476 21.6 14.3999 21.1523 14.3999 20.6V18C14.3999 17.3373 13.8627 16.8 13.1999 16.8H10.7999C10.1372 16.8 9.59991 17.3373 9.59991 18V20.6C9.59991 21.1523 9.1522 21.6 8.59992 21.6H4.79991C4.13717 21.6 3.59991 21.0627 3.59991 20.4C3.59991 19.7373 4.13717 19.2 4.79991 19.2V4.79999ZM8.39991 5.99999H10.7999V8.39999H8.39991V5.99999ZM10.7999 10.8H8.39991V13.2H10.7999V10.8ZM13.1999 5.99999H15.5999V8.39999H13.1999V5.99999ZM15.5999 10.8H13.1999V13.2H15.5999V10.8Z"
      fill="currentColor"
    />
  </svg>
</template>
