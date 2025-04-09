import type { Component, JSX } from 'solid-js';

const KiArrowBottomSolid: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (
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
        d="M20.0485 12.3515C20.5171 12.8201 20.5171 13.5799 20.0485 14.0486L12.8485 21.2486C12.3799 21.7172 11.6201 21.7172 11.1514 21.2486L3.95145 14.0486C3.48282 13.5799 3.48282 12.8201 3.95145 12.3515C4.42008 11.8829 5.17988 11.8829 5.6485 12.3515L10.8 17.503L10.8 3.60003C10.8 2.93728 11.3372 2.40002 12 2.40002C12.6627 2.40002 13.2 2.93728 13.2 3.60003L13.2 17.503L18.3514 12.3515C18.8201 11.8829 19.5799 11.8829 20.0485 12.3515Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiArrowBottomSolid;
