import { createControlledSignal } from '../create-controlled-signal';
import { createMemo } from 'solid-js';
import type { CreateDataTableStoreParams } from './index.types';

const createDataTableStore = (params?: CreateDataTableStoreParams) => {
  const pageSize = createMemo(() => params?.initialValues?.pageSize ?? 10);

  const [page, onPageChange] = createControlledSignal(
    () => params?.values?.page?.(),
    params?.onPageChange,
    params?.initialValues?.page ?? 1,
  );

  const [sortBy, onSortByChange] = createControlledSignal(
    () => params?.values?.sortBy?.(),
    params?.onSortByChange,
    params?.initialValues?.sortBy ?? '',
  );

  const [sortType, onSortTypeChange] = createControlledSignal(
    () => params?.values?.sortType?.(),
    params?.onSortTypeChange,
    params?.initialValues?.sortType ?? 'asc',
  );

  return {
    pageSize,
    page,
    sortType,
    sortBy,

    onPageChange,
    onSortByChange,
    onSortTypeChange,
  };
};

export default createDataTableStore;
