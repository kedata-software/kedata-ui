import React, { type FC, type ComponentProps } from 'react';

const KiEyeSolid: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M12 14.4C13.3255 14.4 14.4 13.3255 14.4 12C14.4 10.6745 13.3255 9.60001 12 9.60001C10.6745 9.60001 9.60001 10.6745 9.60001 12C9.60001 13.3255 10.6745 14.4 12 14.4Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.549316 12.0001C2.07842 7.13151 6.62678 3.60001 12 3.60001C17.3731 3.60001 21.9215 7.13147 23.4506 12C21.9215 16.8685 17.3731 20.4 11.9999 20.4C6.62679 20.4 2.07845 16.8686 0.549316 12.0001ZM16.8 12C16.8 14.651 14.651 16.8 12 16.8C9.34904 16.8 7.20001 14.651 7.20001 12C7.20001 9.34905 9.34904 7.20001 12 7.20001C14.651 7.20001 16.8 9.34905 16.8 12Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiEyeSolid;
