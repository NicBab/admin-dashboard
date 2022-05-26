import { Sidebar, Topbar } from "./components/index";
import './App.css'

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="others">other pages</div>
      </div>
    </div>
  );
}

export default App;
