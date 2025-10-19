<script setup lang="ts">
import type { IconButtonProps } from './index.types';
import useIconButton from './useIconButton';

defineOptions({
  inheritAttrs: true,
});

const emits = defineEmits(['click']);
const props = defineProps<IconButtonProps>();
const api = useIconButton(props);
</script>

<template>
  <button v-bind="api.getRootProps()" @click="(e) => emits('click', e)">
    <slot v-bind="api.getIconProps()"></slot>
  </button>
</template>
