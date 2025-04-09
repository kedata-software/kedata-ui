import passwordInputParts from './password-input.parts';
import { textInputSlots } from '../text-input';
import clsx from 'clsx';
import { tv } from 'tailwind-variants';

const passwordInputSlots = tv(
  {
    slots: {
      root: textInputSlots.slots.root,
      input: textInputSlots.slots.input,
      startIcon: textInputSlots.slots.startIcon,
      endIcon: clsx(
        textInputSlots.slots.endIcon,
        'cursor-pointer text-gray-400 mr-0',
      ),
      startAddon: textInputSlots.slots.startAddon,
      endAddon: textInputSlots.slots.endAddon,
      inputWrapper: textInputSlots.slots.inputWrapper,
      toggle: clsx(
        'mr-4 p-0.5 focus-visible:outline focus-visible:outline-2 focus-within:outline-palette-300 rounded-full',
      ),
    },
    variants: {
      withParts: {
        true: passwordInputParts,
      },
    },
    defaultVariants: {
      withParts: true,
    },
  },
  {
    twMerge: false,
  },
);

export type PasswordInputSlots = typeof passwordInputSlots;
export type PasswordInputClassNames = Partial<PasswordInputSlots['slots']>;
export type PasswordInputIds = Partial<PasswordInputSlots['slots']>;

export default passwordInputSlots;
