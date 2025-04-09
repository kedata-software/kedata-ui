import usePopover from './use-popover';
import type { PopoverProps } from './index.types';
import type { Component } from 'solid-js';

const Popover: Component<PopoverProps> = (props) => {
  const api = usePopover(props);

  return (
    <>
      <api.children {...api.getTriggerProps()} />

      {api.isPresence() && !!api.content && (
        <div {...api.getPositionerProps()}>
          <div {...api.getContentProps()}>
            <api.content close={api.close} isOpen={api.isOpen()} />
          </div>
        </div>
      )}
    </>
  );
};

export default Popover;
