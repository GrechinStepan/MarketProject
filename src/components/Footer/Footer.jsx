import React from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Logo from "../Icons/Logo/Logo";
import TG from "../Icons/TG/TG";
import VK from "../Icons/VK/VK";

import "./Footer.css";

function Footer({ store }) {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    store.setCategory(category);
    navigate("/MarketProject");
  };

  return (
    <footer className="footer-container flex-center-middle">
      <div className="footer">
        <div className="footer__categories">
          <div className="footer__title">{"Категории"}</div>
          <div className="footer__categories-group">
            <div
              onClick={() => handleCategoryClick("wine")}
              className="footer__category"
            >
              {"Вино"}
            </div>
            <div
              onClick={() => handleCategoryClick("champagne")}
              className="footer__category"
            >
              {"Шампанское и игристое"}
            </div>
            <div
              onClick={() => handleCategoryClick("strong")}
              className="footer__category"
            >
              {"Крепкий алкоголь"}
            </div>
            <div
              onClick={() => handleCategoryClick("beer")}
              className="footer__category"
            >
              {"Пиво"}
            </div>
          </div>
        </div>
        <div className="footer__contacts-group">
          <div className="footer__title">{"Контакты"}</div>
          <div className="footer__contact-phone">
            {"+7 (921) - 996- 75 - 26"}
          </div>
          <div className="footer__social-networks">
            <VK />
            <TG />
          </div>
          <Logo />
        </div>
        <div className="footer__description">
          {
            "Данный сайт является интернет-витриной, соблюдающей все правила и условия ФЗ РФ N171 О госрегулировании алкогольного рынка от 22.11.1995 (ред. от 31.12.2014) а также правила продажи товаров дистанционным способом, утверждённым Постановлением Правительства РФ от 27.09.2007 №612. Качество всего ассортимента подтверждено сертификатами и наличием специальных акцизных марок. В момент согласования заказа, при необходимости мы предоставим вам копии сертификатов. Информация на сайте не является публичной офертой."
          }
          <br />
          <br />
          {
            "МИНЗДРАВ ПРЕДУПРЕЖДАЕТ: ЧРЕЗМЕРНОЕ УПОТРЕБЛЕНИЕ АЛКОГОЛЯ ВРЕДИТ ВАШЕМУ ЗДОРОВЬЮ"
          }
        </div>
      </div>
    </footer>
  );
}

export default observer(Footer);
