import { DialogProvider } from './dialog-context';
import createResponsive from '../create-responsive';
import { useTwMerge } from '../tw-merge';
import * as dialog from '@zag-js/dialog';
import { normalizeProps, useMachine } from '@zag-js/solid';
import clsx from 'clsx';
import { Portal } from 'solid-js/web';
import {
  animateStatePreset,
  createAnimateState,
} from '../create-animate-state';
import type { WithDialogProps } from './index.types';
import { createMemo, createUniqueId, type Component } from 'solid-js';

function withDialog<P>(
  Component: Component<WithDialogProps & P>,
): Component<WithDialogProps & P> {
  return (props) => {
    const twMerge = useTwMerge();
    const responsive = createResponsive();
    const { store } = props;
    const { isPresence, animateState } = createAnimateState(
      () => !!store?.isOpen(),
      {
        transitionDuration: store?.transitionDuration,
      },
    );

    let positionerEl: HTMLDivElement | undefined;

    const service = useMachine(dialog.machine, {
      id: createUniqueId(),
      get open() {
        return !!store.isOpen;
      },
      restoreFocus: true,
      closeOnEscape: true,
      onOpenChange: ({ open }) => {
        if (open) {
          store?.open();
        } else {
          store?.close();
        }
      },
      role: 'dialog',
      modal: true,
    });

    const api = createMemo(() => dialog.connect(service, normalizeProps));

    const backdropProps = api().getBackdropProps();

    const closeModal = () => {
      store?.close();

      setTimeout(() => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        document.body.removeAttribute('data-scroll-lock');
      }, 0);
    };

    const responsiveBottom = () => props.responsiveBottom ?? true;

    return (
      <DialogProvider
        value={{
          ...store,
          close: closeModal,
          get position() {
            if (responsiveBottom()) {
              return responsive.sm ? 'top-center' : 'bottom-center';
            }
            return props.position ?? 'top-center';
          },
          get paddingless() {
            if (responsiveBottom()) {
              return responsive.sm ? false : true;
            }
            return props.paddingless ?? false;
          },
        }}
      >
        {isPresence() && (
          <Portal>
            <div
              {...backdropProps}
              style={{
                ...(backdropProps.style as any),
                transitionDuration: `${store?.transitionDuration}ms`,
              }}
              class={twMerge(
                clsx(
                  'bg-black/50 absolute inset-0 transition-opacity',
                  animateStatePreset.fade.base,
                  animateStatePreset.fade[animateState()],
                ),
              )}
            />
            <div
              {...api().getPositionerProps()}
              ref={positionerEl}
              style={{
                // @ts-ignore
                '--tw-translate-x': '-50.1%',
                'transition-duration': `${store?.transitionDuration}ms`,
              }}
              class={twMerge(
                clsx(
                  'fixed w-full top-0 left-1/2 h-full overflow-hidden -translate-x-1/2 transition-[opacity,top]',
                  animateState() === 'enter-from' && 'opacity-0 top-28',
                  animateState() === 'enter-active' && 'opacity-100 top-0',
                  animateState() === 'enter-to' && 'opacity-100 top-0',
                  animateState() === 'leave-from' && 'opacity-100 top-0',
                  animateState() === 'leave-active' && 'opacity-0 top-28',
                  animateState() === 'leave-to' && 'opacity-0 top-28',
                ),
              )}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  const isDialogHold =
                    document.body.hasAttribute('data-hold-dialog');

                  if (!isDialogHold) {
                    closeModal();
                  }
                }
              }}
              onClick={(e) => {
                const isDialogHold =
                  document.body.hasAttribute('data-hold-dialog');

                const isClickOnBackdrop = positionerEl?.isEqualNode(
                  e.target as Node,
                );

                if (isClickOnBackdrop && !isDialogHold) {
                  closeModal();
                }
              }}
            >
              <Component {...props} />
            </div>
          </Portal>
        )}
      </DialogProvider>
    );
  };
}

export default withDialog;
