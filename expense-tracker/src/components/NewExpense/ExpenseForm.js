import { useState } from 'react';
import { utcToZonedTime } from 'date-fns-tz';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // const [title, setTitle] = useState('');
    // const [date, setDate] = useState('');
    // const [amount, setAmount] = useState('');
    const [input, setInput] = useState({
        title: '',
        date: '',
        amount: '',
    });

    const titleChangedHandler = (event) => {
        //  setTitle(event.target.value);
        // setInput({
        //     ...input,
        //     title: event.target.value,
        // });
        //  use this syntax when current state depends on previous state
        setInput((prevState) => {
            return {
                ...prevState,
                title: event.target.value,
            };
        });
    };

    const dateChangedHandler = (event) => {
        //  setDate(event.target.value);
        setInput((prevState) => {
            return {
                ...prevState,
                date: event.target.value,
            };
        });
    };

    const amountChangedHandler = (event) => {
        //  setAmount(event.target.value);
        setInput((prevState) => {
            return {
                ...prevState,
                amount: +event.target.value,
            };
        });
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const eventData = {
            ...input,
            date: utcToZonedTime(input.date, 'America/New_York')
        };
        // console.log(eventData);
        props.onSaveExpenseData(eventData);
        setInput({ title: '', amount: '', date: '' });
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        onChange={titleChangedHandler}
                        value={input.title}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        name="amount"
                        id="amount"
                        min="0.01"
                        step="0.01"
                        onChange={amountChangedHandler}
                        value={input.amount}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        min="2020-01-01"
                        max="2023-12-31"
                        onChange={dateChangedHandler}
                        value={input.date}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
