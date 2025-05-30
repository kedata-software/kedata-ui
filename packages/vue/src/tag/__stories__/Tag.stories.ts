import { h } from 'vue';
import Tag from '../Tag.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const Base: StoryObj<typeof Tag> = {
  args: {
    colorPalette: 'primary',
    variant: 'solid',
    closeable: false,
  },
  render: (props) => ({
    setup: () => () => {
      return h(Tag, props, {
        default: () => 'Hello Tag',
      });
    },
  }),
};

const Closeable: StoryObj<typeof Tag> = {
  args: {
    colorPalette: 'primary',
    variant: 'solid',
    closeable: true,
  },
  render: (props) => ({
    setup: () => () => {
      return h(Tag, props, {
        default: () => 'Hello Tag',
      });
    },
  }),
};

const meta: Meta<typeof Tag> = {
  title: 'Action/Tag',
  argTypes: {
    colorPalette: {
      options: ['primary', 'success', 'danger'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    variant: {
      options: ['subtle', 'solid', 'outline'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'solid' },
      },
    },
    closeable: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export { Base, Closeable };
export default meta;
