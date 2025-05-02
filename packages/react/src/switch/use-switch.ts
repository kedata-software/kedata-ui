import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { useColorPalette } from '../use-color-palette';
import { useControlledSignal } from '../use-controlled-signal';
import { switchSlots } from '@kedata-ui/slots/switch';
import { dataAttrBoolean, omitProps } from '@kedata-software/toolkit-js';
import { normalizeProps, useMachine } from '@zag-js/solid';
import * as zagSwitch from '@zag-js/switch';
import clsx from 'clsx';
import type { SwitchProps } from './index.types';
import type { PropsGetterParams } from '../types';
import { useId, useMemo, useRef, type ComponentProps } from 'react';

const useSwitch = (inProps: SwitchProps) => {
  const props = useBaseProps('Switch', inProps);
  const classNames = useClassNames('Switch', inProps);
  const colorPaletteClassName = useColorPalette(props.colorPalette);
  const twMerge = useTwMerge();
  const [checked, setChecked] = useControlledSignal(
    props.checked,
    props.onCheckedChange,
    props.initialChecked ?? false,
  );

  let inputRef = useRef<HTMLInputElement | null>(null);
  const _id = useId();
  const rootId = props.rootId ?? _id;

  const service = useMachine(zagSwitch.machine, {
    id: props.id,
    get checked() {
      return checked;
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
      get root() {
        return rootId;
      },
    },
    onCheckedChange: ({ checked }) => {
      setChecked(checked);
    },
  });

  const api = zagSwitch.connect(service, normalizeProps);

  const slots = useMemo(
    () =>
      switchSlots({
        withParts: props.withParts,
      }),
    [props.withParts],
  );

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
      ...api.getRootProps(),
      ...rootProps,
      role: 'switch',
      'aria-checked': checked,
      id: rootId,
      className: twMerge(
        clsx(
          colorPaletteClassName,
          slots.root(),
          classNames?.root,
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
      ...api.getControlProps(),
      className: twMerge(
        clsx(slots.control(), classNames?.control, params.className),
      ),
    } as ComponentProps<T>;
  };

  const getThumbProps = <T extends keyof JSX.IntrinsicElements = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...dataAttrs,
      ...api.getThumbProps(),
      className: twMerge(
        clsx(slots.thumb(), classNames?.thumb, params.className),
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
      children: props.label,
    } as ComponentProps<T>;
  };

  const getHiddenInputProps = <T extends keyof JSX.IntrinsicElements = 'input'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...dataAttrs,
      ...api.getHiddenInputProps(),
      className: twMerge(
        clsx(slots.hiddenInput(), classNames?.label, params.className),
      ),
    } as ComponentProps<T>;
  };

  return {
    inputRef,
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
  'rootId',
];
