import React from "react";
import Logo from "../imge/logo.png";
function Header(props) {
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      <ul className="header-menu">
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonilas</li>
      </ul>
    </div>
  );
}

export default Header;
