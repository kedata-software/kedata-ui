<script setup lang="ts">
import usePinInput from './usePinInput';
import type { PinInputProps } from './index.types';
import { computed } from 'vue';

const props = defineProps<PinInputProps>();
const value = defineModel<string[]>({
  default: () => [],
});
const api = usePinInput(props, { value });

const arr = computed(() => {
  return new Array(api.count.value).fill(0);
});
</script>

<template>
  <div v-bind="api.getRootProps()">
    <input
      v-for="(_, index) in arr"
      :key="index"
      v-bind="api.getPinInputProps({ index })"
    />
  </div>
</template>
