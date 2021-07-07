import "./App.css";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";
import CompanyList from "./companies/CompanyList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
      <Homepage />
      <CompanyList />
    </div>
  );
}

export default App;
