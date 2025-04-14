import clsx from 'clsx';
import { tv } from 'tailwind-variants';
import inputParts from './input.parts';

const inputSlots = tv(
  {
    slots: {
      root: clsx('group flex flex-row'),
      inputWrapper: clsx(
        'flex min-h-12 w-full items-center rounded-lg border border-gray-300 bg-dark-50',
        'focus-within:border-palette-500 focus-within:outline-none',
        'focus:border-palette-500 focus:outline-none',
        'data-[invalid]:focus-within:!border-palette-500 data-[invalid]:!border-danger-500',
        'data-[has-end-addon]:rounded-r-none data-[has-start-addon]:rounded-l-none',
        'data-[disabled]:bg-dark-200 data-[disabled]:cursor-not-allowed',
        'dark:bg-dark-800 dark:border-dark-600 dark:text-white data-[disabled]:dark:bg-dark-700',
        'dark:focus-within:border-palette-500 dark:focus:border-palette-500',
      ),
      startAddon: clsx(
        'flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-gray-100 px-4',
        'dark:bg-dark-700 dark:border-dark-600 dark:text-dark-400',
      ),
      endAddon: clsx(
        'flex items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-gray-100 px-4',
        'dark:bg-dark-700 dark:border-dark-600 dark:text-dark-400',
      ),
      startIcon: clsx(
        'ml-4 size-4 flex-shrink-0',
        'group-data-[invalid]:text-inherit',
        'group-focus-within:text-palette-500 group-data-[filled]:text-dark-900',
        'dark:group-focus-within:text-white',
      ),
      endIcon: clsx(
        'ml-auto mr-4 size-4 flex-shrink-0',
        'group-data-[invalid]:text-inherit',
        'group-focus-within:text-palette-500 group-data-[filled]:text-dark-900',
        'dark:group-focus-within:text-white',
      ),
    },
    variants: {
      withParts: {
        true: inputParts,
      },
    },
    defaultVariants: {
      withParts: true,
    },
  },
  { twMerge: false },
);

type InputSlots = typeof inputSlots;
export type InputClassNames = Partial<InputSlots['slots']>;
export type InputIds = Partial<InputSlots['slots']>;

export default inputSlots;
