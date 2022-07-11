import React from "react";
import GitHub from "../imge/github.png";
import instagram from "../imge/instagram.png";
import linkdin from "../imge/linkedin.png";
import logo from "../imge/logo.png";

function Footer(props) {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
          <div className="social-link">
        <img src={GitHub} alt="" />
        <img src={instagram} alt="" />
        <img src={linkdin} alt="" />
          </div>

          <div className="logo-f">
              <img src={logo} alt=""/>
          </div>
      </div>
       <div className="blur blur-footer"></div>

    </div>
  );
}

export default Footer;
