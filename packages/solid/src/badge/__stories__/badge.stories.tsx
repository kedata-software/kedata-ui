import type { Meta, StoryObj } from 'storybook-solidjs';
import Badge from '../badge';
import { BadgeProps } from '../index.types';
import type { ComponentProps } from 'solid-js';

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
