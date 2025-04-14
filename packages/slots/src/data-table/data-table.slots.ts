import clsx from 'clsx';
import { tv } from 'tailwind-variants';

const dataTableSlots = tv({
  slots: {
    root: 'group/data-table',

    body: 'overflow-auto border border-dark-300 rounded-md dark:border-dark-600 dark:text-white',
    table: clsx('border-separate border-spacing-0 w-full'),
    tableHeader: '',
    tableHead: clsx(
      'py-3 px-5 border-b border-dark-300 dark:border-dark-600 font-normal text-left sticky top-0 bg-white dark:bg-dark-800',
    ),
    tableBody: '',
    tableRow: clsx(
      '[&:nth-child(odd)]:bg-dark-100 [&:nth-child(odd)]:dark:bg-dark-900 [&:nth-child(even)]:dark:bg-dark-800',
    ),
    tableCell: clsx('py-3 px-5'),

    footer: 'mt-2',
  },
});

type DataTableSlots = typeof dataTableSlots;
export type DataTableClassNames = Partial<DataTableSlots['slots']>;

export default dataTableSlots;
