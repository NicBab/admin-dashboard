import { Sidebar, Topbar } from "./components/index";
import { Home } from './pages/index'
import './App.css'

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
