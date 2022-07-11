import React, { useState } from "react";
import Logo from "../imge/logo.png";
import Bars from "../imge/bars.png";
import { Link } from "react-scroll";
function Header(props) {
  const mobail = window.innerWidth <= 786 ? true : false;
  const [menuOpend, setMenuOpend] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {menuOpend === false && mobail === true ? (
        <div
          style={{
            background: "#3c3f45",
            padding: "0.5rem",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
            position:'fixed',
            right:'2rem',
            zIndex:'99'
          }}
          onClick={() => setMenuOpend(true)}
        >
          <img src={Bars} alt="" style={{ width: "1.5rem", height: "2rem" }} />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpend(false)}
              to="home"
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li onClick={() => setMenuOpend(false)}>
            <Link
              to="programs"
              span={true}
              smooth={true}
              onClick={() => setMenuOpend(false)}
            >
              Programs
            </Link>
          </li>
          <li onClick={() => setMenuOpend(false)}>
            <Link
              to="reasons"
              span={true}
              smooth={true}
              onClick={() => setMenuOpend(false)}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpend(false)}
              to="plans"
              span={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testimonilas"
              span={true}
              smooth={true}
              onClick={() => setMenuOpend(false)}
            >
              Testimonilas
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
