import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { useColorPalette } from '../use-color-palette';
import { createControlledSignal } from '../create-controlled-signal';
import { checkboxSlots } from '@kedata-ui/slots/checkbox';
import { dataAttrBoolean } from '@kedata-software/toolkit-js';
import * as checkbox from '@zag-js/checkbox';
import { normalizeProps, useMachine } from '@zag-js/solid';
import clsx from 'clsx';
import {
  createMemo,
  createUniqueId,
  mergeProps,
  splitProps,
  type ComponentProps,
  type ValidComponent,
} from 'solid-js';
import type { CheckboxProps } from './index.types';
import type { PropsGetterParams } from '../types';

const useCheckbox = (inProps: CheckboxProps) => {
  const props = useBaseProps('Checkbox', inProps);
  const classNames = useClassNames('Checkbox', inProps);
  const twMerge = useTwMerge();
  const colorPaletteClassName = useColorPalette(() => props.colorPalette);
  let inputRef: HTMLInputElement | undefined;

  const [checked, setChecked] = createControlledSignal(
    () => props.checked,
    props.onCheckedChange,
    props.initialChecked ?? false,
  );

  const handleCheckedChange = (details: checkbox.CheckedChangeDetails) => {
    if (typeof details.checked === 'boolean') {
      setChecked(details.checked);
    }
  };

  const service = useMachine<checkbox.Schema>(checkbox.machine, () => ({
    id: createUniqueId(),
    get checked() {
      return checked();
    },
    value: 'on',
    name: 'checkbox',
    onCheckedChange: handleCheckedChange,
    ids: {
      root: props.rootId,
      hiddenInput: props.id,
    },
  }));

  const api = createMemo(() => checkbox.connect(service, normalizeProps));

  const slots = createMemo(() => {
    return checkboxSlots({
      withParts: props.withParts,
    });
  });

  const dataAttrs = createMemo(() => ({
    'data-checked': dataAttrBoolean(checked()),
    'data-invalid': dataAttrBoolean(props.invalid),
    'data-disabled': dataAttrBoolean(props.disabled),
    'data-read-only': dataAttrBoolean(props.readOnly),
    'data-indeterminate': dataAttrBoolean(props.indeterminate),
  }));

  const [, rootProps] = splitProps(props, omittedProps);

  const getRootProps = <T extends ValidComponent = 'label'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(
      () => dataAttrs(),
      () => rootProps,
      () => api().getRootProps(),
      () => ({
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
      () => dataAttrs(),
      () => api().getControlProps(),
      () => ({
        class: twMerge(
          clsx(slots().control(), classNames()?.control, params.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getIndicatorProps = <T extends ValidComponent = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(
      () => dataAttrs(),
      () => api().getIndicatorProps(),
      () => ({
        class: twMerge(
          clsx(slots().indicator(), classNames()?.indicator, params.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getLabelProps = <T extends ValidComponent = 'span'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(
      () => dataAttrs(),
      () => api().getLabelProps(),
      () => ({
        class: twMerge(
          clsx(slots().label(), classNames()?.label, params.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getHiddenInputProps = <T extends ValidComponent = 'input'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(
      () => dataAttrs(),
      () => api().getHiddenInputProps(),
      () => ({
        class: twMerge(
          clsx(
            slots().hiddenInput(),
            classNames()?.hiddenInput,
            params.className,
          ),
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
      if (typeof inProps.ref === 'function') {
        inProps.ref({
          focus() {
            ref?.focus();
          },
          blur() {
            ref?.blur();
          },
        });
      }
    },
    checked: () => checked,
    indeterminate: () => props.indeterminate,

    getRootProps,
    getControlProps,
    getIndicatorProps,
    getLabelProps,
    getHiddenInputProps,
  };
};

export default useCheckbox;

const omittedProps: Array<keyof CheckboxProps> = [
  'withParts',
  'classNames',
  'colorPalette',
  'checked',
  'disabled',
  'id',
  'rootId',
  'readOnly',
  'invalid',
  'onCheckedChange',
  'ref',
];
