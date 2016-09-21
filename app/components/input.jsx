import classNames from 'classnames';
import { omit } from 'lodash';
import { Component, PropTypes } from 'react';

const BLACK_LIST = [
    'error',
    'onChange'
];

export default class Input extends Component {
    render() {
        const className = classNames({
            'input': true,
            'input--error': this.props.error
        }, this.props.className);

        const props = {
            ...omit(this.props, BLACK_LIST),
            className
        };

        return (
            <input {...props} onChange={this.onChange.bind(this)} ref="input" />
        );
    }

    onChange(event) {
        if (this.props.onChange) {
            this.props.onChange(event.target.value);
        }
    }
}

Input.propTypes = {
    className: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Input.defaultProps = {
    type: 'text'
};
