import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar, Topbar } from "./components/index";
import { Home, UserList, User, NewUser } from "./pages/index";
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
          <Route path="/user/:userId" element={ <User /> } />
          <Route path="/newUser" element={ <NewUser /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
