import { action, computed, makeObservable, observable } from "mobx";
import productsBase from "./products";

class MarketStore {
  _products = productsBase;
  _cartProducts = [];
  _searchName = "";
  _category = "wine";

  constructor() {
    makeObservable(this, {
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
      productsQuantity: computed,
      setCategory: action,
      changeSearchName: action,
      addCartProduct: action,
      deleteCartProduct: action,
    });
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

  setCategory(category) {
    console.log(category);
    this._category = category;
  }

  changeSearchName(searchName) {
    this._searchName = searchName;
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
        console.log(cartProduct);
        return cartProduct;
      });
    } else {
      this._cartProducts.push({ id: index, count: 1 });
      console.log({ id: index, count: 1 });
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
  }

  clear() {
    this._cartProducts = [];
    this._searchName = "";
    this._category = "wine";
  }
}

export default new MarketStore();
