<script setup lang="ts">
import type { ButtonProps } from "./index.types";
import useButton from "./useButton";

defineOptions({
  inheritAttrs: false,
});
const emits = defineEmits(["click"]);
const props = defineProps<ButtonProps>();

const api = useButton(props);
</script>

<template>
  <button v-bind="api.getRootProps()" @click="(e) => emits('click', e)">
    <slot name="start-icon" v-bind="api.getStartIconProps()" />
    <slot />
    <slot name="end-icon" v-bind="api.getEndIconProps()" />
  </button>
</template>
