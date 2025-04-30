import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { useColorPalette } from '../use-color-palette';
import { omitProps } from '@kedata-software/toolkit-js';
import { avatarSlots } from '@kedata-ui/slots/avatar';
import * as avatar from '@zag-js/avatar';
import { normalizeProps, useMachine } from '@zag-js/react';
import clsx from 'clsx';
import type { AvatarProps } from './index.types';
import type { PropsGetterParams } from '../types';
import { useMemo, type ComponentProps } from 'react';

const useAvatar = (inProps: AvatarProps) => {
  const props = useBaseProps('Avatar', inProps);
  const classNames = useClassNames('Avatar', inProps);
  const twMerge = useTwMerge();
  const colorPaletteClassName = useColorPalette(props.colorPalette);

  const slots = useMemo(() => {
    return avatarSlots({
      withParts: props.withParts,
    });
  }, [props.withParts]);

  const service = useMachine(avatar.machine, {
    id: props.id,
  });

  const avatarApi = avatar.connect(service, normalizeProps);
  const rootProps = omitProps(props, omittedProps);

  const getRootProps = <T extends keyof JSX.IntrinsicElements = 'div'>(
    params?: PropsGetterParams,
  ) => {
    return {
      ...avatarApi.getRootProps(),
      ...rootProps,
      className: twMerge(
        clsx(
          colorPaletteClassName,
          slots.root(),
          props.className,
          classNames?.root,
          params?.className,
        ),
      ),
    } as ComponentProps<T>;
  };

  const getFallbackProps = <T extends keyof JSX.IntrinsicElements = 'span'>(
    params?: PropsGetterParams,
  ) => {
    return {
      ...avatarApi.getFallbackProps(),
      className: twMerge(
        clsx(slots.fallback(), classNames?.fallback, params?.className),
      ),
    } as ComponentProps<T>;
  };

  const getImageProps = <T extends keyof JSX.IntrinsicElements = 'img'>(
    params?: PropsGetterParams,
  ) => {
    return {
      ...avatarApi.getImageProps(),
      src: props.src,
      alt: props.alt,
      className: twMerge(
        clsx(slots.image(), classNames?.image, params?.className),
      ),
    } as ComponentProps<T>;
  };

  return {
    fallback: props.fallback,
    src: props.src,

    getRootProps,
    getFallbackProps,
    getImageProps,
  };
};

export default useAvatar;

const omittedProps: Array<keyof Omit<AvatarProps, 'ref'>> = [
  'withParts',
  'alt',
  'src',
  'fallback',
  'classNames',
  'ids',
  'colorPalette',
];
