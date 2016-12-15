import classNames from 'classnames';
import { Component, PropTypes } from 'react';

export default class Button extends Component {
    render() {
        const className = classNames('button', {
            'button--disabled': this.props.isDisabled
        }, this.props.className);
        return (
            <button
                className={className}
                disabled={this.props.isDisabled}
                onClick={this.props.onClick}
                ref="button"
                type={this.props.type}
            >
                {this.props.label}
            </button>
        );
    }
}

Button.propTypes = {
    className: PropTypes.string,
    isDisabled: PropTypes.bool.isRequired,
    label: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired
};

Button.defaultProps = {
    isDisabled: false,
    type: 'button'
};
