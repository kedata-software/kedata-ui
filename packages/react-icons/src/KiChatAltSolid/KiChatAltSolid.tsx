import React, { type FC, type ComponentProps } from 'react';

const KiChatAltSolid: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M21.6 5.99991V15.5999C21.6 16.9254 20.5254 17.9999 19.2 17.9999H13.2L7.19996 22.7999V17.9999H4.79996C3.47448 17.9999 2.39996 16.9254 2.39996 15.5999V5.99991C2.39996 4.67443 3.47448 3.59991 4.79996 3.59991H19.2C20.5254 3.59991 21.6 4.67443 21.6 5.99991ZM8.39996 9.59991H5.99996V11.9999H8.39996V9.59991ZM10.8 9.59991H13.2V11.9999H10.8V9.59991ZM18 9.59991H15.6V11.9999H18V9.59991Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiChatAltSolid;
