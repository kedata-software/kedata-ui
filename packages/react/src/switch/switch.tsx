import React, { type FC } from 'react';
import useSwitch from './use-switch';
import { type SwitchProps } from './index.types';

const Switch: FC<SwitchProps> = (props) => {
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
