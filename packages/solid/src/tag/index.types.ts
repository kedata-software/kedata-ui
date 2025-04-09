import type {
  ColorPalette,
  TagClassNames,
  TagIds,
  TagVariant,
} from '@kedata-ui/slots';
import type { ComponentProps } from 'solid-js';

export type TagBaseProps = {
  colorPalette?: ColorPalette;
  variant?: TagVariant;
  closeable?: boolean;
  withParts?: boolean;
};

export type TagProps = ComponentProps<'div'> &
  TagBaseProps & {
    scopeName?: string;
    classNames?: TagClassNames;
    ids?: TagIds;
  };

export { type TagVariant };
