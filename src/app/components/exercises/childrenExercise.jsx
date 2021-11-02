import React from 'react';
import PropTypes from 'prop-types';
import CollapseWrapper from '../common/collapse';

const ComponentList = ({ children }) => {
    return React.Children.map(children, (child, i) => {
        return React.cloneElement(
            child,
            { ...child.props, order: i + 1 },
            null,
        );
    });
};

ComponentList.propTypes = {
    children: PropTypes.oneOfType(
        [PropTypes.arrayOf(PropTypes.node)],
        [PropTypes.node],
    ),
};

const Component = ({ order }) => {
    return <div>{order}. Компонент списка</div>;
};

Component.propTypes = {
    order: PropTypes.oneOfType([PropTypes.number], [PropTypes.string]),
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{' '}
                <code>React.Children.map</code> так и{' '}
                <code>React.Children.toArray</code>
            </p>
            <ComponentList>
                <Component />
                <Component />
                <Component />
            </ComponentList>
        </CollapseWrapper>
    );
};

export default ChildrenExercise;
