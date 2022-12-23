import React from "react";

import "./Avatar.css";

function Avatar() {
  return (
    <svg
      className="avatar-icon"
      // width="30"
      // height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3_988)">
        <path
          d="M15 28.125C22.2487 28.125 28.125 22.2487 28.125 15C28.125 7.75126 22.2487 1.875 15 1.875C7.75126 1.875 1.875 7.75126 1.875 15C1.875 22.2487 7.75126 28.125 15 28.125Z"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 16.875C17.5888 16.875 19.6875 14.7763 19.6875 12.1875C19.6875 9.59867 17.5888 7.5 15 7.5C12.4112 7.5 10.3125 9.59867 10.3125 12.1875C10.3125 14.7763 12.4112 16.875 15 16.875Z"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.0625 23.5312C6.75 19.6875 10.5 16.9688 15 16.9688C19.5 16.9688 23.3437 19.6875 24.9375 23.5312"
          stroke="white"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3_988">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Avatar;
