import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { createControlledSignal } from '../create-controlled-signal';
import { useTwMerge } from '../tw-merge';
import { CalendarDate } from '@internationalized/date';
import { datePickerSlots } from '@kedata-ui/slots';
import * as datepicker from '@zag-js/date-picker';
import { normalizeProps, useMachine } from '@zag-js/solid';
import clsx from 'clsx';
import type { DatePickerProps } from './index.types';
import {
  createMemo,
  mergeProps,
  type ComponentProps,
  type ValidComponent,
} from 'solid-js';
import type { PropsGetterParams } from '../types';

const createDatePicker = (inProps: DatePickerProps) => {
  const props = useBaseProps('DatePicker', inProps);
  const classes = useClassNames('DatePicker', inProps);
  const twMerge = useTwMerge();
  const [value, setValue] = createControlledSignal(
    () => props.value,
    props.onValueChange,
    props.initialValue ?? [new Date()],
  );

  const service = useMachine(datepicker.machine, {
    get id() {
      return props.id;
    },
    get value() {
      return value().map((value) => {
        return new CalendarDate(
          value.getFullYear(),
          value.getMonth() + 1,
          value.getDate(),
        );
      });
    },
    onValueChange(details) {
      setValue(details.value.map((value) => value.toDate('UTC')));
    },
    get closeOnSelect() {
      return props.closeOnSelect ?? true;
    },
    get selectionMode() {
      return props.selectionMode ?? 'single';
    },
  });

  const slots = createMemo(() => datePickerSlots());

  const api = createMemo(() => datepicker.connect(service, normalizeProps));

  const getControlProps = <T extends ValidComponent = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(
      () => api().getControlProps(),
      () => ({
        class: twMerge(
          clsx(slots().control(), classes()?.control, params.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getTriggerProps = <T extends ValidComponent = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(
      () => api().getTriggerProps(),
      () => ({
        class: twMerge(
          clsx(slots().trigger(), classes()?.trigger, params.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getRootProps = <T extends ValidComponent = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(
      () => api().getRootProps(),
      () => ({
        class: twMerge(
          clsx(slots().root(), classes()?.root, props.class, params.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getPositionerProps = <T extends ValidComponent = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(
      () => api().getPositionerProps(),
      () => ({
        class: twMerge(
          clsx(slots().positioner(), classes()?.positioner, params.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getContentProps = <T extends ValidComponent = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(
      () => api().getContentProps(),
      () => ({
        class: twMerge(
          clsx(slots().content(), classes()?.content, params.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getViewControlProps = <T extends ValidComponent = 'div'>(
    params: PropsGetterParams & datepicker.ViewProps = {},
  ) => {
    return mergeProps(
      () => api().getViewControlProps(params),
      () => ({
        class: twMerge(
          clsx(slots().viewControl(), classes()?.viewControl, params.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getPrevTriggerProps = <T extends ValidComponent = 'button'>(
    params: PropsGetterParams & datepicker.ViewProps = {},
  ) => {
    return mergeProps(
      () => api().getPrevTriggerProps(params),
      () => ({
        class: twMerge(
          clsx(slots().prevTrigger(), classes()?.prevTrigger, params.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getViewTriggerProps = <T extends ValidComponent = 'button'>(
    params: PropsGetterParams & datepicker.ViewProps = {},
  ) => {
    return mergeProps(
      () => api().getViewTriggerProps(params),

      () => ({
        class: twMerge(
          clsx(slots().viewTrigger(), classes()?.viewTrigger, params.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getNextTriggerProps = <T extends ValidComponent = 'button'>(
    params: PropsGetterParams & datepicker.ViewProps = {},
  ) => {
    return mergeProps(
      () => api().getNextTriggerProps(params),
      () => ({
        class: twMerge(
          clsx(slots().nextTrigger(), classes()?.nextTrigger, params.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getTableProps = <T extends ValidComponent = 'table'>(
    params: PropsGetterParams & datepicker.TableProps = {},
  ) => {
    return mergeProps(
      () => api().getTableProps(params),
      () => ({
        class: twMerge(
          clsx(slots().table(), classes()?.table, params.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getTableHeaderProps = <T extends ValidComponent = 'thead'>(
    params: PropsGetterParams & datepicker.TableProps = {},
  ) => {
    return mergeProps(
      () => api().getTableHeaderProps(params),
      () => ({
        class: twMerge(
          clsx(slots().tableHeader(), classes()?.tableHeader, params.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getTableBodyProps = <T extends ValidComponent = 'tbody'>(
    params: PropsGetterParams & datepicker.TableProps = {},
  ) => {
    return mergeProps(
      () => api().getTableBodyProps(params),
      () => ({
        class: twMerge(
          clsx(slots().tableBody(), classes()?.tableBody, params.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getTableRowProps = <T extends ValidComponent = 'tr'>(
    params: PropsGetterParams & datepicker.TableProps,
  ) => {
    return mergeProps(
      () => api().getTableRowProps(params),
      () => ({
        class: twMerge(
          clsx(slots().tableRow(), classes()?.tableRow, params.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getDayTableCellProps = <T extends ValidComponent = 'td'>(
    params: PropsGetterParams & datepicker.DayTableCellProps,
  ) => {
    return mergeProps(
      () => api().getDayTableCellProps(params),
      () => ({
        class: twMerge(
          clsx(slots().tableCell(), classes()?.tableCell, params.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getDayTableCellTriggerProps = <T extends ValidComponent = 'div'>(
    params: PropsGetterParams & datepicker.DayTableCellProps,
  ) => {
    return mergeProps(
      () => api().getDayTableCellTriggerProps(params),
      () => ({
        class: twMerge(
          clsx(
            slots().tableCellTrigger(),
            classes()?.tableCellTrigger,
            params.className,
          ),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getMonthTableCellProps = <T extends ValidComponent = 'td'>(
    params: PropsGetterParams & datepicker.TableCellProps,
  ) => {
    return mergeProps(
      () => api().getMonthTableCellProps(params),
      () => ({
        class: twMerge(
          clsx(slots().tableCell(), classes()?.tableCell, params.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getMonthTableCellTriggerProps = <T extends ValidComponent = 'div'>(
    params: PropsGetterParams & datepicker.TableCellProps,
  ) => {
    return mergeProps(
      () => api().getMonthTableCellTriggerProps(params),
      () => ({
        class: twMerge(
          clsx(
            slots().tableCellTrigger(),
            classes()?.tableCellTrigger,
            params.className,
          ),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getYearTableCellProps = <T extends ValidComponent = 'td'>(
    params: PropsGetterParams & datepicker.TableCellProps,
  ) => {
    return mergeProps(
      () => api().getYearTableCellProps(params),
      () => ({
        class: twMerge(
          clsx(slots().tableCell(), classes()?.tableCell, params.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getYearTableCellTriggerProps = <T extends ValidComponent = 'div'>(
    params: PropsGetterParams & datepicker.TableCellProps,
  ) => {
    return mergeProps(
      () => api().getYearTableCellTriggerProps(params),
      () => ({
        class: twMerge(
          clsx(
            slots().tableCellTrigger(),
            classes()?.tableCellTrigger,
            params.className,
          ),
        ),
      }),
    ) as ComponentProps<T>;
  };

  return {
    getRootProps,
    getControlProps,
    getTriggerProps,

    getPositionerProps,
    getContentProps,
    getViewControlProps,
    getPrevTriggerProps,
    getViewTriggerProps,
    getNextTriggerProps,
    getTableProps,
    getTableHeaderProps,
    getTableBodyProps,
    getTableRowProps,

    getDayTableCellProps,
    getDayTableCellTriggerProps,

    getMonthTableCellProps,
    getMonthTableCellTriggerProps,

    getYearTableCellProps,
    getYearTableCellTriggerProps,

    value,
    weeks: () => api().weeks,
    weekDays: () => api().weekDays,
    zagApi: () => api(),
    // getMonthsGrid: () => api().getMonthsGrid()[0],
    // getYearsGrid: () => api().getYearsGrid(),
  };
};

export default createDatePicker;
