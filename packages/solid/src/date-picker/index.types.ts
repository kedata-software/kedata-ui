import type { DatePickerClassNames } from '@kedata-ui/slots';
import type { SelectionMode } from '@zag-js/date-picker';
import type { ComponentProps } from 'solid-js';

export type DatePickerBaseProps = {
  value?: Date[];
  onValueChange?: (value: Date[]) => void;
  initialValue?: Date[];
  classNames?: DatePickerClassNames;
  closeOnSelect?: boolean;
  selectionMode?: SelectionMode;
};

export type DatePickerProps = ComponentProps<'div'> & DatePickerBaseProps;
