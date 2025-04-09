import useRadioGroup from './use-radio-group';
import * as radio from '@zag-js/radio-group';
import type { RadioGroupItemProps, RadioGroupProps } from './index.types';
import {
  createContext,
  createMemo,
  useContext,
  type Component,
} from 'solid-js';

const RadioGroupContext = createContext<(() => radio.Api) | undefined>(
  undefined,
);

const RadioGroupPropsContext = createContext<RadioGroupProps | undefined>(
  undefined,
);

const RadioGroup: Component<RadioGroupProps> & {
  Item: Component<RadioGroupItemProps>;
} = (props) => {
  const radioGroupApi = useRadioGroup(props);

  return (
    <RadioGroupPropsContext.Provider value={props}>
      <RadioGroupContext.Provider value={() => radioGroupApi.api()}>
        <div {...radioGroupApi.getRootProps()}>{props.children}</div>
      </RadioGroupContext.Provider>
    </RadioGroupPropsContext.Provider>
  );
};

RadioGroup.Item = (props: RadioGroupItemProps) => {
  const radioGroupApi = useContext(RadioGroupContext);
  const contextProps = useContext(RadioGroupPropsContext)!;

  const checked = createMemo(() => radioGroupApi?.().value === props.value);
  const disabled = createMemo(
    () => !!contextProps.disabled || !!props.disabled,
  );

  return (
    <props.children
      {...props}
      checked={checked()}
      name={contextProps.name}
      disabled={disabled()}
      readOnly={contextProps.readOnly}
      invalid={contextProps.invalid}
      onCheckedChange={() => {
        radioGroupApi?.().setValue(props.value);
      }}
    />
  );
};

export default RadioGroup;
