import useDialogContent from './use-dialog-content';
import type { DialogContentProps } from './index.types';
import type { Component } from 'solid-js';

const DialogContent: Component<DialogContentProps> = (props) => {
  const api = useDialogContent(props);

  return <div {...api.getRootProps()} />;
};

export default DialogContent;
