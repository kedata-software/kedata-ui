import clsx from 'clsx';
import { tv } from 'tailwind-variants';
import pinInputParts from './pin-input.parts';
import { inputSlots } from '../input';

const pinInputSlots = tv(
  {
    slots: {
      root: clsx('flex gap-2 group'),
      input: clsx(inputSlots.slots.inputWrapper, 'text-center'),
    },
    variants: {
      withParts: {
        true: pinInputParts,
      },
    },
    defaultVariants: {
      withParts: true,
    },
  },
  { twMerge: false },
);

type PinInputSlots = typeof pinInputSlots;
export type PinInputClassNames = Partial<PinInputSlots['slots']>;

export default pinInputSlots;
