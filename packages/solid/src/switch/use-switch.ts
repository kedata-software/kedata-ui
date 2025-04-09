import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { useColorPalette } from '../use-color-palette';
import { createControlledSignal } from '../create-controlled-signal';
import { switchSlots } from '@kedata-ui/slots/switch';
import { dataAttrBoolean } from '@kedata-software/toolkit-js';
import { normalizeProps, useMachine } from '@zag-js/solid';
import * as zagSwitch from '@zag-js/switch';
import clsx from 'clsx';
import {
  createMemo,
  mergeProps,
  splitProps,
  type ComponentProps,
  type ValidComponent,
} from 'solid-js';
import type { SwitchProps } from './index.types';
import type { PropsGetterParams } from '../types';

const useSwitch = (inProps: SwitchProps) => {
  const props = useBaseProps('Switch', inProps);
  const classNames = useClassNames('Switch', inProps);
  const colorPaletteClassName = useColorPalette(() => props.colorPalette);
  const twMerge = useTwMerge();
  const [checked, setChecked] = createControlledSignal(
    () => props.checked,
    props.onCheckedChange,
    props.initialChecked ?? false,
  );

  let inputRef: HTMLInputElement | undefined;

  const service = useMachine(zagSwitch.machine, {
    id: props.id,
    get checked() {
      return checked();
    },
    get disabled() {
      return props.disabled;
    },
    get invalid() {
      return props.invalid;
    },
    get readOnly() {
      return props.readOnly;
    },
    get value() {
      return props.value;
    },
    get name() {
      return props.name;
    },
    ids: {
      ...props.ids,
      get hiddenInput() {
        return props.id;
      },
    },
    onCheckedChange: ({ checked }) => {
      setChecked(checked);
    },
  });

  const api = createMemo(() => zagSwitch.connect(service, normalizeProps));

  const slots = createMemo(() =>
    switchSlots({
      withParts: props.withParts,
    }),
  );

  const baseDataAttrs = createMemo(() => {
    return {
      get ['data-disabled']() {
        return dataAttrBoolean(props.disabled);
      },
      get ['data-checked']() {
        return dataAttrBoolean(checked());
      },
      get ['data-invalid']() {
        return dataAttrBoolean(props.invalid);
      },
      get ['data-read-only']() {
        return dataAttrBoolean(props.readOnly);
      },
    };
  });

  const [, baseProps] = splitProps(props, omittedProps);

  const getRootProps = <T extends ValidComponent = 'root'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(
      () => baseDataAttrs(),
      () => api().getRootProps(),
      () => baseProps,
      () => ({
        role: 'switch' as const,
        get ['aria-checked']() {
          return checked();
        },
        class: twMerge(
          clsx(
            colorPaletteClassName(),
            slots().root(),
            classNames()?.root,
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
      () => baseDataAttrs(),
      () => api().getControlProps(),
      () => ({
        class: twMerge(
          clsx(slots().control(), classNames()?.control, params.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getThumbProps = <T extends ValidComponent = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(
      () => baseDataAttrs(),
      () => api().getThumbProps(),
      () => ({
        class: twMerge(
          clsx(slots().thumb(), classNames()?.thumb, params.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getLabelProps = <T extends ValidComponent = 'span'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(
      () => baseDataAttrs(),
      () => api().getLabelProps(),
      () => ({
        class: twMerge(
          clsx(slots().label(), classNames()?.label, params.className),
        ),
        children: props.label,
      }),
    ) as ComponentProps<T>;
  };

  const getHiddenInputProps = <T extends ValidComponent = 'input'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(
      () => baseDataAttrs(),
      () => api().getHiddenInputProps(),
      () => ({
        class: twMerge(
          clsx(slots().hiddenInput(), classNames()?.label, params.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  return {
    get inputRef() {
      return inputRef;
    },
    set inputRef(ref: HTMLInputElement | undefined) {
      inputRef = ref;
      if (typeof props.ref === 'function') {
        props.ref({
          blur() {
            ref?.blur();
          },
          focus() {
            ref?.focus();
          },
        });
      }
    },
    checked,
    get label() {
      return props.label;
    },

    getRootProps,
    getControlProps,
    getThumbProps,
    getLabelProps,
    getHiddenInputProps,
  };
};

export default useSwitch;

const omittedProps: Array<keyof SwitchProps> = [
  'withParts',
  'ids',
  'id',
  'classNames',
  'colorPalette',
  'onCheckedChange',
  'checked',
  'disabled',
  'invalid',
  'readOnly',
  'label',
  'name',
  'value',
  'ref',
];
