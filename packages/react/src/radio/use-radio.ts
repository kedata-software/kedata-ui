import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useControlledSignal } from '../use-controlled-signal';
import { useTwMerge } from '../tw-merge';
import { useColorPalette } from '../use-color-palette';
import { dataAttrBoolean, omitProps } from '@kedata-software/toolkit-js';
import { radioSlots } from '@kedata-ui/slots/radio';
import clsx from 'clsx';
import type { RadioProps } from './index.types';
import type { PropsGetterParams } from '../types';
import { useMemo, type ComponentProps } from 'react';

const useRadio = (inProps: RadioProps) => {
  const props = useBaseProps('Radio', inProps);
  const classes = useClassNames('Radio', inProps);
  const twMerge = useTwMerge();
  const colorPaletteClassName = useColorPalette(props.colorPalette);

  const [checked, setChecked] = useControlledSignal(
    props.checked,
    props.onCheckedChange,
    props.initialChecked ?? false,
  );

  const slots = useMemo(() => {
    return radioSlots({
      withParts: props.withParts,
      darkable: props.darkable,
    });
  }, [props.withParts, props.darkable]);

  const clickHandler = () => {
    if (props.disabled || props.readOnly) {
      return;
    }

    setChecked(!checked);
  };

  const dataAttrs = useMemo(
    () => ({
      'data-disabled': dataAttrBoolean(props.disabled),
      'data-checked': dataAttrBoolean(checked),
      'data-invalid': dataAttrBoolean(props.invalid),
      'data-read-only': dataAttrBoolean(props.readOnly),
    }),
    [props.disabled, props.invalid, props.readOnly, checked],
  );

  const rootProps = omitProps(props, omittedProps);

  const getRootProps = <T extends keyof JSX.IntrinsicElements = 'label'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...dataAttrs,
      ...rootProps,
      onClick: clickHandler,
      className: twMerge(
        clsx(
          slots.root(),
          classes?.root,
          colorPaletteClassName,
          props.className,
          params.className,
        ),
      ),
    } as ComponentProps<T>;
  };

  const getControlProps = <T extends keyof JSX.IntrinsicElements = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...dataAttrs,
      className: twMerge(
        clsx(
          slots.control(),
          classes?.control,
          colorPaletteClassName,
          params.className,
        ),
      ),
    } as ComponentProps<T>;
  };

  const getContentProps = <T extends keyof JSX.IntrinsicElements = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...dataAttrs,
      className: twMerge(
        clsx(slots.content(), classes?.content, params.className),
      ),
    } as ComponentProps<T>;
  };

  const getLabelProps = <T extends keyof JSX.IntrinsicElements = 'span'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...dataAttrs,
      className: twMerge(clsx(slots.label(), classes?.label, params.className)),
    } as ComponentProps<T>;
  };

  const getDescriptionProps = <T extends keyof JSX.IntrinsicElements = 'span'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...dataAttrs,
      className: twMerge(
        clsx(slots.description(), classes?.description, params.className),
      ),
    } as ComponentProps<T>;
  };

  const getIndicatorProps = <T extends keyof JSX.IntrinsicElements = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...dataAttrs,
      className: twMerge(
        clsx(slots.indicator(), classes?.indicator, params.className),
      ),
    } as ComponentProps<T>;
  };

  const getHiddenInputProps = <T extends keyof JSX.IntrinsicElements = 'input'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...dataAttrs,
      name: props.name,
      type: 'radio' as const,
      value: props.value,
      checked,
      disabled: props.disabled,
      readOnly: props.readOnly,
      className: twMerge(
        clsx(slots.hiddenInput(), classes?.hiddenInput, params.className),
      ),
    } as ComponentProps<T>;
  };

  return {
    checked,
    description: props.description,
    label: props.label,

    getRootProps,
    getControlProps,
    getContentProps,
    getLabelProps,
    getDescriptionProps,
    getIndicatorProps,
    getHiddenInputProps,
  };
};

export default useRadio;

const omittedProps: Array<keyof Omit<RadioProps, 'ref'>> = [
  'withParts',
  'onChange',
  'colorPalette',
  'label',
  'description',
  'onCheckedChange',
  'checked',
  'initialChecked',
  'disabled',
  'invalid',
  'readOnly',
];
