import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginInterface({ text, loadingText, setUsername }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const username = form.username.value;
    const password = form.password.value;

    setLoading(true);

    try {
      const response = await fetch(
        "https://api-test-zeno.onrender.com/" + text.toLowerCase(),
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (text === "Login") {
          if (data.username) {
            if (data.password) {
              alert("Login successful!");
              localStorage.setItem("username", username);
              form.reset();
              setUsername(username);
              navigate("/");
            } else {
              alert("Login failed! Wrong password.");
            }
          } else {
            alert("Login failed! Account doesn't exist, register first.");
            navigate("/register");
          }
        } else {
          if (data.success) {
            alert("Registration successful!");
            localStorage.setItem("username", username);
            form.reset();
            setUsername(username);
            navigate("/");
          } else {
            alert("Registration failed! Username already exists");
          }
        }
      } else {
        const data = await response.json();
        alert("Error: " + (data.message || `${text} failed`));
      }
    } catch (err) {
      alert("Network error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="p-3" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          aria-describedby="Username"
          pattern="[a-zA-Z0-9_]+"
          title="Username must contain only letters, numbers, or underscores"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? loadingText : text}
      </button>
    </form>
  );
}

export default LoginInterface;
