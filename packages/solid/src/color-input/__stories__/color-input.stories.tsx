import { StoryObj, Meta } from 'storybook-solidjs';
import ColorInput from '../color-input';

const meta: Meta<typeof ColorInput> = {
  title: 'Form/ColorInput',
  component: ColorInput,
  argTypes: {
    onValueChange: {
      action: 'onValueChange',
    },
  },
};

const Base: StoryObj<typeof ColorInput> = {
  render: (props) => <ColorInput {...props} />,
};

export { Base };
export default meta;
