<script setup lang="ts">
import useSwitch from "./useSwitch";
import type { SwitchProps } from "./index.types";

const checked = defineModel<boolean>({
  default: false,
});

const props = defineProps<SwitchProps>();

const api = useSwitch(props, { checked });
</script>

<template>
  <label v-bind="api.getRootProps()">
    <input v-bind="api.getHiddenInputProps()" />

    <span v-bind="api.getControlProps()">
      <span v-bind="api.getThumbProps()"></span>
    </span>

    <span v-bind="api.getLabelProps()">
      <slot />
    </span>
  </label>
</template>
