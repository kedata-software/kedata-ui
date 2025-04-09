import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { useColorPalette } from '../use-color-palette';
import { createControlledSignal } from '../create-controlled-signal';
import { paginationSlots } from '@kedata-ui/slots/pagination';
import * as pagination from '@zag-js/pagination';
import { normalizeProps, useMachine } from '@zag-js/solid';
import clsx from 'clsx';
import { createMemo, mergeProps } from 'solid-js';
import type { PaginationProps } from './index.types';
import type { PropsGetterParams } from '../types';

const usePagination = (inProps: PaginationProps) => {
  const props = useBaseProps('Pagination', inProps);
  const classNames = useClassNames('Pagination', inProps);
  const colorPaletteClassName = useColorPalette(() => props.colorPalette);
  const twMerge = useTwMerge();

  const [page, setPage] = createControlledSignal(
    () => props.page,
    props.onPageChange,
    props.initialPage ?? 1,
  );

  const service = useMachine(pagination.machine, {
    get id() {
      return props.id;
    },
    get page() {
      return page();
    },
    get count() {
      return props.count;
    },
    get pageSize() {
      return props.pageSize;
    },
    onPageChange: ({ page }) => {
      setPage(page);
    },
  });

  const paginationApi = createMemo(() => {
    return pagination.connect(service, normalizeProps);
  });

  const activeVariant = createMemo(() => props.activeVariant ?? 'solid');
  const inactiveVariant = createMemo(() => props.inactiveVariant ?? 'outline');
  const buttonSize = createMemo(() => props.size ?? 'small');

  const slots = createMemo(() => paginationSlots(props));

  const Component = 'div' as const;

  const getRootProps = (params?: PropsGetterParams) => {
    return mergeProps(
      () => paginationApi().getRootProps(),
      () => ({
        class: twMerge(
          clsx(slots().root(), classNames()?.root, params?.className),
        ),
      }),
    );
  };

  const getPrevTriggerProps = (params?: PropsGetterParams) => {
    return mergeProps(
      () => paginationApi().getPrevTriggerProps(),
      () => ({
        class: twMerge(
          clsx(
            colorPaletteClassName(),
            slots().prevTrigger({
              size: buttonSize(),
              variant: 'solid',
            }),
            classNames()?.prevTrigger,
            params?.className,
          ),
        ),
      }),
    );
  };

  const getNextTriggerProps = (params?: PropsGetterParams) => {
    return mergeProps(
      () => paginationApi().getNextTriggerProps(),
      () => ({
        class: twMerge(
          clsx(
            colorPaletteClassName(),
            slots().nextTrigger({
              size: buttonSize(),
              variant: 'solid',
            }),
            classNames()?.nextTrigger,
            params?.className,
          ),
        ),
      }),
    );
  };

  const getEllipsisProps = (
    params: pagination.EllipsisProps & PropsGetterParams,
  ) => {
    return mergeProps(
      () => paginationApi().getEllipsisProps(params),
      () => ({
        children: '...',
        tabIndex: -1,
        class: twMerge(
          clsx(
            colorPaletteClassName(),
            slots().ellipsis(),
            classNames()?.ellipsis,
            params.className,
          ),
        ),
      }),
    );
  };

  const getItemProps = (params: pagination.ItemProps & PropsGetterParams) => {
    return mergeProps(
      () => paginationApi().getItemProps(params),
      () => ({
        class: twMerge(
          clsx(
            colorPaletteClassName,
            slots().item(),
            classNames()?.item,
            params.className,
          ),
        ),
        get children() {
          return params.value;
        },
      }),
    );
  };

  return {
    Component,
    page: createMemo(() => paginationApi().page),
    pages: createMemo(() => paginationApi().pages, [], {
      equals(prev, next) {
        return JSON.stringify(prev) === JSON.stringify(next);
      },
    }),
    size: buttonSize,
    activeVariant,
    inactiveVariant,

    getRootProps,
    getPrevTriggerProps,
    getNextTriggerProps,
    getEllipsisProps,
    getItemProps,
  };
};

export default usePagination;
