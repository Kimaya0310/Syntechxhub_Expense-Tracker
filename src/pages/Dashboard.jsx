import { useEffect, useMemo, useState } from "react";

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedExpenses =
      JSON.parse(localStorage.getItem("expenses")) || [];

    setExpenses(storedExpenses);
  }, []);

  const totalExpenses = useMemo(() => {
    return expenses.reduce(
      (total, expense) => total + expense.amount,
      0
    );
  }, [expenses]);

  const totalCategories = useMemo(() => {
    return new Set(
      expenses.map((expense) => expense.category)
    ).size;
  }, [expenses]);

  const highestExpense = useMemo(() => {
    if (!expenses.length) return 0;

    return Math.max(
      ...expenses.map((expense) => expense.amount)
    );
  }, [expenses]);

  const recentExpenses = useMemo(() => {
    return [...expenses]
      .reverse()
      .slice(0, 5);
  }, [expenses]);

  return (
    <div className="dashboard">
      <h1 className="page-title">
        Dashboard
      </h1>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Total Expenses</h3>
          <p>₹{totalExpenses.toLocaleString()}</p>
        </div>

        <div className="dashboard-card">
          <h3>Categories</h3>
          <p>{totalCategories}</p>
        </div>

        <div className="dashboard-card">
          <h3>Highest Expense</h3>
          <p>₹{highestExpense.toLocaleString()}</p>
        </div>
      </div>

      <div className="recent-expenses">
        <h2>Recent Expenses</h2>

        {recentExpenses.length === 0 ? (
          <p>No expenses available.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {recentExpenses.map((expense) => (
                <tr key={expense.id}>
                  <td>{expense.title}</td>
                  <td>{expense.category}</td>
                  <td>
                    ₹{expense.amount.toLocaleString()}
                  </td>
                  <td>{expense.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Dashboard;