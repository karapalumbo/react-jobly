import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import JoblyApi from "./api/api";
import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";
import UserContext from "./UserContext";
import useLocalStorage from "./localStorage";
import { Container } from "reactstrap";

import "./App.css";

export const TOKEN_ID = "token";

function App() {
  const [token, setToken] = useLocalStorage(TOKEN_ID);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [appliedID, setAppliedID] = useState(new Set([]));

  useEffect(() => {
    async function findCurrentUser() {
      if (token) {
        let { username } = jwt.decode(token);
        JoblyApi.token = token;
        let currUser = await JoblyApi.getUser(username);
        setCurrentUser(currUser);
        setAppliedID(new Set(currUser.applications));
      }
      setIsLoaded(true);
    }
    setIsLoaded(false);
    findCurrentUser();
  }, [token]);

  async function signup(formData) {
    let token = await JoblyApi.signup(formData);
    setToken(token);
    return { success: true };
  }

  async function login(formData) {
    let token = await JoblyApi.login(formData);
    setToken(token);
    return { success: true };
  }

  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  function hasApplied(id) {
    return appliedID.has(id);
  }

  function applyToJob(id) {
    if (hasApplied(id)) return;
    JoblyApi.applyToJob(currentUser.username, id);
    setAppliedID(new Set([...appliedID, id]));
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider
          value={{ currentUser, setCurrentUser, applyToJob, hasApplied }}
        >
          <NavBar logout={logout} />
          <Container>
            <Routes signup={signup} login={login} />
          </Container>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
