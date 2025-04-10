import { tv } from 'tailwind-variants';
import dialogContentParts from './dialog-content.parts';
import clsx from 'clsx';

const dialogContentSlots = tv(
  {
    slots: {
      root: clsx('rounded-md relative max-h-[100vh] flex flex-col p-6'),
    },
    variants: {
      withParts: {
        true: dialogContentParts,
      },
      position: {
        'top-center': {
          root: clsx('max-h-[calc(100vh)] left-1/2 -translate-x-1/2 pt-12'),
        },
        'bottom-center': {
          root: clsx(
            'top-[100%] left-1/2 -translate-x-1/2 -translate-y-[100%] pb-12',
          ),
        },
      },
      paddingless: {
        true: {
          root: clsx('!p-0'),
        },
      },
    },
    defaultVariants: {
      withParts: true,
      position: 'top-center',
    },
  },
  { twMerge: false },
);

export type DialogContentSlots = typeof dialogContentSlots;
export type DialogContentClassNames = Partial<DialogContentSlots['slots']>;
export type DialogContentIds = Partial<DialogContentSlots['slots']>;

export default dialogContentSlots;
