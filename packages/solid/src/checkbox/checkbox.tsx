import useCheckbox from './use-checkbox';
import { KiCheckOutline } from '@kedata-ui/solid-icons';
import type { CheckboxProps } from './index.types';
import type { Component } from 'solid-js';

const Checkbox: Component<CheckboxProps> = (props) => {
  const api = useCheckbox(props);

  return (
    <label {...api.getRootProps()}>
      <input {...api.getHiddenInputProps()} ref={api.inputRef} />

      <div {...api.getControlProps()}>
        <div {...api.getIndicatorProps()}>
          <KiCheckOutline />
        </div>
      </div>

      {props.children && <span {...api.getLabelProps()}>{props.children}</span>}
    </label>
  );
};

export default Checkbox;
