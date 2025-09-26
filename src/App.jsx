import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Customers from "./Customers";
import Login from "./Login";
import Register from "./Register";
import { useEffect, useState } from "react";

function App() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Dashboard username={username} />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/login" element={<Login setUsername={setUsername} />} />
          <Route
            path="/register"
            element={<Register setUsername={setUsername} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
