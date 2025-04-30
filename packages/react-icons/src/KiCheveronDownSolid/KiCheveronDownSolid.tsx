import React, { type FC, type ComponentProps } from 'react';

const KiCheveronDownSolid: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M6.35147 8.75144C6.8201 8.28281 7.5799 8.28281 8.04853 8.75144L12 12.7029L15.9515 8.75144C16.4201 8.28281 17.1799 8.28281 17.6485 8.75144C18.1172 9.22006 18.1172 9.97986 17.6485 10.4485L12.8485 15.2485C12.3799 15.7171 11.6201 15.7171 11.1515 15.2485L6.35147 10.4485C5.88284 9.97986 5.88284 9.22006 6.35147 8.75144Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiCheveronDownSolid;
