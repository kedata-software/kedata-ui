import type { Meta, StoryObj } from '@storybook/vue3';
import TextField from '../TextInput.vue';
import { KiSearchOutline } from '@kedata-ui/vue-icons';
import { h } from 'vue';

const Default: StoryObj<typeof TextField> = {
  args: {
    invalid: false,
    placeholder: 'Enter your name',
    disabled: false,
  },
  render: (props) => ({
    setup: () => () => {
      return h(TextField, props);
    },
  }),
};

const StartIcon: StoryObj<typeof TextField> = {
  args: {
    invalid: false,
    placeholder: 'Enter search',
  },
  render: (props) => ({
    setup: () => () => {
      return h(TextField, props, {
        'start-icon': (props: object) => h(KiSearchOutline, props),
      });
    },
  }),
};

const StartAddon: StoryObj<typeof TextField> = {
  args: {
    invalid: false,
    placeholder: 'Enter price',
  },
  render: (props) => ({
    setup: () => () => {
      return h(TextField, props, {
        'start-addon': () => 'Rp',
      });
    },
  }),
};

const EndIcon: StoryObj<typeof TextField> = {
  args: {
    invalid: false,
    placeholder: 'Enter search',
  },
  render: (props) => ({
    setup: () => () => {
      return h(TextField, props, {
        'end-icon': (props: object) => h(KiSearchOutline, props),
      });
    },
  }),
};

const EndAddon: StoryObj<typeof TextField> = {
  args: {
    invalid: false,
    placeholder: 'Enter price',
  },
  render: (props) => ({
    setup: () => () => {
      return h(TextField, props, {
        'end-addon': () => ',00',
      });
    },
  }),
};

const meta: Meta<typeof TextField> = {
  title: 'Form/TextInput',
  argTypes: {
    invalid: {
      control: { type: 'boolean' },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: { summary: 'false' },
      },
    },
    type: {
      options: ['text', 'password', 'email', 'number', 'tel', 'url', 'search'],
      table: {
        defaultValue: {
          summary: 'text',
        },
        type: {
          summary:
            "'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search'",
        },
      },
    },
    placeholder: {
      description: 'The placeholder of the input field.',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },

      defaultValue: {
        summary: 'undefined',
      },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    modelValue: {
      control: { type: 'text' },
    },
    'onUpdate:modelValue': {
      action: 'onValueChange',
    },
  },
};

export { Default, StartIcon, EndIcon, StartAddon, EndAddon };
export default meta;
