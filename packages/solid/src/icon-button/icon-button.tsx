import useIconButton from './use-icon-button';
import { DotSpinner } from '../dot-spinner';
import type { IconButtonProps } from './index.types';
import type { Component } from 'solid-js';

const IconButton: Component<IconButtonProps> = (props) => {
  const api = useIconButton(props);

  return (
    <button {...api.getRootProps()}>
      {api.loading() && <DotSpinner {...api.getLoadingIconProps()} />}

      {!api.loading() && <api.children {...api.getIconProps()} />}
    </button>
  );
};

export default IconButton;
