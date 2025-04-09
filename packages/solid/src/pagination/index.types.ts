import type {
  ButtonSize,
  ButtonVariant,
  ColorPalette,
  PaginationClassNames,
  PaginationIds,
} from '@kedata-ui/slots';
import type { ComponentProps } from 'solid-js';

export type PaginationBaseProps = {
  count?: number;
  pageSize?: number;
  page?: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
  size?: ButtonSize;
  activeVariant?: ButtonVariant;
  inactiveVariant?: ButtonVariant;
  classNames?: PaginationClassNames;
  ids?: PaginationIds;
  colorPalette?: ColorPalette;
  withParts?: boolean;
};

export type PaginationProps = ComponentProps<'div'> & PaginationBaseProps;
