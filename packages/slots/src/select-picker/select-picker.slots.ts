import clsx from 'clsx';
import { tv } from 'tailwind-variants';
import selectPickerParts from './select-picker.parts';

const selectPickerSlots = tv(
  {
    slots: {
      root: clsx(
        'rounded-lg border border-gray-300 bg-white py-2 color-palette-primary',
        'data-[with-search]:pt-0',
      ),
      item: clsx(
        'hover:bg-palette-50 cursor-pointer px-4 py-2',
        'data-[highlighted]:bg-palette-50',
        'aria-[selected=true]:bg-palette-50 aria-[selected=true]:text-palette-500',
      ),
      itemText: '',
      itemGroup: '',
      itemGroupLabel: '',

      SearchInput: 'mb-2',
    },
    variants: {
      withParts: {
        true: selectPickerParts,
      },
    },
    defaultVariants: {
      withParts: true,
    },
  },
  { twMerge: false },
);

type SelectPickerSlots = typeof selectPickerSlots;
export type SelectPickerClassNames = Partial<SelectPickerSlots['slots']>;
export type SelectPickerIds = Partial<SelectPickerSlots['slots']>;

export default selectPickerSlots;
