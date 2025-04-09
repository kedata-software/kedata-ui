import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { useColorPalette } from '../use-color-palette';
import { tagSlots } from '@kedata-ui/slots/tag';
import clsx from 'clsx';
import {
  createMemo,
  mergeProps,
  splitProps,
  type ComponentProps,
  type ValidComponent,
} from 'solid-js';
import type { TagProps } from './index.types';
import type { PropsGetterParams } from '../types';
import { dataAttrBoolean } from '@kedata-software/toolkit-js';

const tagDefaultProps: TagProps = {
  closeable: false,
};

const useTag = (inProps: TagProps) => {
  const props = useBaseProps('Tag', inProps, tagDefaultProps);
  const classNames = useClassNames('Tag', inProps);
  const colorPaletteClassName = useColorPalette(() => props.colorPalette);

  const twMerge = useTwMerge();

  const slots = createMemo(() => {
    return tagSlots({
      variant: props.variant,
      withParts: props.withParts,
    });
  });

  const baseDataAttrs = createMemo(() => ({
    get 'data-closeable'() {
      return dataAttrBoolean(props.closeable);
    },
    get 'data-variant'() {
      return props.variant;
    },
  }));

  const [, rootProps] = splitProps(props, omittedProps);

  const getRootProps = <T extends ValidComponent = 'div'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(
      () => baseDataAttrs(),
      () => rootProps,
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

  const getCloseIconProps = <T extends ValidComponent = 'svg'>(
    params: PropsGetterParams = {},
  ) => {
    return mergeProps(
      () => baseDataAttrs(),
      () => ({
        class: twMerge(
          clsx(slots().closeIcon(), classNames()?.closeIcon, params.className),
        ),
      }),
    ) as ComponentProps<T>;
  };

  return {
    get closeable() {
      return props.closeable;
    },
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
