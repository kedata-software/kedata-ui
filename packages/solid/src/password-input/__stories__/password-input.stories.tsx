import { Meta, StoryObj } from 'storybook-solidjs';
import PasswordInput from '../password-input';

const Base: StoryObj<typeof PasswordInput> = {
  render: (props) => {
    return <PasswordInput {...props} />;
  },
};

const meta: Meta<typeof PasswordInput> = {
  title: 'Form/PasswordInput',
  argTypes: {},
};

export { Base };
export default meta;
