import type { ColorPalette } from '@kedata-ui/slots';
import type { ModelRef } from 'vue';
import type { WithInputProps } from '../input';

export type TextareaInputProps = WithInputProps & {
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
  /**
   * @description
   * The maximum number of characters that can be entered in the textarea.
   */
  maxLength?: number;
  showCounter?: boolean;
  colorPalette?: ColorPalette;
  rows?: number;
  withParts?: boolean;
  placeholder?: string;
  class?: string;
};

export type TextareaInputModels = {
  value: ModelRef<string>;
};
