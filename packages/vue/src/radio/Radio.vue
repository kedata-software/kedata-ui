<script setup lang="ts">
import useRadio from './useRadio';
import type { RadioProps } from './index.types';
import { useSlots } from 'vue';

const checked = defineModel<boolean | string>({
  default: false,
});
const compSlots = useSlots();
const props = defineProps<RadioProps>();

const api = useRadio(props, { checked });
</script>

<template>
  <label v-bind="api.getRootProps()">
    <div v-bind="api.getControlProps()">
      <div v-bind="api.getIndicatorProps()" />
    </div>

    <div v-bind="api.getContentProps()">
      <span v-bind="api.getLabelProps()">
        <slot name="label" />
      </span>

      <span v-bind="api.getDescriptionProps()" v-if="!!compSlots.description">
        <slot name="description" />
      </span>
    </div>

    <input v-bind="api.getHiddenInputProps()" v-model="checked" />
  </label>
</template>
