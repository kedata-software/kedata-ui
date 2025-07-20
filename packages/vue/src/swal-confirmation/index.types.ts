import type {
  ColorPalette,
  SwalConfirmationClassNames,
} from "@kedata-ui/slots";
import type { SweetAlertResult } from "sweetalert2";
import type { HTMLAttributes, VNode } from "vue";

export type SwalConfirmationProps<D = unknown> = {
  actionType?: "fire" | "confirm" | "danger" | "warning";
  colorPalette?: ColorPalette;

  footerLeft?: () => VNode;

  preConfirm?: () => Promise<D>;
  preDeny?: () => Promise<D>;

  onConfirm?: (data: SweetAlertResult<D>) => void;
  onConfirmError?: (error: unknown) => void;

  onDeny?: (data: SweetAlertResult<D>) => void;
  onDenyError?: (error: unknown) => void;

  showConfirmButton?: boolean;
  showDenyButton?: boolean;

  withParts?: boolean;
  class?: string;
};

export type SwalConfirmationFireProps<D = unknown> = SwalConfirmationProps & {
  icon?: (props: HTMLAttributes) => VNode;
  title?: () => VNode | string;
  text?: () => VNode | string;
  confirmButtonText?: () => VNode | string;
  denyButtonText?: () => VNode | string;

  preConfirm?: () => Promise<D>;
  preDeny?: () => Promise<D>;

  onConfirm?: (data: SweetAlertResult<D>) => void;
  onConfirmError?: (error: unknown) => void;

  onDeny?: (data: SweetAlertResult<D>) => void;
  onDenyError?: (error: unknown) => void;

  classNames?: SwalConfirmationClassNames;
};
