import useTextareaInput from './use-textarea-input';
import { type TextareaInputProps } from './index.types';
import type { Component } from 'solid-js';

const TextareaInput: Component<TextareaInputProps> = (props) => {
  const api = useTextareaInput(props);

  return (
    <div {...api.getRootProps()}>
      <textarea {...api.getInputProps()} ref={api.textareaRef} />

      {api.showCounter && api.maxLength !== undefined && (
        <div {...api.getCounterProps()}>
          {api.value().length} / {api.maxLength}
        </div>
      )}
    </div>
  );
};

export default TextareaInput;
