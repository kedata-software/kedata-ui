<script setup lang="ts">
import useTag from "./useTag";
import { KiCloseSolid } from "@kedata-ui/vue-icons";
import type { TagProps } from "./index.types";

const props = defineProps<TagProps>();
const api = useTag(props);
</script>

<template>
  <div v-bind="api.getRootProps()">
    <slot />
    <KiCloseSolid v-if="api.closeable.value" v-bind="api.getCloseIconProps()" />
  </div>
</template>
