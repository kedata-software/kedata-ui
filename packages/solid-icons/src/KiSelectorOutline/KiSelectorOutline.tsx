import type { Component, JSX } from 'solid-js';

const KiSelectorOutline: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (
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
        d="M7.99998 8.99994L12 4.99994L16 8.99994M16 14.9999L12 18.9999L7.99998 14.9999"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default KiSelectorOutline;
