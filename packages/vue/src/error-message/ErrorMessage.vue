<script setup lang="ts">
import useErrorMessage from "./useErrorMessage";
import type { ErrorMessageProps } from "./index.types";

const props = defineProps<ErrorMessageProps>();
const api = useErrorMessage(props);
</script>

<template>
  <div v-bind="api.getRootProps()">
    <slot />
  </div>
</template>
