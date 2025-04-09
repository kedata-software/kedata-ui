import FormContext from './form-context';
import type { FormProps } from './index.types';
import { splitProps, type Component } from 'solid-js';

const Form: Component<FormProps> = (props) => {
  const [localProps, rootProps] = splitProps(props, omittedProps);

  return (
    <FormContext.Provider
      value={{
        get labelPlacement() {
          return localProps.labelPlacement ?? 'top';
        },
        get labelClass() {
          return localProps.labelClass;
        },
      }}
    >
      <form ref={props.ref} {...rootProps}>
        {props.children}
      </form>
    </FormContext.Provider>
  );
};

export default Form;

const omittedProps: Array<keyof Omit<FormProps, 'ref'>> = [
  'labelPlacement',
  'labelClass',
];
