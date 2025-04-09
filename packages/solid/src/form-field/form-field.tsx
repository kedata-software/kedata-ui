import useFormField from './use-form-field';
import { ErrorMessage } from '../error-message';
import { HelperText } from '../helper-text';
import { Label } from '../label';
import type { FormFieldProps } from './index.types';
import type { Component } from 'solid-js';

const FormField: Component<FormFieldProps> = (props) => {
  const api = useFormField(props);

  return (
    <div {...api.getRootProps()}>
      {api.label && (
        <Label
          for={api.for()}
          required={api.required()}
          showAsterisk={api.showAsterisk()}
          {...api.getLabelProps()}
        >
          {api.label}
        </Label>
      )}

      <div {...api.getBodyProps()}>
        {api.children}

        {api.isFooterVisible() && (
          <div {...api.getFooterProps()}>
            {!!api.error() && (
              <ErrorMessage
                for={api.for()}
                error={api.error()}
                classNames={api.classNames()?.ErrorMessage}
              />
            )}

            {api.helperText && (
              <HelperText classNames={api.classNames()?.HelperText}>
                {api.helperText}
              </HelperText>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormField;
