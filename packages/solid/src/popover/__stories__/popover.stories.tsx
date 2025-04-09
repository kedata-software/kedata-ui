import { Meta, StoryObj } from 'storybook-solidjs';
import Popover from '../popover';

const meta: Meta<typeof Popover> = {
  title: 'Overlay/Popover',
  component: Popover,
};

const Base: StoryObj<typeof Popover> = {
  render: () => {
    return (
      <Popover content={() => <div>Popover content</div>}>
        {(props) => <button {...props}>Open popover</button>}
      </Popover>
    );
  },
};

export { Base };
export default meta;
