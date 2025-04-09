import type { Component, JSX } from 'solid-js';

const KiArchiveOutline: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (
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
        d="M5 7.99998H19M5 7.99998C3.89543 7.99998 3 7.10455 3 5.99998C3 4.89542 3.89543 3.99998 5 3.99998H19C20.1046 3.99998 21 4.89542 21 5.99998C21 7.10455 20.1046 7.99998 19 7.99998M5 7.99998L5 18C5 19.1046 5.89543 20 7 20H17C18.1046 20 19 19.1046 19 18V7.99998M10 12H14"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default KiArchiveOutline;
