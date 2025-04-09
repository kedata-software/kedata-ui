import type { Component, ComponentProps } from 'solid-js';
import type { ButtonBaseProps } from '../button';
import type {
  IconButtonClassNames,
  IconButtonIds,
} from '@kedata-ui/slots';

export type IconButtonBaseProps = {
  'aria-label': string;
  classNames?: IconButtonClassNames;
  ids?: IconButtonIds;
  idAsRoot?: boolean;
  withParts?: boolean;
} & Omit<
  ButtonBaseProps,
  'slotProps' | 'startIcon' | 'endIcon' | 'children' | 'ids'
>;

export type IconButtonProps = {
  children: Component<Record<string, any>>;
} & Omit<ComponentProps<'button'>, 'children' | 'aria-label'> &
  IconButtonBaseProps;
