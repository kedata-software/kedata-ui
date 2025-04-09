import errorMessageParts from './error-message.parts';
import { tv } from 'tailwind-variants';

const errorMessageSlots = tv(
  {
    slots: {
      root: 'w-1/2 text-sm text-palette-500',
      content: '',
    },
    variants: {
      withParts: {
        true: errorMessageParts,
      },
    },
    defaultVariants: {
      withParts: true,
    },
  },

  { twMerge: false },
);

type ErrorMessageSlots = typeof errorMessageSlots;
export type ErrorMessageClassNames = Partial<ErrorMessageSlots['slots']>;
export type ErrorMessageIds = Omit<Partial<ErrorMessageSlots['slots']>, 'item'>;

export default errorMessageSlots;
