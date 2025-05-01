import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import useColorPalette from '../use-color-palette';
import { omitProps } from '@kedata-software/toolkit-js';
import { badgeSlots } from '@kedata-ui/slots/badge';
import clsx from 'clsx';
import type { BadgeProps } from './index.types';
import { useMemo, type ComponentProps } from 'react';

const defaultBadgeProps: BadgeProps = {
  variant: 'subtle',
};

const useBadge = (inProps: BadgeProps) => {
  const props = useBaseProps('Badge', inProps, defaultBadgeProps);
  const classNames = useClassNames('Badge', props);
  const colorPaletteClassName = useColorPalette(props.colorPalette);
  const twMerge = useTwMerge();

  const slots = useMemo(() => {
    return badgeSlots({
      withParts: props.withParts,
      variant: props.variant,
    });
  }, [props.withParts, props.variant]);

  const dataAttrs = useMemo(
    () => ({
      'data-variant': props.variant,
    }),
    [props.variant],
  );

  const rootProps = omitProps(props, omittedProps);

  const getRootProps = <T extends keyof JSX.IntrinsicElements = 'div'>() => {
    return {
      ...dataAttrs,
      ...rootProps,
      className: twMerge(
        clsx(
          colorPaletteClassName,
          slots.root(),
          props.className,
          classNames?.root,
        ),
      ),
    } as ComponentProps<T>;
  };

  return {
    children: props.children,

    getRootProps,
  };
};

export default useBadge;

const omittedProps: Array<keyof BadgeProps> = [
  'withParts',
  'variant',
  'classNames',
  'colorPalette',
];
