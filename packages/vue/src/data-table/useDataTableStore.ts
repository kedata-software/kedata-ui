import { computed, ref } from "vue";
import type { DataTableSortType, UseDataTableParams } from "./index.types";

const useDataTableStore = (params?: UseDataTableParams) => {
  const { values, initialValues } = params ?? {};

  const pageRef = ref(initialValues?.page ?? 1);
  const page = computed({
    get: () => values?.page?.value ?? pageRef.value,
    set: (value) => {
      pageRef.value = value;
      values?.page !== undefined && (values.page.value = value);
    },
  });

  const pageSizeRef = ref(initialValues?.pageSize ?? 10);
  const pageSize = computed({
    get: () => values?.pageSize?.value ?? pageSizeRef.value,
    set: (value) => {
      pageSizeRef.value = value;
      values?.pageSize !== undefined && (values.pageSize.value = value);
    },
  });

  const sortByRef = ref(initialValues?.sortBy ?? "id");
  const sortBy = computed({
    get: () => values?.sortBy?.value ?? sortByRef.value,
    set: (value) => {
      sortByRef.value = value;
      values?.sortBy !== undefined && (values.sortBy.value = value);
    },
  });

  const sortTypeRef = ref(initialValues?.sortType ?? "asc");
  const sortType = computed({
    get: () => values?.sortType?.value ?? sortTypeRef.value,
    set: (value) => {
      sortTypeRef.value = value;
      values?.sortType !== undefined && (values.sortType.value = value);
    },
  });

  return {
    page,
    pageSize,
    sortBy,
    sortType,
  };
};

export default useDataTableStore;
