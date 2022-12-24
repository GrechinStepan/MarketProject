import React from "react";
import { observer } from "mobx-react-lite";
import CatalogSection from "../../components/CatalogSection/CatalogSection";
import Tabs from "../../components/Tabs/Tabs";
import { Catalog } from "../CatalogPage/CatalogPage";
import { categoryToSectionNameConverter } from "../../helpers/catalogSectionHelper";

import "./MainPage.css";

function MainPage({ store }) {
  return (
    <div className="main-page">
      <Tabs
        changeCategory={(category) => store.setCategory(category)}
        changeSearchName={(searchName) => store.changeSearchName(searchName)}
        searchName={store.searchName}
        selectedCategory={store.category}
      />
      {store.searchName && store.searchName.length > 0 ? (
        <div className="catalog-container">
          <h1 className="catalog-section__title">{"Найденные товары"}</h1>
          <Catalog
            addToCart={(index) => store.addCartProduct(index)}
            products={store.productsFiltered}
            toggleFav={(index) => {
              store.toggleFavProductIds(index);
            }}
            favProductsIds={store.favProductsIds}
          />
        </div>
      ) : (
        <CatalogSection
          addToCart={(index) => store.addCartProduct(index)}
          sectionName={categoryToSectionNameConverter(store.category)}
          sectionProducts={store.products.filter(
            (product) => product.category === store.category
          )}
          toggleFav={(index) => {
            store.toggleFavProductIds(index);
          }}
          favProductsIds={store._favProductsIds}
        />
      )}
    </div>
  );
}

export default observer(MainPage);
