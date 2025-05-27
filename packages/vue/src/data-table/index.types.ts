import type { ModelRef, Ref, VNode } from "vue";

export type DataTableSortType = "asc" | "desc";

export type UseDataTableParams = {
  values?: {
    page?: Ref<number>;
    pageSize?: Ref<number>;
    sortBy?: Ref<string>;
    sortType?: Ref<DataTableSortType>;
  };
  initialValues?: {
    page?: number;
    pageSize?: number;
    sortBy?: string;
    sortType?: DataTableSortType;
  };
};

export type DataTableColumn = {
  name: string;
  label: string;
  width?: string;
  icon?: VNode;
  sortable?: boolean;
  renderCell?: (value: any, row: Record<string, any>) => VNode;
  renderLabel?: (column: Omit<DataTableColumn, "renderLabel">) => VNode;
};

export type DataTableProps = {
  class?: string;

  rowKey?: string;
  columns: DataTableColumn[];
  data: Record<string, any>[];
  fixedHeader?: boolean;
  pagination?: boolean;
  totalData?: number;
  withParts?: boolean;
};

export type DataTableModels = {
  page: ModelRef<number>;
  pageSize: ModelRef<number>;
  sortBy: ModelRef<string>;
  sortType: ModelRef<DataTableSortType>;
};
