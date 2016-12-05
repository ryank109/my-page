import { get } from 'lodash';
import { Component, cloneElement } from 'react';
import { connect } from 'react-redux';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import Button from 'rk/components/button';
import RsvpForm from 'rk/rsvp/rsvp-form';
import { init, rsvp } from 'rk/rsvp/actions';

// const selector = (state, ownProps) => {
//     return {
//         activeRoute: ownProps.location.pathname,
//         routeAnimationDirection: state.rsvp.routeAnimationDirection
//     };
// };

class RsvpPage extends Component {
    componentDidMount() {
        this.props.init();
    }

    render() {
        // const transitionClassName = get(this.props, 'routeAnimationDirection', 'none');
        // const transitionTimeout = transitionClassName === '' ? 0 : 300;

        return (
            <div className="main">
                <h1 className="rsvp-title">RSVP</h1>
                <h4 className="rsvp-date">01.28.2017</h4>
                <div className="main-container">
                    <RsvpForm />
                </div>
            </div>
        );
    }
}

/*
    <div className="rsvp-footer">
        <Button
            className="rsvp-page__button rsvp-page__button--primary"
            label="Done"
            onClick={this.props.rsvp}
        />
    </div>
 */
export default connect(null, { init })(RsvpPage);
