import { useColorPalette } from '../use-color-palette';
import type { PasswordInputModels, PasswordInputProps } from './index.types';
import {
  computed,
  type ButtonHTMLAttributes,
  type InputHTMLAttributes,
} from 'vue';
import { passwordInputSlots, tw } from '@kedata-ui/slots';
import { dataAttrBoolean } from '@kedata-software/toolkit-js';

const usePasswordInput = (
  props: PasswordInputProps,
  models: PasswordInputModels,
) => {
  const colorPaletteClass = useColorPalette(() => props.colorPalette);

  const slots = computed(() => {
    return passwordInputSlots({ withParts: props.withParts });
  });

  const dataAttrs = computed(() => {
    return {
      'data-invalid': dataAttrBoolean(props.invalid),
      'data-disabled': dataAttrBoolean(props.disabled),
      'data-read-only': dataAttrBoolean(props.readOnly),
      'data-required': dataAttrBoolean(props.required),
      'data-filled': dataAttrBoolean(models.value.value),
    };
  });

  const getRootProps = () => {
    return {
      ...dataAttrs.value,
      id: props.rootId,
      class: tw(colorPaletteClass.value, slots.value.root(), props.class),
    };
  };

  const getInputProps = () => {
    return {
      ...dataAttrs.value,
      id: props.id,
      disabled: props.disabled,
      readonly: props.readOnly,
      placeholder: props.placeholder,
      name: props.name,
      type: models.isVisible.value ? 'text' : 'password',
      'aria-describedby': props.invalid
        ? `${props.id}__error-message`
        : undefined,
      class: tw(slots.value.input(), props.class),
    } as InputHTMLAttributes;
  };

  const getInputWrapperProps = () => {
    return {
      ...dataAttrs.value,
      class: tw(slots.value.inputWrapper()),
    };
  };

  const getStartAddonProps = () => {
    return {
      ...dataAttrs.value,
      class: tw(slots.value.startAddon()),
    };
  };

  const getEndAddonProps = () => {
    return {
      ...dataAttrs.value,
      class: tw(slots.value.endAddon()),
    };
  };

  const getStartIconProps = () => {
    return {
      ...dataAttrs.value,
      class: tw(slots.value.startIcon()),
    };
  };

  const getToggleProps = () => {
    return {
      ...dataAttrs.value,
      'aria-label': models.isVisible.value ? 'Hide password' : 'Show password',
      type: 'button',
      class: tw(slots.value.toggle()),
    } as ButtonHTMLAttributes;
  };

  return {
    slots,

    getRootProps,
    getInputProps,
    getInputWrapperProps,
    getStartAddonProps,
    getEndAddonProps,
    getStartIconProps,
    getToggleProps,
  };
};

export default usePasswordInput;
