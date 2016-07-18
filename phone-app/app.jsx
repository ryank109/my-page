import { Component } from 'react';
import { connect } from 'react-redux';
import BaseApp from 'phone/components/base-app';
import Home from 'phone/home';
import Registry from 'phone/registry';

const selector = (state, ownProps) => {
    return {
        path: ownProps.location.pathname
    };
};

class App extends Component {
    render() {
        return (
            <div className="rk-phone-body">
                <Home/>
                <Registry />
            </div>
        );
    }
}

export default BaseApp(connect(selector)(App));
