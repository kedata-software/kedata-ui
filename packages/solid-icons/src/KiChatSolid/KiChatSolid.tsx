import type { Component, JSX } from 'solid-js';

const KiChatSolid: Component<JSX.SvgSVGAttributes<SVGSVGElement>> = (props) => {
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
        d="M2.39996 6.00004C2.39996 4.67455 3.47448 3.60004 4.79996 3.60004H13.2C14.5254 3.60004 15.6 4.67455 15.6 6.00004V10.8C15.6 12.1255 14.5254 13.2 13.2 13.2H10.8L7.19996 16.8V13.2H4.79996C3.47448 13.2 2.39996 12.1255 2.39996 10.8V6.00004Z"
        fill="currentColor"
      />
      <path
        d="M18 8.40004V11.6C18 13.8092 16.2091 15.6 14 15.6H11.7941L9.67403 17.7201C10.0098 17.8988 10.3931 18 10.8 18H13.2L16.8 21.6V18H19.2C20.5254 18 21.6 16.9255 21.6 15.6V10.8C21.6 9.47455 20.5254 8.40004 19.2 8.40004H18Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiChatSolid;
