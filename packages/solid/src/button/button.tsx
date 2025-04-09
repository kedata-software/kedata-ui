import useButton from './use-button';
import type { ButtonProps } from './index.types';
import { createComponent, type Component } from 'solid-js';

const Button: Component<ButtonProps> = (props) => {
  const api = useButton(props);

  return (
    <button {...api.getRootProps()}>
      {!api.loading() && api.startIcon && (
        <api.startIcon {...api.getStartIconProps()} />
      )}

      {api.children}

      {api.endIcon && createComponent(api.endIcon, api.getEndIconProps())}
    </button>
  );
};

export default Button;
