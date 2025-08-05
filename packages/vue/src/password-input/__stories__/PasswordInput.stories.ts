import type { Meta, StoryObj } from '@storybook/vue3';
import PasswordInput from '../PasswordInput.vue';
import { h } from 'vue';

const Base: StoryObj<typeof PasswordInput> = {
  args: {
    placeholder: 'Enter your password',
  },
  render: (props) => ({
    setup: () => () => {
      return h(PasswordInput, props);
    },
  }),
};

const meta: Meta<typeof PasswordInput> = {
  title: 'Form/PasswordInput',
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
};

export { Base };
export default meta;
