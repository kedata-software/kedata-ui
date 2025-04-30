import React, { type FC, type ComponentProps } from 'react';

const KiChatAltOutline: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M8 9.99994H8.01M12 9.99994H12.01M16 9.99994H16.01M9 15.9999H5C3.89543 15.9999 3 15.1045 3 13.9999V5.99994C3 4.89537 3.89543 3.99994 5 3.99994H19C20.1046 3.99994 21 4.89537 21 5.99994V13.9999C21 15.1045 20.1046 15.9999 19 15.9999H14L9 20.9999V15.9999Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default KiChatAltOutline;
