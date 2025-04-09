import type { Component, JSX } from 'solid-js';

const KiUploadOutline: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (
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
        d="M3.99998 16L3.99998 17C3.99998 18.6569 5.34313 20 6.99998 20L17 20C18.6568 20 20 18.6569 20 17L20 16M16 8L12 4M12 4L7.99998 8M12 4L12 16"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default KiUploadOutline;
