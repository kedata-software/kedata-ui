import type {
  ButtonSize,
  ButtonVariant,
  ColorPalette,
  PaginationClassNames,
} from "@kedata-ui/slots";
import type { ModelRef } from "vue";

export type PaginationBaseProps = {
  count?: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
  size?: ButtonSize;
  activeVariant?: ButtonVariant;
  inactiveVariant?: ButtonVariant;
  classNames?: PaginationClassNames;
  colorPalette?: ColorPalette;
  withParts?: boolean;
};

export type PaginationModels = {
  page: ModelRef<number>;
  pageSize: ModelRef<number>;
};

export type PaginationProps = PaginationBaseProps;
