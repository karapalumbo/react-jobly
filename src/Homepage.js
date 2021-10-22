import React, { useContext } from "react";
import UserContext from "./UserContext";
import { Link } from "react-router-dom";
import { Heading } from "./Heading";
import CompanyList from "./companies/CompanyList";
import "./Homepage.css";

function Homepage() {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      {currentUser ? (
        <CompanyList />
      ) : (
        <>
          <div className="homepage-container">
            <div className="heading-text">
              <h1>Welcome to Jobly</h1>
              <p>A convenient place to find and apply to jobs!</p>
            </div>
            <img
              src="https://image.freepik.com/free-vector/people-applying-vacant-job-business-competition-available-vacancy-advertisement-position-application-competing-workers-cartoon-characters_335657-1596.jpg"
              className="img"
              alt="Man, woman, vacant illustration"
            ></img>

            <div className="login-signup">
              <Link to="/login">
                <button className="register-btn">Register</button>
              </Link>
              <Link to="/signup">
                <button className="signup-btn">Signup</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Homepage;
