import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { createControlledSignal } from '../create-controlled-signal';
import { selectPickerSlots } from '@kedata-ui/slots/select-picker';
import { KiSearchSolid } from '@kedata-ui/solid-icons';
import { dataAttrBoolean, defaultArray } from '@kedata-software/toolkit-js';
import * as select from '@zag-js/select';
import { normalizeProps, useMachine } from '@zag-js/solid';
import clsx from 'clsx';
import {
  createMemo,
  mergeProps,
  splitProps,
  type ComponentProps,
  type ValidComponent,
} from 'solid-js';
import { type SelectPickerProps } from './index.types';
import type { PropsGetterParams } from '../types';
import type { TextInputProps } from '../text-input';

const {
  root: getRootClassName,
  item: getItemClassName,
  itemGroup: getItemGroupClassName,
  itemGroupLabel: getItemGroupLabelClassName,
  itemText: getItemTextClassName,

  SearchInput: getSearchInputClassName,
} = selectPickerSlots();

const useSelectPicker = (inProps: SelectPickerProps) => {
  const props = useBaseProps('SelectPicker', inProps);
  const classNames = useClassNames('SelectPicker', inProps);
  const twMerge = useTwMerge();

  const [value, setValue] = createControlledSignal(
    () => props.value,
    props.onValueChange,
    props.initialValue ?? [],
  );

  const [searchTerm, setSearchTerm] = createControlledSignal(
    () => props.searchTerm,
    props.onSearchTermChange,
    '',
  );

  const debouncedSearchTerm = createMemo(() => searchTerm());
  const changeSearchTermHandler = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const baseCollection = createMemo(() => {
    return select.collection({
      items: defaultArray(props.options),
    });
  });

  const searchOptions = createMemo(() => {
    return baseCollection().items.filter((item) => {
      return item.label
        .toLowerCase()
        .includes(debouncedSearchTerm().toLowerCase());
    });
  });

  const service = useMachine(select.machine, {
    get id() {
      return props.id;
    },
    get collection() {
      return baseCollection();
    },
    open: true,
    multiple: true,
    get value() {
      return value();
    },
    onValueChange: ({ value }) => setValue(value),
  });

  const api = createMemo(() => select.connect(service, normalizeProps));

  const [, rootProps] = splitProps(props, omittedProps);

  const getRootProps = <T extends ValidComponent = 'div'>(
    params?: PropsGetterParams,
  ) => {
    return mergeProps(
      () => ({
        'data-with-search': dataAttrBoolean(props.withSearch),
        'data-part': undefined,
        ...rootProps,
      }),
      () => {
        const contentApi = api().getContentProps();
        return {
          ...contentApi,
          onKeyDown: (e: any) => {
            // Make sure search input can type space since the space code used for select an item
            if (e.code === 'Space') {
              return;
            }
            // @ts-ignore
            contentApi.onKeyDown?.(e);
          },
        };
      },
      () => ({
        class: twMerge(
          clsx(
            getRootClassName(),
            classNames()?.root,
            props.class,
            params?.className,
          ),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getItemProps = <T extends ValidComponent = 'div'>(
    params: select.ItemProps & PropsGetterParams,
  ) => {
    return mergeProps(
      () => {
        const itemApi = api().getItemProps(params);
        return {
          ...itemApi,
          'data-checked': dataAttrBoolean(itemApi['aria-selected']),
        };
      },
      () => ({
        class: twMerge(
          clsx(getItemClassName(), classNames()?.item, params?.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getItemTextProps = <T extends ValidComponent = 'div'>(
    params: select.ItemProps & PropsGetterParams,
  ) => {
    return mergeProps(() => api().getItemTextProps(params), {
      class: twMerge(
        clsx(getItemTextClassName(), classNames()?.itemText, params?.className),
      ),
    }) as ComponentProps<T>;
  };

  const getItemGroupProps = <T extends ValidComponent = 'div'>(
    params?: PropsGetterParams,
  ) => {
    return mergeProps(
      () => api().getItemGroupProps(props),
      () => ({
        class: twMerge(
          clsx(
            getItemGroupClassName(),
            classNames()?.itemGroup,
            params?.className,
          ),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getItemGroupLabelProps = <T extends ValidComponent = 'div'>(
    params: select.ItemGroupLabelProps & PropsGetterParams,
  ) => {
    return mergeProps(
      () => api().getItemGroupLabelProps(params),
      () => ({
        class: twMerge(
          clsx(
            getItemGroupLabelClassName(),
            classNames()?.itemGroupLabel,
            params?.className,
          ),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getSearchInputProps = (params?: TextInputProps) => {
    return mergeProps(
      {
        get value() {
          return searchTerm();
        },
        onValueChange: changeSearchTermHandler,
        get placeholder() {
          return props.searchPlaceholder ?? 'Search item';
        },
        startIcon: KiSearchSolid,
      },
      () => ({
        class: twMerge(clsx(getSearchInputClassName())),
        classNames: {
          inputWrapper: 'border-0 border-b rounded-b-none',
        },
      }),
    ) as TextInputProps;
  };

  return {
    options: createMemo(() => props.options),
    searchOptions,
    withSearch: createMemo(() => props.withSearch),
    searchable: createMemo(() => props.searchable),
    searchPlaceholder: createMemo(() => props.searchPlaceholder),

    getRootProps,
    getItemProps,
    getItemTextProps,
    getItemGroupProps,
    getItemGroupLabelProps,
    getSearchInputProps,
  };
};

export default useSelectPicker;

const omittedProps: Array<keyof SelectPickerProps> = [
  'options',
  'value',
  'onValueChange',
  'searchTerm',
  'onSearchTermChange',
  'withSearch',
  'searchable',
  'searchPlaceholder',
];
