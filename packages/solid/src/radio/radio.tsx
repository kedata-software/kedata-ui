import useRadio from './use-radio';
import { type RadioProps } from './index.types';
import type { Component } from 'solid-js';

const Radio: Component<RadioProps> = (props) => {
  const api = useRadio(props);

  return (
    <label {...api.getRootProps()}>
      <div {...api.getControlProps()}>
        <div {...api.getIndicatorProps()} />
      </div>
      <div {...api.getContentProps()}>
        <span {...api.getLabelProps()}>{api.label}</span>

        {api.description && (
          <span {...api.getDescriptionProps()}>{api.description}</span>
        )}
      </div>

      <input {...api.getHiddenInputProps()} />
    </label>
  );
};

export default Radio;
