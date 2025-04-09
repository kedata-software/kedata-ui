import useSwitch from './use-switch';
import { type SwitchProps } from './index.types';
import type { Component } from 'solid-js';

const Switch: Component<SwitchProps> = (props) => {
  const api = useSwitch(props);

  return (
    <label {...api.getRootProps()}>
      <input {...api.getHiddenInputProps()} ref={api.inputRef} />

      <div {...api.getControlProps()}>
        <div {...api.getThumbProps()} />
      </div>

      {api.label && <span {...api.getLabelProps()} />}
    </label>
  );
};

export default Switch;
