import { tv } from 'tailwind-variants';
import popoverParts from './popover.parts';
import clsx from 'clsx';

const popoverSlots = tv({
  slots: {
    trigger: '',
    positioner: clsx('!z-50'),
    content: '',
  },
  variants: {
    withParts: {
      true: popoverParts,
    },
  },
  defaultVariants: {
    withParts: true,
  },
});

type PopoverSlots = typeof popoverSlots;
export type PopoverClassNames = Partial<PopoverSlots['slots']>;

export default popoverSlots;
