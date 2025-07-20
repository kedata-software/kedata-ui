import type { FormFieldLabelPlacement } from "@kedata-ui/slots";
import type { WithLabelProps } from "../label";

export type FormFieldProps = WithLabelProps & {
  for?: string;
  labelPlacement?: FormFieldLabelPlacement;
  withParts?: boolean;
  errorMessage?: string;
  invalid?: boolean;
};
