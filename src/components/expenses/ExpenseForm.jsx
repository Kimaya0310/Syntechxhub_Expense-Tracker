import { useState, useRef, useEffect } from "react";

const ExpenseForm = ({ addExpense }) => {
  const titleRef = useRef(null);

  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: "Food",
    date: "",
  });

  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setExpense((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !expense.title.trim() ||
      !expense.amount ||
      !expense.date
    ) {
      alert("Please fill all fields");
      return;
    }

    if (Number(expense.amount) <= 0) {
      alert("Amount must be greater than 0");
      return;
    }

    const newExpense = {
      id: Date.now(),
      title: expense.title,
      amount: Number(expense.amount),
      category: expense.category,
      date: expense.date,
    };

    addExpense(newExpense);

    setExpense({
      title: "",
      amount: "",
      category: "Food",
      date: "",
    });

    titleRef.current?.focus();
  };

  return (
    <div className="expense-form-card">
      <h3>Add Expense</h3>

      <form onSubmit={handleSubmit} className="expense-form">
        <input
          ref={titleRef}
          type="text"
          name="title"
          placeholder="Expense Title"
          value={expense.title}
          onChange={handleChange}
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={expense.amount}
          onChange={handleChange}
        />

        <select
          name="category"
          value={expense.category}
          onChange={handleChange}
        >
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Health">Health</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="date"
          name="date"
          value={expense.date}
          onChange={handleChange}
        />

        <button type="submit">
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;