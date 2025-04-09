import clsx from 'clsx';
import { tv } from 'tailwind-variants';

const dataTableSlots = tv({
  slots: {
    root: 'group/data-table',

    body: 'overflow-auto border border-dark-300 rounded-md',
    table: clsx('border-separate border-spacing-0 w-full'),
    tableHeader: '',
    tableHead: clsx(
      'py-3 px-5 border-b border-dark-300 font-normal text-left sticky top-0 bg-white',
    ),
    tableBody: '',
    tableRow: clsx('[&:nth-child(odd)]:bg-dark-100'),
    tableCell: clsx('py-3 px-5'),

    footer: 'mt-2',
  },
});

type DataTableSlots = typeof dataTableSlots;
export type DataTableClassNames = Partial<DataTableSlots['slots']>;

export default dataTableSlots;
