import type { ColorPalette, MenuClassNames, MenuIds } from '@kedata-ui/slots';
import type { Component } from 'solid-js';

export type MenuSeparatorOption = {
  type: 'separator';
  className?: string;
};

export type MenuItemOption = {
  type?: 'item';
  label: string;
  value: string;
  startIcon?: Component;
  className?: string;
  options?: Omit<MenuOption, 'options'>[];
  colorPalette?: ColorPalette;
  classNames?: {
    item?: string;
    itemStartIcon?: string;
  };
};

export type MenuOption = MenuItemOption | MenuSeparatorOption;

export type MenuBaseProps = {
  options?: MenuOption[];
  id?: string;
  children: Component;
  classNames?: MenuClassNames;
  mapValueSelect?: Record<string, (value: string) => void>;
  isOpen?: boolean;
  osIsOpenChange?: (status: boolean) => void;
  ids?: MenuIds;
  withParts?: boolean;
  darkable?: boolean;
};

export type MenuProps = MenuBaseProps;

export type UseMenuParams = {
  props: MenuProps;
};
