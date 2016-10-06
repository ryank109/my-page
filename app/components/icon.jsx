import classNames from 'classnames';
import { Component, PropTypes } from 'react';

export default class Icon extends Component {
    render() {
        const className = classNames('fa', this.props.className);
        return (<i className={className} onClick={this.props.onClick} />);
    }
}

Icon.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func
};
