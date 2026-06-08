import { useEffect, useState } from "react";

const ProfileCard = () => {
  const [user, setUser] = useState({
    name: "Guest User",
    email: "guest@example.com",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const memberSince = new Date().toLocaleDateString();

  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="profile-avatar">
          {user.name.charAt(0).toUpperCase()}
        </div>

        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>

      <div className="profile-details">
        <div className="detail-item">
          <span>Member Since</span>
          <strong>{memberSince}</strong>
        </div>

        <div className="detail-item">
          <span>Account Type</span>
          <strong>Standard User</strong>
        </div>

        <div className="detail-item">
          <span>Status</span>
          <strong>Active</strong>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;