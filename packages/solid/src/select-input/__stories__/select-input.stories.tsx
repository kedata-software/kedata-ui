import { Meta, StoryObj } from 'storybook-solidjs';
import SelectField from '../select-input';
import { KiSearchSolid } from '@kedata-ui/solid-icons';

const Default: StoryObj<typeof SelectField> = {
  args: {
    invalid: false,
    placeholder: 'Please select a country',
    searchPlaceholder: 'Search keyword',
    withSearch: true,
    options: [
      {
        label: 'Afghanistan',
        value: 'afghanistan',
      },
      {
        label: 'Indonesia',
        value: 'indonesia',
      },
      {
        label: 'Malaysia',
        value: 'malaysia',
      },
    ],
  },
  render: (props) => {
    return <SelectField {...props} />;
  },
};

const StartIcon: StoryObj<typeof SelectField> = {
  args: {
    invalid: false,
    options: [
      {
        label: 'Option 1',
        value: 'option-1',
      },
      {
        label: 'Option 2',
        value: 'option-2',
      },
      {
        label: 'Option 3',
        value: 'option-3',
      },
    ],
  },
  render: (props) => {
    return <SelectField {...props} startIcon={KiSearchSolid} />;
  },
};

const Multiple: StoryObj<typeof SelectField> = {
  args: {
    invalid: false,
    options: [
      {
        label: 'Option 1',
        value: 'option-1',
      },
      {
        label: 'Option 2',
        value: 'option-2',
      },
      {
        label: 'Option 3',
        value: 'option-3',
      },
    ],
    multiple: true,
  },
  render: (props) => {
    return <SelectField {...props} />;
  },
};

const meta: Meta<typeof SelectField> = {
  title: 'Form/SelectInput',
  argTypes: {
    invalid: {
      control: {
        type: 'boolean',
      },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    multiple: {
      control: {
        type: 'boolean',
      },
      type: 'boolean',
      table: {
        defaultValue: {
          summary: 'false',
        },
      },
    },
    placeholder: {
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    withSearch: {
      control: {
        type: 'boolean',
      },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    searchPlaceholder: {
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    clearSearchTermOnClose: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {
          summary: 'true',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    onValueChange: {
      action: 'onChange',
      table: {
        type: {
          summary: 'function',
        },
      },
    },
    onSearchChange: {
      action: 'onSearchChange',
      table: {
        type: {
          summary: '(searchKeyword: string) => void',
        },
      },
    },
  },
};

export { Default, StartIcon, Multiple };
export default meta;
