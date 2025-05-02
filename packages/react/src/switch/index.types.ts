import type { TestableProps, WithFieldProps } from '../types';
import type { ColorPalette, SwitchClassNames } from '@kedata-ui/slots';
import type { ElementIds } from '@zag-js/switch';
import type { ComponentProps, ReactNode, Ref } from 'react';

export type SwitchBaseProps = TestableProps &
  WithFieldProps & {
    /**
     * @description
     * The id of the `<input type="checkbox">` element.
     * Please use `rootId` to set root element id.
     */
    id?: string;
    /**
     * @description
     * The id of the root element.
     */
    rootId?: string;
    ref?: Ref<SwitchRef>;
    title?: string;
    label?: ReactNode;
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

export type SwitchProps = Omit<ComponentProps<'label'>, 'ref'> &
  SwitchBaseProps;

export type SwitchRef = {
  focus: () => void;
  blur: () => void;
};
