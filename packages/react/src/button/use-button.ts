import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { useColorPalette } from '../use-color-palette';
import { dataAttrBoolean, omitProps } from '@kedata-software/toolkit-js';
import { buttonSlots } from '@kedata-ui/slots/button';
import clsx from 'clsx';
import type { ButtonProps } from './index.types';
import type { PropsGetterParams } from '../types';
import { useMemo, type ComponentProps } from 'react';

const useButton = (inProps: ButtonProps) => {
  const props = useBaseProps('Button', inProps, {
    colorPalette: 'primary',
  });
  const classNames = useClassNames('Button', props);
  const twMerge = useTwMerge();
  const colorPaletteClassName = useColorPalette(props.colorPalette);

  const slots = useMemo(() => {
    return buttonSlots({
      withParts: props.withParts,
      size: props.size,
      variant: props.variant,
      darkable: props.darkable,
    });
  }, [props.withParts, props.size, props.variant, props.darkable]);

  const baseDataAttrs = useMemo(() => {
    return {
      'data-disabled': dataAttrBoolean(props.disabled),
      'data-loading': dataAttrBoolean(props.loading),
      'data-variant': props.variant,
      'data-size': props.size,
      'data-color-palette': props.colorPalette,
    };
  }, [
    props.disabled,
    props.loading,
    props.variant,
    props.size,
    props.colorPalette,
  ]);

  const rootProps = omitProps(props, omittedProps);

  const getRootProps = <T extends keyof JSX.IntrinsicElements = 'button'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...baseDataAttrs,
      ...rootProps,
      disabled: props.disabled || props.loading,
      'aria-disabled': props.disabled || props.loading,
      'aria-busy': props.loading,
      className: twMerge(
        clsx(
          slots.root(),
          colorPaletteClassName,
          classNames?.root,
          props.className,
          params.className,
        ),
      ),
    } as ComponentProps<T>;
  };

  const getLoadingIconProps = (params: PropsGetterParams = {}) => {
    return {
      ...baseDataAttrs,
      className: twMerge(
        clsx(slots.loadingIcon(), classNames?.loadingIcon, params.className),
      ),
    };
  };

  const getEndIconProps = (params: PropsGetterParams = {}) => {
    return {
      ...baseDataAttrs,
      className: twMerge(
        clsx(slots.endIcon(), classNames?.endIcon, params.className),
      ),
    };
  };

  const getStartIconProps = (params: PropsGetterParams = {}) => {
    return {
      ...baseDataAttrs,
      className: twMerge(
        clsx(slots.startIcon(), classNames?.startIcon, params.className),
      ),
    };
  };

  return {
    children: props.children,
    startIcon: props.startIcon,
    endIcon: props.endIcon,
    loading: props.loading,

    getRootProps,
    getStartIconProps,
    getEndIconProps,
    getLoadingIconProps,
  };
};

export default useButton;

const omittedProps: Array<keyof ButtonProps> = [
  'withParts',
  'variant',
  'size',
  'colorPalette',
  'disabled',
  'loading',
  'classNames',
  'idAsRoot',
];
