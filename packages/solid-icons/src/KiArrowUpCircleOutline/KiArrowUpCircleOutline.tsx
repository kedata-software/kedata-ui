import type { Component, JSX } from 'solid-js';

const KiArrowUpCircleOutline: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (
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
        d="M8.99997 11L12 8M12 8L15 11M12 8L12 16M12 3C16.9705 3 21 7.02944 21 12C21 16.9706 16.9705 21 12 21C7.02941 21 2.99997 16.9706 2.99997 12C2.99997 7.02944 7.02941 3 12 3Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default KiArrowUpCircleOutline;
