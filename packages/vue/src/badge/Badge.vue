<script setup lang="ts">
import useBadge from './useBadge';
import type { BadgeProps } from './index.types';

const props = defineProps<BadgeProps>();

const api = useBadge(props);
</script>

<template>
  <div v-bind="api.getRootProps()">
    <slot />
  </div>
</template>
