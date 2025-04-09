import type { BadgeBaseProps } from '../badge';
import type { LabelBaseProps } from '../label';
import type { ErrorListBaseProps } from '../error-list';
import type { FeedbackBaseProps } from '../feedback';
import type { HelperTextBaseProps } from '../helper-text';
import type { SwitchBaseProps } from '../switch';
import type { TextInputBaseProps } from '../text-input';
import type { TagBaseProps } from '../tag';
import type { FormFieldBaseProps } from '../form-field';
import type { CheckboxBaseProps } from '../checkbox';
import type { PaginationBaseProps } from '../pagination';
import type { ButtonBaseProps } from '../button';
import type { SwalAlertBaseProps } from '../swal-alert';
import type { IconButtonBaseProps } from '../icon-button';
import type { MenuBaseProps } from '../menu';
import type { SelectInputBaseProps } from '../select-input';
import type { RadioBaseProps } from '../radio';
import type { RadioGroupBaseProps } from '../radio-group';
import type { AvatarBaseProps } from '../avatar';
import type { TextareaInputBaseProps } from '../textarea-input';
import type { PasswordInputBaseProps } from '../password-input';
import type { FormBaseProps } from '../form';
import type {
  DialogBodyBaseProps,
  DialogFooterBaseProps,
  DialogHeaderBaseProps,
  DialogContentBaseProps,
} from '../dialog';
import type { TooltipBaseProps } from '../tooltip';
import type { ColorInputBaseProps } from '../color-input';
import type { ColorPickerBaseProps } from '../color-picker';
import type { SelectPickerBaseProps } from '../select-picker';
import type { DataTableBaseProps } from '../data-table';
import type { PopoverBaseProps } from '../popover';
import type { ChatBubbleBaseProps } from '../chat-bubble';
import type { ErrorMessageBaseProps } from '../error-message';

export type BasePropsContextValue = {
  Avatar?: AvatarBaseProps;
  Accordion?: AccordionBaseProps;
  ChatBubble?: ChatBubbleBaseProps;
  Label?: LabelBaseProps;
  Badge?: BadgeBaseProps;
  ErrorList?: ErrorListBaseProps;
  ErroMessage?: ErrorMessageBaseProps;
  DataTable?: DataTableBaseProps;
  Feedback?: FeedbackBaseProps;
  Form?: FormBaseProps;
  HelperText?: HelperTextBaseProps;
  Switch?: SwitchBaseProps;
  TextInput?: TextInputBaseProps;
  TextareaInput?: TextareaInputBaseProps;
  PasswordInput?: PasswordInputBaseProps;
  Tag?: TagBaseProps;
  FormField?: FormFieldBaseProps;
  Checkbox?: CheckboxBaseProps;
  Pagination?: PaginationBaseProps;
  Button?: ButtonBaseProps;
  IconButton?: IconButtonBaseProps;
  SwalAlert?: SwalAlertBaseProps;
  Menu?: MenuBaseProps;
  SelectField?: SelectInputBaseProps;
  Radio?: RadioBaseProps;
  RadioGroup?: RadioGroupBaseProps;
  Tooltip?: TooltipBaseProps;
  ColorInput?: ColorInputBaseProps;
  ColorPicker?: ColorPickerBaseProps;
  Popover?: PopoverBaseProps;

  SelectPicker?: SelectPickerBaseProps;

  DialogHeader?: DialogHeaderBaseProps;
  DialogBody?: DialogBodyBaseProps;
  DialogFooter?: DialogFooterBaseProps;
  DialogContent?: DialogContentBaseProps;
};
