import clsx from 'clsx';
import { tv } from 'tailwind-variants';
import checkboxParts from './checkbox.parts';

const checkboxSlots = tv(
  {
    slots: {
      root: clsx(
        'group/checkbox flex w-fit cursor-pointer items-center p-0.5 transition-colors focus-visible:outline-none',
      ),
      control: clsx(
        'size-5 border-2 transition-colors overflow-hidden',
        'group-hover/checkbox:border-palette-600',
        'group-data-[checked]/checkbox:border-palette-500 group-data-[checked]/checkbox:bg-palette-500',
        'group-focus-within/checkbox:outline-palette-300 group-focus-within/checkbox:outline group-focus-within/checkbox:outline-2 group-focus-within/checkbox:outline-offset-2',
      ),
      label: 'ml-2',
      hiddenInput: clsx(''),
      indicator: clsx(
        'text-white translate-y-5 group-data-[checked]/checkbox:translate-y-0 transition-transform block',
      ),
    },
    variants: {
      withParts: {
        true: checkboxParts,
      },
    },
    defaultVariants: {
      withParts: true,
    },
  },
  { twMerge: false },
);

type CheckboxSlots = typeof checkboxSlots;
export type CheckboxIds = Partial<CheckboxSlots['slots']>;
export type CheckboxClassNames = Partial<CheckboxSlots['slots']>;

export default checkboxSlots;
