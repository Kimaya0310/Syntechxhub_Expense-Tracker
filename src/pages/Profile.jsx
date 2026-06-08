import { useEffect, useMemo, useState } from "react";
import ProfileCard from "../components/profile/ProfileCard";

const Profile = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedExpenses =
      JSON.parse(localStorage.getItem("expenses")) || [];

    setExpenses(storedExpenses);
  }, []);

  const totalExpenses = useMemo(() => {
    return expenses.reduce(
      (sum, expense) => sum + expense.amount,
      0
    );
  }, [expenses]);

  const totalTransactions = useMemo(() => {
    return expenses.length;
  }, [expenses]);

  const totalCategories = useMemo(() => {
    return new Set(
      expenses.map((expense) => expense.category)
    ).size;
  }, [expenses]);

  return (
    <div className="profile-page">
      <div className="page-header">
        <h1>Profile</h1>
        <p>Manage your account information.</p>
      </div>

      <ProfileCard />

      <div className="profile-stats">
        <div className="stat-card">
          <h4>Total Expenses</h4>
          <p>₹{totalExpenses.toLocaleString()}</p>
        </div>

        <div className="stat-card">
          <h4>Transactions</h4>
          <p>{totalTransactions}</p>
        </div>

        <div className="stat-card">
          <h4>Categories Used</h4>
          <p>{totalCategories}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;