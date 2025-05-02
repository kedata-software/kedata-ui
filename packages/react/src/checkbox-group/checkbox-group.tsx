import React from 'react';
import { useControlledSignal } from '../use-controlled-signal';
import CheckboxGroupContext from './checkbox-group-context';
import type { CheckboxGroupItemProps, CheckboxGroupProps } from './index.types';
import { cloneElement, useContext, type FC } from 'react';

const CheckboxGroup: FC<CheckboxGroupProps> & {
  Item: FC<CheckboxGroupItemProps>;
} = (props) => {
  const [value, setValue] = useControlledSignal(
    props.value,
    props.onValueChange,
    props.initialValue ?? [],
  );

  const handleToggleValue = (val: string) => {
    const oldValue = value;
    const newValue = oldValue.includes(val)
      ? oldValue.filter((v) => v !== val)
      : [...oldValue, val];

    setValue(newValue);
  };

  const handleIsChecked = (val: string) => value.includes(val);

  const ctxValue = {
    value,
    name: props.name,
    disabled: props.disabled,
    readOnly: props.readOnly,
    invalid: props.invalid,
    isChecked: handleIsChecked,
    toggleValue: handleToggleValue,
  };

  return (
    <CheckboxGroupContext.Provider value={ctxValue}>
      {props.children}
    </CheckboxGroupContext.Provider>
  );
};

CheckboxGroup.Item = (props: CheckboxGroupItemProps) => {
  const checkboxGroupApi = useContext(CheckboxGroupContext);

  return cloneElement(props.children, {
    checked: !!checkboxGroupApi?.isChecked(props.value),
    onCheckedChange: () => checkboxGroupApi?.toggleValue(props.value),
    value: props.value,
  });
};

export default CheckboxGroup;
