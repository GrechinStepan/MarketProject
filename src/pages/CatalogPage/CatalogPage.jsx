import React from "react";
import { observer } from "mobx-react-lite";
import ProductItem from "../../components/ProductItem/ProductItem";

import "./CatalogPage.css";

export const CatalogPage = observer(({ store }) => {
  return (
    <div className="catalog-container">
      <h1 className="catalog-section__title">{"Каталог"}</h1>
      <Catalog
        products={store.products}
        addToCart={(index) => {
          console.log(index);
          store.addCartProduct(index);
        }}
      />
    </div>
  );
});

export const Catalog = ({ products, addToCart }) => (
  <div className="catalog">
    {products.map((product, index) => (
      <ProductItem
        key={product.id}
        {...product}
        addToCart={() => addToCart(product.id)}
      />
    ))}
  </div>
);
