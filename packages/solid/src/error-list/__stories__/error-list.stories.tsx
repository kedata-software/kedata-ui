import ErrorList from '../error-list';
import { Meta, StoryObj } from 'storybook-solidjs';

const Default: StoryObj<typeof ErrorList> = {
  args: {
    colorPalette: 'danger',
    errors: [
      'This is an error',
      'This is another error',
      'This is a third error',
    ],
  },
  render: (props) => {
    return <ErrorList {...props} />;
  },
};

const meta: Meta<typeof ErrorList> = {
  title: 'Display/ErrorList',
  component: ErrorList,
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
