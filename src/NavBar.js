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

        {currentUser ? (
          <>
            <NavLink href="/companies">Companies</NavLink>
            <NavLink href="/jobs">Jobs</NavLink>
            <NavLink href="/profile">Profile</NavLink>
            <Link to="/" onClick={logout}>
              Logout {currentUser.username}
            </Link>
          </>
        ) : (
          <>
            <NavLink href="/login">Login</NavLink>
            <NavLink href="/signup">Signup</NavLink>
          </>
        )}
      </Navbar>
    </div>
  );
}

export default NavBar;
