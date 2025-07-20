<script setup lang="ts">
import useDialogBody from "./useDialogBody";
import type { DialogBodyProps } from "./index.types";

defineOptions({
  inheritAttrs: false,
});
const props = defineProps<DialogBodyProps>();

const api = useDialogBody(props);
</script>

<template>
  <div v-bind="api.getRootProps()">
    <slot />
  </div>
</template>
