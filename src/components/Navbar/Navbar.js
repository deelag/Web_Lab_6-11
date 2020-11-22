import React, { useState } from "react";
import { NavbarContainer, NavbarLogo, MenuIcon, NavMenu, NavMenuActive, NavLink } from './Navbar.styled'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  let Menu = !click ? NavMenu : NavMenuActive;

  return (
      <NavbarContainer>
        <NavbarLogo to="/" onClick={closeMobileMenu}>
          <h3>ROD</h3>
          <i className="fas fa-fish" />
        </NavbarLogo>
        <MenuIcon onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}
            style={{ color: "white", marginRight: "20px" }} />
        </MenuIcon>
        <Menu>
          <li>
            <NavLink to="/" onClick={closeMobileMenu}>
              Home <i className="fas fa-home" style={{ marginLeft: "5px"}} />
            </NavLink> 
          </li>
          <li>
            <NavLink
              to="/catalog"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Catalog <i className="far fa-list-alt" style={{ marginLeft: "5px"}} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Cart <i className="fas fa-shopping-cart" />
            </NavLink>
          </li>
        </Menu>
      </NavbarContainer>
  );
}

export default Navbar;
