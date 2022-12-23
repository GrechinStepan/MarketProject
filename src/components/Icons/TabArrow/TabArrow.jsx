import React from "react";

import "./TabArrow.css";

function TabArrow() {
  return (
    <svg
      className="tab-arrow-icon"
      // width="130"
      // height="5"
      viewBox="0 0 130 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="3.5" x2="130" y2="3.5" stroke="#800101" />
      <path d="M64.9998 0L69.9376 3.75H60.0619L64.9998 0Z" fill="#800101" />
    </svg>
  );
}

export default TabArrow;
