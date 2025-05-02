import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { useColorPalette } from '../use-color-palette';
import { tagSlots } from '@kedata-ui/slots/tag';
import clsx from 'clsx';
import type { TagProps } from './index.types';
import type { PropsGetterParams } from '../types';
import { dataAttrBoolean, omitProps } from '@kedata-software/toolkit-js';
import { useMemo, type ComponentProps } from 'react';

const tagDefaultProps: TagProps = {
  closeable: false,
};

const useTag = (inProps: TagProps) => {
  const props = useBaseProps('Tag', inProps, tagDefaultProps);
  const classNames = useClassNames('Tag', inProps);
  const colorPaletteClassName = useColorPalette(props.colorPalette);

  const twMerge = useTwMerge();

  const slots = useMemo(() => {
    return tagSlots({
      variant: props.variant,
      withParts: props.withParts,
    });
  }, [props.variant, props.withParts]);

  const baseDataAttrs = useMemo(
    () => ({
      get 'data-closeable'() {
        return dataAttrBoolean(props.closeable);
      },
      get 'data-variant'() {
        return props.variant;
      },
    }),
    [props.closeable, props.variant],
  );

  const rootProps = omitProps(props, omittedProps);

  const getRootProps = <T extends keyof JSX.IntrinsicElements = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...baseDataAttrs,
      ...rootProps,
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

  const getCloseIconProps = <T extends keyof JSX.IntrinsicElements = 'svg'>(
    params: PropsGetterParams = {},
  ) => {
    return {
      ...baseDataAttrs,
      className: twMerge(
        clsx(slots.closeIcon(), classNames?.closeIcon, params.className),
      ),
    } as ComponentProps<T>;
  };

  return {
    closeable: props.closeable,
    children: props.children,

    getRootProps,
    getCloseIconProps,
  };
};

export default useTag;

const omittedProps: Array<keyof Omit<TagProps, 'ref'>> = [
  'withParts',
  'colorPalette',
  'variant',
  'closeable',
  'scopeName',
  'classNames',
];
