import React from "react";
import { Link } from "react-router-dom";
import ProductItem from "../ProductItem/ProductItem";

import "./CatalogSection.css";

function CatalogSection({
  sectionName,
  sectionProducts,
  addToCart,
  toggleFav,
  favProductsIds,
}) {
  return (
    <div className="catalog-section">
      <h1 className="catalog-section__title">{sectionName}</h1>
      <div className="catalog-section__products-group">
        {sectionProducts &&
          sectionProducts.map((product) => {
            const isFav = favProductsIds.includes(product.id);
            return (
              <ProductItem
                key={product.id}
                addToCart={() => addToCart(product.id)}
                {...product}
                toggleFav={() => toggleFav(product.id)}
                isFav={isFav}
              />
            );
          })}
      </div>
      <Link
        className="catalog-section__catalog-link"
        to={"/MarketProject/catalog"}
      >
        {"Перейти в каталог"}
      </Link>
    </div>
  );
}

export default CatalogSection;
