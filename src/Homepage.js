import React, { useContext } from "react";
import UserContext from "./UserContext";
import { Link } from "react-router-dom";
import { Heading } from "./Heading";
import "./Homepage.css";

function Homepage() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="homepage-container">
      <div className="homepage">
        <img
          src="https://image.freepik.com/free-vector/people-applying-vacant-job-business-competition-available-vacancy-advertisement-position-application-competing-workers-cartoon-characters_335657-1596.jpg"
          className="img"
          alt="Man, woman, vacant illustration"
        ></img>
      </div>
      <Heading />
      {currentUser ? (
        <h2>Welcome back, {currentUser.firstName || currentUser.username}!</h2>
      ) : (
        <div className="login-signup">
          <Link to="/login">
            <button className="register-btn">Register</button>
          </Link>
          <Link to="/signup">
            <button className="signup-btn">Signup</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Homepage;
