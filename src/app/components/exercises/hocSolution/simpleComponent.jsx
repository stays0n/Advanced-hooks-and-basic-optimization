import React from 'react';
import PropTypes from 'prop-types';

const SimpleComponent = ({ isAuth, onLogin, onLogout }) => {
    const s = 'btn btn-primary';
    return (
        <React.Fragment>
            {isAuth ? (
                <button className={s} onClick={onLogout}>
                    Выйти из системы
                </button>
            ) : (
                <button className={s} onClick={onLogin}>
                    Войти
                </button>
            )}
        </React.Fragment>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogout: PropTypes.func,
    isAuth: PropTypes.bool,
};

export default SimpleComponent;
