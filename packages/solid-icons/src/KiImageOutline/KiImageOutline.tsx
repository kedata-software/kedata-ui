import type { Component, JSX } from 'solid-js';

const KiImageOutline: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (
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
        d="M7.49902 10.9999C8.32745 10.9999 8.99902 10.3284 8.99902 9.49994C8.99902 8.67151 8.32745 7.99994 7.49902 7.99994C6.6706 7.99994 5.99902 8.67151 5.99902 9.49994C5.99902 10.3284 6.6706 10.9999 7.49902 10.9999Z"
        fill="currentColor"
      />
      <path
        d="M10.499 14L8.99902 12L5.99902 16H17.999L13.499 10L10.499 14Z"
        fill="currentColor"
      />
      <path
        d="M19.999 4H3.99902C2.89602 4 1.99902 4.897 1.99902 6V18C1.99902 19.103 2.89602 20 3.99902 20H19.999C21.102 20 21.999 19.103 21.999 18V6C21.999 4.897 21.102 4 19.999 4ZM3.99902 18V6H19.999L20.001 18H3.99902Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiImageOutline;
