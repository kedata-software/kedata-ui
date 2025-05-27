<script setup lang="ts">
import useDataTable from "./useDataTable";
import type { DataTableProps, DataTableSortType } from "./index.types";
import { Pagination } from "../pagination";

defineOptions({
  inheritAttrs: false,
});
const props = defineProps<DataTableProps>();

const page = defineModel<number>("page", {
  default: 1,
});
const pageSize = defineModel<number>("page-size", {
  default: 10,
});
const sortBy = defineModel<string>("sort-by", {
  default: "id",
});
const sortType = defineModel<DataTableSortType>("sort-type", {
  default: "asc",
});

const { columns, paginatedData, pagination, rowKey, ...api } = useDataTable(
  props,
  {
    page,
    pageSize,
    sortBy,
    sortType,
  }
);
</script>

<template>
  <div v-bind="api.getRootProps()">
    <div v-bind="api.getBodyProps()">
      <table v-bind="api.getTableProps()">
        <thead v-bind="api.getTableHeaderProps()">
          <tr v-bind="api.getTableHeadProps()">
            <th
              v-for="column in columns"
              :key="column.name"
              :style="{ width: column.width }"
              v-bind="api.getTableCellProps()"
            >
              <template v-if="column.renderLabel">
                <component :is="column.renderLabel(column)" />
              </template>
              <template v-else>
                {{ column.label }}
              </template>
            </th>
          </tr>
        </thead>
        <tbody v-bind="api.getTableBodyProps()">
          <tr
            v-for="row in paginatedData"
            :key="rowKey ? row[rowKey] : row"
            v-bind="api.getTableRowProps()"
          >
            <td
              v-for="column in columns"
              :key="column.name"
              v-bind="api.getTableCellProps()"
              :style="{ width: column.width }"
            >
              <template v-if="column.renderCell">
                <component :is="column.renderCell(row[column.name], row)" />
              </template>
              <template v-else>
                {{ row[column.name] }}
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-bind="api.getFooterProps()">
      <Pagination
        v-if="pagination"
        v-bind="api.getPaginationProps()"
        v-model:page="page"
        v-model:page-size="pageSize"
      />
    </div>
  </div>
</template>
