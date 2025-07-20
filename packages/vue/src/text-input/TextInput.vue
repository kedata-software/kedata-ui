<script setup lang="ts">
import useTextInput from './useTextInput';
import type { TextInputProps } from './index.types';
import { useSlots } from 'vue';

const emit = defineEmits(['change', 'input', 'blur']);
const props = defineProps<TextInputProps>();
const value = defineModel<string>({
  default: '',
});

const compSlots = useSlots();
const api = useTextInput({
  props,
  models: { value },
  compSlots,
});
</script>

<template>
  <div v-bind="api.getRootProps()">
    <div v-if="compSlots['start-addon']" v-bind="api.getStartAddonProps()">
      <slot name="start-addon" />
    </div>

    <div v-bind="api.getInputWrapperProps()">
      <slot
        v-if="compSlots['start-icon']"
        name="start-icon"
        v-bind="api.getStartIconProps()"
      />

      <input
        v-bind="api.getInputProps()"
        v-model="value"
        @change="(e) => emit('change', e)"
        @input="(e) => emit('input', e)"
        @blur="(e) => emit('blur', e)"
      />

      <slot
        v-if="compSlots['end-icon']"
        name="end-icon"
        v-bind="api.getEndIconProps()"
      />
    </div>

    <div v-if="compSlots['end-addon']" v-bind="api.getEndAddonProps()">
      <slot name="end-addon" />
    </div>
  </div>
</template>
