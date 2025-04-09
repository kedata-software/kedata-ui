import { Meta, StoryObj } from 'storybook-solidjs';
import TextareaInput from '../textarea-input';

const Default: StoryObj<typeof TextareaInput> = {
  args: {
    invalid: false,
    disabled: false,
    readOnly: false,
    placeholder: 'Enter your name',
  },
  render: (props) => {
    return <TextareaInput {...props} />;
  },
};

const meta: Meta<typeof TextareaInput> = {
  title: 'Form/TextareaInput',
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
    value: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    initialValue: {
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
    onValueChange: {
      action: 'onValueChange',
    },
  },
};

export { Default };
export default meta;
