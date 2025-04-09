import useTooltip from './use-tooltip';
import createAnimateState from '../create-animate-state';
import clsx from 'clsx';
import type { TooltipProps } from './index.types';
import { createComponent, type Component } from 'solid-js';

const Tooltip: Component<TooltipProps> = (props) => {
  const api = useTooltip(props);

  const { animateState } = createAnimateState(api.isOpen);

  return (
    <>
      {api.children && <api.children {...api.getTriggerProps()} />}

      <div {...api.getPositionerProps()}>
        <div
          {...api.getContentProps({
            className: clsx(
              'relative duration-150',
              'transition-[opacity,top]',
              animateState() === 'enter-from' && 'opacity-0 !top-2',
              animateState() === 'enter-active' && 'opacity-100 !top-0',
              animateState() === 'enter-to' && 'opacity-100 !top-0',
              animateState() === 'leave-from' && 'opacity-100 !top-0',
              animateState() === 'leave-active' && 'opacity-0 !top-2',
              animateState() === 'leave-to' && 'opacity-0 !top-2',
            ),
          })}
        >
          <div {...api.getArrowProps()}>
            <div {...api.getArrowTipProps()} />
          </div>

          {api.content && <api.content {...api.getContentProps()} />}
        </div>
      </div>
    </>
  );
};

export default Tooltip;
