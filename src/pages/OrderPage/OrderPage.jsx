import React from "react";
import NavBack from "../../components/NavBack/NavBack";
import { v4 as uuidv4 } from "uuid";

import "./OrderPage.css";

function OrderPage() {
  return (
    <div className="order-page">
      <NavBack linkTo={"/MarketProject"} text={"Назад к каталогу"} />
      <h1 className="order-page__title">{"Вы оформили заказ!"}</h1>
      <div className="order-page__description">
        {"Ваш заказ можно отследить в личном кабинете по трекер - коду"}
      </div>
      <div className="order-page__track-code">{`Ваш трекер: ${uuidv4()}`}</div>
      <div className="order-page__description">
        {
          "Перейдите в личный кабинет в раздел Заказы, вбейте трекер в поле и посмотрите где находится ваш заказ!"
        }
      </div>
    </div>
  );
}

export default OrderPage;
