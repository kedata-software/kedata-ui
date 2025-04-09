import useDialogBody from './use-dialog-body';
import type { DialogBodyProps } from './index.types';
import type { Component } from 'solid-js';

const DialogBody: Component<DialogBodyProps> = (props) => {
  const api = useDialogBody(props);

  return <div {...api.getRootProps()} />;
};

export default DialogBody;
