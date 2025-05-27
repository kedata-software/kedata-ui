<script setup lang="ts" generic="D">
import { swalAlertSlots } from "@kedata-ui/slots";
import { computed, ref } from "vue";
import { Button } from "../button";
import type { SwalAlertProps } from "./index.types";
import { useColorPalette } from "../use-color-palette";
import clsx from "clsx";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<SwalAlertProps<D>>();
const emits = defineEmits(["confirm", "deny"]);
const slots = computed(() => {
  return swalAlertSlots();
});

const colorPaletteClass = useColorPalette(() => props.colorPalette);

const isConfirmLoading = ref(false);
const isDenyLoading = ref(false);
</script>
<template>
  <div :class="clsx(slots.root(), colorPaletteClass)">
    <slot name="icon" class="hello" />

    <div :class="slots.content()">
      <div :class="slots.title()">
        <slot name="title" />
      </div>
      <div :class="slots.text()">
        <slot name="text" />
      </div>
    </div>

    <div
      v-if="props.showConfirmButton || props.showDenyButton"
      :class="slots.footer()"
    >
      <Button
        v-if="props.showDenyButton"
        variant="outline"
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
        :disabled="isDenyLoading"
        :loading="isConfirmLoading"
        variant="solid"
        :color-palette="props.colorPalette"
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
</template>
