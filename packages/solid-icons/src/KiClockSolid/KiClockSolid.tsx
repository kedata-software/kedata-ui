import type { Component, JSX } from 'solid-js';

const KiClockSolid: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (
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
        d="M12 21.6C17.3019 21.6 21.6 17.3019 21.6 12C21.6 6.69806 17.3019 2.39999 12 2.39999C6.69808 2.39999 2.40001 6.69806 2.40001 12C2.40001 17.3019 6.69808 21.6 12 21.6ZM13 7.19997C13 6.64768 12.5523 6.19997 12 6.19997C11.4477 6.19997 11 6.64768 11 7.19997V12C11 12.2652 11.1054 12.5195 11.2929 12.7071L14.687 16.1012C15.0775 16.4917 15.7107 16.4917 16.1012 16.1012C16.4917 15.7107 16.4917 15.0775 16.1012 14.687L13 11.5858V7.19997Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiClockSolid;
