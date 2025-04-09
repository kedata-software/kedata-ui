import type { Component, JSX } from 'solid-js';

const KiUserOutline: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (
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
        d="M16 7C16 9.20914 14.2092 11 12 11C9.79088 11 8.00002 9.20914 8.00002 7C8.00002 4.79086 9.79088 3 12 3C14.2092 3 16 4.79086 16 7Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 14C8.13402 14 5.00002 17.134 5.00002 21H19C19 17.134 15.866 14 12 14Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default KiUserOutline;
