import { observer } from "mobx-react-lite";
import React from "react";
import { Catalog } from "../CatalogPage/CatalogPage";

const FavPage = observer(({ store }) => {
  return (
    <div className="catalog-container">
      {store.favProducts.length > 0 ? (
        <>
          <h1 className="catalog-section__title">{"Понравившиеся"}</h1>
          <Catalog
            addToCart={(index) => store.addCartProduct(index)}
            products={store.favProducts}
            toggleFav={(index) => {
              store.toggleFavProductIds(index);
            }}
            favProductsIds={store.favProductsIds}
          />
        </>
      ) : (
        <h1 className="catalog-section__title">
          {"Список понравившехся пуст"}
        </h1>
      )}
    </div>
  );
});

export default FavPage;
