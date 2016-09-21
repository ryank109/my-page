import { get } from 'lodash';
import { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'rk/components/button';
import Input from 'rk/components/input';
import { login } from 'rk/login/actions';

const selector = state => ({
    hasLoginError: get(state.app, 'hasLoginError', false)
});

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    render() {
        return (
            <div className="login">
                <Input
                    className="login__username"
                    error={this.props.hasLoginError ? 'Invalid' : null}
                    onChange={this.updateUsername.bind(this)}
                    placeholder="User name"
                    value={this.state.username}
                />
                <Input
                    className="login__password"
                    error={this.props.hasLoginError ? 'Invalid' : null}
                    onChange={this.updatePassword.bind(this)}
                    onKeyPress={this.handleEnterKey.bind(this)}
                    placeholder="Password"
                    type="password"
                    value={this.state.password}
                />
                <Button label="Login" onClick={this.login.bind(this)} />
            </div>
        );
    }

    login() {
        this.props.login(this.state.username, this.state.password);
    }

    updateUsername(username) {
        this.setState({ username });
    }

    updatePassword(password) {
        this.setState({ password });
    }

    handleEnterKey(evt) {
        if (evt.key === 'Enter') {
            this.login();
        }
    }
}

export default connect(selector, { login })(LoginPage);
