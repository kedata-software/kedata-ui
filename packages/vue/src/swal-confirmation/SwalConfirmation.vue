<script setup lang="ts" generic="D">
import { Button } from "../button";
import { swalConfirmationSlots, tw } from "@kedata-ui/slots";
import { computed, ref, useSlots } from "vue";
import type { SwalConfirmationProps } from "./index.types";
import { useColorPalette } from "../use-color-palette";

defineOptions({
  inheritAttrs: false,
});
const props = defineProps<SwalConfirmationProps<D>>();

const compSlots = useSlots();
const colorPaletteClass = useColorPalette(() => props.colorPalette);

const slots = computed(() => {
  return swalConfirmationSlots();
});

const isConfirmLoading = ref(false);
const isDenyLoading = ref(false);
</script>

<template>
  <div :class="tw(colorPaletteClass, slots.root())">
    <div :class="slots.body()">
      <div :class="slots.iconBox()">
        <slot name="icon" :class="slots.icon()" />
      </div>
      <div :class="slots.content()">
        <div :class="slots.title()">
          <slot name="title" />
        </div>
        <div :class="slots.text()">
          <slot name="text" />
        </div>
      </div>
    </div>
    <div :class="slots.footer()">
      <div v-if="!!compSlots.footerLeft" :class="slots.footerLeft()">
        <slot
          name="footer-left"
          :disabled="isConfirmLoading || isDenyLoading"
        />
      </div>
      <div :class="slots.footerRight()">
        <Button
          v-if="props.showDenyButton"
          variant="outline"
          :color-palette="props.colorPalette"
          :disabled="isConfirmLoading"
          :loading="isDenyLoading"
          @click="
            async () => {
              try {
                let result: D | undefined = undefined;

                if (props.preDeny) {
                  isDenyLoading = true;
                  result = await props.preDeny();
                  isDenyLoading = false;
                }

                props.onDeny?.({
                  isConfirmed: false,
                  isDenied: true,
                  isDismissed: false,
                  value: result,
                });
              } catch (err) {
                props.onDenyError?.(err);
              }
            }
          "
        >
          <slot name="deny-button-text" />
        </Button>

        <Button
          v-if="props.showConfirmButton"
          :color-palette="props.colorPalette"
          :disabled="isDenyLoading"
          :loading="isConfirmLoading"
          variant="solid"
          @click="
            async () => {
              try {
                let result: D | undefined = undefined;

                if (props.preConfirm) {
                  isConfirmLoading = true;
                  result = await props.preConfirm();
                  isConfirmLoading = false;
                }

                props.onConfirm?.({
                  isConfirmed: true,
                  isDenied: false,
                  isDismissed: false,
                  value: result,
                });
              } catch (err) {
                props.onConfirmError?.(err);
              }
            }
          "
        >
          <slot name="confirm-button-text" />
        </Button>
      </div>
    </div>
  </div>
</template>
