import React from "react";
import { Link } from "react-router-dom";
import ArrowBack from "../Icons/ArrowBack/ArrowBack";

import "./NavBack.css";

function NavBack({ text, linkTo }) {
  return (
    <Link to={linkTo} className="nav-back">
      <ArrowBack />
      <span>{text}</span>
    </Link>
  );
}

export default NavBack;
