<script setup lang="ts">
import { swalToastSlots, tw } from "@kedata-ui/slots";
import { computed, useSlots } from "vue";
import type { SwalToastProps } from "./index.types";
import { useColorPalette } from "../use-color-palette";

defineOptions({
  inheritAttrs: false,
});
const props = defineProps<SwalToastProps>();

const compSlots = useSlots();
const colorPaletteClass = useColorPalette(() => props.colorPalette);

const slots = computed(() => swalToastSlots());
</script>

<template>
  <div :class="tw(colorPaletteClass, slots.root())">
    <slot v-if="!!compSlots.icon" name="icon" :class="slots.icon()" />

    <div :class="slots.content()">
      <div :class="slots.body()">
        <slot name="text" />
      </div>
    </div>
  </div>
</template>
