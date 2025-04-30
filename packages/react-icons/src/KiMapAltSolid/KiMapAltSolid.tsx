import React, { type FC, type ComponentProps } from 'react';

const KiMapAltSolid: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M14.4 1.90302L9.60002 6.70301V22.0971L14.4 17.2971V1.90302Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.44855 3.95154C4.10536 3.60835 3.58921 3.50568 3.1408 3.69142C2.6924 3.87715 2.40002 4.31472 2.40002 4.80007V16.8001C2.40002 17.1183 2.52645 17.4236 2.7515 17.6486L7.20002 22.0971V6.70301L4.44855 3.95154Z"
        fill="currentColor"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21.2486 6.35154L16.8 1.90302V17.2971L19.5515 20.0486C19.8947 20.3918 20.4108 20.4945 20.8592 20.3087C21.3077 20.123 21.6 19.6854 21.6 19.2001V7.20007C21.6 6.88181 21.4736 6.57659 21.2486 6.35154Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiMapAltSolid;
