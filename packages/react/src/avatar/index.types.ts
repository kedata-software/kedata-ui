import type {
  AvatarClassNames,
  AvatarIds,
  ColorPalette,
} from '@kedata-ui/slots';
import type { ComponentProps } from 'react';

export type AvatarBaseProps = {
  alt?: string;
  src?: string;
  fallback?: string;
  id?: string;
  ids?: AvatarIds;
  colorPalette?: ColorPalette;
  classNames?: AvatarClassNames;
  withParts?: boolean;
};

export type AvatarProps = AvatarBaseProps & ComponentProps<'div'>;
