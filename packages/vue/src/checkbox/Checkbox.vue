<script setup lang="ts">
import type { CheckboxProps } from "./index.types";
import useCheckbox from "./useCheckbox";
import { KiMinusOutline, KiCheckOutline } from "@kedata-ui/vue-icons";

const props = defineProps<CheckboxProps>();
const model = defineModel<boolean | string[]>({
  default: false,
});

const api = useCheckbox(props, {
  checked: model,
});
</script>

<template>
  <label v-bind="api.getRootProps()">
    <input type="checkbox" v-model="model" v-bind="api.getHiddenInputProps()" />
    <div v-bind="api.getControlProps()">
      <div v-bind="api.getIndicatorProps()">
        <KiMinusOutline v-if="api.indeterminate.value" />
        <KiCheckOutline v-else />
      </div>
    </div>

    <div v-bind="api.getLabelProps()">
      <slot />
    </div>
  </label>
</template>
