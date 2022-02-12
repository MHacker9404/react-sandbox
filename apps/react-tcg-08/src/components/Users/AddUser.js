import { useState } from 'react';

import ErrorModal from '../UI/ErrorModal';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.scss';

const AddUser = (props) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [isError, setError] = useState();

    const userNameChangedHandler = (event) => {
        setUserName(event.target.value);
    };

    const userAgeChangedHandler = (event) => {
        setUserAge(event.target.value);
    };

    const addUserHandler = (event) => {
        event.preventDefault();
        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age',
            });
            return;
        }
        if (+userAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age',
            });
            return;
        }
        console.info(userName, userAge);

        props.onAddUser({ name: userName, age: +userAge });

        setUserName('');
        setUserAge('');
    };

    const errorHandler = () => setError(null);

    return (
        <div>
            {isError && (
                <ErrorModal
                    title={isError.title}
                    message={isError.message}
                    onConfirm={errorHandler}
                ></ErrorModal>
            )}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="name">Username</label>
                    <input
                        type="text"
                        name="name"
                        id="age"
                        onChange={userNameChangedHandler}
                        value={userName}
                    />
                    <label htmlFor="age">Age (years)</label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        onChange={userAgeChangedHandler}
                        value={userAge}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
