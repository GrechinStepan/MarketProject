import React from "react";
import NavBar from "./NavBar/NavBar";
import Like from "../Icons/Like/Like";
import Cart from "../Icons/Cart/Cart";
import Avatar from "../Icons/Avatar/Avatar";
import Logo from "../Icons/Logo/Logo";

import "./Header.css";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

function Header({ store }) {
  return (
    <header className="header-container flex-center-middle">
      <div className="header">
        <Link to={"/MarketProject"}>
          <Logo />
        </Link>
        <NavBar />
        <div className="header__controls-group">
          <Link to={"/MarketProject/cart"}>
            <div className="header__cart-container">
              <Cart />
              <span className="header__cart-counter">
                {store.productsQuantity}
              </span>
            </div>
          </Link>
          <Like fill={"#ffffff"} />
          <Avatar />
        </div>
      </div>
    </header>
  );
}

export default observer(Header);
