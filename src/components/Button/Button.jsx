import React from "react";
import "./Button.css";

function Button({ text, ...restProps }) {
  return (
    <button {...restProps} className="btn">
      {text}
    </button>
  );
}

export default Button;
