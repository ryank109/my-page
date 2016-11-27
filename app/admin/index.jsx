import { Component } from 'react';
import { Link } from 'react-router';

export default class AdminPage extends Component {
    render() {
        return (
            <div className="admin">
                <div className="admin__links">
                    <Link className="admin__links__link" to="sooandryanadmin/guests">Guests</Link>
                    <Link className="admin__links__link" to="sooandryanadmin/comments">Comments</Link>
                </div>
                <div className="admin__content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
