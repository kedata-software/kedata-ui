import clsx from 'clsx';
import { tv } from 'tailwind-variants';
import dialogHeaderParts from './dialog-header.parts';

const dialogHeaderSlots = tv(
  {
    slots: {
      root: clsx(
        'border-b border-b-dark-300 dark:border-b-dark-600 rounded-t-md bg-white dark:bg-dark-800 p-5 flex items-center',
      ),
      title: clsx('font-bold text-dark-900 dark:dark-50 dark:text-white'),
      closeIcon: clsx(
        'text-dark-400 ml-auto cursor-pointer p-1 box-content rounded-full',
        'focus:outline-none focus-visible:outline-danger-300 focus-visible:text-danger-500 hover:text-danger-500',
      ),
    },
    variants: {
      withParts: {
        true: dialogHeaderParts,
      },
    },
    defaultVariants: {
      withParts: true,
    },
  },
  { twMerge: false },
);

export type DialogHeaderSlots = typeof dialogHeaderSlots;
export type DialogHeaderClassNames = Partial<DialogHeaderSlots['slots']>;
export type DialogHeaderIds = Partial<DialogHeaderSlots['slots']>;

export default dialogHeaderSlots;
