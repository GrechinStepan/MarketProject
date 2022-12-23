import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import marketStore from "./store";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CartPage from "./pages/CartPage/CartPage";
import MainPage from "./pages/MainPage/MainPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";

import "./Market.css";

const Market = () => {
  return (
    <Router>
      <div className="market">
        <div className="market__top-group">
          <Header store={marketStore} />
          <Routes>
            <Route
              path="/MarketProject"
              element={<MainPage store={marketStore} />}
            />
            <Route
              path="/MarketProject/catalog"
              element={<CatalogPage store={marketStore} />}
            />
            <Route
              path="/MarketProject/cart"
              element={<CartPage store={marketStore} />}
            />
            <Route path="/MarketProject/order" element={<OrderPage />} />
            <Route
              path="*"
              element={<Navigate to="/MarketProject" replace />}
            />
          </Routes>
        </div>
        <Footer store={marketStore} />
      </div>
    </Router>
  );
};

export default Market;
