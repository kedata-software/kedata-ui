import type {
  BadgeClassNames,
  ButtonClassNames,
  CheckboxClassNames,
  DialogFooterClassNames,
  DialogHeaderClassNames,
  DialogContentClassNames,
  DialogBodyClassNames,
  ErrorListClassNames,
  FeedbackClassNames,
  FormFieldClassNames,
  HelperTextClassNames,
  LabelClassNames,
  MenuClassNames,
  PaginationClassNames,
  RadioClassNames,
  RadioGroupClassNames,
  SwalAlertClassNames,
  SwalConfirmationClassNames,
  SwitchClassNames,
  TagClassNames,
  TextInputClassNames,
  AvatarClassNames,
  TextareaInputClassNames,
  TooltipClassNames,
  IconButtonClassNames,
  ColorPickerClassNames,
  ColorInputClassNames,
  SelectPickerClassNames,
  PasswordInputClassNames,
  AccordionClassNames,
  DataTableClassNames,
  PopoverClassNames,
  ChatBubbleClassNames,
  ErrorMessageClassNames,
  PinInputClassNames,
  DatePickerClassNames,
} from '@kedata-ui/slots';

export type ClassNamesContextValue = {
  Avatar?: AvatarClassNames;
  Accordion?: AccordionClassNames;
  ChatBubble?: ChatBubbleClassNames;
  Radio?: RadioClassNames;
  RadioGroup?: RadioGroupClassNames;
  Label?: LabelClassNames;
  Badge?: BadgeClassNames;
  DatePicker?: DatePickerClassNames;
  ErrorList?: ErrorListClassNames;
  ErrorMessage?: ErrorMessageClassNames;
  DataTable?: DataTableClassNames;
  Feedback?: FeedbackClassNames;
  HelperText?: HelperTextClassNames;
  Switch?: SwitchClassNames;
  TextInput?: TextInputClassNames;
  TextareaInput?: TextareaInputClassNames;
  PasswordInput?: PasswordInputClassNames;
  PinInput?: PinInputClassNames;
  Tag?: TagClassNames;
  FormField?: FormFieldClassNames;
  Checkbox?: CheckboxClassNames;
  Pagination?: PaginationClassNames;
  Button?: ButtonClassNames;
  IconButton?: IconButtonClassNames;
  Menu?: MenuClassNames;
  Tooltip?: TooltipClassNames;
  Popover?: PopoverClassNames;
  SwalAlert?: SwalAlertClassNames;
  SwalConfirmation?: SwalConfirmationClassNames;
  useSwalConfirmation?: SwalConfirmationClassNames;

  ColorPicker?: ColorPickerClassNames;
  ColorInput?: ColorInputClassNames;

  SelectPicker?: SelectPickerClassNames;

  DialogHeader?: DialogHeaderClassNames;
  DialogFooter?: DialogFooterClassNames;
  DialogContent?: DialogContentClassNames;
  DialogBody?: DialogBodyClassNames;
};
