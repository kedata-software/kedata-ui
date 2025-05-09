import type { Component, JSX } from 'solid-js';

const KiExclamationSolid: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (
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
        d="M9.90835 3.71858C10.8259 2.08742 13.1744 2.08742 14.0919 3.71858L20.7883 15.6232C21.6882 17.2231 20.5321 19.1999 18.6965 19.1999H5.30376C3.46818 19.1999 2.31207 17.2231 3.21198 15.6232L9.90835 3.71858ZM13.2 15.6C13.2 16.2627 12.6628 16.8 12 16.8C11.3373 16.8 10.8 16.2627 10.8 15.6C10.8 14.9373 11.3373 14.4 12 14.4C12.6628 14.4 13.2 14.9373 13.2 15.6ZM12 5.99999C11.3373 5.99999 10.8 6.53725 10.8 7.19999V10.8C10.8 11.4627 11.3373 12 12 12C12.6628 12 13.2 11.4627 13.2 10.8V7.19999C13.2 6.53725 12.6628 5.99999 12 5.99999Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiExclamationSolid;
