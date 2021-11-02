import React from 'react';
import SmallTitle from '../../common/typografy/smallTitle';

const withLogin = (Component) => (props) => {
    const isLogin = localStorage.getItem('auth');
    console.log('withLogin props: ', props);
    return (
        <React.Fragment>
            {isLogin ? <Component {...props} /> : <SmallTitle>Auth</SmallTitle>}
        </React.Fragment>
    );
};

export default withLogin;
