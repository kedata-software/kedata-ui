import { h } from 'vue';
import ErrorMessage from '../ErrorMessage.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const Default: StoryObj<typeof ErrorMessage> = {
  args: {
    colorPalette: 'danger',
  },
  render: (props) => ({
    setup: () => () => {
      return h(ErrorMessage, props, {
        default: () => 'This is an error message',
      });
    },
  }),
};

const meta: Meta<typeof ErrorMessage> = {
  title: 'Display/ErrorMessage',
  component: ErrorMessage,
  argTypes: {
    colorPalette: {
      options: ['primary', 'success', 'danger'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'danger' },
      },
    },
  },
};

export { Default };
export default meta;
