import type { WithFieldProps } from "../types";

export type WithInputProps = WithFieldProps & {
  id?: string;
  required?: boolean;
  placeholder?: string;
  invalid?: boolean;
};

export type UseInputParams = {
  props: WithInputProps;
};
