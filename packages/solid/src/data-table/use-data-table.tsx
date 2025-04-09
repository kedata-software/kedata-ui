import createDataTableStore from "./create-data-table-store";
import { useBaseProps } from "../base-props";
import { useClassNames } from "../class-names";
import { useTwMerge } from "../tw-merge";
import { dataTableSlots } from "@kedata-ui/slots/data-table";
import { dataAttrBoolean } from "@kedata-software/toolkit-js";
import clsx from "clsx";
import { createMemo, type ComponentProps, type ValidComponent } from "solid-js";
import type { DataTableProps } from "./index.types";
import type { PaginationProps } from "../pagination";
import type { PropsGetterParams } from "../types";

const useDataTable = (inProps: DataTableProps) => {
  const props = useBaseProps("DataTable", inProps, {
    fixedHeader: true,
    pagination: true,
    rowKey: "id",
  });
  const classNames = useClassNames("DataTable", props);
  const twMerge = useTwMerge();

  const tableState = createDataTableStore({
    values: {
      page: () => props.page,
      pageSize: () => props.pageSize,
      sortType: () => props.sortType,
      sortBy: () => props.sortBy,
    },
    initialValues: props,
  });

  const paginatedData = createMemo(() => {
    if (!props.pagination) {
      return props.data;
    }

    const start = tableState.page() * tableState.pageSize() - 2;
    const end = start + tableState.pageSize();
    return props.data.slice(start, end);
  });

  const slots = createMemo(() => dataTableSlots());

  const Component = "div" as const;

  const getRootProps = <T extends ValidComponent = "div">(
    params?: PropsGetterParams,
  ) => {
    return {
      "data-fixed-header": dataAttrBoolean(props.fixedHeader),
      class: twMerge(
        clsx(
          slots().root(),
          classNames()?.root,
          props.class,
          params?.className,
        ),
      ),
    } as ComponentProps<T>;
  };

  const getTableProps = <T extends ValidComponent = "table">(
    params?: PropsGetterParams,
  ) => {
    return {
      class: twMerge(
        clsx(slots().table(), classNames()?.table, params?.className),
      ),
    } as ComponentProps<T>;
  };

  const getBodyProps = <T extends ValidComponent = "div">(
    params?: PropsGetterParams,
  ) => {
    return {
      class: twMerge(
        clsx(slots().body(), classNames()?.body, params?.className),
      ),
    } as ComponentProps<T>;
  };

  const getTableHeaderProps = <T extends ValidComponent = "thead">(
    params?: PropsGetterParams,
  ) => {
    return {
      class: twMerge(
        clsx(
          slots().tableHeader(),
          classNames()?.tableHeader,
          params?.className,
        ),
      ),
    } as ComponentProps<T>;
  };

  const getTableHeadProps = <T extends ValidComponent = "th">(
    params?: PropsGetterParams,
  ) => {
    return {
      class: twMerge(
        clsx(slots().tableHead(), classNames()?.tableHead, params?.className),
      ),
    } as ComponentProps<T>;
  };

  const getTableBodyProps = <T extends ValidComponent = "tbody">(
    params?: PropsGetterParams,
  ) => {
    return {
      class: twMerge(
        clsx(slots().tableBody(), classNames()?.tableBody, params?.className),
      ),
    } as ComponentProps<T>;
  };

  const getTableRowProps = <T extends ValidComponent = "tr">(
    params?: PropsGetterParams,
  ) => {
    return {
      class: twMerge(
        clsx(slots().tableRow(), classNames()?.tableRow, params?.className),
      ),
    } as ComponentProps<T>;
  };

  const getTableCellProps = <T extends ValidComponent = "td">(
    params?: PropsGetterParams,
  ) => {
    return {
      class: twMerge(
        clsx(slots().tableCell(), classNames()?.tableCell, params?.className),
      ),
    } as ComponentProps<T>;
  };

  const getFooterProps = <T extends ValidComponent = "div">(
    params?: PropsGetterParams,
  ) => {
    return {
      class: twMerge(
        clsx(slots().footer(), classNames()?.footer, params?.className),
      ),
    } as ComponentProps<T>;
  };

  const getPaginationProps = () => {
    return {
      get pageSize() {
        return tableState.pageSize();
      },
      get page() {
        return tableState.page();
      },
      get count() {
        return props.totalData;
      },
      onPageChange: tableState.onPageChange,
    } as PaginationProps;
  };

  return {
    Component,
    columns: createMemo(() => props.columns),
    data: createMemo(() => props.data),
    rowKey: props.rowKey,
    paginatedData,
    pagination: createMemo(() => props.pagination),

    getRootProps,
    getBodyProps,
    getTableProps,
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
