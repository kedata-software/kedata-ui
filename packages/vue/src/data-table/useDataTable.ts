import useDataTableStore from "./useDataTableStore";
import type { DataTableModels, DataTableProps } from "./index.types";
import { computed, type HTMLAttributes, type TableHTMLAttributes } from "vue";
import { dataTableSlots, tw } from "@kedata-ui/slots";

const useDataTable = (props: DataTableProps, models: DataTableModels) => {
  const tableState = useDataTableStore({
    values: models,
  });

  const columns = computed(() => props.columns);
  const data = computed(() => props.data);
  const pagination = computed(() => props.pagination);
  const paginatedData = computed(() => {
    if (!props.pagination) {
      return props.data;
    }

    const start = (tableState.page.value - 1) * tableState.pageSize.value;
    const end = start + tableState.pageSize.value;

    return props.data.slice(start, end);
  });

  const slots = computed(() => {
    return dataTableSlots();
  });

  const getRootProps = () => {
    return {
      class: tw(slots.value.root(), props.class),
    } as HTMLAttributes;
  };

  const getTableProps = () => {
    return {
      class: tw(slots.value.table()),
    } as TableHTMLAttributes;
  };

  const getBodyProps = () => {
    return {
      class: tw(slots.value.body()),
    } as HTMLAttributes;
  };

  const getTableHeaderProps = () => {
    return {
      class: tw(slots.value.tableHeader()),
    } as HTMLAttributes;
  };

  const getTableHeadProps = () => {
    return {
      class: tw(slots.value.tableHead()),
    } as HTMLAttributes;
  };

  const getTableBodyProps = () => {
    return {
      class: tw(slots.value.tableBody()),
    } as HTMLAttributes;
  };

  const getTableRowProps = () => {
    return {
      class: tw(slots.value.tableRow()),
    } as HTMLAttributes;
  };

  const getTableCellProps = () => {
    return {
      class: tw(slots.value.tableCell()),
    } as HTMLAttributes;
  };

  const getFooterProps = () => {
    return {
      class: tw(slots.value.footer()),
    } as HTMLAttributes;
  };

  const getPaginationProps = () => {
    return {
      page: tableState.page,
      pageSize: tableState.pageSize,
      count: props.totalData,
    } as HTMLAttributes;
  };

  return {
    paginatedData,
    columns,
    pagination,
    data,
    rowKey: props.rowKey,

    getRootProps,
    getTableProps,
    getBodyProps,
    getTableHeaderProps,
    getTableHeadProps,
    getTableBodyProps,
    getTableRowProps,
    getTableCellProps,
    getFooterProps,
    getPaginationProps,
  };
};

export default useDataTable;
