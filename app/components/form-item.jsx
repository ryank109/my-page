import classNames from 'classnames';

export default props => {
    const className = classNames(props.className, 'form-item');
    return (
        <label className={className}>
            <span className="form-item__label">{props.label}</span>
            {props.children}
        </label>
    );
};
