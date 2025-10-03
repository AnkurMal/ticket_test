import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Customers from "./Customers";
import Login from "./Login";
import Register from "./Register";
import { useEffect, useState } from "react";
import CreateTicket from "./CreateTicket.jsx";

const Priority = {
  High: 2,
  Medium: 1,
  Low: 0,
};

const Message = {
  User: 0,
  Bot: 1,
};

function App() {
  const [username, setUsername] = useState(null);
  const [tickets, setTickets] = useState([]);
  const api = "https://backend-test-n539.onrender.com/";

  useEffect(() => {
    const handleExit = () => {
      fetch(api + "update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, messages: tickets }),
        keepalive: true,
      }).catch((err) => console.error("Update failed:", err));
    };

    window.addEventListener("beforeunload", handleExit);
    return () => window.removeEventListener("beforeunload", handleExit);
  }, [tickets]);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="d-flex vh-100">
      <Sidebar />
      <div className="flex-grow-1 overflow-auto">
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                username={username}
                api={api}
                tickets={tickets}
                setTickets={setTickets}
                Message={Message}
              />
            }
          />
          <Route path="/customers" element={<Customers />} />
          <Route
            path="/login"
            element={<Login setUsername={setUsername} api={api} />}
          />
          <Route
            path="/register"
            element={<Register setUsername={setUsername} api={api} />}
          />
          <Route
            path="/createticket"
            element={
              <CreateTicket
                api={api}
                username={username}
                tickets={tickets}
                setTickets={setTickets}
                priority={Priority}
                sendBy={Message}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;