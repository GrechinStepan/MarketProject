import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import ProductItem from "../../components/ProductItem/ProductItem";

import "./CatalogPage.css";

export const CatalogPage = observer(({ store }) => (
  <div className="catalog-container">
    <h1 className="catalog-section__title">{"Каталог"}</h1>
    <Catalog
      products={store.products}
      addToCart={(index) => {
        store.addCartProduct(index);
      }}
      toggleFav={(index) => {
        store.toggleFavProductIds(index);
      }}
      favProductsIds={store.favProductsIds}
    />
  </div>
));

export const Catalog = ({ products, addToCart, toggleFav, favProductsIds }) => {
  console.log(favProductsIds);
  return (
    <div className="catalog">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          {...product}
          addToCart={() => addToCart(product.id)}
          toggleFav={() => toggleFav(product.id)}
          isFav={favProductsIds.includes(product.id)}
        />
      ))}
    </div>
  );
};
