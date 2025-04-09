import SwalConfirmation from '../swal-confirmation';
import { Button } from '../../button';
import type { SwalConfirmationFireProps } from '../index.types';
import { Meta, StoryObj } from 'storybook-solidjs';
import { KiTrashCanSolid } from '@kedata-ui/solid-icons';

const Base: StoryObj<SwalConfirmationFireProps> = {
  args: {
    title: 'Well Done!',
    text: 'Ini adalah teks swal',
    colorPalette: 'primary',
  },
  render: (props) => {
    return (
      <Button
        onClick={() => {
          SwalConfirmation.fire({
            ...props,
            icon: KiTrashCanSolid,
          });
        }}
      >
        Fire
      </Button>
    );
  },
};

const meta: Meta<SwalConfirmationFireProps> = {
  title: 'Overlay/SwalConfirmation',
  argTypes: {
    colorPalette: {
      options: ['primary', 'success', 'danger'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    title: {
      type: {
        name: 'string',
      },
      description: 'The title of the alert.',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    text: {
      description: 'The text of the alert.',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    showConfirmButton: {
      description: 'If `true`, the confirm button will be shown.',
      control: {
        type: 'boolean',
      },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true',
        },
      },
    },
    showDenyButton: {
      description: 'If `true`, the deny button will be shown.',
      control: {
        type: 'boolean',
      },
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true',
        },
      },
    },
    confirmButtonText: {
      control: {
        type: 'text',
      },
      description: 'The text of the confirm button.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '"Tutup"',
        },
      },
    },
    denyButtonText: {
      control: {
        type: 'text',
      },
      description: 'The text of the deny button.',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '"Batalkan"',
        },
      },
    },
    onConfirm: {
      action: 'onConfirm',
      type: {
        name: 'function',
      },
    },
    onDeny: {
      action: 'onDeny',
      type: {
        name: 'function',
      },
    },
    preDeny: {
      action: 'preDeny',
      type: {
        name: 'function',
      },
    },
    preConfirm: {
      action: 'preConfirm',
      type: {
        name: 'function',
      },
    },
  },
};

export { Base };
export default meta;
