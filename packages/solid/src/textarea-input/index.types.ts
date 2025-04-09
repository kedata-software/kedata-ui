import type { ComponentProps, Ref } from 'solid-js';
import type { WithInputProps } from '../input';
import type {
  ColorPalette,
  TextareaInputClassNames,
  TextareaInputIds,
} from '@kedata-ui/slots';

export type TextareaInputBaseProps = {
  /**
   * @description
   * The id of the `<textarea>` element. If you want set the id of the root element, use the `rootId` prop instead.
   */
  id?: string;
  /**
   * @description
   * The id of the root element.
   */
  rootId?: string;
  ids?: TextareaInputIds;

  /**
   * @description
   * The maximum number of characters that can be entered in the textarea.
   */
  maxLength?: number;
  showCounter?: boolean;

  colorPalette?: ColorPalette;
  classNames?: TextareaInputClassNames;
  rows?: number;
  value?: string;
  initialValue?: string;
  onValueChange?: (value: string) => void;
  withParts?: boolean;
  placeholder?: string;
  ref?: Ref<TextareaInputRef>;
} & Omit<WithInputProps, 'startAddon' | 'endAddon' | 'startIcon' | 'endIcon'>;

export type TextareaInputProps = TextareaInputBaseProps &
  Omit<ComponentProps<'div'>, 'ref'>;

export type TextareaInputRef = {
  focus: () => void;
  blur: () => void;
};
