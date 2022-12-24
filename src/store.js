import { action, computed, makeObservable, observable } from "mobx";
import productsBase from "./products";

class MarketStore {
  _products = productsBase;
  _cartProducts = JSON.parse(localStorage.getItem("_cartProducts")) || [];
  _searchName = JSON.parse(localStorage.getItem("_searchName")) || "";
  _category = JSON.parse(localStorage.getItem("_category")) || "wine";
  _favProductsIds = JSON.parse(localStorage.getItem("_favProductsIds")) || [];

  constructor() {
    makeObservable(this, {
      _favProductsIds: observable,
      _category: observable,
      _searchName: observable,
      _cartProducts: observable,
      _products: observable,
      resultPrice: computed,
      products: computed,
      searchName: computed,
      category: computed,
      productsFiltered: computed,
      cartProducts: computed,
      favProducts: computed,
      favProductsIds: computed,
      productsQuantity: computed,
      toggleFavProductIds: action,
      setCategory: action,
      changeSearchName: action,
      addCartProduct: action,
      deleteCartProduct: action,
    });
  }

  get favProducts() {
    console.log(this._favProductsIds);
    return this._products.filter((product) =>
      this._favProductsIds.includes(product.id)
    );
  }

  get favProductsIds() {
    console.log(this._favProductsIds);
    return this._favProductsIds;
  }

  get resultPrice() {
    let resultPrice = 0;
    for (let i = 0; i < this._cartProducts.length; i++) {
      const cartProduct = this._cartProducts[i];
      for (let j = 0; j < this._products.length; j++) {
        const product = this._products[j];
        if (cartProduct.id === product.id) {
          resultPrice += cartProduct.count * product.price;
        }
      }
    }
    return resultPrice;
  }

  get cartProducts() {
    return this._products
      .filter((product) => {
        for (let i = 0; i < this._cartProducts.length; i++) {
          if (this._cartProducts[i].id === product.id) {
            return true;
          }
        }
        return false;
      })
      .map((product) => {
        for (let i = 0; i < this._cartProducts.length; i++) {
          if (this._cartProducts[i].id === product.id) {
            return { ...product, count: this._cartProducts[i].count };
          }
        }
      });
  }

  get productsFiltered() {
    if (this.searchName !== undefined && this.searchName.length > 0) {
      return this._products.filter((product) => {
        return product.name
          .toLowerCase()
          .includes(this.searchName.toLowerCase());
      });
    }
    return this._products;
  }

  get productsQuantity() {
    return this._cartProducts.reduce((acc, curElem) => acc + curElem.count, 0);
  }

  get category() {
    return this._category;
  }

  get products() {
    return this._products;
  }

  get searchName() {
    return this._searchName;
  }

  toggleFavProductIds(id) {
    console.log(id);
    if (!this._favProductsIds.includes(id)) {
      this._favProductsIds = this._favProductsIds.concat([id]);
    } else {
      this._favProductsIds = this._favProductsIds.filter(
        (productIndex) => productIndex !== id
      );
    }
    localStorage.setItem(
      "_favProductsIds",
      JSON.stringify(this._favProductsIds)
    );
  }

  setCategory(category) {
    this._category = category;
    localStorage.setItem("_category", JSON.stringify(category));
  }

  changeSearchName(searchName) {
    this._searchName = searchName;
    localStorage.setItem("_searchName", JSON.stringify(searchName));
  }

  addCartProduct(index) {
    if (this._cartProducts.some((product) => product.id === index)) {
      this._cartProducts = this._cartProducts.map((cartProduct) => {
        if (cartProduct.id === index) {
          if ("count" in cartProduct) {
            cartProduct["count"] += 1;
          } else {
            cartProduct["count"] = 1;
          }
        }
        return cartProduct;
      });
      localStorage.setItem("_cartProducts", JSON.stringify(this._cartProducts));
    } else {
      this._cartProducts = this._cartProducts.concat([{ id: index, count: 1 }]);
      localStorage.setItem("_cartProducts", JSON.stringify(this._cartProducts));
    }
  }

  deleteCartProduct(index) {
    this._cartProducts = this._cartProducts.map((cartProduct) => {
      if (cartProduct.id === index) {
        if ("count" in cartProduct && cartProduct["count"] > 0) {
          cartProduct["count"] -= 1;
        }
      }
      return cartProduct;
    });
    localStorage.setItem("_cartProducts", JSON.stringify(this._cartProducts));
  }

  clear() {
    this._cartProducts = [];
    this._searchName = "";
    this._category = "wine";
    localStorage.clear();
  }
}

export default new MarketStore();
