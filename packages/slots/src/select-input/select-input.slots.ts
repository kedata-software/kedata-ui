import clsx from 'clsx';
import { inputSlots } from '../input';
import { tv } from 'tailwind-variants';
import type { TextInputClassNames } from '../text-input';
import type { TagClassNames } from '../tag';
import selectInputParts from './select-input.parts';

const selectInputSlots = tv(
  {
    slots: {
      root: clsx(
        inputSlots.slots.inputWrapper,
        'data-[open]:border-palette-500',
        'group flex',
      ),
      inputWrapper: clsx('flex flex-row w-full'),
      indicator: clsx(
        'ml-auto my-auto mr-4 group-data-[open]:rotate-180 transition-transform flex-shrink-0',
      ),
      value: clsx(
        'flex flex-row gap-2 px-3 text-black flex-wrap my-2',
        'group-data-[has-placeholder]:text-gray-400',
      ),
      positioner: '',

      Tag: '',
    },
    variants: {
      withParts: {
        true: selectInputParts,
      },
    },
    defaultVariants: {
      withParts: true,
    },
  },
  { twMerge: false },
);

type SelectFieldSlots = typeof selectInputSlots;
export type SelectFieldClassNames = Partial<SelectFieldSlots['slots']> & {
  SearchInput: TextInputClassNames;
  Tag: TagClassNames;
};
export type SelectFieldIds = Partial<SelectFieldSlots['slots']>;

export default selectInputSlots;
