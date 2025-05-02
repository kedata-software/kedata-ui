import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { useColorPalette } from '../use-color-palette';
import { useControlledSignal } from '../use-controlled-signal';
import { dataAttrBoolean, omitProps } from '@kedata-software/toolkit-js';
import { textInputSlots } from '@kedata-ui/slots/text-input';
import clsx from 'clsx';
import type { TextInputProps } from './index.types';
import type { PropsGetterParams } from '../types';
import { useMemo, useRef, type ComponentProps } from 'react';

const defaultTextInputProps: TextInputProps = {
  type: 'text',
};

const useTextInput = (inProps: TextInputProps) => {
  const props = useBaseProps('TextInput', inProps, defaultTextInputProps);
  const classNames = useClassNames('TextInput', inProps);
  const colorPaletteClassName = useColorPalette(props.colorPalette);
  const twMerge = useTwMerge();
  let inputRef = useRef<HTMLInputElement | null>(null);

  const [value, setValue] = useControlledSignal(
    props.value,
    props.onValueChange,
    props.initialValue ?? '',
  );

  const slots = useMemo(() => {
    return textInputSlots({ withParts: props.withParts });
  }, [props.withParts]);

  const rootProps = omitProps(props, omittedProps);

  const dataAttrs = useMemo(() => {
    return {
      'data-invalid': dataAttrBoolean(props.invalid),
      'data-disabled': dataAttrBoolean(props.disabled),
      'data-read-only': dataAttrBoolean(props.readOnly),
      'data-required': dataAttrBoolean(props.required),
      'data-has-start-addon': dataAttrBoolean(props.startAddon),
      'data-has-end-addon': dataAttrBoolean(props.endAddon),
      'data-has-start-icon': dataAttrBoolean(props.startIcon),
      'data-has-end-icon': dataAttrBoolean(props.endIcon),
    };
  }, [
    props.invalid,
    props.disabled,
    props.readOnly,
    props.required,
    props.startAddon,
    props.endAddon,
    props.startIcon,
    props.endIcon,
  ]);

  const getRootProps = <T extends keyof JSX.IntrinsicElements = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...dataAttrs,
      ...rootProps,
      id: props.rootId,
      className: twMerge(
        clsx(
          colorPaletteClassName,
          slots.root(),
          props?.class,
          classNames?.root,
          params.className,
        ),
      ),
    } as ComponentProps<T>;
  };

  const getInputProps = <T extends keyof JSX.IntrinsicElements = 'input'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...dataAttrs,
      disabled: props.disabled,
      readOnly: props.readOnly,
      autoFocus: props.autoFocus,
      id: props.id,
      'aria-describedby': props.invalid
        ? `${props.id}__error-message`
        : undefined,
      value,
      placeholder: props.placeholder,
      onInput: (e: any) => {
        setValue(e.target.value);
      },
      type: props.type,
      className: twMerge(
        clsx(slots.input(), classNames?.input, params.className),
      ),
    } as ComponentProps<T>;
  };

  const getInputWrapperProps = <T extends keyof JSX.IntrinsicElements = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...dataAttrs,
      className: twMerge(
        clsx(slots.inputWrapper(), classNames?.inputWrapper, params.className),
      ),
    } as ComponentProps<T>;
  };

  const getStartAddonProps = <T extends keyof JSX.IntrinsicElements = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...dataAttrs,
      className: twMerge(
        clsx(slots.startAddon(), classNames?.startAddon, params.className),
      ),
    } as ComponentProps<T>;
  };

  const getStartIconProps = <T extends keyof JSX.IntrinsicElements = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...dataAttrs,
      className: twMerge(
        clsx(slots.startIcon(), classNames?.startIcon, params.className),
      ),
    } as ComponentProps<T>;
  };

  const getEndAddonProps = <T extends keyof JSX.IntrinsicElements = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...dataAttrs,
      className: twMerge(
        clsx(slots.endAddon(), classNames?.endAddon, params.className),
      ),
    } as ComponentProps<T>;
  };

  const getEndIconProps = (params: PropsGetterParams = {}) => {
    return {
      ...dataAttrs,
      className: twMerge(
        clsx(slots.endIcon(), classNames?.endIcon, params.className),
      ),
    };
  };

  return {
    value,
    startAddon: props.startAddon,
    endAddon: props.endAddon,
    startIcon: props.startIcon,
    endIcon: props.endIcon,
    inputRef,

    getRootProps,
    getInputWrapperProps,
    getInputProps,
    getStartAddonProps,
    getStartIconProps,
    getEndAddonProps,
    getEndIconProps,
  };
};

export default useTextInput;

const omittedProps: Array<keyof TextInputProps> = [
  'withParts',
  'value',
  'initialValue',
  'onChange',
  'classNames',
  'startAddon',
  'endAddon',
  'placeholder',
  'startIcon',
  'endIcon',
  'type',
  'id',
  'rootId',
  'colorPalette',
  'invalid',
  'disabled',
  'readOnly',
  'onValueChange',
  'autoFocus',
  'ref',
];
