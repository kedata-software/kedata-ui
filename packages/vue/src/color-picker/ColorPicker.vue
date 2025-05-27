<script setup lang="ts">
import useColorPicker from "./useColorPicker";
import type { ColorPickerProps } from "./index.types";

const value = defineModel<string>({
  default: "#000000",
});
const props = defineProps<ColorPickerProps>();

const { hasSwatches, swatches, ...api } = useColorPicker(props, { value });
</script>

<template>
  <div v-bind="api.getRootProps()">
    <div v-bind="api.getAreaProps()">
      <div v-bind="api.getAreaBackgroundProps()"></div>
      <div v-bind="api.getAreaThumbProps()"></div>
    </div>

    <div v-bind="api.getChannelSliderContainerProps()">
      <div v-bind="api.getChannelSliderGroupProps()">
        <div v-bind="api.getChannelSliderProps({ channel: 'hue' })">
          <div
            v-bind="api.getChannelSliderTrackProps({ channel: 'hue' })"
          ></div>
          <div
            v-bind="api.getChannelSliderThumbProps({ channel: 'hue' })"
          ></div>
        </div>
        <div v-bind="api.getChannelSliderProps({ channel: 'alpha' })">
          <div
            v-bind="api.getChannelSliderTrackProps({ channel: 'alpha' })"
          ></div>
          <div
            v-bind="api.getChannelSliderThumbProps({ channel: 'alpha' })"
          ></div>
        </div>
      </div>
    </div>

    <div v-bind="api.getChannelInputContainerProps()">
      <input
        v-bind="api.getChannelInputProps({ channel: 'hex', class: 'w-[70%]' })"
      />
      <input
        v-bind="
          api.getChannelInputProps({ channel: 'alpha', class: 'w-[30%]' })
        "
      />
    </div>

    <div v-if="hasSwatches" v-bind="api.getSwatchContainerProps()">
      <div v-bind="api.getSwatchLabelProps()"></div>
      <div v-bind="api.getSwatchGroupProps()">
        <template v-for="swatch in swatches" :key="swatch">
          <button v-bind="api.getSwatchTriggerProps({ value: swatch })">
            <div v-bind="api.getSwatchProps({ value: swatch })"></div>
          </button>
        </template>
      </div>
    </div>
  </div>
</template>
