import type { Component, JSX } from 'solid-js';

const KiDotsHorizontalOutline: Component<
  JSX.SvgSVGAttributes<SVGSVGElement>
> = (props) => {
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
        d="M4.99998 12H5.00998M12 12H12.01M19 12H19.01M5.99998 12C5.99998 12.5523 5.55227 13 4.99998 13C4.4477 13 3.99998 12.5523 3.99998 12C3.99998 11.4477 4.4477 11 4.99998 11C5.55227 11 5.99998 11.4477 5.99998 12ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM20 12C20 12.5523 19.5523 13 19 13C18.4477 13 18 12.5523 18 12C18 11.4477 18.4477 11 19 11C19.5523 11 20 11.4477 20 12Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default KiDotsHorizontalOutline;
