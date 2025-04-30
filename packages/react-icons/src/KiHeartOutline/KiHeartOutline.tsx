import React, { type FC, type ComponentProps } from 'react';

const KiHeartOutline: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M4.31808 6.31805C2.56072 8.07541 2.56072 10.9247 4.31808 12.682L12.0001 20.364L19.682 12.682C21.4394 10.9247 21.4394 8.07541 19.682 6.31805C17.9247 4.56069 15.0754 4.56069 13.3181 6.31805L12.0001 7.63612L10.682 6.31805C8.92468 4.56069 6.07544 4.56069 4.31808 6.31805Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default KiHeartOutline;
