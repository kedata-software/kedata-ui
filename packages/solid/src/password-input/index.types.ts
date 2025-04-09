import type { PasswordInputClassNames } from '@kedata-ui/slots';
import type { TextInputBaseProps } from '../text-input';
import type { ComponentProps } from 'solid-js';

export type PasswordInputRef = {
  focus: () => void;
  blur: () => void;
};

export type PasswordInputBaseProps = Omit<
  TextInputBaseProps,
  'type' | 'endIcon'
> & {
  isShow?: boolean;
  initialIsShow?: boolean;
  onIsShowChange?: (isShow: boolean) => void;

  value?: string;
  initialValue?: string;
  onValueChange?: (value: string) => void;

  classNames?: PasswordInputClassNames;

  ref?: PasswordInputRef;
};

export type PasswordInputProps = Omit<ComponentProps<'div'>, 'ref'> &
  PasswordInputBaseProps;
