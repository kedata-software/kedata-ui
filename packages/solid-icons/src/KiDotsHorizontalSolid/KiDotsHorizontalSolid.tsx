import type { Component, JSX } from 'solid-js';

const KiDotsHorizontalSolid: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (
  props,
) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.2 12C7.2 13.3255 6.12548 14.4 4.8 14.4C3.47452 14.4 2.4 13.3255 2.4 12C2.4 10.6745 3.47452 9.59998 4.8 9.59998C6.12548 9.59998 7.2 10.6745 7.2 12Z"
        fill="currentColor"
      />
      <path
        d="M14.4 12C14.4 13.3255 13.3255 14.4 12 14.4C10.6745 14.4 9.6 13.3255 9.6 12C9.6 10.6745 10.6745 9.59998 12 9.59998C13.3255 9.59998 14.4 10.6745 14.4 12Z"
        fill="currentColor"
      />
      <path
        d="M19.2 14.4C20.5255 14.4 21.6 13.3255 21.6 12C21.6 10.6745 20.5255 9.59998 19.2 9.59998C17.8745 9.59998 16.8 10.6745 16.8 12C16.8 13.3255 17.8745 14.4 19.2 14.4Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiDotsHorizontalSolid;
