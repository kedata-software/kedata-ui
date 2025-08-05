import type { Meta, StoryObj } from '@storybook/vue3';
import { KiExclamationSolid, KiInfoCircleSolid } from '@kedata-ui/vue-icons';
import { computed, h } from 'vue';
import SwalAlert from '../SwalAlert.vue';
import useSwalAlert from '../useSwalAlert';
import { Button } from '../../button';

const meta: Meta<typeof SwalAlert> = {
  title: 'Overlay/SwalAlert',
  tags: ['autodocs'],
};

const Base: StoryObj<typeof SwalAlert> = {
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
        <SwalAlert :show-confirm-button="true" :show-deny-button="true" :color-palette="colorPalette">
          <template #icon="props">
            <KiInfoCircleSolid v-bind="props" />
          </template>

          <template #title>Swal Alert</template>
          <template #text>This is description</template>

          <template #confirm-button-text>Confirm</template>
          <template #deny-button-text>Deny</template>
        </SwalAlert>
      `,
      components: {
        SwalAlert,
        KiInfoCircleSolid,
      },
    };
  },
};

const UseSwalAlert: StoryObj<typeof useSwalAlert> = {
  render: () => {
    return {
      setup: () => {
        const { fire, done, error } = useSwalAlert();

        return {
          fire: () => {
            fire({
              title: () => 'Well done!',
              text: () => 'This is description',
              icon: (props) => h(KiInfoCircleSolid, props),
            });
          },
          done,
          error: () => {
            error({
              title: () => 'Error!',
              text: () => 'This is description',
              icon: (props) => h(KiExclamationSolid, props),
            });
          },
        };
      },
      template: `
        <div class="flex flex-row gap-2">
          <Button 
            @click="fire()" 
            color-palette="primary"
          >
            Fire
          </Button>

          <Button @click="done({ title: 'Well done!', text: 'Ini adalah teks swal' })" color-palette="primary">Done</Button>
          <Button @click="error()" color-palette="danger">Error</Button>
        </div>
      `,
      components: {
        Button: Button,
        KiInfoCircleSolid,
      },
    };
  },
};

export { Base, UseSwalAlert };
export default meta;
