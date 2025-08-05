import type { Meta, StoryObj } from '@storybook/vue3';
import Tooltip from '../Tooltip.vue';
import { h } from 'vue';

const Base: StoryObj = {
  render: () => ({
    setup: () => () => {
      return h(
        Tooltip,
        {},
        {
          trigger: (props: object) => {
            return h('button', props, {
              default: () => 'Hover me!',
            });
          },
          content: () => 'Hello Tooltip!',
        },
      );
    },
  }),
};

const meta: Meta = {
  title: 'Overlay/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};

export default meta;
export { Base };
