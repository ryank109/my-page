import { get } from 'lodash';
import { Component, cloneElement } from 'react';
import { connect } from 'react-redux';
import { replace, push } from 'react-router-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Portal, popupActions } from 'react-redux-popup';
import SeeYouModal from 'rk/rsvp/see-you';
import ThankYouModal from 'rk/rsvp/thank-you';

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
            <div className="main rsvp-main">
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
                <ThankYouModal
                    height={200}
                    id="thankYouModal"
                    width={300}
                    onClickOk={() => {
                        this.props.closePopup('thankYouModal');
                        this.props.replace('/info');
                    }}
                />
                <SeeYouModal
                    height={200}
                    id="seeYouModal"
                    width={300}
                    onClickOk={() => {
                        this.props.closePopup('seeYouModal');
                        this.props.push('/');
                    }}
                />
                <Portal
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

export default connect(selector, {
    replace,
    push,
    closePopup: popupActions.closePopup
})(RsvpPage);
