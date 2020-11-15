import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <h3>ROD</h3>
            <i class="fas fa-fish"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home <i class="fas fa-home"></i>
              </Link>
            </li>
            <li>
              <Link
                to="/catalog"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Catalog <i class="far fa-list-alt"></i>
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Cart <i class="fas fa-shopping-cart"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
