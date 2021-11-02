import React from 'react';
import SimpleComponent from './simpleComponent';
import withCardWrapper from './withCardWrapper';
import withAuth from './withAuth';

const HocSolution = () => {
    const SCWithCardWrapper = withCardWrapper(SimpleComponent);
    const SCWithCardWrapperAndAuth = withAuth(SCWithCardWrapper);

    return (
        <div>
            <SCWithCardWrapperAndAuth />
        </div>
    );
};

export default HocSolution;
