import type { Meta, StoryObj } from '@storybook/vue3';
import Pagination from '../Pagination.vue';
import { h } from 'vue';

const Base: StoryObj<typeof Pagination> = {
  args: {
    count: 100,
    pageSize: 10,
    colorPalette: 'primary',
  },
  render: (props) => ({
    setup: () => () => {
      return h(Pagination, props);
    },
  }),
};

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  argTypes: {
    colorPalette: {
      options: ['primary', 'success', 'danger'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    count: {
      control: {
        type: 'number',
      },
      description: 'The total number of items',
    },
    pageSize: {
      control: {
        type: 'number',
      },
      description: 'The number of items per page',
    },
    onPageChange: {
      action: 'onPageChange',
      table: {
        type: {
          summary: '(page: number) => void',
        },
      },
    },
  },
};

export { Base };
export default meta;
