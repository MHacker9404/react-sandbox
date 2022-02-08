import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (expenseData) => {
        const data = {
            ...expenseData,
            id: Math.random().toString(),
        };

        props.onAddExpense(data);
    };

    return (
        <div className="new-expense">
            <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
            ></ExpenseForm>
        </div>
    );
};

export default NewExpense;
