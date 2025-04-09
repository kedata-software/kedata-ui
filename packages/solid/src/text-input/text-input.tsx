import useTextInput from './use-text-input';
import type { TextInputProps } from './index.types';
import type { Component } from 'solid-js';

const TextInput: Component<TextInputProps> = (props) => {
  const api = useTextInput(props);

  return (
    <div {...api.getRootProps()}>
      {api.startAddon && (
        <div {...api.getStartAddonProps()}>
          <api.startAddon />
        </div>
      )}

      <div {...api.getInputWrapperProps()}>
        {api.startIcon && <api.startIcon {...api.getStartIconProps()} />}

        <input {...api.getInputProps()} ref={api.inputRef} />

        {api.endIcon && <api.endIcon {...api.getEndIconProps()} />}
      </div>

      {api.endAddon && (
        <div {...api.getEndAddonProps()}>
          <api.endAddon />
        </div>
      )}
    </div>
  );
};

export default TextInput;
