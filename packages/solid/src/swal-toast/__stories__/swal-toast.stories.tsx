import createSwalToast from '../create-swal-toast';
import SwalToast from '../swal-toast';
import { StoryObj, Meta } from 'storybook-solidjs';

const meta: Meta<typeof SwalToast> = {
  title: 'Overlay/SwalToast',
};

const Default: StoryObj<typeof SwalToast> = {
  render: () => {
    const toast = createSwalToast();

    return (
      <button
        onClick={() => {
          toast.success({
            text: () => (
              <>
                <b>Success! </b>
                <span>This is a success toast.</span>
              </>
            ),
          });
        }}
      >
        Fire
      </button>
    );
  },
};

export { Default };
export default meta;
