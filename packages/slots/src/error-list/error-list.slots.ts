import errorListParts from './error-list.parts';
import { tv } from 'tailwind-variants';

const errorListSlots = tv(
  {
    slots: {
      root: 'w-1/2 text-sm',
      item: 'text-palette-500 flex items-center gap-2',
    },
    variants: {
      withParts: {
        true: errorListParts,
      },
    },
    defaultVariants: {
      withParts: true,
    },
  },

  { twMerge: false },
);

type ErrorListSlots = typeof errorListSlots;
export type ErrorListClassNames = Partial<ErrorListSlots['slots']>;
export type ErrorListIds = Omit<Partial<ErrorListSlots['slots']>, 'item'>;

export default errorListSlots;
