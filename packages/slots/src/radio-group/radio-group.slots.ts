import { tv } from 'tailwind-variants';
import radioGroupParts from './radio-group.parts';

const radioGroupSlots = tv({
  slots: {
    root: 'flex flex-col gap-2 w-fit',
  },
  variants: {
    withParts: {
      true: radioGroupParts,
    },
    orientation: {
      vertical: {
        root: 'flex-col',
      },
      horizontal: {
        root: 'flex-row items-start',
      },
    },
  },
  defaultVariants: {
    withParts: true,
    orientation: 'vertical',
  },
});

type RadioGroupSlots = typeof radioGroupSlots;
export type RadioGroupClassNames = Partial<RadioGroupSlots['slots']>;
export type RadioGroupIds = Partial<RadioGroupSlots['slots']>;

export default radioGroupSlots;
