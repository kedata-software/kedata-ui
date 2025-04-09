import clsx from 'clsx';
import { tv } from 'tailwind-variants';
import menuParts from './menu.parts';

const menuSlots = tv({
  slots: {
    root: clsx(''),
    positioner: '',
    content: clsx(
      'border border-dark-300 rounded-lg py-2.5 bg-white',
      'focus-visible:outline-none',
      'dark:bg-dark-800 dark:border-dark-600',
    ),
    separator: clsx('my-2.5 h-[1px] bg-dark-300 dark:bg-dark-500'),
    item: clsx(
      'color-palette-primary group/menu-item w-full',
      'py-3 px-5 hover:bg-palette-50 cursor-pointer transition-colors min-w-[12rem]',
      'data-[highlighted]:bg-palette-50 data-[highlighted]:text-palette-600',
      'hover:bg-palette-50 hover:text-palette-600',
      'dark:color-palette-dark',
      'dark:text-dark-50 dark:hover:bg-palette-700',
      'dark:data-[highlighted]:bg-palette-700 dark:data-[highlighted]:text-dark-50',
      'dark:hover:bg-palette-700 dark:hover:text-dark-50',
      'flex items-center',
    ),
    itemStartIcon: clsx(
      'size-4 mr-2 text-dark-400 data-[color-palette="danger"]:text-danger group-hover/menu-item:text-inherit',
    ),
  },
  variants: {
    withParts: {
      true: menuParts,
    },
  },
  defaultVariants: {
    withParts: true,
  },
});

type MenuSlots = typeof menuSlots;
export type MenuIds = Partial<MenuSlots['slots']>;
export type MenuClassNames = Partial<MenuSlots['slots']>;

export default menuSlots;
