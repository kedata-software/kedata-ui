<script setup lang="ts">
import type { ChatBubbleProps } from "./index.types";
import useChatBubble from "./useChatBubble";

const props = defineProps<ChatBubbleProps>();

const api = useChatBubble(props);
</script>
<template>
  <div v-bind="api.getRootProps()">
    <div v-bind="api.getBubbleProps()">
      <slot />
    </div>

    <div v-if="api.isFooterVisible.value" v-bind="api.getFooterProps()">
      <div v-if="api.time.value" v-bind="api.getTimeProps()">
        {{ api.time }}
      </div>
    </div>
  </div>
</template>
