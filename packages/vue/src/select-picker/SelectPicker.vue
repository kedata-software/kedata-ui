<script setup lang="ts">
import useSelectPicker from "./useSelectPicker";
import { TextInput } from "../text-input";
import type { SelectPickerProps } from "./index.types";
import { effect } from "vue";

const props = defineProps<SelectPickerProps>();
const value = defineModel<string[]>({
  default: [] as string[],
});
const searchTerm = defineModel<string>("search-term", {
  default: "",
});

const api = useSelectPicker(props, { value, searchTerm });
</script>

<template>
  <div v-bind="api.getRootProps()">
    <div v-bind="api.getItemGroupProps({ id: '1' })">
      <TextInput
        v-if="props.withSearch"
        v-model="searchTerm"
        v-bind="api.getSearchInputProps()"
      />

      <div
        v-for="item in api.searchOptions.value"
        v-bind="api.getItemProps({ item })"
      >
        <div v-bind="api.getItemTextProps({ item })">
          {{ item.label }}
        </div>
      </div>
    </div>
  </div>
</template>
