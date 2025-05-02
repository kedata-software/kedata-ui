import React, { type FC } from 'react';
import useLabel from './use-label';
import type { LabelProps } from './index.types';

const Label: FC<LabelProps> = (props) => {
  const api = useLabel(props);

  return (
    <label {...api.getRootProps()}>
      {api.children}{' '}
      {api.showAsterisk && api.required && <span {...api.getAsteriskProps()} />}
    </label>
  );
};

export default Label;
