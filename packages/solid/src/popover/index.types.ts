import type { PopoverClassNames } from '@kedata-ui/slots';
import { Placement } from '@zag-js/popover';
import type { Component } from 'solid-js';

export type PopoverBaseProps = {
  id?: string;

  isOpen?: boolean;
  initialIsOpen?: boolean;
  onIsOpenChange?: (status: boolean) => void;

  children: Component<Record<string, unknown>>;
  classNames?: PopoverClassNames;
  content?: Component<{
    close: () => void;
    isOpen: boolean;
  }>;
  placement?: Placement;
};

export type PopoverProps = PopoverBaseProps;

export type UsePopoverParams = {
  props: PopoverProps;
};
