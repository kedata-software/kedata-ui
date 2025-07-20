import type { Meta, StoryObj } from '@storybook/vue3';
import Popover from '../Popover.vue';
import { h } from 'vue';

const meta: Meta<typeof Popover> = {
  title: 'Overlay/Popover',
  component: Popover,
};

const Base: StoryObj<typeof Popover> = {
  render: () => ({
    setup: () => () => {
      return h(
        Popover,
        {},
        {
          trigger: (props: object) => h('button', props, 'Open popover'),
          content: (props: object) => h('div', props, 'Popover content'),
        },
      );
    },
  }),
};

export { Base };
export default meta;
