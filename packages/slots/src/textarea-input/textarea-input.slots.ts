import clsx from 'clsx';
import { tv } from 'tailwind-variants';
import textareaInputParts from './textarea-input.parts';

const textareaInputSlots = tv({
  slots: {
    root: clsx('group flex flex-col'),
    input: clsx(
      'rounded-lg bg-dark-50 border border-gray-300 w-full',
      'focus-within:border-palette-500 focus-within:outline-none',
      'py-2 px-3 min-h-12',
      'focus:border-palette-500 focus:outline-none',
      'data-[invalid]:focus-within:!border-palette-500 data-[invalid]:!border-danger-500',
      'group-data-[disabled]:bg-dark-200 group-data-[disabled]:cursor-not-allowed',
    ),
    counter: 'text-sm text-gray-400 ml-auto mt-1',
  },
  variants: {
    withParts: {
      true: textareaInputParts,
    },
  },
  defaultVariants: {
    withParts: true,
  },
});

export type TextareaInputSlots = typeof textareaInputSlots;
export type TextareaInputClassNames = Partial<TextareaInputSlots['slots']>;
export type TextareaInputIds = Partial<TextareaInputSlots['slots']>;

export default textareaInputSlots;
