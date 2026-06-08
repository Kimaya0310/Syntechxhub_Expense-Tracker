import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn === "true") {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-content">
          <h1>Expense Tracker</h1>
          <p>
            Track your expenses, manage your budget,
            and stay in control of your finances.
          </p>

          <LoginForm onLogin={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;