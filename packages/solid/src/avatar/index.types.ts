import type {
  AvatarClassNames,
  AvatarIds,
  ColorPalette,
} from '@kedata-ui/slots';
import type { ComponentProps } from 'solid-js';

export type AvatarBaseProps = {
  alt?: string;
  src?: string;
  fallback?: string;
  id?: string;
  ids?: AvatarIds;
  idAsRoot?: boolean;
  colorPalette?: ColorPalette;
  classNames?: AvatarClassNames;
  withParts?: boolean;
};

export type AvatarProps = AvatarBaseProps & ComponentProps<'div'>;
