<script setup lang="ts">
import useDialogContent from "./useDialogContent";
import type { DialogContentProps } from "./index.types";

defineOptions({
  inheritAttrs: false,
});
const props = defineProps<DialogContentProps>();

const api = useDialogContent(props);
</script>

<template>
  <div v-bind="api.getRootProps()">
    <slot />
  </div>
</template>
