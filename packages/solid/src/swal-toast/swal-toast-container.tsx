import { swalToastSlots } from '@kedata-ui/slots/swal-toast';
import tw from '@kedata-ui/slots/tw';
import clsx from 'clsx';
import { createComponent, createMemo } from 'solid-js';
import { render } from 'solid-js/web';
import Swal from 'sweetalert2';
import type { SwalToastFireProps } from './index.types';
import useColorPalette from '../use-color-palette';

export default function SwalToastContainer(inProps: SwalToastFireProps) {
  const props = inProps;
  const classes = createMemo(() => inProps.classes);
  const colorPaletteClass = useColorPalette(() => props.colorPalette);
  const { twMerge } = props;

  const slots = createMemo(() => swalToastSlots());

  return (
    <div
      class={twMerge?.(
        clsx(colorPaletteClass(), slots().root(), classes()?.root),
      )}
    >
      {props.icon &&
        createComponent(props.icon, {
          class: twMerge?.(clsx(slots().icon(), classes()?.icon)),
        })}

      <div class={clsx(slots().content())}>
        <div class={clsx(slots().body())}>
          {createComponent(props.text, {})}
        </div>
      </div>
    </div>
  );
}
