import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { menuSlots } from '@kedata-ui/slots/menu';
import clsx from 'clsx';
import type { MenuItemOption, MenuProps } from './index.types';
import type { PropsGetterParams } from '../types';
import { dataAttrBoolean } from '@kedata-software/toolkit-js';
import * as menu from '@zag-js/menu';
import { useMachine, normalizeProps } from '@zag-js/solid';
import { createDialogHolder } from '../create-dialog-holder';
import { createControlledSignal } from '../create-controlled-signal';
import {
  createMemo,
  mergeProps,
  type ComponentProps,
  type ValidComponent,
} from 'solid-js';
import createAnimateState, {
  animateStatePreset,
} from '../create-animate-state';

const useMenu = (inProps: MenuProps) => {
  const props = useBaseProps('Menu', inProps);
  const classNames = useClassNames('Menu', inProps);
  const twMerge = useTwMerge();

  const [isOpen, setIsOpen] = createControlledSignal(
    () => props.isOpen,
    props.osIsOpenChange,
    props.isOpen ?? false,
  );

  const service = useMachine(menu.machine, {
    id: props.id,
    get open() {
      return isOpen();
    },
    onSelect: ({ value }) => {
      if (props.mapValueSelect?.[value]) {
        props.mapValueSelect[value](value);
      }
    },
    onOpenChange(details) {
      setIsOpen(details.open);
    },
    positioning: {
      placement: 'bottom-start',
    },
  });

  const menuApi = createMemo(() => menu.connect(service, normalizeProps));

  const { isPresence, animateState } = createAnimateState(() => menuApi().open);

  const slots = createMemo(() => {
    return menuSlots({
      withParts: props.withParts,
      darkable: props.darkable,
    });
  });

  createDialogHolder(isOpen);

  const getChildrenProps = <T extends ValidComponent = 'button'>() => {
    return mergeProps(menuApi().getTriggerProps(), {
      get ['data-expanded']() {
        return dataAttrBoolean(menuApi().open);
      },
    }) as ComponentProps<T>;
  };

  const getContentProps = <T extends ValidComponent = 'div'>(
    params?: PropsGetterParams,
  ) => {
    return mergeProps(() => menuApi().getContentProps(), {
      hidden: false,
      className: twMerge(
        clsx(slots().content(), classNames()?.content, params?.className),
      ),
    }) as ComponentProps<T>;
  };

  const getSeparatorProps = <T extends ValidComponent = 'div'>(
    params?: PropsGetterParams,
  ) => {
    return mergeProps(() => menuApi().getSeparatorProps(), {
      className: twMerge(
        clsx(slots().separator(), classNames()?.separator, params?.className),
      ),
    }) as ComponentProps<T>;
  };

  const getItemProps = <T extends ValidComponent = 'div'>(
    params: MenuItemOption,
  ) => {
    return mergeProps(() => menuApi().getItemProps(params), {
      get ['data-color-palette']() {
        return params.colorPalette;
      },
      className: twMerge(
        clsx(slots().item(), classNames()?.item, params.className),
      ),
      children: params.label,
    }) as ComponentProps<T>;
  };

  const getPositionerProps = <T extends ValidComponent = 'div'>(
    params?: PropsGetterParams,
  ) => {
    return mergeProps(() => menuApi().getPositionerProps(), {
      className: twMerge(
        clsx(
          slots().positioner(),
          classNames()?.positioner,
          animateStatePreset.fadeUp.base,
          animateStatePreset.fadeUp[animateState()],
          params?.className,
        ),
      ),
    }) as ComponentProps<T>;
  };

  const getItemStartIconProps = (params: MenuItemOption) => {
    return {
      'data-color-palette': params.colorPalette,
      className: twMerge(
        clsx(
          slots().itemStartIcon(),
          classNames()?.itemStartIcon,
          params?.className,
        ),
      ),
    };
  };

  return {
    isPresence,
    isOpen,
    children: props.children,
    get options() {
      return props.options;
    },

    getChildrenProps,
    getContentProps,
    getSeparatorProps,
    getItemProps,
    getItemStartIconProps,
    getPositionerProps,
  };
};

export default useMenu;
