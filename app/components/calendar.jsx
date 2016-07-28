import { Component } from 'react';

export default class Calendar extends Component {
    render() {
        return <a href="/calendar.ics" className="event-button animated infinite pulse" />;
    }
}
