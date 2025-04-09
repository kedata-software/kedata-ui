import type { ComponentProps } from 'solid-js';
import type { CreateDialogStoreReturn } from './create-dialog-store';
import type {
  DialogBodyClassNames,
  DialogContentClassNames,
  DialogFooterClassNames,
  DialogHeaderClassNames,
} from '@kedata-ui/slots';

export type DialogPosition = 'top-center' | 'bottom-center';

export type DialogContextValue = CreateDialogStoreReturn & {
  position: DialogPosition;
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
  position?: DialogPosition;
  store: CreateDialogStoreReturn;
};

export type CreateDialogStoreParams = {
  transitionDuration?: number;
  shouldFinalFocus?: boolean;
};
