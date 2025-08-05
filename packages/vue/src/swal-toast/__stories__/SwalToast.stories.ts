import type { Meta, StoryObj } from '@storybook/vue3';
import { KiInfoCircleSolid } from '@kedata-ui/vue-icons';
import { computed, h } from 'vue';
import SwalToast from '../SwalToast.vue';
import useSwalToast from '../useSwalToast';
import { Button } from '../../button';

const meta: Meta<typeof SwalToast> = {
  title: 'Overlay/SwalToast',
  tags: ['autodocs'],
};

const Base: StoryObj<typeof SwalToast> = {
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
        <SwalToast :show-confirm-button="true" :show-deny-button="true" :color-palette="colorPalette">
          <template #icon="props">
            <KiInfoCircleSolid v-bind="props" />
          </template>

          <template #text>This is description</template>
        </SwalToast>
      `,
      components: {
        SwalToast,
        KiInfoCircleSolid,
      },
    };
  },
};

const UseSwalToast: StoryObj<typeof useSwalToast> = {
  render: () => {
    return {
      setup: () => {
        const { error, info, success } = useSwalToast();

        return {
          error: () => {
            error({
              text: () => 'This is description',
              icon: (props) => h(KiInfoCircleSolid, props),
            });
          },
          info: () => {
            info({
              text: () => 'This is description',
              icon: (props) => h(KiInfoCircleSolid, props),
            });
          },
          success: () => {
            success({
              text: () => 'This is description',
              icon: (props) => h(KiInfoCircleSolid, props),
            });
          },
        };
      },
      template: `
        <div class="flex flex-row gap-2">
          <Button @click="success" color-palette="success">Success</Button>
          <Button @click="info" color-palette="info">Info</Button>
          <Button @click="error" color-palette="danger">Error</Button>
        </div>
      `,
      components: {
        Button,
        KiInfoCircleSolid,
      },
    };
  },
};

export { Base, UseSwalToast };
export default meta;
