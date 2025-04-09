import type { Component, JSX } from 'solid-js';

const KiDislikeOutline: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (
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
        d="M10 13.9999H5.23607C3.74931 13.9999 2.78231 12.4353 3.44722 11.1055L6.94722 4.10551C7.286 3.42794 7.97853 2.99994 8.73607 2.99994H12.7538C12.9173 2.99994 13.0802 3.01999 13.2389 3.05965L17 3.99994M10 13.9999V18.9999C10 20.1045 10.8954 20.9999 12 20.9999H12.0955C12.595 20.9999 13 20.595 13 20.0954C13 19.3811 13.2114 18.6828 13.6077 18.0884L17 12.9999V3.99994M10 13.9999H12M17 3.99994H19C20.1046 3.99994 21 4.89537 21 5.99994V11.9999C21 13.1045 20.1046 13.9999 19 13.9999H16.5"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default KiDislikeOutline;
