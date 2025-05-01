import Badge from '../badge';
import { BadgeProps } from '../index.types';
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';

const meta: Meta<ComponentProps<typeof Badge>> = {
  title: 'Display/Badge',
  argTypes: {
    variant: {
      options: ['subtle', 'solid', 'outline'],
      control: {
        type: 'radio',
      },
    },
    withParts: {
      control: {
        type: 'boolean',
      },
    },
  },
  component: Badge,
};

const Base: StoryObj<BadgeProps> = {
  args: {
    variant: 'subtle',
    withParts: true,
  },
  render: (props) => <Badge {...props}>Badge</Badge>,
};

export { Base };
export default meta;
