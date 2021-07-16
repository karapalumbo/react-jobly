import React, { useContext } from "react";
import UserContext from "./UserContext";
import { Nav, NavLink, Navbar, NavItem, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";

function NavBar({ logout }) {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Jobly</NavbarBrand>
        <Nav>
          {currentUser ? (
            <>
              <NavItem>
                <NavLink href="/companies">Companies</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/jobs">Jobs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/profile">Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/" onClick={logout}>
                    Logout
                  </Link>
                </NavLink>
              </NavItem>
            </>
          ) : (
            <>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup">Signup</NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
