import Menu from '../Menu.vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import { KiSearchSolid } from '@kedata-ui/vue-icons';
import { h } from 'vue';

const Base: StoryObj<typeof Menu> = {
  args: {
    mapValueSelect: {
      '1': (value) => console.log('Selected value 1:', value),
      '2': (value) => console.log('Selected value 2:', value),
      '1-1': (value) => console.log('Selected value 1-1:', value),
      '2-1': (value) => console.log('Selected value 2-1:', value),
    },
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
      return h(
        Menu,
        {
          ...props,
          onSelect: (value: string) => {
            console.log('Selected value from onSelect:', value);
          },
        },
        {
          trigger: (props: any) => h('button', props, 'Open Menu'),
        },
      );
    },
  }),
};

const meta: Meta<typeof Menu> = {
  title: 'Overlay/Menu',
  tags: ['autodocs'],
};

export { Base };
export default meta;
