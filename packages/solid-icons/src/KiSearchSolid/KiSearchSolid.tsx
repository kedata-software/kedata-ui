import type { Component, JSX } from 'solid-js';

const KiSearchSolid: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (
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
        d="M9.60002 4.80006C6.94906 4.80006 4.80002 6.94909 4.80002 9.60006C4.80002 12.251 6.94906 14.4001 9.60002 14.4001C12.251 14.4001 14.4 12.251 14.4 9.60006C14.4 6.94909 12.251 4.80006 9.60002 4.80006ZM2.40002 9.60006C2.40002 5.6236 5.62357 2.40005 9.60002 2.40005C13.5765 2.40005 16.8 5.6236 16.8 9.60006C16.8 11.1551 16.3071 12.5949 15.4689 13.7719L21.2486 19.5515C21.7172 20.0202 21.7172 20.78 21.2486 21.2486C20.7799 21.7172 20.0201 21.7172 19.5515 21.2486L13.7719 15.469C12.5949 16.3071 11.155 16.8001 9.60002 16.8001C5.62357 16.8001 2.40002 13.5765 2.40002 9.60006Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiSearchSolid;
