import React, { useContext } from "react";
import UserContext from "./UserContext";
import { NavLink, Navbar, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar({ logout }) {
  const { currentUser } = useContext(UserContext);

  return (
    <Navbar className="Navigation" color="light" expand="md">
      <NavbarBrand href="/">Jobly</NavbarBrand>

      {currentUser ? (
        <>
          <NavLink href="/companies">Companies</NavLink>
          <NavLink href="/jobs">Jobs</NavLink>
          <NavLink href="/profile">Profile</NavLink>
          <Link className="nav-link" to="/" onClick={logout}>
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
  );
}

export default NavBar;
