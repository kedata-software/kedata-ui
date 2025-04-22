import DatePicker from '../date-picker';
import { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'Form/DatePicker',
};

const Base: StoryObj<typeof DatePicker> = {
  args: {
    selectionMode: 'single',
  },
  render: (props) => {
    return <DatePicker {...props} />;
  },
};

export { Base };
export default meta;
