<script setup lang="ts">
import useSelectInput from './useSelectInput';
import type { SelectInputProps } from './index.types';
import { KiCheveronDownSolid } from '@kedata-ui/vue-icons';
import { Tag } from '../tag';
import { SelectPicker } from '../select-picker';
import animateStatePreset from '../animate-state-preset';

const props = withDefaults(defineProps<SelectInputProps>(), {
  mode: 'single',
});
const value = defineModel<string | string[]>({
  default: '',
  set: (value: string | string[]) => {
    if (props.mode === 'single') {
      isOpen.value = false;
    }
    return value;
  },
});
const isOpen = defineModel<boolean>('is-open', {
  default: false,
});
const searchTerm = defineModel<string>('search-term', {
  default: '',
});

const { isPlaceholderShown, selectedOptions, valueModel, ...api } =
  useSelectInput(props, {
    value,
    isOpen,
    searchTerm,
  });
</script>

<template>
  <button v-bind="api.getRootProps()">
    <div v-bind="api.getInputWrapperProps()">
      <div v-bind="api.getValueProps()">
        <template v-if="isPlaceholderShown">
          {{ props.placeholder }}
        </template>
        <template v-else>
          <template v-if="api.mode.value === 'single'">
            {{ selectedOptions[0]?.label }}
          </template>
          <template v-if="api.mode.value === 'multiple'">
            <Tag
              v-for="option in selectedOptions"
              :closeable="true"
              :key="option.value"
              @keydown="
                (e: any) => {
                  e.stopPropagation();
                }
              "
              @click="
                (e: any) => {
                  e.stopPropagation();
                  api.removeValue(option.value);
                }
              "
            >
              {{ option.label }}
            </Tag>
          </template>
        </template>
      </div>

      <KiCheveronDownSolid v-bind="api.getIndicatorProps()" />
    </div>
  </button>

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
    <div v-if="api.isOpen.value" v-bind="api.getPositionerProps()">
      <div v-bind="api.getContentProps()">
        <SelectPicker
          v-bind="api.getSelectPickerProps()"
          v-model="valueModel"
        />
      </div>
    </div>
  </Transition>
</template>
