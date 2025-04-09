import { useBaseProps } from '../base-props';
import { useClassNames } from '../class-names';
import { useTwMerge } from '../tw-merge';
import { useColorPalette } from '../use-color-palette';
import { createControlledSignal } from '../create-controlled-signal';
import { passwordInputSlots } from '@kedata-ui/slots/password-input';
import { KiEyesOffSolid, KiEyeSolid } from '@kedata-ui/solid-icons';
import clsx from 'clsx';
import { createMemo, splitProps } from 'solid-js';
import type { PasswordInputProps } from './index.types';
import type { PropsGetterParams } from '../types';

const usePasswordInput = (inProps: PasswordInputProps) => {
  const props = useBaseProps('PasswordInput', inProps);
  const classNames = useClassNames('PasswordInput', inProps);
  const colorPaletteClassName = useColorPalette(() => props.colorPalette);
  const twMerge = useTwMerge();

  let inputRef: HTMLInputElement | undefined;
  let toggleRef: HTMLButtonElement | undefined;

  const [value, setValue] = createControlledSignal(
    () => props.value,
    props.onValueChange,
    props.initialValue ?? '',
  );
  const [isShow, setIsShow] = createControlledSignal(
    () => props.isShow,
    props.onIsShowChange,
    props.initialIsShow ?? false,
  );

  const inputType = () => (isShow() ? 'text' : 'password');

  const slots = createMemo(() =>
    passwordInputSlots({
      withParts: props.withParts,
    }),
  );

  const changeValueHandler = (e: any) => {
    setValue(e.target.value);
  };

  const Component = 'div' as const;

  const EyeControl = () => {
    return (
      <button
        class={twMerge(clsx(slots().toggle(), classNames()?.toggle))}
        ref={toggleRef}
        type="button"
        aria-label={isShow() ? 'Hide password' : 'Show password'}
        onKeyDown={(e) => {
          if (e.key === ' ') {
            setIsShow(!isShow());
            setTimeout(() => {
              toggleRef?.focus();
            }, 0);
          }
        }}
      >
        {isShow() ? (
          <KiEyeSolid
            onClick={() => setIsShow(!isShow())}
            class={twMerge(clsx(slots().endIcon(), classNames()?.endIcon))}
          />
        ) : (
          <KiEyesOffSolid
            onClick={() => setIsShow(!isShow())}
            class={twMerge(clsx(slots().endIcon(), classNames()?.endIcon))}
          />
        )}
      </button>
    );
  };

  const [, rootProps] = splitProps(props, omittedProps);

  const getRootProps = (params?: PropsGetterParams) => {
    return {
      ...rootProps,
      class: twMerge(
        clsx(
          colorPaletteClassName(),
          slots().root(),
          params?.className,
          classNames()?.root,
        ),
      ),
    };
  };

  const getStartAddonProps = (params?: PropsGetterParams) => {
    return {
      class: twMerge(
        clsx(slots().startAddon(), params?.className, classNames()?.startAddon),
      ),
    };
  };

  const getEndAddonProps = (params?: PropsGetterParams) => {
    return {
      class: twMerge(
        clsx(slots().endAddon(), params?.className, classNames()?.endAddon),
      ),
    };
  };

  const getStartIconProps = (params?: PropsGetterParams) => {
    return {
      class: twMerge(
        clsx(slots().startIcon(), classNames()?.startIcon, params?.className),
      ),
    };
  };

  const getInputWrapperProps = (params?: PropsGetterParams) => {
    return {
      class: twMerge(
        clsx(
          slots().inputWrapper(),
          params?.className,
          classNames()?.inputWrapper,
        ),
      ),
    };
  };

  const getInputProps = (params?: PropsGetterParams) => {
    return {
      value: value(),
      placeholder: props.placeholder,
      onInput: changeValueHandler,
      type: inputType(),
      class: twMerge(
        clsx(slots().input(), params?.className, classNames()?.input),
      ),
    };
  };

  return {
    Component,
    EyeControl,
    get inputRef() {
      return inputRef;
    },
    set inputRef(value) {
      inputRef = value;
      if (typeof inProps.ref === 'function') {
        inProps.ref({
          focus() {
            value?.focus();
          },
          blur() {
            value?.blur();
          },
        });
      }
    },
    show: isShow,
    startIcon: props.startIcon,
    startAddon: props.startAddon,
    endAddon: props.endAddon,

    getRootProps,
    getStartAddonProps,
    getEndAddonProps,
    getStartIconProps,
    getInputWrapperProps,
    getInputProps,
  };
};

export default usePasswordInput;

const omittedProps: Array<keyof PasswordInputProps> = [
  'withParts',
  'value',
  'onChange',
  'invalid',
  'classNames',
  'startAddon',
  'endAddon',
  'placeholder',
  'startIcon',
  'id',
  'colorPalette',

  'ref',
  'isShow',
  'initialIsShow',
  'onIsShowChange',
  'onValueChange',
];
