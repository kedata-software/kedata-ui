import type { ColorPalette, SwalAlertClassNames } from "@kedata-ui/slots";
import type { SweetAlertResult } from "sweetalert2";
import type { DefineComponent, HTMLAttributes, VNode } from "vue";

export type SwalAlertProps<D = unknown> = {
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
  colorPalette?: ColorPalette;
};

export type SwalAlertFireProps<D = unknown> = SwalAlertProps & {
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

  classNames?: SwalAlertClassNames;
};
