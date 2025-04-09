import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { useColorPalette } from '../use-color-palette';
import { createControlledSignal } from '../create-controlled-signal';
import { radioSlots } from '@kedata-ui/slots/radio';
import { dataAttrBoolean } from '@kedata-software/toolkit-js';
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
  const classNames = useClassNames('Radio', inProps);
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
    });
  });

  const clickHandler = () => {
    if (props.disabled || props.readOnly) {
      return;
    }

    setChecked(!checked());
  };

  const dataAttrs = createMemo(() => {
    return {
      get 'data-disabled'() {
        return dataAttrBoolean(props.disabled);
      },
      get 'data-checked'() {
        return dataAttrBoolean(checked());
      },
      get 'data-invalid'() {
        return dataAttrBoolean(props.invalid);
      },
      get 'data-read-only'() {
        return dataAttrBoolean(props.readOnly);
      },
    };
  });

  const [, rootProps] = splitProps(props, omittedProps);

  const getRootProps = <T extends ValidComponent = 'label'>(
    params?: PropsGetterParams,
  ) => {
    return {
      onClick: clickHandler,
      ...dataAttrs(),
      ...rootProps,
      class: twMerge(
        clsx(
          slots().root(),
          classNames()?.root,
          colorPaletteClassName(),
          props.class,
          params?.className,
        ),
      ),
    } as ComponentProps<T>;
  };

  const getControlProps = <T extends ValidComponent = 'div'>(
    params?: PropsGetterParams,
  ) => {
    return {
      ...dataAttrs(),
      class: twMerge(
        clsx(
          slots().control(),
          classNames()?.control,
          colorPaletteClassName(),
          params?.className,
        ),
      ),
    } as ComponentProps<T>;
  };

  const getContentProps = <T extends ValidComponent = 'div'>(
    params?: PropsGetterParams,
  ) => {
    return {
      ...dataAttrs(),
      class: twMerge(
        clsx(slots().content(), classNames()?.content, params?.className),
      ),
    } as ComponentProps<T>;
  };

  const getLabelProps = <T extends ValidComponent = 'span'>(
    params?: PropsGetterParams,
  ) => {
    return {
      ...dataAttrs(),
      class: twMerge(
        clsx(slots().label(), classNames()?.label, params?.className),
      ),
    } as ComponentProps<T>;
  };

  const getDescriptionProps = <T extends ValidComponent = 'span'>(
    params?: PropsGetterParams,
  ) => {
    return {
      ...dataAttrs(),
      class: twMerge(
        clsx(
          slots().description(),
          classNames()?.description,
          params?.className,
        ),
      ),
    } as ComponentProps<T>;
  };

  const getIndicatorProps = <T extends ValidComponent = 'div'>(
    params?: PropsGetterParams,
  ) => {
    return {
      ...dataAttrs(),
      class: twMerge(
        clsx(slots().indicator(), classNames()?.indicator, params?.className),
      ),
    } as ComponentProps<T>;
  };

  const getHiddenInputProps = <T extends ValidComponent = 'input'>(
    params?: PropsGetterParams,
  ) => {
    return mergeProps(
      () => dataAttrs(),
      () => ({
        type: 'radio' as const,
        get value() {
          return props.value;
        },
        get checked() {
          return checked();
        },
      }),
      () => ({
        class: twMerge(
          clsx(
            slots().hiddenInput(),
            classNames()?.hiddenInput,
            params?.className,
          ),
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
