import { createControlledSignal } from '../create-controlled-signal';
import CheckboxGroupContext from './checkbox-group-context';
import { splitProps, useContext, type Component } from 'solid-js';
import type { CheckboxGroupItemProps, CheckboxGroupProps } from './index.types';

const CheckboxGroup: Component<CheckboxGroupProps> & {
  Item: Component<CheckboxGroupItemProps>;
} = (props) => {
  const [value, setValue] = createControlledSignal(
    () => props.value,
    props.onValueChange,
    props.initialValue ?? [],
  );

  const handleToggleValue = (val: string) => {
    const oldValue = value();
    const newValue = oldValue.includes(val)
      ? oldValue.filter((v) => v !== val)
      : [...oldValue, val];

    setValue(newValue);
  };

  const handleIsChecked = (val: string) => value().includes(val);

  const ctxValue = {
    get value() {
      return value();
    },
    get name() {
      return props.name;
    },
    get disabled() {
      return props.disabled;
    },
    get readOnly() {
      return props.readOnly;
    },
    get invalid() {
      return props.invalid;
    },
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
  const [, childrenProps] = splitProps(props, ['children']);

  return (
    <props.children
      checked={!!checkboxGroupApi?.isChecked(props.value)}
      onCheckedChange={() => checkboxGroupApi?.toggleValue(props.value)}
      {...childrenProps}
    />
  );
};

export default CheckboxGroup;
