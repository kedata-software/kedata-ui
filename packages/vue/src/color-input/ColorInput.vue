<script lang="ts" setup>
import animateStatePreset from '../animate-state-preset';
import { ColorPicker } from '../color-picker';
import { ColorInputProps } from './index.types';
import useColorInput from './useColorInput';

const props = defineProps<ColorInputProps>();
const value = defineModel<string>('value', {
  default: '#000000',
});
const isOpen = defineModel<boolean>('isOpen', {
  default: false,
});

const api = useColorInput(props, {
  value,
  isOpen,
});
</script>
<template>
  <button v-bind="api.getRootProps()">
    <div v-bind="api.getInputWrapperProps()">
      <div v-bind="api.getIndicatorProps()" />
      <div v-bind="api.getValueProps()">
        {{ value }}
      </div>
      <input v-bind="api.getHiddenInputProps()" />
    </div>
  </button>
  <Teleport to="body">
    <Transition
      :duration="150"
      :class="animateStatePreset.fadeUp.base"
      :enter-from-class="animateStatePreset.fadeUp['enter-from']"
      :enter-active-class="animateStatePreset.fadeUp['enter-active']"
      :enter-to-class="animateStatePreset.fadeUp['enter-to']"
      :leave-from-class="animateStatePreset.fadeUp['leave-from']"
      :leave-active-class="animateStatePreset.fadeUp['leave-active']"
      :leave-to-class="animateStatePreset.fadeUp['leave-to']"
    >
      <div v-bind="api.getPositionerProps()" v-if="isOpen">
        <div v-bind="api.getContentProps()">
          <ColorPicker v-bind="api.getColorPickerProps()" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
