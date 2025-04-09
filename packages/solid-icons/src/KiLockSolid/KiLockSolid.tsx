import type { Component, JSX } from 'solid-js';

const KiLockSolid: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (props) => {
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
        d="M6 10.8V8.39999C6 5.08629 8.68629 2.39999 12 2.39999C15.3137 2.39999 18 5.08629 18 8.39999V10.8C19.3255 10.8 20.4 11.8745 20.4 13.2V19.2C20.4 20.5255 19.3255 21.6 18 21.6H6C4.67452 21.6 3.6 20.5255 3.6 19.2V13.2C3.6 11.8745 4.67452 10.8 6 10.8ZM15.6 8.39999V10.8H8.4V8.39999C8.4 6.41177 10.0118 4.79999 12 4.79999C13.9882 4.79999 15.6 6.41177 15.6 8.39999Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiLockSolid;
