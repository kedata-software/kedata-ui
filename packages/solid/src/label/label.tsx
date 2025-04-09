import useLabel from './use-label';
import type { LabelProps } from './index.types';
import type { Component } from 'solid-js';

const Label: Component<LabelProps> = (props) => {
  const api = useLabel(props);

  return (
    <label {...api.getRootProps()}>
      {api.children}{' '}
      {api.showAsterisk() && api.required() && (
        <span {...api.getAsteriskProps()} />
      )}
    </label>
  );
};

export default Label;
