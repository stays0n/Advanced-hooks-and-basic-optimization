import React, { useRef } from 'react';
import CollapseWrapper from '../common/collapse';
const UseRefExercise = () => {
    const blockRef = useRef();
    let flag = false;
    const handleAction = () => {
        if (!flag) {
            blockRef.current.style.width = 80 + 'px';
            blockRef.current.style.height = 150 + 'px';
            blockRef.current.firstChild.textContent = 'text';
        } else {
            blockRef.current.style.width = 60 + 'px';
            blockRef.current.style.height = 40 + 'px';
            blockRef.current.firstChild.textContent = 'Блок';
        }
        flag = !flag;
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содежимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded mb-2"
                style={{
                    height: 40,
                    width: 60,
                    color: 'white',
                }}
                ref={blockRef}
            >
                <small>Блок</small>
            </div>
            <button className="btn btn-primary" onClick={handleAction}>
                Действие
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
