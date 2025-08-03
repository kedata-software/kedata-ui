import type {
  DialogBodyClassNames,
  DialogContentClassNames,
  DialogFooterClassNames,
  DialogHeaderClassNames,
  DialogPosition,
} from '@kedata-ui/slots';
import type { CreateDialogStoreReturn } from './useDialogStore';

export type DialogContextValue = CreateDialogStoreReturn & {
  position: DialogPosition;
  paddingless?: boolean;
};

export type DialogBodyProps = {
  class?: string;
  classNames?: DialogBodyClassNames;
  withParts?: boolean;
  darkable?: boolean;
};

export type DialogFooterProps = {
  class?: string;
  classNames?: DialogFooterClassNames;
  withParts?: boolean;
  darkable?: boolean;
};

export type DialogContentProps = {
  class?: string;
  paddingless?: boolean;
  position?: DialogPosition;
  classNames?: DialogContentClassNames;
  withParts?: boolean;
};

export type DialogHeaderProps = {
  class?: string;
  id?: string;
  title?: string;
  classNames?: DialogHeaderClassNames;
  showCloseIcon?: boolean;
  onClose?: () => void;
  withParts?: boolean;
  darkable?: boolean;
};

export type DialogContext = {
  close: () => void;
};

export type CreateDialogStoreParams = {
  transitionDuration?: number;
  shouldFinalFocus?: boolean;
};

export type WithDialogProps = {
  /**
   * @default "top-center"
   */
  position?: DialogPosition;
  /**
   * @default false
   * @description
   * If `true`, the dialog will remove the paddings
   */
  paddingless?: boolean;
  /**
   * @default true
   * @description
   * If `true`, the dialog will be positioned at the bottom of the screen or set `position` to `"bottom-center"` and `paddingless` to `true`
   */
  responsiveBottom?: boolean;
  store: CreateDialogStoreReturn;
};
