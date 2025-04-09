import type { Component, JSX } from 'solid-js';

const KiCheveronUpSolid: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (
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
        d="M17.6485 15.2485C17.1799 15.7171 16.4201 15.7171 15.9515 15.2485L12 11.297L8.04853 15.2485C7.5799 15.7171 6.8201 15.7171 6.35148 15.2485C5.88285 14.7799 5.88285 14.0201 6.35148 13.5514L11.1515 8.75144C11.6201 8.28281 12.3799 8.28281 12.8485 8.75144L17.6485 13.5514C18.1172 14.0201 18.1172 14.7799 17.6485 15.2485Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiCheveronUpSolid;
