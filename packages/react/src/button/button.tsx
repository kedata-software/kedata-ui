import useButton from './use-button';
import React from 'react';
import type { ButtonProps } from './index.types';
import { cloneElement, type FC } from 'react';

const Button: FC<ButtonProps> = (props) => {
  const api = useButton(props);

  return (
    <button {...api.getRootProps()}>
      {!api.loading &&
        api.startIcon &&
        cloneElement(api.startIcon, {
          ...api.getStartIconProps(),
          ...api.startIcon.props,
        })}

      {api.children}

      {api.endIcon &&
        cloneElement(api.endIcon, {
          ...api.getEndIconProps(),
          ...api.endIcon.props,
        })}
    </button>
  );
};

export default Button;
