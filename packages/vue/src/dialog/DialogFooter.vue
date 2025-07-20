<script setup lang="ts">
import useDialogFooter from "./useDialogFooter";
import type { DialogFooterProps } from "./index.types";

defineOptions({
  inheritAttrs: false,
});
const props = defineProps<DialogFooterProps>();

const api = useDialogFooter(props);
</script>

<template>
  <footer v-bind="api.getRootProps()">
    <slot />
  </footer>
</template>
