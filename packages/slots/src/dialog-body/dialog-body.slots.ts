import { tv } from 'tailwind-variants';
import dialogBodyParts from './dialog-body.parts';

const dialogBodySlots = tv(
  {
    slots: {
      root: 'p-5 bg-white overflow-y-auto max-h-[100vh] flex-1 dark:bg-dark-800',
    },
    variants: {
      withParts: {
        true: dialogBodyParts,
      },
    },
    defaultVariants: {
      withParts: true,
    },
  },
  { twMerge: false },
);

export type DialogBodySlots = typeof dialogBodySlots;
export type DialogBodyClassNames = Partial<DialogBodySlots['slots']>;
export type DialogBodyIds = Partial<DialogBodySlots['slots']>;

export default dialogBodySlots;
