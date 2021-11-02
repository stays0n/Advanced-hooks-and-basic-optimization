import React, { useRef } from 'react';
import CardWrapper from '../../common/Card';
import Divider from '../../common/divider';
import SmallTitle from '../../common/typografy/smallTitle';

const ProgrammablActionsExample = () => {
    const inputRef = useRef();

    const handleClick = () => {
        console.log(inputRef.current);
        inputRef.current.focus();
    };

    let flag = false;
    const handleClickWidth = () => {
        flag
            ? inputRef.current.classList.remove('w-50')
            : inputRef.current.classList.add('w-50');
        flag = !flag;
        console.log(inputRef.current.clientWidth);
        console.dir(inputRef.current);
    };

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label className="form-label" htmlFor="email">
                Email
            </label>
            <input
                className="form-control mb-2"
                id="email"
                type="text"
                ref={inputRef}
            />
            <button className="btn btn-primary me-2" onClick={handleClick}>
                Фокус input
            </button>
            <button className="btn btn-secondary" onClick={handleClickWidth}>
                Изменить ширину объекта
            </button>
        </CardWrapper>
    );
};

export default ProgrammablActionsExample;
