import React, {
    useState,
    useEffect,
    useReducer,
    useContext,
    useRef,
} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import AuthContext from '../../store/auth-context';

const emailReducer = (snapshot, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.includes('@') };
    }
    if (action.type === 'INPUT_BLUR') {
        return { value: snapshot.value, isValid: snapshot.value.includes('@') };
    }
    return { value: '', isValid: false };
};
const passwordReducer = (snapshot, action) => {
    if (action.type === 'USER_INPUT') {
        return { value: action.value, isValid: action.value.trim().length > 6 };
    }
    if (action.type === 'INPUT_BLUR') {
        return {
            value: snapshot.value,
            isValid: snapshot.value.trim().length > 6,
        };
    }
    return { value: '', isValid: false };
};

const Login = (props) => {
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [emailIsValid, setEmailIsValid] = useState();
    // const [enteredPassword, setEnteredPassword] = useState('');
    // const [passwordIsValid, setPasswordIsValid] = useState();
    const authCtx = useContext(AuthContext);

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: undefined,
    });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: undefined,
    });

    //  object destructuring with alias assignment
    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;

    useEffect(() => {
        const timer = setTimeout(() => {
            console.info('useEffect: check form validity');
            setFormIsValid(emailIsValid && passwordIsValid);
        }, 500);

        //  cleanup function
        return () => {
            console.info('useEffect: cleanup');
            clearTimeout(timer);
        };
    }, [emailIsValid, passwordIsValid]);

    const emailChangeHandler = (event) => {
        dispatchEmail({ type: 'USER_INPUT', value: event.target.value });
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({ type: 'USER_INPUT', value: event.target.value });
        // setEnteredPassword(event.target.value);
        // setFormIsValid(
        //     emailState.isValid &&
        //         event.target.value.trim().length > 6
        // );
    };

    const validateEmailHandler = () => {
        // setEmailIsValid(emailState.isValid);
        dispatchEmail({ type: 'INPUT_BLUR' });
    };

    const validatePasswordHandler = () => {
        // setPasswordIsValid(enteredPassword.trim().length > 6);
        dispatchPassword({ type: 'INPUT_BLUR' });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (formIsValid) {
            authCtx.onLogin(emailState.value, passwordState.value);
        } else if (!emailIsValid) {
            emailInputRef.current.focus();
        } else {
            passwordInputRef.current.focus();
        }
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input
                    ref={emailInputRef}
                    type="email"
                    id="email"
                    label="E-mail"
                    isValid={emailIsValid}
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                />
                <Input
                    ref={passwordInputRef}
                    type="password"
                    id="password"
                    label="Password"
                    isValid={passwordIsValid}
                    value={passwordState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                />
                <div className={classes.actions}>
                    <Button
                        type="submit"
                        className={classes.btn}
                        // disabled={!(emailState.isValid && passwordState.isValid)}
                        // disabled={!formIsValid}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
