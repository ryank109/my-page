import { get } from 'lodash';
import { Component, cloneElement } from 'react';
import { connect } from 'react-redux';
import { PopupSandbox } from 'react-redux-popup';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Menu from 'rk/menu';
import { initialMenuPosition } from 'rk/actions';

const selector = (state, ownProps) => {
    return {
        activeRoute: ownProps.location.pathname,
        routeAnimationDirection: state.app.routeAnimationDirection
    };
};

class App extends Component {
    render() {
        const transitionClassName = get(this.props, 'routeAnimationDirection', 'none');
        const transitionTimeout = transitionClassName === '' ? 0 : 300;

        return (
            <div className="main">
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
                <div className="menu-container">
                    <Menu activeRoute={this.props.activeRoute} />
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

    componentDidMount() {
        this.props.initialMenuPosition(this.props.activeRoute);
    }
}

export default connect(selector, { initialMenuPosition })(App);
