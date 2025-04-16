import { tv } from 'tailwind-variants';
import dialogBodyParts from './dialog-body.parts';

const dialogBodySlots = tv(
  {
    slots: {
      root: 'p-5 bg-white overflow-y-auto max-h-[100vh] flex-1',
    },
    variants: {
      withParts: {
        true: dialogBodyParts,
      },
      darkable: {
        true: {
          root: 'dark:bg-dark-800',
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

export type DialogBodySlots = typeof dialogBodySlots;
export type DialogBodyClassNames = Partial<DialogBodySlots['slots']>;
export type DialogBodyIds = Partial<DialogBodySlots['slots']>;

export default dialogBodySlots;
