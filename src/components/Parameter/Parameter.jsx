import React from "react";

import "./Parameter.css";

function Parameter({ name, value }) {
  return (
    <div className="parameter">
      <div className="parameter-name">{name}</div>
      <div className="parameter-value">{value}</div>
    </div>
  );
}

export default Parameter;
