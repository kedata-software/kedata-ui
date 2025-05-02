import type { TooltipClassNames } from '@kedata-ui/slots';
import type { FC, ReactElement } from 'react';

export type TooltipBaseProps = {
  id?: string;

  isOpen?: boolean;
  initialIsOpen?: boolean;
  onIsOpenChange?: (isOpen: boolean) => void;

  classNames?: TooltipClassNames;
  children?: ReactElement;
  content?: FC;
  arrowSize?: number | string;
  withParts?: boolean;
};

export type TooltipProps = TooltipBaseProps;

export type UseTooltipParams = {
  props: TooltipProps;
};
