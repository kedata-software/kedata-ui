<script setup lang="ts">
import useDialogHeader from "./useDialogHeader";
import { KiCloseSolid } from "@kedata-ui/vue-icons";
import type { DialogHeaderProps } from "./index.types";

defineOptions({
  inheritAttrs: false,
});
const props = defineProps<DialogHeaderProps>();

const { showCloseIcon, title, ...api } = useDialogHeader(props);
</script>

<template>
  <header v-bind="api.getRootProps()">
    <span v-if="!!title" v-bind="api.getTitleProps()">
      {{ title }}
    </span>

    <KiCloseSolid v-if="showCloseIcon" v-bind="api.getCloseIconProps()" />
  </header>
</template>
