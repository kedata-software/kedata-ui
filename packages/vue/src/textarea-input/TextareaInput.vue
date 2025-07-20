<script setup lang="ts">
import type { TextareaInputProps } from "./index.types";
import useTextareaInput from "./useTextareaInput";

const value = defineModel<string>({
  default: "",
});

const props = defineProps<TextareaInputProps>();

const { slicedValue, maxLength, showCounter, ...api } = useTextareaInput(
  props,
  { value }
);
</script>

<template>
  <div v-bind="api.getRootProps()">
    <textarea v-bind="api.getTextareaProps()" v-model="value" />
    <span v-if="showCounter && maxLength" v-bind="api.getCounterProps()">
      {{ slicedValue.length }}/{{ maxLength }}
    </span>
  </div>
</template>
