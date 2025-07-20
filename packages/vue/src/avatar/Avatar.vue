<script setup lang="ts">
import useAvatar from "./useAvatar";
import type { AvatarProps } from "./index.types";

const props = defineProps<AvatarProps>();

const { fallback, src, ...api } = useAvatar(props);
</script>

<template>
  <div v-bind="api.getRootProps()">
    <div v-if="fallback && !src" v-bind="api.getFallbackProps()">
      {{ fallback }}
    </div>

    <img v-if="!!src" :src="src" v-bind="api.getImageProps()" />
  </div>
</template>
