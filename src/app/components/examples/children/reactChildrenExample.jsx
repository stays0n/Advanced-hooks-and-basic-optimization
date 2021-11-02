import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CardWrapper from '../../common/Card';
import Divider from '../../common/divider';
import TextField from '../../common/form/textField';
import SmallTitle from '../../common/typografy/smallTitle';

const FormComponent = ({ children }) => {
    const [data, setData] = useState({});
    useEffect(() => console.log(data), [data]);

    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    return (
        <form>
            {React.Children.map(children, (child) => {
                const config = {
                    ...child.props,
                    onChange: handleChange,
                    value: data[child.props.name] || '',
                };
                /* Чтобы добавлять параметры необходимо кланировать элементы.
                В случае с React.cloneElement мы передаём не сам объект, а экземпляр объекта,
                т.е. объект, который задан в коде с определёнными параметрами,
                а не тот, который получаем через import.
                В случае React.memo мы получаем компонент, а с React.Children.map
                получаем экземпляр этого компонента и в React.cloneElement передаём
                также экземпляр компонента */
                return React.cloneElement(child, config, null);
            })}
        </form>
    );
};

FormComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf([PropTypes.node]),
        PropTypes.node,
    ]),
};

const ReactChildrenExample = () => {
    return (
        <CardWrapper>
            <SmallTitle>Clone form and add props</SmallTitle>
            <Divider />
            <FormComponent>
                <TextField label="Email" name="email" />
                <TextField label="Password" name="password" type="password" />
            </FormComponent>
        </CardWrapper>
    );
};

export default ReactChildrenExample;
