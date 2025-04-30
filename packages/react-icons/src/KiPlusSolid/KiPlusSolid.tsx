import React, { type FC, type ComponentProps } from 'react';

const KiPlusSolid: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M12 3.60004C12.6627 3.60004 13.2 4.13729 13.2 4.80004V10.8H19.2C19.8627 10.8 20.4 11.3373 20.4 12C20.4 12.6628 19.8627 13.2 19.2 13.2H13.2V19.2C13.2 19.8628 12.6627 20.4 12 20.4C11.3373 20.4 10.8 19.8628 10.8 19.2V13.2H4.80001C4.13726 13.2 3.60001 12.6628 3.60001 12C3.60001 11.3373 4.13726 10.8 4.80001 10.8L10.8 10.8V4.80004C10.8 4.13729 11.3373 3.60004 12 3.60004Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiPlusSolid;
