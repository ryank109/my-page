import classNames from 'classnames';
import Input from 'rk/components/input';

export default props => {
    const className = classNames('radio', props.className);
    return (
        <label className={className} htmlFor={props.id}>
            <Input
                checked={props.isChecked}
                id={props.id}
                onChange={props.onChange}
                type="radio"
                value={props.value}
            />
            {props.label}
        </label>
    );
};
