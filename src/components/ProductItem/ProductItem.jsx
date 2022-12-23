import React from "react";
import { useNavigate } from "react-router-dom";
import { priceStringBuilder } from "../../helpers/stringBuilders";
import Button from "../Button/Button";
import Like from "../Icons/Like/Like";
import Parameter from "../Parameter/Parameter";

import "./ProductItem.css";

function ProductItem({
  name,
  imgSrc,
  price,
  salePrice,
  parameters,
  category,
  id,
  addToCart,
}) {
  const navigate = useNavigate();
  return (
    <div className="product-item__container">
      <div className="product-item__content-group">
        <div className="product-item__top-group">
          <div className="product-item__name">{name}</div>
          <Like fill={"#800101"} />
        </div>
        <div className="product-item__mid-group">
          <img
            className="product-item__image"
            src={`/MarketProject/assets/icons/${category}/${imgSrc}`}
          />
          <div className="product-item__parameter-container">
            <Parameter name={"Страна"} value={parameters.country} />
            <Parameter name={"Тип"} value={parameters.type} />
            <div className="product-item__parameter-bottom-group">
              <Parameter name={"Крепость"} value={parameters.toxicity} />
              <Parameter name={"Объем"} value={parameters.volume} />
            </div>
          </div>
        </div>
        <div className="product-item__price">
          <span>{priceStringBuilder(price)}</span>
          {salePrice && (
            <span className="product-item__price-sale">
              {priceStringBuilder(salePrice)}
            </span>
          )}
        </div>
      </div>
      <div className="product-item__button-container">
        <Button
          onClick={() => {
            addToCart();
          }}
          text={"В корзину"}
        />
        <Button
          onClick={() => {
            addToCart();
            navigate("/MarketProject/cart");
          }}
          text={"Заказать"}
        />
      </div>
    </div>
  );
}

export default ProductItem;
