<script setup lang="ts">
import usePagination from './usePagination';
import type { PaginationProps } from './index.types';
import { Button } from '../button';

const props = defineProps<PaginationProps>();
const page = defineModel<number>('page', {
  default: 1,
});
const pageSize = defineModel<number>('page-size', {
  default: 10,
});

const { size, activeVariant, inactiveVariant, pages, ...api } = usePagination(
  props,
  { page, pageSize },
);
</script>

<template>
  <div v-bind="api.getRootProps()">
    <button v-bind="api.getPrevTriggerProps()">Prev</button>
    <template v-for="(item, index) in pages">
      <Button
        v-if="item.type === 'ellipsis'"
        v-bind="api.getEllipsisProps({ index })"
        variant="text"
        :size="size"
      >
        ...
      </Button>
      <Button
        v-else
        v-bind="api.getItemProps(item)"
        :size="size"
        :variant="item.value === page ? activeVariant : inactiveVariant"
      >
        {{ item.value }}
      </Button>
    </template>
    <button v-bind="api.getNextTriggerProps()">Next</button>
  </div>
</template>
