import { useEffect, useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState({
    name: "Guest",
    email: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>Expense Tracker</h2>
      </div>

      <div className="navbar-right">
        <div className="user-info">
          <div className="avatar">
            {user.name?.charAt(0).toUpperCase()}
          </div>

          <div className="user-details">
            <h4>{user.name}</h4>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;