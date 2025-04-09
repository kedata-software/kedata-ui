import type { Component, JSX } from 'solid-js';

const KiAnnotationOutline: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (
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
        d="M7.00006 7.99994H17.0001M7.00006 11.9999H11.0001M12.0001 19.9999L8.00006 15.9999H5.00006C3.89549 15.9999 3.00006 15.1045 3.00006 13.9999V5.99994C3.00006 4.89537 3.89549 3.99994 5.00006 3.99994H19.0001C20.1046 3.99994 21.0001 4.89537 21.0001 5.99994V13.9999C21.0001 15.1045 20.1046 15.9999 19.0001 15.9999H16.0001L12.0001 19.9999Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default KiAnnotationOutline;
