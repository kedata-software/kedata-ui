import React, { cloneElement } from 'react';
import { FeedbackProps } from './index.types';
import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { useColorPalette } from '../use-color-palette';
import { feedbackSlots } from '@kedata-ui/slots/feedback';
import clsx from 'clsx';
import { useMemo, type FC } from 'react';
import { omitProps } from '@kedata-software/toolkit-js';

const Feedback: FC<FeedbackProps> = (inProps) => {
  const props = useBaseProps('Feedback', inProps, {
    colorPalette: 'danger',
  });
  const classNames = useClassNames('Feedback', inProps);
  const colorPaletteClassName = useColorPalette(props.colorPalette);

  const twMerge = useTwMerge();

  const slots = useMemo(
    () => feedbackSlots({ withParts: props.withParts }),
    [props.withParts],
  );

  const rootProps = omitProps(props, omittedProps);

  return (
    <div
      {...rootProps}
      className={twMerge(
        clsx(
          colorPaletteClassName,
          slots.root(),
          classNames?.root,
          props.className,
        ),
      )}
    >
      {props.icon &&
        cloneElement(props.icon, {
          className: twMerge(clsx(slots.icon(), classNames?.icon)),
        })}

      <div className={twMerge(clsx(slots.title(), classNames?.title))}>
        {props.title}
      </div>

      {props.message && (
        <p className={twMerge(clsx(slots.message(), classNames?.message))}>
          {props.message}
        </p>
      )}
    </div>
  );
};

export default Feedback;

const omittedProps: Array<keyof FeedbackProps> = [
  'withParts',
  'icon',
  'title',
  'message',
  'colorPalette',
  'preset',
  'classNames',
];
