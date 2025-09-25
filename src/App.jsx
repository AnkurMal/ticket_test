import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Customers from "./Customers";
import Login from "./Login";
import Register from "./Register";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState(null);

  const handleLogin = (user) => {
    setUsername(user);
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Dashboard username={username} />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/login" element={<Login  onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
