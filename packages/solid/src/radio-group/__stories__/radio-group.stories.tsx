import { Radio } from '../../radio';
import RadioGroup from '../radio-group';
import { Meta, StoryObj } from 'storybook-solidjs';

const Base: StoryObj<typeof RadioGroup> = {
  args: {
    orientation: 'horizontal',
    name: 'option',
    initialValue: '1',
  },
  render: (props) => {
    return (
      <RadioGroup {...props}>
        <RadioGroup.Item value="1">
          {(props) => (
            <Radio
              {...props}
              label="Option 1"
              description="This is the description"
            />
          )}
        </RadioGroup.Item>
        <RadioGroup.Item value="2">
          {(props) => <Radio {...props} label="Option 2" />}
        </RadioGroup.Item>
        <RadioGroup.Item value="3">
          {(props) => <Radio {...props} label="Option 3" />}
        </RadioGroup.Item>
      </RadioGroup>
    );
  },
};

const meta: Meta<typeof RadioGroup> = {
  title: 'Form/RadioGroup',
  argTypes: {
    name: {
      type: {
        required: true,
        name: 'string',
      },
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    initialValue: {
      control: {
        type: 'text',
      },
    },
    value: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    invalid: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    orientation: {
      options: ['vertical', 'horizontal'],
      control: { type: 'radio' },
      table: {
        type: {
          summary: "'vertical' | 'horizontal'",
        },
        defaultValue: { summary: 'vertical' },
      },
    },
    onValueChange: {
      action: 'onValueChange',
      table: {
        type: {
          summary: '(value: string) => void',
        },
      },
    },
  },
};

export { Base };
export default meta;
