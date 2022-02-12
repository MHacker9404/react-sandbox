import { useState, useRef } from 'react';

import ErrorModal from '../UI/ErrorModal';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Wrapper from '../Helpers/Wrapper';
import styles from './AddUser.module.scss';

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [userName, setUserName] = useState('');
    // const [userAge, setUserAge] = useState('');
    const [isError, setError] = useState();

    // const userNameChangedHandler = (event) => {
    //     setUserName(event.target.value);
    // };

    // const userAgeChangedHandler = (event) => {
    //     setUserAge(event.target.value);
    // };

    const addUserHandler = (event) => {
        event.preventDefault();

        // console.info(nameInputRef);
        // console.info(nameInputRef.current.value);
        // console.info(ageInputRef);
        // console.info(ageInputRef.current.value);

        const name = nameInputRef.current.value;
        const age = ageInputRef.current.value;

        if (name.trim().length === 0 || age.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age',
            });
            return;
        }
        if (+age < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age',
            });
            return;
        }
        console.info(name, age);

        props.onAddUser({ name: name, age: +age });
        
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';

        // setUserName('');
        // setUserAge('');
    };

    const errorHandler = () => setError(null);

    return (
        <Wrapper>
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
                        id="name"
                        // onChange={userNameChangedHandler}
                        // value={userName}
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age (years)</label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        // onChange={userAgeChangedHandler}
                        // value={userAge}
                        ref={ageInputRef}
                    />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;
