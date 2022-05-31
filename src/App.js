import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar, Topbar } from "./components/index";
import { Home, UserList } from "./pages/index";
import "./App.css";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="/users" element={ <UserList /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
