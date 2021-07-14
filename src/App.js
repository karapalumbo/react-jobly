import "./App.css";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import JoblyApi from "./api/api";
import { useState } from "react";

function App() {
  const [token, setToken] = useState("");

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

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes signup={signup} login={login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
