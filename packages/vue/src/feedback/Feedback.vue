<script setup lang="ts">
import useFeedback from "./useFeedback";
import type { FeedbackProps } from "./index.types";

const props = defineProps<FeedbackProps>();
const api = useFeedback(props);
</script>

<template>
  <div v-bind="api.getRootProps()">
    <slot name="icon" v-bind="api.getIconProps()" />

    <div v-bind="api.getTitleProps()">
      <slot name="title" v-bind="api.getTitleProps()" />
    </div>

    <p v-bind="api.getMessageProps()">
      <slot name="message" />
    </p>
  </div>
</template>
