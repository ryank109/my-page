import { get } from 'lodash';
import { Component, cloneElement } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { PopupSandbox } from 'react-redux-popup';

const selector = (state, ownProps) => {
    return {
        activeRoute: ownProps.location.pathname,
        routeAnimationDirection: state.rsvp.routeAnimationDirection
    };
};

class RsvpPage extends Component {
    render() {
        const transitionClassName = get(this.props, 'routeAnimationDirection', 'none');
        const transitionTimeout = transitionClassName === '' ? 0 : 300;

        return (
            <div className="main">
                <h1 className="rsvp-title">RSVP</h1>
                <h4 className="rsvp-date">01.28.2017</h4>
                <div className="main-container">
                    <ReactCSSTransitionGroup
                        transitionName={transitionClassName}
                        transitionEnterTimeout={transitionTimeout}
                        transitionLeaveTimeout={transitionTimeout}
                    >
                        {cloneElement(this.props.children, {
                            key: this.props.activeRoute
                        })}
                    </ReactCSSTransitionGroup>
                </div>
                <PopupSandbox
                    modalTransitionName="rk-modal"
                    modalTransitionEnterTimeout={300}
                    modalTransitionLeaveTimeout={300}
                    popupTransitionName="rk-popup"
                    popupTransitionEnterTimeout={100}
                    popupTransitionLeaveTimeout={100} />
            </div>
        );
    }
}

export default connect(selector)(RsvpPage);
