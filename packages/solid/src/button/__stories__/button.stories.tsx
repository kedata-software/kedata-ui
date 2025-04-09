import Button from '../button';
import { ButtonProps } from '../index.types';
import type { Meta, StoryObj } from 'storybook-solidjs';
import { type ComponentProps } from 'solid-js';
import { KiAnnotationOutline } from '@kedata-ui/solid-icons';

const meta: Meta<ComponentProps<typeof Button>> = {
  title: 'Action/Button',
  argTypes: {
    variant: {
      options: ['solid', 'outline', 'text'],
      control: {
        type: 'radio',
      },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'radio',
      },
    },
    withParts: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: 'boolean',
    },
  },
  component: Button,
};

const Base: StoryObj<ButtonProps> = {
  args: {
    variant: 'solid',
    size: 'medium',
    withParts: true,
    disabled: false,
  },
  render: (props) => (
    <Button {...props} startIcon={KiAnnotationOutline}>
      Button
    </Button>
  ),
};

export { Base };
export default meta;
