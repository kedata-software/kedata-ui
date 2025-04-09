import type { Component, JSX } from 'solid-js';

const KiReceiptSolid: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (
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
        d="M20 12V18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19C18.7348 19 18.4804 18.8946 18.2929 18.7071C18.1054 18.5196 18 18.2652 18 18V4C18 3.73478 17.8946 3.48043 17.7071 3.29289C17.5196 3.10536 17.2652 3 17 3H3C2.73478 3 2.48043 3.10536 2.29289 3.29289C2.10536 3.48043 2 3.73478 2 4V18C2 19.654 3.346 21 5 21H19C20.654 21 22 19.654 22 18V12H20ZM14 11V13H6V11H14ZM6 9V7H14V9H6ZM14 15V17H11V15H14Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiReceiptSolid;
