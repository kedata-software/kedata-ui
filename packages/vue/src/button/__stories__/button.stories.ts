import Button from '../Button.vue';
import type { ButtonProps } from '../index.types';
import type { Meta, StoryObj } from '@storybook/vue3';
import { KiAnnotationOutline } from '@kedata-ui/vue-icons';
import { h } from 'vue';

const meta: Meta<typeof Button> = {
  title: 'Action/Button',
  tags: ['autodocs'],
  args: {
    type: 'button',
    colorPalette: 'primary',
    variant: 'solid',
    size: 'medium',
  },
  argTypes: {
    variant: {
      options: ['solid', 'outline', 'text'],
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: {
          summary: 'solid',
        },
      },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: {
          summary: 'medium',
        },
      },
    },
    withParts: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: 'true',
        },
      },
    },
    disabled: {
      control: 'boolean',
    },
    type: {
      options: ['button', 'submit', 'reset'],
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: {
          summary: 'button',
        },
      },
    },
    colorPalette: {
      options: ['primary', 'success', 'danger'],
      control: {
        type: 'select',
      },
      table: {
        defaultValue: {
          summary: 'primary',
        },
      },
    },
  },
  component: Button,
};

const Base: StoryObj<ButtonProps> = {
  args: {
    variant: 'solid',
    size: 'medium',
    withParts: true,
    disabled: false,
  },
  render: (props) => ({
    setup() {
      return { props };
    },
    template: `
      <Button v-bind="props">
        <template #start-icon>
          <KiAnnotationOutline />
        </template>
        Button
      </Button>
    `,
    components: { Button, KiAnnotationOutline },
  }),
};

export { Base };
export default meta;
