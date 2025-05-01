import useCheckbox from './use-checkbox';
import { KiCheckOutline, KiMinusOutline } from '@kedata-ui/react-icons';
import React, { type FC } from 'react';
import type { CheckboxProps } from './index.types';

const Checkbox: FC<CheckboxProps> = (props) => {
  const api = useCheckbox(props);

  return (
    <label {...api.getRootProps()}>
      <input {...api.getHiddenInputProps()} ref={api.inputRef} />

      <div {...api.getControlProps()}>
        <div {...api.getIndicatorProps()}>
          {props.indeterminate && <KiMinusOutline />}
          {!props.indeterminate && <KiCheckOutline />}
        </div>
      </div>

      {props.children && <span {...api.getLabelProps()}>{props.children}</span>}
    </label>
  );
};

export default Checkbox;
