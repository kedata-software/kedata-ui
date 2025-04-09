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
        defaultValue: { summary: 'false' },
      },
    },
    checked: {
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: 'false' },
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
    onCheckedChange: {
      action: 'onCheckedChange',
    },
  },
};

export { Base };
export default meta;
