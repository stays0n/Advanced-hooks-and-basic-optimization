import React, { useState } from 'react';

const withAuth = (Component) => (props) => {
    const [auth, setAuth] = useState(Boolean(localStorage.getItem('user')));

    const handleLogin = () => {
        localStorage.setItem('user', 'true');
        setAuth((prevState) => !prevState);
    };
    const handleLogout = () => {
        localStorage.removeItem('user');
        setAuth((prevState) => !prevState);
    };

    return (
        <Component
            {...props}
            isAuth={auth}
            onLogin={handleLogin}
            onLogout={handleLogout}
        />
    );
};

export default withAuth;
