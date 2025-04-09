import clsx from 'clsx';
import { tv } from 'tailwind-variants';
import labelParts from './label.parts';

const labelSlots = tv(
  {
    slots: {
      root: clsx('mb-1 inline-block text-gray-500 text-sm'),
      asterisk: clsx('text-red-500'),
    },
    variants: {
      withParts: {
        true: labelParts,
      },
    },
    defaultVariants: {
      withParts: true,
    },
  },
  { twMerge: false },
);

type LabelSlots = typeof labelSlots;
export type LabelIds = Partial<LabelSlots['slots']>;
export type LabelClassNames = Partial<LabelSlots['slots']>;

export default labelSlots;
