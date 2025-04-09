import { TextInput } from '../../text-input';
import FormField from '../form-field';
import { Meta, StoryObj } from 'storybook-solidjs';

const Base: StoryObj<typeof FormField> = {
  args: {
    label: 'Fullname',
    helperText: 'This is a helper text',
    for: 'name',
    labelPlacement: 'top',
  },
  render: (props) => {
    return (
      <FormField {...props} error="err">
        <TextInput placeholder="Enter your name" id="name" />
      </FormField>
    );
  },
};

const HelperText: StoryObj<typeof FormField> = {
  args: {
    label: 'Name',
    helperText: 'This is a helper text',
    labelPlacement: 'top',
  },
  render: (props) => {
    return (
      <FormField {...props}>
        <TextInput placeholder="Enter your name" />
      </FormField>
    );
  },
};

const meta: Meta<typeof FormField> = {
  title: 'Form/FormField',
  argTypes: {
    label: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'React.ReactNode',
        },
        defaultValue: { summary: 'undefined' },
      },
    },
    helperText: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'React.ReactNode',
        },
        defaultValue: { summary: 'undefined' },
      },
    },
    labelPlacement: {
      options: ['top', 'left'],
      control: { type: 'radio' },
      table: {
        type: {
          summary: 'top | left',
        },
        defaultValue: { summary: 'top' },
      },
    },
  },
};

export { Base, HelperText };
export default meta;
