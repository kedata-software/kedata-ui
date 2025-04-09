import type {
  ColorPalette,
  SwalConfirmationClassNames,
  SwalConfirmationIds,
} from '@kedata-ui/slots';
import type { Component, Setter } from 'solid-js';
import type Swal from 'sweetalert2';
import type { SweetAlertResult } from 'sweetalert2';
import type { ClassNameValue } from 'tailwind-merge';

export type SwalConfirmationBaseProps = {
  actionType?: string;
  id?: string;
  ids?: SwalConfirmationIds;
  colorPalette?: ColorPalette;
  title?: string;
  text?: string;
  confirmButtonText?: string;
  denyButtonText?: string;

  showConfirmButton?: boolean;
  showDenyButton?: boolean;

  icon?: Component<Record<string, unknown>>;

  footerLeft?: Component<{
    setIsConfirmLoading: Setter<boolean>;
    setIsDenyLoading: Setter<boolean>;
    Swal: typeof Swal;
  }>;

  withParts?: boolean;
};

export type SwalConfirmationFireProps<D = unknown> =
  SwalConfirmationBaseProps & {
    preConfirm?: () => Promise<D>;
    preDeny?: () => Promise<D>;

    onConfirm?: (data: SweetAlertResult<D>) => void;
    onConfirmError?: (error: unknown) => void;

    onDeny?: (data: SweetAlertResult<D>) => void;
    onDenyError?: (error: unknown) => void;

    classNames?: SwalConfirmationClassNames;
    twMerge?: (...inputs: ClassNameValue[]) => string;
  };
