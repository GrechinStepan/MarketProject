import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import formValidator from "../../helpers/formValidator";
import Button from "../Button/Button";
import CardField from "./CardField/CardField";

import "./CardForm.css";

function CardForm({ handleField, form, clearStore }) {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleClick = () => {
    if (formValidator(form)) {
      clearStore();
      navigate("/MarketProject/order");
    } else {
      setError(true);
    }
  };

  return (
    <div className="card-form">
      <div className="card-form__top-group">
        <div className="card-form__fields">
          <CardField
            label={"Номер карты"}
            isSmall={false}
            handleField={(name, value) => handleField(name, value)}
            name={"card"}
            placeholder={"0000000000000000"}
          />
          <div className="card-form__mid-group">
            <CardField
              label={"Срок действия"}
              isSmall={true}
              handleField={(name, value) => handleField(name, value)}
              name={"due"}
              placeholder={"00/00"}
            />
            <CardField
              label={"CVC"}
              isSmall={true}
              handleField={(name, value) => handleField(name, value)}
              name={"cvc"}
              placeholder={"000"}
            />
          </div>
          <CardField
            label={"Имя держателя карты"}
            isSmall={false}
            handleField={(name, value) => handleField(name, value)}
            name={"cardHolder"}
            placeholder={"ИМЯ ФАМИЛИЯ"}
          />
        </div>
        <img
          className="card-form__icon"
          src="/MarketProject/assets/icons/card.png"
        />
      </div>
      <Button onClick={handleClick} text={"Оформить заказ"} />
      {error !== null && error && (
        <p className="card-form__error">{"Заполните форму корректно"}</p>
      )}
    </div>
  );
}

export default CardForm;
