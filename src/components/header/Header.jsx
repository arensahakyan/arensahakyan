import React from "react";
import Style from "./Header.module.css";
import logo from "../../img/TopExperts.ai.png";
const Header = () => {
  return (
    <header className={Style.navbar}>
      <div className={Style.logo}>
        <img src={logo} alt="" />
      </div>
      <ul className={Style.navmenu}>
        <li>How It works</li>
        <li>About us</li>
        <li>Services</li>
      </ul>
    </header>
  );
};

export default Header;
