import React from 'react';
import CardWrapper from '../../common/Card';

const withCardWrapper = (Component) => (props) => {
    return (
        <CardWrapper>
            <Component {...props} />
        </CardWrapper>
    );
};

export default withCardWrapper;
