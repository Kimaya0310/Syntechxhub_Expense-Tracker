import { NavLink, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiDollarSign,
  FiUser,
  FiLogOut,
} from "react-icons/fi";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>ExpenseTracker</h2>
      </div>

      <nav className="sidebar-nav">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <FiHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink
          to="/expenses"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <FiDollarSign />
          <span>Expenses</span>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          <FiUser />
          <span>Profile</span>
        </NavLink>
      </nav>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        <FiLogOut />
        <span>Logout</span>
      </button>
    </aside>
  );
};

export default Sidebar;