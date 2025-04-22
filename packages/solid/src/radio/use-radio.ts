import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { createControlledSignal } from '../create-controlled-signal';
import { useTwMerge } from '../tw-merge';
import { useColorPalette } from '../use-color-palette';
import { dataAttrBoolean } from '@kedata-software/toolkit-js';
import { radioSlots } from '@kedata-ui/slots/radio';
import clsx from 'clsx';
import {
  createMemo,
  mergeProps,
  splitProps,
  type ComponentProps,
  type ValidComponent,
} from 'solid-js';
import type { RadioProps } from './index.types';
import type { PropsGetterParams } from '../types';

const useRadio = (inProps: RadioProps) => {
  const props = useBaseProps('Radio', inProps);
  const classes = useClassNames('Radio', inProps);
  const twMerge = useTwMerge();
  const colorPaletteClassName = useColorPalette(() => props.colorPalette);

  const [checked, setChecked] = createControlledSignal(
    () => props.checked,
    props.onCheckedChange,
    props.initialChecked ?? false,
  );

  const slots = createMemo(() => {
    return radioSlots({
      withParts: props.withParts,
      darkable: props.darkable,
    });
  });

  const clickHandler = () => {
    if (props.disabled || props.readOnly) {
      return;
    }

    setChecked(!checked());
  };

  const dataAttrs = createMemo(() => ({
    'data-disabled': dataAttrBoolean(props.disabled),
    'data-checked': dataAttrBoolean(checked()),
    'data-invalid': dataAttrBoolean(props.invalid),
    'data-read-only': dataAttrBoolean(props.readOnly),
  }));

  const [, rootProps] = splitProps(props, omittedProps);

  const getRootProps = <T extends ValidComponent = 'label'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(
      () => dataAttrs(),
      () => rootProps,
      () => ({
        onClick: clickHandler,
        class: twMerge(
          clsx(
            slots().root(),
            classes()?.root,
            colorPaletteClassName(),
            props.class,
            params.className,
          ),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getControlProps = <T extends ValidComponent = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(
      () => dataAttrs(),
      () => ({
        class: twMerge(
          clsx(
            slots().control(),
            classes()?.control,
            colorPaletteClassName(),
            params.className,
          ),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getContentProps = <T extends ValidComponent = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(
      () => dataAttrs(),
      () => ({
        class: twMerge(
          clsx(slots().content(), classes()?.content, params.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getLabelProps = <T extends ValidComponent = 'span'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(
      () => dataAttrs(),
      () => ({
        class: twMerge(
          clsx(slots().label(), classes()?.label, params.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getDescriptionProps = <T extends ValidComponent = 'span'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(
      () => dataAttrs(),
      () => ({
        class: twMerge(
          clsx(slots().description(), classes()?.description, params.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getIndicatorProps = <T extends ValidComponent = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(
      () => dataAttrs(),
      () => ({
        class: twMerge(
          clsx(slots().indicator(), classes()?.indicator, params.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getHiddenInputProps = <T extends ValidComponent = 'input'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(
      () => dataAttrs(),
      () => ({
        get name() {
          return props.name;
        },
        type: 'radio' as const,
        get value() {
          return props.value;
        },
        get checked() {
          return checked();
        },
        get disabled() {
          return props.disabled;
        },
        get readOnly() {
          return props.readOnly;
        },
      }),
      () => ({
        class: twMerge(
          clsx(slots().hiddenInput(), classes()?.hiddenInput, params.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  return {
    checked,
    get description() {
      return props.description;
    },
    get label() {
      return props.label;
    },
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
