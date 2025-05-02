import useTextInput from './use-text-input';
import React, { cloneElement, type FC } from 'react';
import type { TextInputProps } from './index.types';

const TextInput: FC<TextInputProps> = (props) => {
  const api = useTextInput(props);

  return (
    <div {...api.getRootProps()}>
      {api.startAddon && (
        <div {...api.getStartAddonProps()}>{api.startAddon}</div>
      )}

      <div {...api.getInputWrapperProps()}>
        {api.startIcon &&
          cloneElement(api.startIcon, {
            ...api.getStartIconProps(),
            ...api.startIcon.props,
          })}

        <input {...api.getInputProps()} ref={api.inputRef} />

        {api.endIcon &&
          cloneElement(api.endIcon, {
            ...api.getEndIconProps(),
            ...api.endIcon.props,
          })}
      </div>

      {api.endAddon && <div {...api.getEndAddonProps()}>{api.endAddon}</div>}
    </div>
  );
};

export default TextInput;
