import type { Meta, StoryObj } from '@storybook/vue3';
import TextareaInput from '../TextareaInput.vue';
import { h } from 'vue';

const Default: StoryObj<typeof TextareaInput> = {
  args: {
    invalid: false,
    disabled: false,
    readOnly: false,
    placeholder: 'Enter your name',
  },
  render: (props) => ({
    setup: () => () => {
      return h(TextareaInput, props);
    },
  }),
};

const meta: Meta<typeof TextareaInput> = {
  title: 'Form/TextareaInput',
  tags: ['autodocs'],
  argTypes: {
    invalid: {
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },

        description: {
          summary: 'Disables the input.',
        },
      },
    },
    readOnly: {
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        description: {
          summary:
            'Prevents the user from modifying the input value. This prop has no effect on textarea.',
        },
      },
    },
    showCounter: {
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: 'true' },
        description: {
          summary: 'Shows the counter of the input.',
        },
      },
    },
    modelValue: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    rows: {
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: '5' },
      },
    },
    maxLength: {
      control: { type: 'number' },
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: { summary: '200' },
      },
    },
    'onUpdate:modelValue': {
      action: 'onUpdate:modelValue',
    },
  },
};

export { Default };
export default meta;
