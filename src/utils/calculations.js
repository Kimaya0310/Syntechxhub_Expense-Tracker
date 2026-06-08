// Total amount spent
export const getTotalExpenses = (expenses) => {
  return expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );
};

// Total number of transactions
export const getTotalTransactions = (expenses) => {
  return expenses.length;
};

// Total categories used
export const getTotalCategories = (expenses) => {
  return new Set(
    expenses.map((expense) => expense.category)
  ).size;
};

// Highest expense amount
export const getHighestExpense = (expenses) => {
  if (!expenses.length) return 0;

  return Math.max(
    ...expenses.map((expense) => expense.amount)
  );
};

// Recent expenses
export const getRecentExpenses = (
  expenses,
  limit = 5
) => {
  return [...expenses]
    .sort((a, b) => b.id - a.id)
    .slice(0, limit);
};

// Category-wise totals
export const getCategoryTotals = (expenses) => {
  return expenses.reduce((acc, expense) => {
    const category = expense.category;

    acc[category] =
      (acc[category] || 0) + expense.amount;

    return acc;
  }, {});
};

// Filter expenses
export const filterExpenses = (
  expenses,
  searchTerm,
  selectedCategory
) => {
  return expenses.filter((expense) => {
    const matchesSearch = expense.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      expense.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });
};