// import React, { useState, useEffect } from 'react';

import AuthContext from '../store/auth-context';
import { useContext } from 'react';
import Login from '../components/Login/Login';
import Home from '../components/Home/Home';
import MainHeader from '../components/MainHeader/MainHeader';

function App() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // const loginHandler = (email, password) => {
    //     // We should of course check email and password
    //     // But it's just a dummy/ demo anyways
    //     localStorage.setItem('isLoggedIn', '1');
    //     setIsLoggedIn(true);
    // };

    //  runs only once on startup, since there are no dependencies
    // useEffect(() => {
    //     if (localStorage.getItem('isLoggedIn') === '1') {
    //         setIsLoggedIn(true);
    //     }
    // }, []);

    // const logoutHandler = () => {
    //     localStorage.clear();
    //     setIsLoggedIn(false);
    // };

    const ctx = useContext(AuthContext);
    return (
        <>
            {/* <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler }} > */}
                <MainHeader />
                <main>
                    {!ctx.isLoggedIn && <Login/>}
                    {ctx.isLoggedIn && <Home />}
                </main>
            {/* </AuthContext.Provider> */}
        </>
    );
}

export default App;
