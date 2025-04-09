import type { Component, JSX } from 'solid-js';

const KiUnlockSolid: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (
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
        d="M11.9999 2.40002C8.68621 2.40002 5.99991 5.08632 5.99991 8.40002V10.8C4.67443 10.8 3.59991 11.8745 3.59991 13.2V19.2C3.59991 20.5255 4.67443 21.6 5.99991 21.6H17.9999C19.3254 21.6 20.3999 20.5255 20.3999 19.2V13.2C20.3999 11.8745 19.3254 10.8 17.9999 10.8H8.39991V8.40002C8.39991 6.4118 10.0117 4.80002 11.9999 4.80002C13.6757 4.80002 15.0869 5.94617 15.4866 7.49914C15.6518 8.14096 16.306 8.52734 16.9478 8.36215C17.5896 8.19695 17.976 7.54274 17.8108 6.90091C17.1448 4.31333 14.7973 2.40002 11.9999 2.40002Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiUnlockSolid;
