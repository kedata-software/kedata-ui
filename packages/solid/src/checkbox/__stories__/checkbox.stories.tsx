import Checkbox from '../checkbox';
import { Meta, StoryObj } from 'storybook-solidjs';

const Base: StoryObj<typeof Checkbox> = {
  args: {
    children: 'Hello',
    colorPalette: 'primary',
  },
  render: (props) => {
    return <Checkbox {...props} />;
  },
};

const meta: Meta<typeof Checkbox> = {
  title: 'Form/Checkbox',
  argTypes: {
    colorPalette: {
      options: ['primary', 'success', 'danger'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    checked: {
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    children: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'React.ReactNode',
        },
      },
    },
    indeterminate: {
      description: 'If true, the checkbox will be indeterminate',
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    onCheckedChange: {
      action: 'onCheckedChange',
    },
  },
};

export { Base };
export default meta;
