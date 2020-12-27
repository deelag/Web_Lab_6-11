import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import { NavbarContainer, NavbarLogo, MenuIcon, NavMenu, NavMenuActive, NavLink, Buttons } from './Navbar.styled'
import { useHistory } from "react-router-dom";


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  let Menu = !click ? NavMenu : NavMenuActive;

  let history = useHistory();
  let [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("isAuthenticated"));  
  }, [isAuthenticated])


  const signOut = () => {
    localStorage.clear();
    history.push("/sign-up");
    history.go();
  };

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
      <Buttons>
        <Menu>
          <li>
            <NavLink to="/" onClick={closeMobileMenu}>
              Home <i className="fas fa-home" style={{ marginLeft: "5px" }} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/catalog"
              onClick={closeMobileMenu}
            >
              Catalog <i className="far fa-list-alt" style={{ marginLeft: "5px" }} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              onClick={closeMobileMenu}
            >
              Cart <i className="fas fa-shopping-cart" />
            </NavLink>
          </li>
        </Menu>
        {
          isAuthenticated ?
            <Button
              onClick={signOut}
              buttonStyle="btn--outline"
              buttonSize="btn--medium"
            >
              Sign Out
            </Button>
            :
            <Button
              path="/sign-up"
              buttonStyle="btn--outline"
              buttonSize="btn--medium"
            >
              Sign Up
            </Button>
        }
      </Buttons>
    </NavbarContainer>
  );
}

export default Navbar;
