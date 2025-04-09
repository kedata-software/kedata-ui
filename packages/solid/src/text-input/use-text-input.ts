import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { useColorPalette } from '../use-color-palette';
import { createControlledSignal } from '../create-controlled-signal';
import { textInputSlots } from '@kedata-ui/slots/text-input';
import { dataAttrBoolean } from '@kedata-software/toolkit-js';
import clsx from 'clsx';
import {
  createMemo,
  splitProps,
  type ComponentProps,
  type ValidComponent,
} from 'solid-js';
import type { TextInputProps } from './index.types';
import type { PropsGetterParams } from '../types';

const defaultTextInputProps: TextInputProps = {
  type: 'text',
};

const useTextInput = (inProps: TextInputProps) => {
  const props = useBaseProps('TextInput', inProps, defaultTextInputProps);
  const classNames = useClassNames('TextInput', inProps);
  const colorPaletteClassName = useColorPalette(() => props.colorPalette);
  const twMerge = useTwMerge();
  let inputRef: HTMLInputElement | undefined;

  const [value, setValue] = createControlledSignal(
    () => props.value,
    props.onValueChange,
    props.initialValue ?? '',
  );

  const slots = createMemo(() => {
    return textInputSlots({ withParts: props.withParts });
  });

  const [, rootProps] = splitProps(props, omittedProps);

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
      get 'data-has-start-addon'() {
        return dataAttrBoolean(props.startAddon);
      },
      get 'data-has-end-addon'() {
        return dataAttrBoolean(props.endAddon);
      },
      get 'data-has-start-icon'() {
        return dataAttrBoolean(props.startIcon);
      },
      get 'data-has-end-icon'() {
        return dataAttrBoolean(props.endIcon);
      },
    };
  });

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
          props?.class,
          classNames()?.root,
          params.className,
        ),
      ),
    } as ComponentProps<T>;
  };

  const getInputProps = <T extends ValidComponent = 'input'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...dataAttrs(),
      get disabled() {
        return props.disabled;
      },
      get readOnly() {
        return props.readOnly;
      },
      get autoFocus() {
        return props.autoFocus;
      },
      get id() {
        return props.id;
      },
      get 'aria-describedby'() {
        return props.invalid ? `${props.id}__error-message` : undefined;
      },
      get value() {
        return value();
      },
      get placeholder() {
        return props.placeholder;
      },
      onInput: (e: any) => {
        setValue(e.target.value);
      },
      get type() {
        return props.type;
      },
      class: twMerge(
        clsx(slots().input(), classNames()?.input, params.className),
      ),
    } as ComponentProps<T>;
  };

  const getInputWrapperProps = <T extends ValidComponent = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...dataAttrs(),
      class: twMerge(
        clsx(
          slots().inputWrapper(),
          classNames()?.inputWrapper,
          params.className,
        ),
      ),
    } as ComponentProps<T>;
  };

  const getStartAddonProps = <T extends ValidComponent = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...dataAttrs(),
      class: twMerge(
        clsx(slots().startAddon(), classNames()?.startAddon, params.className),
      ),
    } as ComponentProps<T>;
  };

  const getStartIconProps = <T extends ValidComponent = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...dataAttrs(),
      class: twMerge(
        clsx(slots().startIcon(), classNames()?.startIcon, params.className),
      ),
    } as ComponentProps<T>;
  };

  const getEndAddonProps = <T extends ValidComponent = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...dataAttrs(),
      class: twMerge(
        clsx(slots().endAddon(), classNames()?.endAddon, params.className),
      ),
    } as ComponentProps<T>;
  };

  const getEndIconProps = (params: PropsGetterParams = {}) => {
    return {
      ...dataAttrs(),
      class: twMerge(
        clsx(slots().endIcon(), classNames()?.endIcon, params.className),
      ),
    };
  };

  return {
    value,
    startAddon: props.startAddon,
    endAddon: props.endAddon,
    startIcon: props.startIcon,
    endIcon: props.endIcon,
    get inputRef() {
      return inputRef;
    },
    set inputRef(value) {
      inputRef = value;
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
