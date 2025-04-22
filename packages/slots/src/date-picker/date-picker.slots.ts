import clsx from 'clsx';
import { inputSlots } from '../input';
import { tv } from 'tailwind-variants';

const datePickerSlots = tv({
  slots: {
    root: 'max-w-[300px]',
    trigger: clsx(inputSlots.slots.inputWrapper, 'px-3 cursor-pointer'),
    control: '',

    positioner: '',
    content:
      'color-palette-primary bg-white p-4 border border-dark-300 rounded-md',

    viewControl: 'flex justify-between items-center mb-2 gap-1.5',
    viewTrigger: 'w-full hover:bg-dark-100 px-3 py-1.5 rounded-md',
    prevTrigger: clsx('px-3 py-1.5 hover:bg-dark-100 rounded-md'),
    nextTrigger: clsx('px-3 py-1.5 hover:bg-dark-100 rounded-md'),

    dateContainer: '',
    dateHeader: '',
    dateBody: '',
    dateFooter: '',

    table: clsx('min-w-[320px]'),
    tableHead: '',
    tableHeader: '',
    tableBody: '',
    tableRow: '',
    tableCell: clsx(''),
    tableCellTrigger: clsx(
      'py-1.5 text-center hover:bg-dark-100 flex items-center justify-center rounded-md',
      'data-[in-range]:bg-palette-100',
      'data-[selected]:!bg-palette-500 data-[selected]:text-white',
      'data-[outside-range]:text-dark-400 data-[outside-range]:hover:bg-[unset] data-[outside-range]:cursor-not-allowed',
    ),

    presetContainer: '',
    presetTrigger: '',
  },
});

export type DatePickerSlots = typeof datePickerSlots;
export type DatePickerClassNames = Partial<DatePickerSlots['slots']>;
export type DatePickerIds = Partial<DatePickerSlots['slots']>;

export default datePickerSlots;
