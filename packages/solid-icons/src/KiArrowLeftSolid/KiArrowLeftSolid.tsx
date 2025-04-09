import type { Component, JSX } from 'solid-js';

const KiArrowLeftSolid: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.6485 20.0485C11.1799 20.5171 10.4201 20.5171 9.95144 20.0485L2.75144 12.8485C2.28281 12.3798 2.28281 11.62 2.75144 11.1514L9.95144 3.95142C10.4201 3.48279 11.1799 3.48279 11.6485 3.95142C12.1171 4.42005 12.1171 5.17984 11.6485 5.64847L6.49702 10.7999H20.4C21.0627 10.7999 21.6 11.3372 21.6 11.9999C21.6 12.6627 21.0627 13.1999 20.4 13.1999L6.49702 13.1999L11.6485 18.3514C12.1171 18.82 12.1171 19.5798 11.6485 20.0485Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiArrowLeftSolid;
