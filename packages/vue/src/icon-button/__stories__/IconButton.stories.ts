import IconButton from '../IconButton.vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import { KiSearchSolid } from '@kedata-ui/vue-icons';
import { h } from 'vue';

const Base: StoryObj<typeof IconButton> = {
  args: {
    colorPalette: 'primary',
    variant: 'solid',
    size: 'medium',
    'aria-label': 'Search',
  },
  render: (props) => ({
    setup() {
      return { props };
    },
    template: `
      <IconButton v-bind="props">
        <KiSearchSolid />
      </IconButton>
    `,
    components: { IconButton, KiSearchSolid },
  }),
};

const meta: Meta<typeof IconButton> = {
  title: 'Action/IconButton',
  tags: ['autodocs'],
  argTypes: {
    'aria-label': {
      control: { type: 'text' },
      type: {
        name: 'string',
        required: true,
      },
    },
    colorPalette: {
      options: ['primary', 'success', 'danger'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    variant: {
      options: ['solid', 'outline', 'text'],
      control: { type: 'radio' },
      table: {
        type: {
          summary: "'solid' | 'outline' | 'text'",
        },
        defaultValue: { summary: 'solid' },
      },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      table: {
        type: {
          summary: "'small' | 'medium' | 'large'",
        },
        defaultValue: {
          summary: 'medium',
        },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export { Base };
export default meta;
