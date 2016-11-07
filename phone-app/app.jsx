import { get, map } from 'lodash';
import { Component, cloneElement } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Menu from 'phone/menu';
import { MENUS, setMenuPosition } from 'rk/menu/actions';
import {
    initialMenuPosition,
    moveToRoute,
    navigate,
    rotate,
    touchEnd,
    touchMove,
    touchStart,
    transitionToEnd
} from 'phone/menu/actions';

const SWIPE_DISTANCE = 200;

const selector = (state, ownProps) => {
    return {
        activeRoute: ownProps.location.pathname,
        isTransitionToEnd: state.menu.isTransitionToEnd,
        routeAnimationDirection: state.menu.routeAnimationDirection,
        menuDistance: state.menu.menuDistance,
        menuXPosition: state.menu.menuXPosition,
        menuOffset: state.menu.menuOffset,
        xStart: state.menu.xStart,
        yStart: state.menu.yStart
    };
};

class App extends Component {
    constructor(props) {
        super(props);
        this.hasTouchMoved = false;
        this.repositionMenuHandler = () => this.repositionMenu();
    }

    render() {
        const transitionClassName = get(this.props, 'routeAnimationDirection', 'none');
        const transitionTimeout = transitionClassName === '' ? 0 : 300;

        return (
            <div className="main"
                onTouchStart={this.touchStart.bind(this)}
                onTouchMove={this.touchMove.bind(this)}
                onTouchEnd={this.touchEnd.bind(this)}
            >
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
                <div
                    className="menu-container"
                    ref="menuContainer"
                >
                    <Menu
                        activeRoute={this.props.activeRoute}
                        menuXPosition={this.props.menuXPosition}
                        menuOffset={this.props.menuOffset}
                        ref="menu"
                        navigate={this.navigate.bind(this)}
                        initialMenuPosition={this.props.initialMenuPosition}
                    />
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.initializeMenu();
        window.addEventListener('orientationchange', this.repositionMenuHandler);
    }

    componentDidUpdate(prevProps) {
        if (this.props.isTransitionToEnd) {
            window.requestAnimationFrame(this.props.transitionToEnd);
        }
        else if (prevProps.activeRoute && this.props.activeRoute !== prevProps.activeRoute) {
            this.props.moveToRoute(this.props.activeRoute);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('orientationchange', this.repositionMenuHandler);
    }

    initializeMenu() {
        const menu = this.refs.menu;

        // find menu distance
        const menuContainerWidth = this.refs.menuContainer.clientWidth;
        const menuDistance = (menu.getContainerWidth() - 41 - (MENUS.length - 2.5)) / (MENUS.length - 1);
        const menuItemLeft = menu.getMenuItemLeft(this.props.activeRoute);
        const menuItemPositions = map(MENUS, menuItem => menu.getMenuItemLeft(menuItem));

        this.props.initialMenuPosition(
            this.props.activeRoute,
            menuContainerWidth,
            menuDistance,
            menuItemLeft,
            menuItemPositions
        );
    }

    repositionMenu() {
        const menu = this.refs.menu;
        const menuContainerWidth = this.refs.menuContainer.clientWidth;
        const menuItemLeft = menu.getMenuItemLeft(this.props.activeRoute) - this.props.menuXPosition;
        this.props.rotate(menuContainerWidth, menuItemLeft);
    }

    touchStart(event) {
        if (!event.touches.length) { return; }
        this.hasTouchMoved = false;
        this.props.touchStart(event.touches[0].clientX, event.touches[0].clientY);
    }

    touchMove(event) {
        if (!this.props.xStart || !this.props.yStart || !event.touches.length) { return; }
        this.hitIcon = null;
        this.hasTouchMoved = true;

        const xOffset = this.props.xStart - event.touches[0].clientX;
        const yOffset = this.props.yStart - event.touches[0].clientY;
        if (Math.abs(xOffset) < Math.abs(yOffset)) {
            this.props.touchEnd();
            return;
        }

        const menuOffset = xOffset / SWIPE_DISTANCE * this.props.menuDistance;
        if (Math.abs(menuOffset) > this.props.menuDistance * .8) {
            this.props.navigate(this.props.push);
        } else {
            this.props.touchMove(menuOffset);
        }
    }

    touchEnd() {
        if (this.hasTouchMoved && !this.props.isTransitionToEnd) {
            this.hasTouchMoved = false;
            this.props.touchEnd();
        }
    }

    navigate(route) {
        this.props.setMenuPosition(route);
        this.props.push(route);
    }
}

export default connect(selector, {
    initialMenuPosition,
    moveToRoute,
    navigate,
    push,
    rotate,
    setMenuPosition,
    touchEnd,
    touchMove,
    touchStart,
    transitionToEnd
})(App);
