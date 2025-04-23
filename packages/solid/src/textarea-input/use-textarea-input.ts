import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { useColorPalette } from '../use-color-palette';
import { createControlledSignal } from '../create-controlled-signal';
import { textareaInputSlots } from '@kedata-ui/slots/textarea-input';
import { dataAttrBoolean } from '@kedata-software/toolkit-js';
import clsx from 'clsx';
import {
  createMemo,
  mergeProps,
  splitProps,
  type ComponentProps,
  type ValidComponent,
} from 'solid-js';
import type { TextareaInputProps } from './index.types';
import type { PropsGetterParams } from '../types';

const defaultTextareaInputProps: TextareaInputProps = {
  rows: 5,
  initialValue: '',
  maxLength: 200,
  showCounter: true,
};

const useTextareaInput = (inProps: TextareaInputProps) => {
  const props = useBaseProps(
    'TextareaInput',
    inProps,
    defaultTextareaInputProps,
  );
  const classNames = useClassNames('TextareaInput', inProps);
  const twMerge = useTwMerge();
  const colorPaletteClassName = useColorPalette(() => props.colorPalette);
  const [value, setValue] = createControlledSignal(
    () => props.value,
    props.onValueChange,
    props.initialValue ?? '',
  );

  let textareaRef: HTMLTextAreaElement | undefined;

  const slicedValue = createMemo(() => value().slice(0, props.maxLength));

  const slots = createMemo(() =>
    textareaInputSlots({
      withParts: props.withParts,
    }),
  );

  const dataAttrs = createMemo(() => {
    return {
      get 'data-invalid'() {
        return dataAttrBoolean(props.invalid);
      },
      get 'data-disabled'() {
        return dataAttrBoolean(props.disabled);
      },
      get 'data-read-only'() {
        return dataAttrBoolean(props.readOnly);
      },
      get 'data-required'() {
        return dataAttrBoolean(props.required);
      },
    };
  });

  const [, rootProps] = splitProps(props, omittedProps);

  const getRootProps = <T extends ValidComponent = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...dataAttrs(),
      ...rootProps,
      get id() {
        return props.rootId;
      },
      class: twMerge(
        clsx(
          colorPaletteClassName(),
          slots().root(),
          props.class,
          classNames()?.root,
          params.class,
        ),
      ),
    } as ComponentProps<T>;
  };

  const getInputProps = <T extends ValidComponent = 'textarea'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(
      {
        ...dataAttrs(),
        get value() {
          return slicedValue();
        },
        get rows() {
          return props.rows;
        },
        get id() {
          return props.id;
        },
        get placeholder() {
          return props.placeholder;
        },
        get maxLength() {
          return props.maxLength;
        },
        get disabled() {
          return props.disabled;
        },
        get readOnly() {
          return props.readOnly;
        },
        onInput: (e: InputEvent & { target: HTMLTextAreaElement }) => {
          setValue(e.target.value);
        },
      },
      () => ({
        class: twMerge(
          clsx(slots().input(), classNames()?.input, params.class),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getCounterProps = <T extends ValidComponent = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...dataAttrs(),
      class: twMerge(
        clsx(slots().counter(), classNames()?.counter, params.class),
      ),
    } as ComponentProps<T>;
  };

  return {
    value: slicedValue,
    get maxLength() {
      return props.maxLength;
    },
    get showCounter() {
      return props.showCounter;
    },
    get textareaRef() {
      return textareaRef;
    },
    set textareaRef(value) {
      textareaRef = value;
      if (typeof props.ref === 'function') {
        props.ref({
          focus: () => {
            value?.focus();
          },
          blur: () => {
            value?.blur();
          },
        });
      }
    },

    getRootProps,
    getInputProps,
    getCounterProps,
  };
};

export default useTextareaInput;

const omittedProps: Array<keyof TextareaInputProps> = [
  'rootId',
  'id',
  'withParts',
  'classNames',
  'colorPalette',
  'invalid',
  'disabled',
  'readOnly',
  'required',
  'placeholder',
  'initialValue',
  'rows',
  'maxLength',
  'showCounter',
  'onValueChange',
  'ref',
];
