import usePasswordInput from './use-password-input';
import { createComponent, type Component } from 'solid-js';
import type { PasswordInputProps } from './index.types';

const PasswordInput: Component<PasswordInputProps> = (props) => {
  const api = usePasswordInput(props);

  return (
    <div {...api.getRootProps()}>
      {api.startAddon && (
        <div {...api.getStartAddonProps()}>
          {createComponent(api.startAddon, {})}
        </div>
      )}

      <div {...api.getInputWrapperProps()}>
        {api.startIcon &&
          createComponent(api.startIcon, api.getStartIconProps())}

        <input {...api.getInputProps()} ref={api.inputRef} />

        <api.EyeControl />
      </div>

      {api.endAddon && (
        <div {...api.getEndAddonProps()}>
          {createComponent(api.endAddon, {})}
        </div>
      )}
    </div>
  );
};

export default PasswordInput;
