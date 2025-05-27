<script setup lang="ts">
import useMenu from "./useMenu";
import type { MenuProps } from "./index.types";
import MenuTriggerItem from "./MenuTriggerItem.vue";
import animateStatePreset from "../animate-state-preset";
import { Teleport } from "vue";

const props = defineProps<MenuProps>();

const isOpen = defineModel<boolean>("isOpen", {
  default: false,
});

const { options, ...api } = useMenu(props, { isOpen });
</script>

<template>
  <slot name="trigger" v-bind="api.getTriggerProps()"> </slot>

  <Teleport to="body">
    <Transition
      :duration="150"
      :class="animateStatePreset.fadeUp.base"
      :enter-from-class="animateStatePreset.fadeUp['enter-from']"
      :enter-active-class="animateStatePreset.fadeUp['enter-active']"
      :enter-to-class="animateStatePreset.fadeUp['enter-to']"
      :leave-from-class="animateStatePreset.fadeUp['leave-from']"
      :leave-active-class="animateStatePreset.fadeUp['leave-active']"
      :leave-to-class="animateStatePreset.fadeUp['leave-to']"
    >
      <div v-bind="api.getPositionerProps()" v-if="isOpen">
        <div v-bind="api.getContentProps()">
          <template v-for="option in options">
            <template v-if="option.type === 'separator'">
              <div v-bind="api.getSeparatorProps()"></div>
            </template>
            <template v-if="option.type === 'item'">
              <template v-if="!option.options?.length">
                <div v-bind="api.getItemProps(option)">
                  <template v-if="option.startIcon">
                    <component
                      :is="option.startIcon"
                      v-bind="api.getItemStartIconProps(option)"
                    />
                  </template>

                  {{ option.label }}
                </div>
              </template>
              <template v-else>
                <MenuTriggerItem :option="option">
                  <template #trigger="childApi">
                    <div v-bind="api.getTriggerItemProps(childApi)">
                      <template v-if="option.startIcon">
                        <component
                          :is="option.startIcon"
                          v-bind="childApi.getItemStartIconProps(option)"
                        />
                      </template>

                      {{ option.label }}
                    </div>

                    <Teleport to="body">
                      <div v-bind="childApi.getPositionerProps()">
                        <div v-bind="childApi.getContentProps()">
                          <template v-for="item in option.options">
                            <template v-if="item.type === 'separator'">
                              <div v-bind="childApi.getSeparatorProps()"></div>
                            </template>
                            <template v-if="item.type === 'item'">
                              <div v-bind="childApi.getItemProps(item)">
                                <template v-if="item.startIcon">
                                  <component
                                    :is="item.startIcon"
                                    v-bind="
                                      childApi.getItemStartIconProps(item)
                                    "
                                  />
                                </template>

                                {{ item.label }}
                              </div>
                            </template>
                          </template>
                        </div>
                      </div>
                    </Teleport>
                  </template>
                </MenuTriggerItem>
              </template>
            </template>
          </template>
        </div>
      </div>
    </Transition>
  </Teleport>

  <!-- <template v-for="childApi in api.childApis.value">
    <div v-bind="api.getPositionerProps()">
      <div v-bind="childApi.getContentProps()"></div>
    </div>
  </template> -->
</template>
