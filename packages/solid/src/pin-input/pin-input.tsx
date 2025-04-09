import createPinInput from './create-pin-input';
import type { PinInputProps } from './index.types';
import type { Component } from 'solid-js';

const PinInput: Component<PinInputProps> = (props) => {
  const api = createPinInput(props);

  const arr = () => new Array(api.count()).fill(0);

  return (
    <div {...api.getRootProps()}>
      {arr().map((_, index) => {
        return <input {...api.getPinInputProps({ index })} />;
      })}
    </div>
  );
};

export default PinInput;
