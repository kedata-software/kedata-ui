import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { useColorPalette } from '../use-color-palette';
import { useControlledSignal } from '../use-controlled-signal';
import { checkboxSlots } from '@kedata-ui/slots/checkbox';
import { dataAttrBoolean, omitProps } from '@kedata-software/toolkit-js';
import * as checkbox from '@zag-js/checkbox';
import { normalizeProps, useMachine } from '@zag-js/react';
import clsx from 'clsx';
import type { CheckboxProps } from './index.types';
import type { PropsGetterParams } from '../types';
import {
  useImperativeHandle,
  useMemo,
  useRef,
  type ComponentProps,
} from 'react';

const useCheckbox = (inProps: CheckboxProps) => {
  const props = useBaseProps('Checkbox', inProps);
  const classNames = useClassNames('Checkbox', inProps);
  const twMerge = useTwMerge();
  const colorPaletteClassName = useColorPalette(props.colorPalette);
  let inputRef = useRef<HTMLInputElement>(null);

  const [checked, setChecked] = useControlledSignal(
    props.checked,
    props.onCheckedChange,
    props.initialChecked ?? false,
  );

  const handleCheckedChange = (details: checkbox.CheckedChangeDetails) => {
    if (typeof details.checked === 'boolean') {
      setChecked(details.checked);
    }
  };

  const service = useMachine<checkbox.Schema>(checkbox.machine, {
    id: props.id,
    checked,
    value: 'on',
    name: 'checkbox',
    onCheckedChange: handleCheckedChange,
    ids: {
      root: props.rootId,
      hiddenInput: props.id,
    },
  });

  const api = checkbox.connect(service, normalizeProps);

  const slots = useMemo(() => {
    return checkboxSlots({
      withParts: props.withParts,
    });
  }, [props.withParts]);

  const dataAttrs = useMemo(
    () => ({
      'data-checked': dataAttrBoolean(checked),
      'data-invalid': dataAttrBoolean(props.invalid),
      'data-disabled': dataAttrBoolean(props.disabled),
      'data-read-only': dataAttrBoolean(props.readOnly),
      'data-indeterminate': dataAttrBoolean(props.indeterminate),
    }),
    [
      checked,
      props.invalid,
      props.disabled,
      props.readOnly,
      props.indeterminate,
    ],
  );

  const rootProps = omitProps(props, omittedProps);

  const getRootProps = <T extends keyof JSX.IntrinsicElements = 'label'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...dataAttrs,
      ...rootProps,
      ...api.getRootProps(),
      className: twMerge(
        clsx(
          colorPaletteClassName,
          slots.root(),
          classNames?.root,
          props.class,
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
      ...api.getControlProps(),
      className: twMerge(
        clsx(slots.control(), classNames?.control, params.className),
      ),
    } as ComponentProps<T>;
  };

  const getIndicatorProps = <T extends keyof JSX.IntrinsicElements = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...dataAttrs,
      ...api.getIndicatorProps(),
      className: twMerge(
        clsx(slots.indicator(), classNames?.indicator, params.className),
      ),
    } as ComponentProps<T>;
  };

  const getLabelProps = <T extends keyof JSX.IntrinsicElements = 'span'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...dataAttrs,
      ...api.getLabelProps(),
      className: twMerge(
        clsx(slots.label(), classNames?.label, params.className),
      ),
    } as ComponentProps<T>;
  };

  const getHiddenInputProps = <T extends keyof JSX.IntrinsicElements = 'input'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...dataAttrs,
      ...api.getHiddenInputProps(),
      className: twMerge(
        clsx(slots.hiddenInput(), classNames?.hiddenInput, params.className),
      ),
    } as ComponentProps<T>;
  };

  useImperativeHandle(inProps.ref, () => ({
    focus() {
      inputRef.current?.focus();
    },
    blur() {
      inputRef.current?.blur();
    },
  }));

  return {
    inputRef,
    checked: checked,
    indeterminate: props.indeterminate,

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
