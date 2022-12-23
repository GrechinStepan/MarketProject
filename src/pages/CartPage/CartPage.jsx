import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import CartForm from "../../components/CartForm/CartForm";
import CartItem from "../../components/CartItem/CartItem";
import NavBack from "../../components/NavBack/NavBack";

import "./CartPage.css";
import CardForm from "../../components/CardForm/CardForm";

const CartPage = observer(({ store }) => {
  const [form, setForm] = useState({});

  const handleField = (name, value) => {
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  return (
    <div className="cart-page">
      <div className="cart-page__content">
        <NavBack text={"Назад"} linkTo={"/MarketProject"} />
        {store.productsQuantity > 0 ? (
          <div className="cart-page__group">
            <div className="cart-page__mid-group">
              <CartList
                products={store.cartProducts}
                addProduct={(id) => store.addCartProduct(id)}
                deleteProduct={(id) => store.deleteCartProduct(id)}
              />
              <CartForm
                quantity={store.productsQuantity}
                resultPrice={store.resultPrice}
                handleField={(name, value) => handleField(name, value)}
              />
            </div>
            <CardForm
              clearStore={() => store.clear()}
              handleField={(name, value) => handleField(name, value)}
              form={form}
            />
          </div>
        ) : (
          <h1 className="catalog-section__title">{"Корзина пуста"}</h1>
        )}
      </div>
    </div>
  );
});

const CartList = ({ products, addProduct, deleteProduct }) => (
  <div className="cart-page__products-group">
    {products.map(
      (product) =>
        product.count > 0 && (
          <CartItem
            key={product.id}
            {...product}
            addProduct={() => addProduct(product.id)}
            deleteProduct={() => deleteProduct(product.id)}
            quantity={product.count}
          />
        )
    )}
  </div>
);

export default CartPage;
