import { Button } from '../button';
import { useColorPalette } from '../use-color-palette';
import { swalConfirmationSlots } from '@kedata-ui/slots/swal-confirmation';
import tw from '@kedata-ui/slots/tw';
import { dataAttrBoolean } from '@kedata-software/toolkit-js';
import clsx from 'clsx';
import { createMemo, createSignal } from 'solid-js';
import { render } from 'solid-js/web';
import Swal from 'sweetalert2';
import type { SwalConfirmationFireProps } from './index.types';

const SwalConfirmation = {
  fire<D = unknown>(props: SwalConfirmationFireProps<D>) {
    const { twMerge = tw.base } = props;

    Swal.fire({
      title: props.title,
      customClass: {
        container: twMerge?.(
          clsx(
            '[&>.swal2-popup]:pb-0',
            '[&_.swal2-html-container]:p-0 [&_.swal2-html-container]:text-base',
          ),
        ),
        title: twMerge?.('hidden'),
        htmlContainer: twMerge?.('p-0'),
      },
      didOpen(popup) {
        if (!popup.parentElement) return;

        popup.parentElement.querySelector('#swal2-title')?.remove();

        const actions = popup.querySelector('.swal2-actions');
        if (actions) {
          actions.remove();
        }

        const htmlContainer = popup.querySelector('.swal2-html-container');
        if (htmlContainer) {
          render(
            () => (
              <Confirmation
                {...props}
                twMerge={twMerge}
                showConfirmButton={props.showConfirmButton ?? true}
                showDenyButton={props.showDenyButton ?? true}
                Swal={Swal}
                onDeny={(result) => {
                  Swal.close();
                  props.onDeny?.(result);
                }}
                onConfirm={(result) => {
                  Swal.close();
                  props.onConfirm?.(result);
                }}
              />
            ),
            htmlContainer,
          );
        }
      },
    });
  },
};

const Confirmation = <D extends unknown>(
  props: SwalConfirmationFireProps<D> & { Swal: typeof Swal },
) => {
  const classNames = createMemo(() => props.classNames);
  const colorPaletteClassName = useColorPalette(() => props.colorPalette);
  const { twMerge } = props;
  const [isConfirmLoading, setIsConfirmLoading] = createSignal(false);
  const [isDenyLoading, setIsDenyLoading] = createSignal(false);
  const isLoading = createMemo(() => isConfirmLoading() || isDenyLoading());

  const {
    root: getRootClassName,
    icon: getIconClassName,
    iconBox: getIconBoxClassName,
    body: getBodyClassName,
    title: getTitleClassName,
    text: getTextClassName,
    footer: getFooterClassName,
    content: getContentClassName,
    footerLeft: getFooterLeftClassName,
    footerRight: getFooterRightClassName,
  } = swalConfirmationSlots(props);

  return (
    <div
      data-loading={dataAttrBoolean(isLoading)}
      class={twMerge?.(
        clsx(colorPaletteClassName(), getRootClassName(), classNames()?.root),
      )}
    >
      <div class={twMerge?.(clsx(getBodyClassName(), classNames()?.body))}>
        <div
          class={twMerge?.(clsx(getIconBoxClassName(), classNames()?.iconBox))}
        >
          {!!props.icon && (
            <props.icon
              class={twMerge?.(clsx(getIconClassName(), classNames()?.icon))}
            />
          )}
        </div>
        <div
          class={twMerge?.(clsx(getContentClassName(), classNames()?.content))}
        >
          <div
            class={twMerge?.(clsx(getTitleClassName(), classNames()?.title))}
          >
            {props.title}
          </div>
          <p class={twMerge?.(clsx(getTextClassName(), classNames()?.text))}>
            {props.text}
          </p>
        </div>
      </div>
      <div class={twMerge?.(clsx(getFooterClassName(), classNames()?.footer))}>
        {!!props.footerLeft && (
          <div
            class={twMerge?.(
              clsx(getFooterLeftClassName(), classNames()?.footerLeft),
            )}
          >
            {props.footerLeft({
              setIsConfirmLoading,
              setIsDenyLoading,
              Swal,
            })}
          </div>
        )}

        <div
          class={twMerge?.(
            clsx(getFooterRightClassName(), classNames()?.footerRight),
          )}
        >
          {props.showDenyButton && (
            <Button
              variant="outline"
              colorPalette={props.colorPalette}
              disabled={isConfirmLoading()}
              loading={isDenyLoading()}
              onClick={async () => {
                try {
                  let result: D | undefined = undefined;

                  if (props.preDeny) {
                    setIsDenyLoading(true);
                    result = await props.preDeny();
                    setIsDenyLoading(false);
                  }

                  props.onDeny?.({
                    isConfirmed: false,
                    isDenied: true,
                    isDismissed: false,
                    value: result,
                  });
                } catch (err) {
                  props.onDenyError?.(err);
                }
              }}
            >
              {props.denyButtonText ?? 'Cancel'}
            </Button>
          )}

          {props.showConfirmButton && (
            <Button
              colorPalette={props.colorPalette}
              loading={isConfirmLoading()}
              disabled={isConfirmLoading()}
              onClick={async () => {
                try {
                  let result: D | undefined = undefined;

                  if (props.preConfirm) {
                    setIsConfirmLoading(true);
                    result = await props.preConfirm();
                    setIsConfirmLoading(false);
                  }

                  props.onConfirm?.({
                    isConfirmed: true,
                    isDenied: false,
                    isDismissed: false,
                    value: result,
                  });
                } catch (err) {
                  props.onConfirmError?.(err);
                }
              }}
            >
              {props.confirmButtonText ?? 'Continue'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SwalConfirmation;
