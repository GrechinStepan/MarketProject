import React from "react";
import TabArrow from "../../Icons/TabArrow/TabArrow";

import "./Tab.css";

function Tab({ name, isSelected, selectTab }) {
  return (
    <div onClick={selectTab} className="tab">
      <span>{name}</span>
      {isSelected && <TabArrow />}
    </div>
  );
}

export default Tab;
