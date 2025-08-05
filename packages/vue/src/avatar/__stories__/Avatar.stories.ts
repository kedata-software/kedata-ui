import { h } from 'vue';
import Avatar from '../Avatar.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const Base: StoryObj<typeof Avatar> = {
  args: {
    fallback: 'KD',
    src: 'https://i.pravatar.cc/300',
  },
  render: (props) => ({
    components: { Avatar },
    setup() {
      return { props };
    },
    template: `
      <Avatar v-bind="props" />
    `,
  }),
};

const Fallback: StoryObj<typeof Avatar> = {
  args: {
    fallback: 'KD',
  },
  render: (props) => ({
    components: { Avatar },
    setup() {
      return { props };
    },
    template: `
      <Avatar v-bind="props" />
    `,
  }),
};

const meta: Meta<typeof Avatar> = {
  title: 'Display/Avatar',
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },

    fallback: {
      control: { type: 'text' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
};

export { Base, Fallback };
export default meta;
