import { Meta, StoryObj } from 'storybook-solidjs';
import ChatBubble from '../chat-bubble';

const meta: Meta<typeof ChatBubble> = {
  title: 'Display/ChatBubble',
  component: ChatBubble,
  argTypes: {
    variant: {
      options: ['question', 'answer'],
      control: {
        type: 'radio',
      },
    },
  },
};

const Base: StoryObj<typeof ChatBubble> = {
  args: {
    children: 'Hello, World!',
    time: '12:00',
    variant: 'question',
  },
  render: (props) => <ChatBubble {...props} />,
};

export { Base };
export default meta;
