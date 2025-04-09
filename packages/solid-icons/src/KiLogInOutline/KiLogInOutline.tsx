import type { Component, JSX } from 'solid-js';

const KiLogInOutline: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (
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
        d="M11 15.9999L7 11.9999M7 11.9999L11 7.99994M7 11.9999L21 11.9999M16 15.9999V16.9999C16 18.6568 14.6569 19.9999 13 19.9999H6C4.34315 19.9999 3 18.6568 3 16.9999V6.99994C3 5.34308 4.34315 3.99994 6 3.99994H13C14.6569 3.99994 16 5.34308 16 6.99994V7.99994"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default KiLogInOutline;
