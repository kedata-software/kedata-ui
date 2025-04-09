import { StoryObj, Meta } from 'storybook-solidjs';
import SelectPicker from '../select-picker';

const meta: Meta<typeof SelectPicker> = {
  title: 'Picker/SelectPicker',
  component: SelectPicker,
  argTypes: {
    value: {
      description: 'The selected value',
      control: { type: 'object' },
      table: { type: { summary: 'string[]' } },
    },
    searchTerm: {
      description: 'The search term',
      control: { type: 'text' },
      table: { type: { summary: 'string' } },
    },
    searchPlaceholder: {
      description: 'The search input placeholder',
      control: { type: 'text' },
      table: { type: { summary: 'string' } },
    },
    withSearch: {
      description: 'Whether to show the search input',
      control: { type: 'boolean' },
    },
    onValueChange: {
      action: 'onValueChange',
      table: { type: { summary: '(value: string[]) => void' } },
    },
    onSearchTermChange: {
      action: 'onSearchTermChange',
      table: { type: { summary: '(searchTerm: string) => void' } },
    },
  },
};

const Base: StoryObj<typeof SelectPicker> = {
  args: {
    withSearch: true,
  },
  render: (props) => (
    <SelectPicker
      {...props}
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
        { label: 'Option 3', value: '3' },
      ]}
    />
  ),
};

export { Base };
export default meta;
