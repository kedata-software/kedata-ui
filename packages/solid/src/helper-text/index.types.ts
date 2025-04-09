import type {
  HelperTextClassNames,
  HelperTextIds,
} from '@kedata-ui/slots';
import type { ComponentProps } from 'solid-js';

export type HelperTextBaseProps = {
  ids?: HelperTextIds;
  classNames?: HelperTextClassNames;
  withParts?: boolean;
};

export type HelperTextProps = ComponentProps<'div'> & HelperTextBaseProps;
