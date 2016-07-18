import { cloneElement, Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import BaseApp from 'phone/components/base-app';

class SaveTheDatePage extends Component {
    render() {
        return (
            <ReactCSSTransitionGroup
                transitionName="page"
                transitionEnterTimeout={400}
                transitionLeaveTimeout={400}
            >
            {
                cloneElement(this.props.children, {
                    key: location.pathname
                })
            }

            </ReactCSSTransitionGroup>
        );
    }
}

export default BaseApp(SaveTheDatePage);
