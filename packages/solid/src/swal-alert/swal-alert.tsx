import { Button } from '../button';
import { swalAlertSlots } from '@kedata-ui/slots/swal-alert';
import tw from '@kedata-ui/slots/tw';
import { dataAttrBoolean } from '@kedata-software/toolkit-js';
import clsx from 'clsx';
import { createMemo, createSignal } from 'solid-js';
import { render } from 'solid-js/web';
import Swal from 'sweetalert2';
import type { SwalAlertFireProps } from './index.types';
import useColorPalette from '../use-color-palette';

const SwalAlert = {
  fire<D = unknown>(props: SwalAlertFireProps<D>) {
    const { twMerge = tw.base } = props;

    Swal.fire({
      title: props.title,
      customClass: {
        container: twMerge(
          clsx(
            '[&>.swal2-popup]:pb-0',
            '[&_.swal2-html-container]:p-0 [&_.swal2-html-container]:text-base',
          ),
        ),
        title: twMerge(clsx('hidden')),
        htmlContainer: twMerge(clsx('p-0')),
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
              <Alert
                twMerge={twMerge}
                {...props}
                showConfirmButton={props.showConfirmButton ?? true}
                showDenyButton={props.showDenyButton ?? true}
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

export default SwalAlert;

function Alert<D>(inProps: SwalAlertFireProps<D>) {
  const props = inProps;
  const classNames = createMemo(() => inProps.classNames);
  const colorPaletteClass = useColorPalette(() => props.colorPalette);
  const { twMerge } = props;
  const [isConfirmLoading, setIsConfirmLoading] = createSignal(false);
  const [isDenyLoading, setIsDenyLoading] = createSignal(false);
  const isLoading = createMemo(() => isConfirmLoading() || isDenyLoading());

  const {
    root: getRootClassName,
    footer: getFooterClassName,
    title: getTitleClassName,
    content: getContentClassName,
    text: getTextClassName,
  } = swalAlertSlots(props);

  return (
    <div
      data-loading={dataAttrBoolean(isLoading)}
      class={twMerge?.(
        clsx(colorPaletteClass(), getRootClassName(), classNames()?.root),
      )}
    >
      <div
        class={twMerge?.(clsx(getContentClassName(), classNames()?.content))}
      >
        <div class={twMerge?.(clsx(getTitleClassName(), classNames()?.title))}>
          {props.title}
        </div>
        <p class={twMerge?.(clsx(getTextClassName(), classNames()?.text))}>
          {props.text}
        </p>
      </div>

      {(props.showConfirmButton || props.showDenyButton) && (
        <div
          class={twMerge?.(clsx(getFooterClassName(), classNames()?.footer))}
        >
          {props.showDenyButton && (
            <Button
              variant="outline"
              disabled={isConfirmLoading()}
              loading={isDenyLoading()}
              colorPalette={props.colorPalette}
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
              Batalkan
            </Button>
          )}

          {props.showConfirmButton && (
            <Button
              loading={isConfirmLoading()}
              disabled={isConfirmLoading()}
              colorPalette={props.colorPalette}
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
              Tutup
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
