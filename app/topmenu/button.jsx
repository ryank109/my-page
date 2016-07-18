import { Component, PropTypes } from 'react';

export default class Button extends Component {
    render() {
        return (
            <button className="top-menu-button" type="button" onClick={this.props.onClick}>
                <i className="ion-navicon-round"/>
            </button>
        );
    }
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired
};
