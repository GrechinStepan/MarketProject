import React, { useState } from "react";

import "./CardField.css";

function CardField({ label, isSmall, handleField, name, placeholder }) {
  const [value, setValue] = useState("");
  return (
    <div className={`card-field ${isSmall ? "card-field__small" : ""}`}>
      <label className="card-field__label" htmlFor="field">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="card-field__input"
        id="field"
        value={value}
        onChange={(e) => {
          handleField(name, e.target.value);
          setValue(e.target.value);
        }}
      />
    </div>
  );
}

export default CardField;
