import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavBtn,
  NavBtnLink,
  NavExternalLinks,
  NavInternalLinks,
} from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle, isBlack }) => {
  console.log("🚀 ~ file: index.jsx ~ line 19 ~ Navbar ~ isBlack", isBlack);
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav} isBlack={isBlack}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              OnCall System
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavExternalLinks
                  to="/"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  <i className="fas fa-home"></i>
                  Home
                </NavExternalLinks>
              </NavItem>
              <NavItem>
                <NavInternalLinks
                  to="services"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  <i className="fal fa-user-hard-hat"></i>   Services
                </NavInternalLinks>
              </NavItem>
              <NavItem>
                <NavExternalLinks
                  to="user"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  <i className="fas fa-users"></i>  Users
                </NavExternalLinks>
              </NavItem>
              <NavItem>
                <NavExternalLinks
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  <i className="fad fa-info-circle"></i> About
                </NavExternalLinks>
              </NavItem>
              <NavItem>
                <NavExternalLinks
                  to="contact-us"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  <i className="fas fa-id-card"></i> Contact us
                </NavExternalLinks>
              </NavItem>
              <NavItem>
                <NavExternalLinks
                  to="sign-up"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  <i className="fas fa-user"></i>
                   Sign Up
                </NavExternalLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin"><i className="fal fa-sign-in"></i>Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
