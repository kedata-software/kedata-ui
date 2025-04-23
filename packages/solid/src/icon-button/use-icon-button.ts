import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { useColorPalette } from '../use-color-palette';
import { iconButtonSlots } from '@kedata-ui/slots/icon-button';
import clsx from 'clsx';
import { createMemo, mergeProps, splitProps } from 'solid-js';
import type { IconButtonProps } from './index.types';
import type { PropsGetterParams } from '../types';

const useIconButton = (inProps: IconButtonProps) => {
  const props = useBaseProps('IconButton', inProps);
  const classNames = useClassNames('IconButton', inProps);
  const twMerge = useTwMerge();
  const colorPaletteClassName = useColorPalette(() => props.colorPalette);

  const slots = createMemo(() => {
    return iconButtonSlots({
      variant: props.variant,
      size: props.size,
      withParts: props.withParts,
    });
  });

  const [, rootProps] = splitProps(props, omittedProps);

  const getRootProps = (params?: PropsGetterParams) => {
    return mergeProps(
      () => rootProps,
      () => ({
        class: twMerge(
          clsx(
            slots().root(),
            colorPaletteClassName(),
            classNames()?.root,
            props.class,
            params?.class,
          ),
        ),
      }),
    );
  };

  const getLoadingIconProps = (params?: PropsGetterParams) => {
    return {
      class: twMerge(
        clsx(slots().lodingIcon(), classNames()?.lodingIcon, params?.class),
      ),
    };
  };

  const getIconProps = (params?: PropsGetterParams) => {
    return {
      class: twMerge(clsx(slots().icon(), classNames()?.icon, params?.class)),
    };
  };

  return {
    loading: createMemo(() => props.loading),
    children: props.children,

    getRootProps,
    getLoadingIconProps,
    getIconProps,
  };
};

export default useIconButton;

const omittedProps: Array<keyof IconButtonProps> = [
  'withParts',
  'ids',
  'colorPalette',
  'disabled',
  'loading',
  'size',
  'variant',
  'classNames',
  'idAsRoot',
];
