import type { ComponentProps, ReactElement, ReactNode } from 'react';
import type { TestableProps } from '../types';
import type {
  ColorPalette,
  FeedbackClassNames,
  FeedbackIds,
} from '@kedata-ui/slots';

export type FeedbackPreset = 'success' | 'error' | 'warning';

export type FeedbackBaseProps = TestableProps & {
  title?: ReactNode;
  icon?: ReactElement;
  message?: ReactNode;
  /**
   * @default 'danger'
   */
  colorPalette?: ColorPalette;
  preset?: FeedbackPreset;
  classNames?: FeedbackClassNames;
  ids?: FeedbackIds;
  idAsRoot?: boolean;
  withParts?: boolean;
};

export type FeedbackProps = ComponentProps<'div'> & FeedbackBaseProps;
