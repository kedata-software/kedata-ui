import type { Meta, StoryObj } from '@storybook/vue3';
import ChatBubble from '../ChatBubble.vue';
import { h } from 'vue';

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
    time: '12:00',
    variant: 'question',
  },
  render: (props) => ({
    setup() {
      return () => {
        return h(ChatBubble, props, {
          default: () => 'ChatBubble',
        });
      };
    },
  }),
};

export { Base };
export default meta;
