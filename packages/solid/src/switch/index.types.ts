import type { TestableProps, WithFieldProps } from '../types';
import type { ColorPalette, SwitchClassNames } from '@kedata-ui/slots';
import type { ElementIds } from '@zag-js/switch';
import type { JSX, Ref } from 'solid-js';

export type SwitchBaseProps = TestableProps &
  WithFieldProps & {
    /**
     * @description
     * The id of the `<input type="checkbox">` element.
     */
    id?: string;
    class?: string;
    ref?: Ref<SwitchRef>;
    title?: string;
    label?: JSX.Element;
    checked?: boolean;
    initialChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    ids?: ElementIds;
    colorPalette?: ColorPalette;
    classNames?: SwitchClassNames;
    withParts?: boolean;
    inputId?: string;
    name?: string;
    value?: string;
  };

export type SwitchProps = SwitchBaseProps;

export type SwitchRef = {
  focus: () => void;
  blur: () => void;
};
