import React  ,{useState, useContext}  from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand,NavItem, Nav, NavLink, NavbarText} from "reactstrap";
 
import {Link} from "react-router-dom"
import { UserContext } from "../Context/UserContext";



const Header = () => {

    const context = useContext(UserContext)

    const [isOpen, setIsOpen ] = useState(false)

    const toggle = () => setIsOpen (!isOpen)


  return (
    <Navbar
      color="info"
      light
      expand="md"
      className="d-flex justify-content-between"
    >
      <NavbarBrand>
        {" "}
        <Link to="/" className="text-white">
          Git-fire App
        </Link>{" "}
      </NavbarBrand>
      <NavbarText>{context.user?.email ? context.user.email : ""}</NavbarText>

      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto " navbar>
          {context.user ? (
            <NavItem>
              <NavLink tag={Link} to="/" className="text-white">
                Logout
              </NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink tag={Link} to="/" className="text-white">
                  Signup
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/" className="text-white">
                  SignIn
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
