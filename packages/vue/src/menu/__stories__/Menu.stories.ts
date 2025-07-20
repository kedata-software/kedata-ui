import Menu from '../Menu.vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import { KiSearchSolid } from '@kedata-ui/vue-icons';
import { h } from 'vue';

const Base: StoryObj<typeof Menu> = {
  args: {
    options: [
      {
        value: '1',
        label: 'Option 1',
        type: 'item',
        startIcon: (props) => h(KiSearchSolid, props),
        options: [
          {
            value: '1-1',
            label: 'Option 1-1',
            type: 'item',
            startIcon: (props) => h(KiSearchSolid, props),
          },
        ],
      },
      {
        value: '2',
        label: 'Option 2',
        type: 'item',
        startIcon: (props) => h(KiSearchSolid, props),
        options: [
          {
            value: '2-1',
            label: 'Option 2-1',
            type: 'item',
            startIcon: (props) => h(KiSearchSolid, props),
          },
        ],
      },
    ],
  },
  render: (props) => ({
    setup: () => () => {
      return h(Menu, props, {
        trigger: (props: any) => h('button', props, 'Open Menu'),
      });
    },
  }),
};

const meta: Meta<typeof Menu> = {
  title: 'Overlay/Menu',
};

export { Base };
export default meta;
