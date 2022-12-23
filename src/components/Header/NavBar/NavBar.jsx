import React from "react";
import { Link } from "react-router-dom";
import VerticalLine from "./VerticalLine";

import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-bar">
      <VerticalLine />
      <Link className="nav-bar__section-name">{"СДЕЛАТЬ ЗАКАЗ"}</Link>
      <VerticalLine />
      <Link to={"/MarketProject/catalog"} className="nav-bar__section-name">
        {"КАТАЛОГ"}
      </Link>
      <VerticalLine />
      <Link className="nav-bar__section-name">{"КОНТАКТЫ"}</Link>
      <VerticalLine />
    </div>
  );
}

export default NavBar;
