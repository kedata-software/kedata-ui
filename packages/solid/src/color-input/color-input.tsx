import useColorInput from './use-color-input';
import { ColorPicker } from '../color-picker';
import { Portal } from 'solid-js/web';
import type { ColorInputProps } from './index.types';
import type { Component } from 'solid-js';

const ColorInput: Component<ColorInputProps> = (props) => {
  const api = useColorInput(props);

  return (
    <>
      <button {...api.getRootProps()}>
        <div {...api.getInputWrapperProps()}>
          <div {...api.getIndicatorProps()} />
          <div {...api.getValueProps()} />
          <input {...api.getHiddenInputProps()} />
        </div>
      </button>
      {api.isPresence() && (
        <Portal>
          <div {...api.getPositionerProps()}>
            <div {...api.getContentProps()}>
              <ColorPicker {...api.getColorPickerProps()} />
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default ColorInput;
