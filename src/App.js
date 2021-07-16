import "./App.css";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import JoblyApi from "./api/api";
import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";
import UserContext from "./UserContext";

function App() {
  const [token, setToken] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    async function findCurrentUser() {
      if (token) {
        JoblyApi.token = token;
        let { username } = jwt.decode(token);
        let currUser = await JoblyApi.getUser(username);
        setCurrentUser(currUser);
      } else {
        console.log("error");
      }
    }
    findCurrentUser();
  }, [token]);

  console.debug("token", token);

  async function signup(formData) {
    let res = await JoblyApi.signup(formData);
    setToken(res);
    return { success: true };
  }

  async function login(formData) {
    let res = await JoblyApi.login(formData);
    setToken(res);
    return { success: true };
  }

  function logout() {
    setCurrentUser(null);
    token(null);
  }

  return (
    <div className="App">
      <UserContext.Provider value={{ currentUser }}>
        <BrowserRouter>
          <NavBar logout={logout} />
          <Routes signup={signup} login={login} />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
