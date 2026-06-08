import {
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

import ExpenseForm from "../components/expenses/ExpenseForm";
import ExpenseFilters from "../components/expenses/ExpenseFilters";
import ExpenseTable from "../components/expenses/ExpenseTable";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  // Load expenses from localStorage
  useEffect(() => {
    const storedExpenses =
      JSON.parse(localStorage.getItem("expenses")) || [];

    setExpenses(storedExpenses);
  }, []);

  // Save expenses to localStorage
  useEffect(() => {
    localStorage.setItem(
      "expenses",
      JSON.stringify(expenses)
    );
  }, [expenses]);

  // Add Expense
  const addExpense = useCallback((newExpense) => {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      newExpense,
    ]);
  }, []);

  // Delete Expense
  const deleteExpense = useCallback((id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter(
        (expense) => expense.id !== id
      )
    );
  }, []);

  // Filter Expenses
  const filteredExpenses = useMemo(() => {
    return expenses.filter((expense) => {
      const matchesSearch = expense.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        expense.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [expenses, searchTerm, selectedCategory]);

  // Total Expenses
  const totalExpenses = useMemo(() => {
    return filteredExpenses.reduce(
      (sum, expense) => sum + expense.amount,
      0
    );
  }, [filteredExpenses]);

  // Total Categories
  const totalCategories = useMemo(() => {
    return new Set(
      expenses.map((expense) => expense.category)
    ).size;
  }, [expenses]);

  return (
    <div className="expenses-page">
      <div className="page-header">
        <h1>Expenses</h1>
        <p>Manage and track your spending.</p>
      </div>

      {/* Summary Cards */}
      <div className="summary-grid">
        <div className="summary-card">
          <h4>Total Expenses</h4>
          <p>₹{totalExpenses.toLocaleString()}</p>
        </div>

        <div className="summary-card">
          <h4>Total Records</h4>
          <p>{filteredExpenses.length}</p>
        </div>

        <div className="summary-card">
          <h4>Categories</h4>
          <p>{totalCategories}</p>
        </div>
      </div>

      <ExpenseForm addExpense={addExpense} />

      <ExpenseFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <ExpenseTable
        expenses={filteredExpenses}
        onDelete={deleteExpense}
      />
    </div>
  );
};

export default Expenses;