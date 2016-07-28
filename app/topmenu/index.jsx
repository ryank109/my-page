import { Component } from 'react';
import { Link } from 'react-router';

export default class TopMenu extends Component {
    render() {
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/comment">Leave a comment</Link></li>
                <li><Link to="/registry">Registry</Link></li>
            </ul>
        );
    }
}
