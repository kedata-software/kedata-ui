import type { TooltipClassNames } from '@kedata-ui/slots';
import type { Component } from 'solid-js';

export type TooltipBaseProps = {
  id?: string;

  isOpen?: boolean;
  initialIsOpen?: boolean;
  onIsOpenChange?: (isOpen: boolean) => void;

  classNames?: TooltipClassNames;
  children?: Component;
  content?: Component;
  arrowSize?: number | string;
  withParts?: boolean;
};

export type TooltipProps = TooltipBaseProps;

export type UseTooltipParams = {
  props: TooltipProps;
};
