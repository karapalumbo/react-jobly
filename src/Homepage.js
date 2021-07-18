import React, { useContext } from "react";
import UserContext from "./UserContext";
import { Link } from "react-router-dom";

function Homepage() {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      <h1>Jobly</h1>
      <p>All the jobs in one, convenient place.</p>
      {currentUser ? (
        <h2>Welcome back, {currentUser.firstName || currentUser.username}!</h2>
      ) : (
        <p>
          <div>
            <Link to="/login">Log in</Link>
          </div>

          <div>
            <Link to="/signup">Sign up</Link>
          </div>
        </p>
      )}
    </div>
  );
}

export default Homepage;
