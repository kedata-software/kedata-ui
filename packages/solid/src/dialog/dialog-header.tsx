import useDialogHeader from './use-dialog-header';
import { KiCloseSolid } from '@kedata-ui/solid-icons';
import type { DialogHeaderProps } from './index.types';
import type { Component } from 'solid-js';

const DialogHeader: Component<DialogHeaderProps> = (props) => {
  const api = useDialogHeader(props);

  return (
    <header {...api.getRootProps()}>
      <span {...api.getTitleProps()}>{api.title}</span>

      {api.showCloseIcon() && <KiCloseSolid {...api.getCloseIconProps()} />}
    </header>
  );
};

export default DialogHeader;
