import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const LogOutButton = ({ onLogOut }) => {
    /* useEffect в консоле отобразит количество рендеров этого компонента */
    useEffect(() => console.log('render button'));

    return (
        <button className="btn" onClick={onLogOut}>
            Log out
        </button>
    );
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func,
};

function areEqual(prevProps, nextProps) {
    if (prevProps.onLogOut !== nextProps.onLogOut) {
        return false;
    } else {
        return true;
    }
}
/* Первым параметром мы мемоизируем весь компонент, как следствие:
MemoizedLogOutButton перестаёт ререндериться, если пропс не изменились.
Второй параметр React.memo - функция сверки.
Здесь мы изменили стандартную функцию сверки нашей areEqual */
const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);

    const handleLogOut = useCallback(() => {
        /* До применения useCallback, при обновлении state,
        эта функция пересоздавалась и сравнивалась с предыдущей самой собой.
        Это вызывало ререндер не только самого компонента, но и тех,
        в какие она передаётся */
        localStorage.removeItem('auth');
    }, [props]);

    return (
        <React.Fragment>
            <button className="btn" onClick={() => setState(!state)}>
                Initiate rerender
            </button>
            <MemoizedLogOutButton onLogOut={handleLogOut} />
        </React.Fragment>
    );
};

export default MemoWithUseCallbackExample;
