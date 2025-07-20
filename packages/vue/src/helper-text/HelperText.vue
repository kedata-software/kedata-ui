<script setup lang="ts">
import useHelperText from "./useHelperText";
import type { HelperTextProps } from "./index.types";

const props = defineProps<HelperTextProps>();
const api = useHelperText(props);
</script>

<template>
  <div v-bind="api.getRootProps()">
    <slot />
  </div>
</template>
