import { map } from 'lodash';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGuests } from 'rk/admin/actions';

const selector = state => {
    return {
        guests: state.app.guests
    };
};

class Guests extends Component {
    render() {
        return (
            <div className="list">
                <div>Guests</div>
                <div className="list__header">
                    <div className="guest__email">Email</div>
                    <div className="guest__attend">Attend</div>
                </div>
                <ul className="list__body">{this.renderGuests()}</ul>
            </div>
        );
    }

    renderGuests() {
        return map(this.props.guests, guest => (
            <li className="list__item" key={guest._id}>
                <div className="guest__email">{guest.email}</div>
                <div className="guest__attend">{guest.attend}</div>
            </li>
        ));
    }

    componentDidMount() {
        this.props.fetchGuests();
    }
}

export default connect(selector, { fetchGuests })(Guests);
