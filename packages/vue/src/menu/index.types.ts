import type { ColorPalette } from '@kedata-ui/slots';
import type { Component, ModelRef, VNode } from 'vue';

export type MenuProps = {
  withParts?: boolean;
  darkable?: boolean;
  options?: MenuOption[];
};

export type MenuModels = {
  isOpen: ModelRef<boolean>;
};

export type MenuSeparatorOption = {
  type: 'separator';
  className?: string;
};

export type MenuOption = MenuItemOption | MenuSeparatorOption;

export type MenuItemOption = {
  type?: 'item';
  label: string;
  value: string;
  startIcon?: Component;
  className?: string;
  // options?: Omit<MenuOption, "options">[];
  options?: MenuOption[];
  colorPalette?: ColorPalette;
  classNames?: {
    item?: string;
    itemStartIcon?: string;
  };
};
