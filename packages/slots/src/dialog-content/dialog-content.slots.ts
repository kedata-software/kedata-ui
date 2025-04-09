import { tv } from 'tailwind-variants';
import dialogContentParts from './dialog-content.parts';
import clsx from 'clsx';

const dialogContentSlots = tv(
  {
    slots: {
      root: clsx(
        'flex flex-col rounded-md fixed',
        'data-[position="top-center"]:my-24 data-[position="top-center"]:left-1/2 data-[position="top-center"]:-translate-x-1/2',
      ),
    },
    variants: {
      withParts: {
        true: dialogContentParts,
      },
    },
    defaultVariants: {
      withParts: true,
    },
  },
  { twMerge: false },
);

export type DialogContentSlots = typeof dialogContentSlots;
export type DialogContentClassNames = Partial<DialogContentSlots['slots']>;
export type DialogContentIds = Partial<DialogContentSlots['slots']>;

export default dialogContentSlots;
