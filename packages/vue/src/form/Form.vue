<script setup lang="ts">
import { computed, defineProps, inject, provide } from "vue";
import type { FormProps } from "./index.types";
import { FormContextKey } from "./FormContext";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<FormProps>();
const emit = defineEmits(["submit"]);

provide(FormContextKey, {
  labelPlacement: props.labelPlacement ?? "top",
  labelClass: props.labelClass,
});
</script>

<template>
  <form :class="props.class" @submit="(e) => emit('submit', e)">
    <slot />
  </form>
</template>
