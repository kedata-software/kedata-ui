<script setup lang="ts">
import { defineProps, useSlots } from 'vue';
import useFormField from './useFormField';
import type { FormFieldProps } from './index.types';
import { Label } from '../label';
import { ErrorMessage } from '../error-message';
import { HelperText } from '../helper-text';

const props = defineProps<FormFieldProps>();

const compSlots = useSlots();
const api = useFormField(props);
</script>

<template>
  <div v-bind="api.getRootProps()">
    <Label v-if="!!compSlots.label" v-bind="api.getLabelProps()">
      <slot name="label" />
    </Label>
    <div v-bind="api.getBodyProps()">
      <slot :invalid="props.invalid" />

      <div v-bind="api.getFooterProps()">
        <ErrorMessage v-if="!!props.errorMessage" :for="props.for">
          {{ props.errorMessage }}
        </ErrorMessage>

        <HelperText v-if="!!compSlots.helperText">
          <slot name="helper-text" />
        </HelperText>
      </div>
    </div>
  </div>
</template>
