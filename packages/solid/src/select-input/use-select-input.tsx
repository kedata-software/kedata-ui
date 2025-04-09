import { useBaseProps } from '../base-props';
import { useTwMerge } from '../tw-merge';
import createAnimateState, {
  animateStatePreset,
} from '../create-animate-state';
import { useColorPalette } from '../use-color-palette';
import { createControlledSignal } from '../create-controlled-signal';
import { createDialogHolder } from '../create-dialog-holder';
import { selectInputSlots } from '@kedata-ui/slots/select-input';
import { dataAttrBoolean } from '@kedata-software/toolkit-js';
import * as popover from '@zag-js/popover';
import { normalizeProps, useMachine } from '@zag-js/solid';
import clsx from 'clsx';
import {
  createMemo,
  createSignal,
  mergeProps,
  splitProps,
  type Accessor,
  type ComponentProps,
  type ValidComponent,
} from 'solid-js';
import type { SelectInputProps } from './index.types';
import type { PropsGetterParams } from '../types';
import type { SelectPickerProps } from '../select-picker';

const useSelectInput = (inProps: SelectInputProps) => {
  const props = useBaseProps('SelectField', inProps);
  const classNames = props.classNames;
  const colorPaletteClassName = useColorPalette(() => props.colorPalette);

  const twMerge = useTwMerge();

  const closeOnSelect = createMemo(() => {
    if (typeof props.closeOnSelect === 'boolean') {
      return props.closeOnSelect;
    }

    return !props.multiple;
  });

  const [$value, setValue] = createSignal<string[]>([]);
  const value = createMemo(() => {
    if (props.multiple) return props.value ?? $value();
    return props.value ? [props.value] : $value();
  });
  const valueChangeHandler = (value: string[]) => {
    setValue(value);

    if (props.multiple) {
      props.onValueChange?.(value);
    }

    if (!props.multiple) {
      props.onValueChange?.(value[0]);
    }
  };

  const hasValue = createMemo(() => {
    if (!value().length) return false;

    return value().filter((v) => v !== undefined).length > 0;
  });

  const [isOpen, setOpen] = createControlledSignal(
    () => props.isOpen,
    props.onOpenChange,
    false,
  );

  const service = useMachine(popover.machine, {
    id: props.id,
    get open() {
      return isOpen();
    },
    onOpenChange: (details) => {
      setOpen(details.open);
    },
    closeOnInteractOutside: true,
    closeOnEscape: true,
    onEscapeKeyDown: () => {
      setOpen(false);
    },
  });

  const popoverApi = createMemo(() => popover.connect(service, normalizeProps));

  const { isPresence, animateState } = createAnimateState(isOpen);

  const selectedOptions = createMemo(() => {
    return (
      props.options?.filter((option) => value().includes(option.value)) ?? []
    );
  });

  const removeValue = (targetValue: string) => {
    const newValue = value().filter((v) => v !== targetValue);
    valueChangeHandler(newValue);
  };

  createDialogHolder(() => isOpen());

  const slots = createMemo(() => selectInputSlots());

  const Component = 'button' as const;

  const [, rootProps] = splitProps(props, omittedProps);

  const getRootProps = <T extends ValidComponent = 'button'>(
    params?: PropsGetterParams,
  ) => {
    return mergeProps(
      () => popoverApi().getTriggerProps(),
      () => ({
        'data-open': dataAttrBoolean(isOpen()),
        'data-has-placeholder': dataAttrBoolean(!hasValue()),
      }),
      () => rootProps,
      () => ({
        class: twMerge(
          clsx(
            colorPaletteClassName(),
            slots().root(),
            props.class,
            params?.className,
          ),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getContentProps = <T extends ValidComponent = 'div'>() => {
    return {
      ...popoverApi().getContentProps(),
      hidden: undefined,
    } as ComponentProps<T>;
  };

  const getValueProps = <T extends ValidComponent = 'div'>(
    params?: PropsGetterParams,
  ) => {
    return {
      class: twMerge(
        clsx(slots().value(), classNames?.value, params?.className),
      ),
    } as ComponentProps<T>;
  };

  const getPositionerProps = <T extends ValidComponent = 'div'>(
    params?: PropsGetterParams,
  ) => {
    return mergeProps(
      () => {
        const positionerApi = popoverApi().getPositionerProps();
        return {
          ...positionerApi,
          style: {
            ...(positionerApi.style as any),
            width: 'var(--reference-width)',
            ...params?.style,
          },
        };
      },
      {
        class: twMerge(
          clsx(
            slots().positioner(),
            classNames?.positioner,
            animateStatePreset.fadeUp.base,
            animateStatePreset.fadeUp[animateState()],
            params?.className,
          ),
        ),
      },
    ) as ComponentProps<T>;
  };

  const getInputWrapperProps = <T extends ValidComponent = 'div'>(
    params?: PropsGetterParams,
  ) => {
    return {
      class: twMerge(
        slots().inputWrapper(),
        classNames?.inputWrapper,
        params?.className,
      ),
    } as ComponentProps<T>;
  };

  const getIndicatorProps = <T extends ValidComponent = 'svg'>(
    params?: PropsGetterParams,
  ) => {
    return {
      class: twMerge(
        slots().indicator(),
        classNames?.indicator,
        params?.className,
      ),
    } as ComponentProps<T>;
  };

  const getSelectPickerProps = () => {
    return {
      get value() {
        return value();
      },
      get options() {
        return props.options;
      },
      onValueChange: (value: string[]) => {
        closeOnSelect() && setOpen(false);

        if (props.multiple) {
          valueChangeHandler(value);
        }

        if (!props.multiple) {
          const newValue = value[value.length - 1];
          valueChangeHandler([newValue]);
        }
      },
    } as SelectPickerProps;
  };

  return {
    Component,
    isOpen,
    multiple: (() => props.multiple) as Accessor<boolean | undefined>,
    value: value,
    hasValue,
    get startAddon() {
      return props.startAddon;
    },
    get endAddon() {
      return props.endAddon;
    },
    get startIcon() {
      return props.startIcon;
    },
    get endIcon() {
      return props.endIcon;
    },
    searchPlaceholder: (() => props.searchPlaceholder) as Accessor<string>,
    get classNames() {
      return props.classNames;
    },
    placeholder: createMemo(() => props.placeholder ?? ''),
    isPlaceholderShow: createMemo(() => !selectedOptions().length),
    withSearch: createMemo(() => props.withSearch),
    selectedOptions,
    options: createMemo(() => props.options),
    isPresence,
    removeValue,

    getContentProps,
    getRootProps,
    getValueProps,
    getPositionerProps,
    getInputWrapperProps,
    getIndicatorProps,
    getSelectPickerProps,
  };
};

export default useSelectInput;

const omittedProps: Array<keyof SelectInputProps> = [
  'withParts',
  'onChange',
  'onSearchChange',
  'onValueChange',
  'options',
  'value',
  'classNames',
  'clearSearchTermOnClose',
  'invalid',
  'multiple',
  'placeholder',
  'withSearch',
  'searchPlaceholder',
  'startIcon',
  'endIcon',
  'startAddon',
  'endAddon',
  'searchPlaceholder',
  'id',
  'ids',
  'colorPalette',
  'ref',
];
