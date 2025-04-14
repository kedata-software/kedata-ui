import { inputSlots } from '../input';
import { tv } from 'tailwind-variants';
import textInputParts from './text-input.parts';
import clsx from 'clsx';

const textInputSlots = tv(
  {
    slots: {
      root: clsx(inputSlots.slots.root, 'group/text-input'),
      input:
        'w-full px-3 text-black focus:outline-none bg-transparent group-[disabled]:cursor-not-allowed h-full',
      startIcon: inputSlots.slots.startIcon,
      endIcon: inputSlots.slots.endIcon,
      startAddon: inputSlots.slots.startAddon,
      endAddon: inputSlots.slots.endAddon,
      inputWrapper: inputSlots.slots.inputWrapper,
    },
    variants: {
      withParts: {
        true: textInputParts,
      },
    },
    defaultVariants: {
      withParts: true,
    },
  },
  { twMerge: false },
);

type TextInputSlots = typeof textInputSlots;
export type TextInputClassNames = Partial<TextInputSlots['slots']>;
export type TextInputIds = Partial<TextInputSlots['slots']>;

export default textInputSlots;
