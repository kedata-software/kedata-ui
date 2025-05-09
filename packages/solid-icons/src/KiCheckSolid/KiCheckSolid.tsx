import type { Component, JSX } from 'solid-js';

const KiCheckSolid: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (
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
        d="M20.0484 6.35148C20.5171 6.8201 20.5171 7.5799 20.0484 8.04853L10.4484 17.6485C9.97981 18.1172 9.22002 18.1172 8.75139 17.6485L3.95139 12.8485C3.48276 12.3799 3.48276 11.6201 3.95139 11.1515C4.42002 10.6828 5.17981 10.6828 5.64844 11.1515L9.59991 15.1029L18.3514 6.35148C18.82 5.88285 19.5798 5.88285 20.0484 6.35148Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiCheckSolid;
