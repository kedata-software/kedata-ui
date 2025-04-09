import clsx from 'clsx';
import tooltipParts from './tooltip.parts';
import { tv } from 'tailwind-variants';

const tooltipSlots = tv({
  slots: {
    root: clsx(''),
    content: clsx('bg-dark-700 text-white p-4 py-2 rounded-md text-sm block'),
    arrow: '',
    positioner: '',
    arrowTip: clsx('!bg-dark-700'),
  },
  variants: {
    withParts: {
      true: tooltipParts,
    },
  },
  defaultVariants: {
    withParts: true,
  },
});

type TooltipSlots = typeof tooltipSlots;
export type TooltipClassNames = Partial<TooltipSlots['slots']>;
export type TooltipIds = Partial<TooltipSlots['slots']>;

export default tooltipSlots;
