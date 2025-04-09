import PinInput from '../pin-input';
import { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta<typeof PinInput> = {
  title: 'Form/PinInput',
  component: PinInput,
  argTypes: {
    invalid: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

const Default: StoryObj<typeof PinInput> = {
  render: (props) => (
    <div class="max-w-sm">
      <PinInput {...props} />
    </div>
  ),
};

export default meta;
export { Default };
