import clsx from 'clsx';
import { tv } from 'tailwind-variants';
import helperTextParts from './helper-text.parts';

const helperTextSlots = tv(
  {
    slots: {
      root: clsx('ml-auto block w-1/2 text-right text-sm text-gray-500'),
    },
    variants: {
      withParts: {
        true: helperTextParts,
      },
    },
    defaultVariants: {
      withParts: true,
    },
  },
  { twMerge: false },
);

type HelperTextSlots = typeof helperTextSlots;

export default helperTextSlots;
export type HelperTextIds = Partial<HelperTextSlots['slots']>;
export type HelperTextClassNames = Partial<HelperTextSlots['slots']>;
