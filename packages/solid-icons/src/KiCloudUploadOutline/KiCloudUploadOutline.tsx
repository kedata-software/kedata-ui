import type { Component, JSX } from 'solid-js';

const KiCloudUploadOutline: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (
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
        d="M7.00006 16C4.79092 16 3.00006 14.2091 3.00006 12C3.00006 10.0929 4.33463 8.49759 6.12077 8.09694C6.04175 7.74393 6.00006 7.37683 6.00006 6.99998C6.00006 4.23856 8.23864 1.99998 11.0001 1.99998C13.4194 1.99998 15.4373 3.71824 15.9002 6.00096C15.9334 6.00031 15.9667 5.99998 16.0001 5.99998C18.7615 5.99998 21.0001 8.23856 21.0001 11C21.0001 13.4189 19.2823 15.4367 17.0001 15.9M15.0001 13L12.0001 9.99998M12.0001 9.99998L9.00006 13M12.0001 9.99998L12.0001 22"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default KiCloudUploadOutline;
