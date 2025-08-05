<script setup lang="ts">
import type { LabelProps } from './index.types';
import useLabel from './useLabel';

const props = withDefaults(defineProps<LabelProps>(), {
  required: undefined,
  showAsterisk: true,
});
const api = useLabel(props);
</script>

<template>
  <div v-bind="api.getRootProps()">
    <slot />
    <span
      v-if="api.showAsterisk.value && api.required.value"
      v-bind="api.getAsteriskProps()"
    >
      *
    </span>
  </div>
</template>
