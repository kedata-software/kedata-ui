import type { Component, JSX } from 'solid-js';

const KiFolderDownloadSolid: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (
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
        d="M4.80002 4.79999C3.47454 4.79999 2.40002 5.8745 2.40002 7.19999V16.8C2.40002 18.1255 3.47454 19.2 4.80002 19.2H19.2C20.5255 19.2 21.6 18.1255 21.6 16.8V9.59999C21.6 8.2745 20.5255 7.19999 19.2 7.19999H13.2L10.8 4.79999H4.80002ZM13.2 10.8C13.2 10.1372 12.6628 9.59999 12 9.59999C11.3373 9.59999 10.8 10.1372 10.8 10.8V12.7029L10.4486 12.3515C9.97992 11.8828 9.22013 11.8828 8.7515 12.3515C8.28287 12.8201 8.28287 13.5799 8.7515 14.0485L11.1515 16.4485C11.6201 16.9171 12.3799 16.9171 12.8486 16.4485L15.2486 14.0485C15.7172 13.5799 15.7172 12.8201 15.2486 12.3515C14.7799 11.8828 14.0201 11.8828 13.5515 12.3515L13.2 12.7029V10.8Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiFolderDownloadSolid;
