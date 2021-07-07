import React from "react";
import { Nav, NavLink, Navbar, NavItem, NavbarBrand } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Jobly</NavbarBrand>
        <Nav>
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
            <NavLink href="/login">Login/ Logout</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/signup">Signup</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
