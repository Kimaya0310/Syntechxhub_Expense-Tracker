import ExpenseRow from "./ExpenseRow";

const ExpenseTable = ({ expenses, onDelete }) => {
  if (!expenses.length) {
    return (
      <div className="empty-state">
        <h3>No Expenses Found</h3>
        <p>Add your first expense to get started.</p>
      </div>
    );
  }

  return (
    <div className="table-container">
      <table className="expense-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((expense) => (
            <ExpenseRow
              key={expense.id}
              expense={expense}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;