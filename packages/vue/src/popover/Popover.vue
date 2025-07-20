<script setup lang="ts">
import usePopover from "./usePopover";
import type { PopoverProps } from "./index.types";
import animateStatePreset from "../animate-state-preset";

const open = defineModel<boolean>("open", {
  default: false,
});
const props = defineProps<PopoverProps>();

const api = usePopover(props, { open });
</script>

<template>
  <slot name="trigger" v-bind="api.getTriggerProps()" />

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
    <div v-if="open" v-bind="api.getPositionerProps()">
      <div v-bind="api.getContentProps()">
        <slot name="content" :open="open" @close="open = false" />
      </div>
    </div>
  </Transition>
</template>
