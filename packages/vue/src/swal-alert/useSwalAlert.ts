import type { SwalAlertFireProps } from "./index.types";
import SwalAlert from "./SwalAlert.vue";
import Swal from "sweetalert2";
import { tw } from "@kedata-ui/slots";
import { createApp, h } from "vue";

const SwalAlertMethods = {
  fire<D = unknown>(props: SwalAlertFireProps<D>) {
    Swal.fire({
      customClass: {
        container: tw(
          tw(
            "[&>.swal2-popup]:pb-0",
            "[&_.swal2-html-container]:p-0 [&_.swal2-html-container]:text-base"
          )
        ),
        title: tw(tw("hidden")),
        htmlContainer: tw(tw("p-0")),
      },
      didOpen(popup) {
        if (!popup.parentElement) return;

        popup.parentElement.querySelector("#swal2-title")?.remove();

        const actions = popup.querySelector(".swal2-actions");
        if (actions) {
          actions.remove();
        }

        const htmlContainer = popup.querySelector(".swal2-html-container");
        if (htmlContainer) {
          createApp({
            render() {
              return h(
                SwalAlert,
                {
                  ...props,
                  onConfirm: (result) => {
                    Swal.close();
                    props.onConfirm?.(result);
                  },
                  onDeny: (result) => {
                    Swal.close();
                    props.onDeny?.(result);
                  },
                },
                {
                  icon: props.icon,
                  title: props.title,
                  text: props.text,
                  "confirm-button-text": props.confirmButtonText,
                  "deny-button-text": props.denyButtonText,
                  colorPalette: props.colorPalette,
                }
              );
            },
          }).mount(htmlContainer);
        }
      },
    });
  },
};

const useSwalAlert = () => {
  return {
    fire<D = unknown>(props: SwalAlertFireProps<D>) {
      SwalAlertMethods.fire({
        showConfirmButton: true,
        showDenyButton: true,
        confirmButtonText: () => "Confirm",
        denyButtonText: () => "Deny",
        title: () => "Well done!",
        ...props,
      });
    },
    done<D = unknown>(props: SwalAlertFireProps<D>) {
      SwalAlertMethods.fire({
        showConfirmButton: true,
        showDenyButton: false,
        confirmButtonText: () => "Close",
        title: () => "Well done!",
        ...props,
      });
    },
    error<D = unknown>(props: SwalAlertFireProps<D>) {
      SwalAlertMethods.fire({
        showConfirmButton: true,
        showDenyButton: false,
        confirmButtonText: () => "Try Again",
        title: () => "Error!",
        colorPalette: "danger",
        ...props,
      });
    },
  };
};

export default useSwalAlert;
