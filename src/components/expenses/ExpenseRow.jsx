const ExpenseRow = ({ expense, onDelete }) => {
  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this expense?"
    );

    if (confirmDelete) {
      onDelete(expense.id);
    }
  };

  return (
    <tr>
      <td>{expense.title}</td>
      <td>{expense.category}</td>
      <td>₹{expense.amount.toLocaleString()}</td>
      <td>{expense.date}</td>
      <td>
        <button
          className="delete-btn"
          onClick={handleDelete}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ExpenseRow;