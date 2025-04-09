import type { WithInputProps } from '../input';
import type { TestableProps } from '../types';
import type {
  ColorPalette,
  TextInputClassNames,
  TextInputIds,
} from '@kedata-ui/slots';
import type { ComponentProps, Ref } from 'solid-js';

export type TextInputBaseProps = WithInputProps &
  TestableProps & {
    /**
     * @description
     * The id of the text input.
     */
    id?: string;
    /**
     * @description
     * The id of the root element.
     */
    rootId?: string;

    type?: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel';

    value?: string;
    initialValue?: string;
    onValueChange?: (value: string) => void;

    classNames?: TextInputClassNames;
    class?: string;

    ids?: TextInputIds;
    colorPalette?: ColorPalette;
    withParts?: boolean;
    ref?: Ref<TextInputRef>;
    autoFocus?: boolean;
  };

export type TextInputProps = Omit<
  ComponentProps<'div'>,
  'onValueChange' | 'ref'
> &
  TextInputBaseProps;

export type TextInputRef = {
  focus: () => void;
  blur: () => void;
};
