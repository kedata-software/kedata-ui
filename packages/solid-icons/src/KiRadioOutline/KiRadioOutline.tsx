import type { Component, JSX } from 'solid-js';

const KiRadioOutline: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (
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
        d="M2 12C2 17.5129 6.48571 22 12 22C17.5129 22 22 17.5129 22 12C22 6.48714 17.5129 2 12 2C6.48571 2 2 6.48714 2 12ZM19.1429 12C19.1429 15.9386 15.9386 19.1429 12 19.1429C8.06143 19.1429 4.85714 15.9386 4.85714 12C4.85714 8.06143 8.06143 4.85714 12 4.85714C15.9386 4.85714 19.1429 8.06143 19.1429 12Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiRadioOutline;
