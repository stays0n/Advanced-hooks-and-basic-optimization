import React, { useState, useEffect, useRef, useCallback } from 'react';
import CardWrapper from '../../common/Card';
import Divider from '../../common/divider';
import SmallTitle from '../../common/typografy/smallTitle';

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    /*
     * Shows the number of renders without callback
     */
    const withoutCallback = useRef(0);
    const validateWithoutCallback = (data) => {
        console.log(data);
    };
    useEffect(() => {
        withoutCallback.current++;
    }, [validateWithoutCallback]);
    /*
     * Shows the number of renders without callback
     */

    /*
     * * Shows the number of renders with callback
     */
    const withCallback = useRef(0);
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);
    /*
     * * Shows the number of renders with callback
     */

    useEffect(() => {
        validateWithoutCallback(data);
        validateWithCallback(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <Divider />
            <p>Number of renders without Callback: {withoutCallback.current}</p>
            <p>Number of renders with Callback: {withCallback.current}</p>
            <label className="form-label" htmlFor="email">
                Email
            </label>
            <input
                className="form-control"
                id="email"
                name="email"
                type="text"
                value={data.email || ''}
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
