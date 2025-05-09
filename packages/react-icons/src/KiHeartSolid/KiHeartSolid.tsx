import React, { type FC, type ComponentProps } from 'react';

const KiHeartSolid: FC<ComponentProps<'svg'>> = (props) => {
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
        d="M3.80591 6.20588C5.68043 4.33136 8.71962 4.33136 10.5941 6.20588L12 7.61176L13.4059 6.20588C15.2804 4.33136 18.3196 4.33136 20.1941 6.20588C22.0687 8.08039 22.0687 11.1196 20.1941 12.9941L12 21.1882L3.80591 12.9941C1.9314 11.1196 1.9314 8.08039 3.80591 6.20588Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default KiHeartSolid;
