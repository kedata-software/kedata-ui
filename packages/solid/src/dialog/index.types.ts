import type { ComponentProps } from 'solid-js';
import type { CreateDialogStoreReturn } from './create-dialog-store';
import type {
  DialogBodyClassNames,
  DialogContentClassNames,
  DialogFooterClassNames,
  DialogHeaderClassNames,
  DialogPosition,
} from '@kedata-ui/slots';

export type DialogContextValue = CreateDialogStoreReturn & {
  position: DialogPosition;
  paddingless?: boolean;
};

export type DialogBodyBaseProps = {
  classNames?: DialogBodyClassNames;
  withParts?: boolean;
};

export type DialogFooterBaseProps = {
  classNames?: DialogFooterClassNames;
  withParts?: boolean;
};

export type DialogContentBaseProps = {
  classNames?: DialogContentClassNames;
  withParts?: boolean;
};

export type DialogHeaderBaseProps = {
  id?: string;
  title?: string;
  classNames?: DialogHeaderClassNames;
  showCloseIcon?: boolean;
  onClose?: () => void;
  withParts?: boolean;
};

export type DialogBodyProps = ComponentProps<'div'> & DialogBodyBaseProps;
export type DialogFooterProps = ComponentProps<'div'> & DialogFooterBaseProps;
export type DialogContentProps = ComponentProps<'div'> & DialogContentBaseProps;
export type DialogHeaderProps = ComponentProps<'div'> & DialogHeaderBaseProps;

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

export type CreateDialogStoreParams = {
  transitionDuration?: number;
  shouldFinalFocus?: boolean;
};
