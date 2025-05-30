import Button from '../Button.vue';
import type { ButtonProps } from '../index.types';
import type { Meta, StoryObj } from '@storybook/vue3';
import { KiAnnotationOutline } from '@kedata-ui/vue-icons';
import { h } from 'vue';

const meta: Meta<typeof Button> = {
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
  render: (props) => ({
    setup() {
      return () => {
        return h(Button, props, {
          default: () => 'Button',
          'start-icon': () => h(KiAnnotationOutline),
        });
      };
    },
  }),
};

export { Base };
export default meta;
