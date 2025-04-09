import type { DataTableClassNames } from '@kedata-ui/slots';
import type { Accessor, Component, ComponentProps, JSX } from 'solid-js';

export type DataTableColumn = {
  name: string;
  label: string;
  width?: string;
  icon?: Component<Record<string, any>>;
  sortable?: boolean;
  renderCell?: (value: any, row: Record<string, any>) => JSX.Element;
};

export type DataTableSortType = 'asc' | 'desc';

export type DataTableBaseProps = {
  rowKey?: string;
  id?: string;
  columns: DataTableColumn[];
  data: Record<string, any>[];
  fixedHeader?: boolean;
  withParts?: boolean;
  totalData?: number;
  pagination?: boolean;

  pageSize?: number;
  page?: number;
  onPageChange?: (page: number) => void;

  sortType?: DataTableSortType;
  onSortTypeChange?: (sortType: DataTableSortType) => void;

  sortBy?: string;
  onSortByChange?: (sortBy: string) => void;

  classNames?: DataTableClassNames;
};

export type DataTableProps = ComponentProps<'div'> & DataTableBaseProps;

export type UseDataTableParams = {
  props: DataTableBaseProps;
};

export type CreateDataTableStoreParams = {
  values?: {
    pageSize?: Accessor<number | undefined>;
    page?: Accessor<number | undefined>;
    sortType?: Accessor<DataTableSortType | undefined>;
    sortBy?: Accessor<string | undefined>;
  };
  initialValues?: {
    pageSize?: number;
    page?: number;
    sortType?: DataTableSortType;
    sortBy?: string;
  };
  onPageChange?: (newPage: number) => void;
  onSortTypeChange?: (newSortType: DataTableSortType) => void;
  onSortByChange?: (newSortBy: string) => void;
};
