import { Meta, StoryObj } from 'storybook-solidjs';
import { Button } from '../../button';
import SwalAlert from '../swal-alert';
import type { SwalAlertFireProps } from '../index.types';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Base: StoryObj<SwalAlertFireProps> = {
  args: {
    title: 'Well Done!',
    text: 'Ini adalah teks swal',
  },
  render: (props) => {
    return (
      <Button
        onClick={() => {
          SwalAlert.fire({
            ...props,
          });
        }}
      >
        Fire
      </Button>
    );
  },
};

const ConfirmFetch: StoryObj<SwalAlertFireProps> = {
  args: {
    title: 'Well Done!',
    text: 'Ini adalah teks swal',
  },

  render: (props) => {
    return (
      <Button
        onClick={() => {
          SwalAlert.fire({
            ...props,
            preConfirm: async () => {
              await props.preConfirm?.();
              await delay(1000);
              return 'Hello';
            },
          });
        }}
      >
        Fire
      </Button>
    );
  },
};

const DenyFetch: StoryObj<SwalAlertFireProps> = {
  args: {
    title: 'Well Done!',
    text: 'Ini adalah teks swal',
  },

  render: (props) => {
    return (
      <Button
        onClick={() => {
          SwalAlert.fire({
            ...props,
            preDeny: async () => {
              await props.preDeny?.();
              await delay(1000);
              return 'Hello';
            },
          });
        }}
      >
        Fire
      </Button>
    );
  },
};

const meta: Meta<SwalAlertFireProps> = {
  title: 'Overlay/SwalAlert',
  argTypes: {
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

export { Base, ConfirmFetch, DenyFetch };
export default meta;
