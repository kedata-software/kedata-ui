import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { useColorPalette } from '../use-color-palette';
import { dataAttrBoolean } from '@kedata-software/toolkit-js';
import { buttonSlots } from '@kedata-ui/slots/button';
import clsx from 'clsx';
import {
  createMemo,
  mergeProps,
  splitProps,
  type ComponentProps,
  type ValidComponent,
} from 'solid-js';
import type { ButtonProps } from './index.types';
import type { PropsGetterParams } from '../types';

const useButton = (inProps: ButtonProps) => {
  const props = useBaseProps('Button', inProps, {
    colorPalette: 'primary',
  });
  const classNames = useClassNames('Button', props);
  const twMerge = useTwMerge();
  const colorPaletteClassName = useColorPalette(() => props.colorPalette);

  const slots = createMemo(() => {
    return buttonSlots({
      withParts: props.withParts,
      size: props.size,
      variant: props.variant,
      darkable: props.darkable,
    });
  });

  const baseDataAttrs = createMemo(() => {
    return {
      get 'data-disabled'() {
        return dataAttrBoolean(props.disabled);
      },
      get 'data-loading'() {
        return dataAttrBoolean(props.loading);
      },
      get 'data-variant'() {
        return props.variant;
      },
      get 'data-size'() {
        return props.size;
      },
      get 'data-color-palette'() {
        return props.colorPalette;
      },
    };
  });

  const [, rootProps] = splitProps(props, omittedProps);

  const getRootProps = <T extends ValidComponent = 'button'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(
      () => baseDataAttrs(),
      () => rootProps,
      {
        get disabled() {
          return props.disabled || props.loading;
        },
        get 'aria-disabled'() {
          return props.disabled || props.loading;
        },
        get 'aria-busy'() {
          return props.loading;
        },
      },
      () => ({
        class: twMerge(
          clsx(
            slots().root(),
            colorPaletteClassName(),
            classNames()?.root,
            props.class,
            params.class,
          ),
        ),
      }),
    ) as ComponentProps<T>;
  };

  const getLoadingIconProps = (params: PropsGetterParams = {}) => {
    return mergeProps(
      () => baseDataAttrs(),
      () => ({
        class: twMerge(
          clsx(slots().loadingIcon(), classNames()?.loadingIcon, params.class),
        ),
      }),
    );
  };

  const getEndIconProps = (params: PropsGetterParams = {}) => {
    return mergeProps(
      () => baseDataAttrs(),
      () => ({
        class: twMerge(
          clsx(slots().endIcon(), classNames()?.endIcon, params.class),
        ),
      }),
    );
  };

  const getStartIconProps = (params: PropsGetterParams = {}) => {
    return mergeProps(
      () => baseDataAttrs(),
      () => ({
        class: twMerge(
          clsx(slots().startIcon(), classNames()?.startIcon, params.class),
        ),
      }),
    );
  };

  return {
    children: props.children,
    startIcon: props.startIcon,
    endIcon: props.endIcon,
    loading: () => props.loading,

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
