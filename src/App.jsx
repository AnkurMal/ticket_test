import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Customers from "./Customers";

function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
