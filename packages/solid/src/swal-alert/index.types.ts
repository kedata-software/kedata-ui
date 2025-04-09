import type {
  ColorPalette,
  SwalAlertClassNames,
  SwalAlertIds,
} from '@kedata-ui/slots';
import type { SweetAlertResult } from 'sweetalert2';
import type { ClassNameValue } from 'tailwind-merge';

export type SwalAlertBaseProps = {
  id?: string;
  ids?: SwalAlertIds;
  colorPalette?: ColorPalette;
  title?: string;
  text?: string;
  confirmButtonText?: string;
  denyButtonText?: string;

  showConfirmButton?: boolean;
  showDenyButton?: boolean;

  withParts?: boolean;
};

export type SwalAlertFireProps<D = unknown> = SwalAlertBaseProps & {
  preConfirm?: () => Promise<D>;
  preDeny?: () => Promise<D>;

  onConfirm?: (data: SweetAlertResult<D>) => void;
  onConfirmError?: (error: unknown) => void;

  onDeny?: (data: SweetAlertResult<D>) => void;
  onDenyError?: (error: unknown) => void;

  classNames?: SwalAlertClassNames;
  twMerge?: (...inputs: ClassNameValue[]) => string;
};
