import { useState, useRef, useEffect } from "react";

const LoginForm = ({ onLogin }) => {
  const emailRef = useRef(null);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email.trim() || !formData.password.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    const user = {
      name: formData.email.split("@")[0],
      email: formData.email,
      joinedDate: new Date().toLocaleDateString(),
    };

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isLoggedIn", "true");

    setError("");

    if (onLogin) {
      onLogin();
    }
  };

  return (
    <div className="login-card">
      <h2>Welcome Back</h2>
      <p>Sign in to continue</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>

          <input
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Password</label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {error && (
          <p className="error-text">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="login-btn"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;