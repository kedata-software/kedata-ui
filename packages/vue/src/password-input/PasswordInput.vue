<script setup lang="ts">
import usePasswordInput from "./usePasswordInput";
import type { PasswordInputProps } from "./index.types";
import { useSlots } from "vue";
import { KiEyesOffSolid, KiEyeSolid } from "@kedata-ui/vue-icons";
import { tw } from "@kedata-ui/slots";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<PasswordInputProps>();
const value = defineModel<string>({
  default: "",
});
const isVisible = defineModel<boolean>("is-visible", {
  default: false,
});

const compSlots = useSlots();
const api = usePasswordInput(props, { value, isVisible });
</script>

<template>
  <div v-bind="api.getRootProps()">
    <div v-if="compSlots.startAddon" v-bind="api.getStartAddonProps()">
      <slot name="start-addon" />
    </div>

    <div v-bind="api.getInputWrapperProps()">
      <slot
        v-if="compSlots.startIcon"
        name="start-icon"
        v-bind="api.getStartIconProps()"
      />

      <input v-bind="api.getInputProps()" v-model="value" />

      <button v-bind="api.getToggleProps()">
        <KiEyeSolid
          v-if="isVisible"
          @click="isVisible = !isVisible"
          :class="tw(api.slots.value.endIcon())"
        />
        <KiEyesOffSolid
          v-else
          @click="isVisible = !isVisible"
          :class="tw(api.slots.value.endIcon())"
        />
      </button>
    </div>

    <div v-if="compSlots.endAddon" v-bind="api.getEndAddonProps()">
      <slot name="end-addon" />
    </div>
  </div>
</template>
