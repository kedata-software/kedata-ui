import clsx from 'clsx';
import { tv } from 'tailwind-variants';
import dialogFooterParts from './dialog-footer.parts';

const dialogFooterSlots = tv(
  {
    slots: {
      root: clsx(
        'flex flex-row justify-end gap-2 rounded-b-md border-t border-t-dark-300 dark:border-t-dark-600 p-5',
        'bg-white dark:bg-dark-800',
      ),
    },
    variants: {
      withParts: {
        true: dialogFooterParts,
      },
    },
    defaultVariants: {
      withParts: true,
    },
  },
  { twMerge: false },
);

export type DialogFooterSlots = typeof dialogFooterSlots;
export type DialogFooterClassNames = Partial<DialogFooterSlots['slots']>;
export type DialogFooterIds = Partial<DialogFooterSlots['slots']>;

export default dialogFooterSlots;
