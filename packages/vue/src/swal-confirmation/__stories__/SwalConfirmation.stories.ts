import type { Meta, StoryObj } from '@storybook/vue3';
import { KiInfoCircleSolid } from '@kedata-ui/vue-icons';
import { computed, h } from 'vue';
import SwalConfirmation from '../SwalConfirmation.vue';
import useSwalConfirmation from '../useSwalConfirmation';
import { Button } from '../../button';

const meta: Meta<typeof SwalConfirmation> = {
  title: 'Overlay/SwalConfirmation',
  tags: ['autodocs'],
};

const Base: StoryObj<typeof SwalConfirmation> = {
  argTypes: {
    colorPalette: {
      options: ['primary', 'success', 'danger'],
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
  },
  render: (props) => {
    return {
      setup: () => {
        return {
          colorPalette: computed(() => props.colorPalette),
        };
      },
      template: `
        <SwalConfirmation :show-confirm-button="true" :show-deny-button="true" :color-palette="colorPalette">
          <template #icon="props">
            <KiInfoCircleSolid v-bind="props" />
          </template>

          <template #title>Swal Confirmation</template>
          <template #text>This is description</template>

          <template #confirm-button-text>Confirm</template>
          <template #deny-button-text>Deny</template>
        </SwalConfirmation>
      `,
      components: {
        SwalConfirmation,
        KiInfoCircleSolid,
      },
    };
  },
};

const UseSwalConfirmation: StoryObj<typeof useSwalConfirmation> = {
  render: () => {
    return {
      setup: () => {
        const { fire, confirm, danger } = useSwalConfirmation();

        return {
          confirm: () => {
            confirm({
              title: () => 'Well done!',
              text: () => 'This is description',
              icon: (props) => h(KiInfoCircleSolid, props),
            });
          },
          danger: () => {
            danger({
              title: () => 'Error!',
              text: () => 'This is description',
              icon: (props) => h(KiInfoCircleSolid, props),
            });
          },
        };
      },
      template: `
        <div class="flex flex-row gap-2">
          <Button @click="confirm">Confirm</Button>
          <Button @click="danger" color-palette="danger">Danger</Button>
        </div>
      `,
      components: {
        Button,
        KiInfoCircleSolid,
      },
    };
  },
};

export { Base, UseSwalConfirmation };
export default meta;
