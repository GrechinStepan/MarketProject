import React from "react";
import { Link } from "react-router-dom";
import ProductItem from "../ProductItem/ProductItem";

import "./CatalogSection.css";

function CatalogSection({ sectionName, sectionProducts, addToCart }) {
  return (
    <div className="catalog-section">
      <h1 className="catalog-section__title">{sectionName}</h1>
      <div className="catalog-section__products-group">
        {sectionProducts &&
          sectionProducts.map((product) => (
            <ProductItem
              key={product.id}
              addToCart={() => addToCart(product.id)}
              {...product}
            />
          ))}
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
