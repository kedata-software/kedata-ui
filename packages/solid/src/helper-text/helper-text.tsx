import useHelperText from './use-helper-text';
import type { HelperTextProps } from './index.types';
import type { Component } from 'solid-js';

const HelperText: Component<HelperTextProps> = (props) => {
  const api = useHelperText(props);

  return <div {...api.getRootProps()} />;
};

export default HelperText;
