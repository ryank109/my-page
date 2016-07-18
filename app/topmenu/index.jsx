import { Component } from 'react';
import { Link } from 'react-router';

export default class TopMenu extends Component {
    render() {
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/story">Our Story</Link></li>
                <li><Link to="/rsvp">RSVP</Link></li>
                <li><Link to="/registry">Registry</Link></li>
            </ul>
        );
    }
}
