import { get } from 'lodash';
import { Component } from 'react';
import { connect } from 'react-redux';
import { setScreenWidth } from 'phone/actions';

const selector = (state, ownProps) => {
    return {
        email: get(ownProps.location.query, 'email'),
        screenWidth: state.app.screenWidth
    };
};

export default function(ComposedComponent) {
    class BaseApp extends Component {
        constructor(props) {
            super(props);
            this.resizeEventListener = this.handleResize.bind(this);
        }

        render() {
            return <ComposedComponent {...this.props} />;
        }

        componentWillMount() {
            this.handleResize();
            window.addEventListener('resize', this.resizeEventListener);
            window.addEventListener('orientationchange', this.resizeEventListener);
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.resizeEventListener);
            window.removeEventListener('orientationchange', this.resizeEventListener);
        }

        handleResize() {
            this.props.setScreenWidth(window.innerWidth);
        }
    }

    return connect(selector, { setScreenWidth })(BaseApp);
}
