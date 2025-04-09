import useDialogFooter from './use-dialog-footer';
import type { DialogFooterProps } from './index.types';
import type { Component } from 'solid-js';

const DialogFooter: Component<DialogFooterProps> = (props) => {
  const api = useDialogFooter(props);

  return <footer {...api.getRootProps()} />;
};

export default DialogFooter;
