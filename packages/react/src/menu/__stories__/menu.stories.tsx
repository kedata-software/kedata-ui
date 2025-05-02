import { Meta, StoryObj } from 'storybook-solidjs';
import Menu from '../menu';
import { Button } from '../../button';
import { KiCheckOutline } from '@kedata-ui/solid-icons';

const Base: StoryObj<typeof Menu> = {
  args: {
    options: [
      {
        value: '1',
        label: 'Option 1',
        startIcon: KiCheckOutline,
      },
      {
        value: '2',
        label: 'Option 2',
      },
      {
        type: 'separator',
      },
      {
        value: '3',
        label: 'Option 3',
        className: 'color-palette-danger text-danger',
        startIcon: KiCheckOutline,
        colorPalette: 'danger',
      },
    ],
  },
  render: (props) => {
    return (
      <div>
        <Menu
          {...props}
          mapValueSelect={{
            '1': (value) => {
              console.log(value);
            },
          }}
        >
          {(props) => {
            return <Button {...props}>Open Menu</Button>;
          }}
        </Menu>
      </div>
    );
  },
};

const meta: Meta<typeof Menu> = {
  title: 'Overlay/Menu',
  argTypes: {},
};

export { Base };
export default meta;
