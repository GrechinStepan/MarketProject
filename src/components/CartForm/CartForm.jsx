import React from "react";
import CartField from "./CartField/CartField";

import "./CartForm.css";

function CartForm({ quantity, resultPrice, handleField }) {
  return (
    <div className="cart-form__container">
      <div className="cart-form__title">{"Корзина"}</div>
      <div className="cart-form__description">
        {"Остались вопросы?"}
        <br />
        {
          "После оформления заказа с вами свяжется менеджер для подтверждения заказа и ответит на них!"
        }
      </div>
      <div className="cart-form__fields">
        <CartField
          label={"Введите имя"}
          handleField={(name, value) => handleField(name, value)}
          name={"name"}
          placeholder={"Имя"}
        />
        <CartField
          label={"Введите телефон"}
          handleField={(name, value) => handleField(name, value)}
          name={"phone"}
          placeholder={"+79000000000"}
        />
        <CartField
          label={"Адрес доставки"}
          handleField={(name, value) => handleField(name, value)}
          name={"address"}
          placeholder={"Екатеринбург"}
        />
        <CartField
          label={"Ожидаемое время доставки"}
          handleField={(name, value) => handleField(name, value)}
          name={"date"}
          placeholder={"26/06"}
        />
      </div>
      <div className="cart-form__checkout">{`Товаров ${quantity} на сумму: ${resultPrice} р.`}</div>
    </div>
  );
}

export default CartForm;
