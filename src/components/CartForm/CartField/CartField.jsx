import React, { useState } from "react";

import "./CartField.css";

function CartField({ label, handleField, name, placeholder }) {
  const [value, setValue] = useState("");
  return (
    <div className="cart-field">
      <label className="cart-field__label" htmlFor="field">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="cart-field__input"
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

export default CartField;
