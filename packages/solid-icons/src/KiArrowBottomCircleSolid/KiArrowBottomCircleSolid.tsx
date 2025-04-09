import type { Component, JSX } from 'solid-js';

const KiArrowBottomCircleSolid: Component<
  JSX.SvgSVGAttributes<SVGSVGElement>
> = (props) => {
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
        d="M12 21.6001C17.3019 21.6001 21.6 17.302 21.6 12.0001C21.6 6.69812 17.3019 2.40005 12 2.40005C6.69807 2.40005 2.4 6.69812 2.4 12.0001C2.4 17.302 6.69807 21.6001 12 21.6001ZM13.2 8.40005C13.2 7.73731 12.6627 7.20006 12 7.20006C11.3373 7.20006 10.8 7.73731 10.8 8.40005V12.703L9.24853 11.1515C8.7799 10.6829 8.0201 10.6829 7.55147 11.1515C7.08284 11.6202 7.08284 12.38 7.55147 12.8486L11.1515 16.4486C11.6201 16.9172 12.3799 16.9172 12.8485 16.4486L16.4485 12.8486C16.9172 12.38 16.9172 11.6202 16.4485 11.1515C15.9799 10.6829 15.2201 10.6829 14.7515 11.1515L13.2 12.703V8.40005Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiArrowBottomCircleSolid;
