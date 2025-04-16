import clsx from 'clsx';
import { tv } from 'tailwind-variants';
import dialogHeaderParts from './dialog-header.parts';

const dialogHeaderSlots = tv(
  {
    slots: {
      root: clsx(
        'border-b border-b-dark-300 rounded-t-md bg-white p-5 flex items-center',
      ),
      title: clsx('font-bold text-dark-900'),
      closeIcon: clsx(
        'ml-auto cursor-pointer p-1 box-content rounded-full',
        'focus:outline-none focus-visible:outline-danger-300 focus-visible:text-danger-500 hover:text-danger-500',
      ),
    },
    variants: {
      withParts: {
        true: dialogHeaderParts,
      },
      darkable: {
        true: {
          root: 'dark:border-b-dark-600 dark:bg-dark-800',
          title: 'dark:dark-50 dark:text-white',
          closeIcon: 'text-dark-400',
        },
      },
    },
    defaultVariants: {
      withParts: true,
      darkable: true,
    },
  },
  { twMerge: false },
);

export type DialogHeaderSlots = typeof dialogHeaderSlots;
export type DialogHeaderClassNames = Partial<DialogHeaderSlots['slots']>;
export type DialogHeaderIds = Partial<DialogHeaderSlots['slots']>;

export default dialogHeaderSlots;
