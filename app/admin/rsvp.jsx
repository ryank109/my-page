import { forEach, get, map, reduce } from 'lodash';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRsvp } from 'rk/admin/actions';
import Button from 'rk/components/button';

const selector = state => {
    const guestTotal = reduce(state.app.rsvp, (sum, rsvp) => {
        if (rsvp.cantMake) { return sum; }
        return sum + get(rsvp, 'guests.length', 0) + 1;
    }, 0);

    let rsvp = [];
    if (state.app.rsvp) {
        rsvp = [].concat(state.app.rsvp);
    }
    rsvp.sort((a, b) => {
        if (!a.cantMake && b.cantMake) { return -1; }
        if (!a.cantMake && !b.cantMake) {
            return a.firstName.toUpperCase() <= b.firstName.toUpperCase() ? -1 : 1;
        }
        return 1;
    });
    return {
        guestTotal,
        rsvp
    };
};

class Rsvp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="list">
                <div className="list__button">
                    <Button
                        label="Expand All"
                        onClick={this.expandAll.bind(this)}
                    />
                </div>
                <div className="list__header">
                    <div className="rsvp__name">Name</div>
                    <div className="rsvp__attend">Attend</div>
                    <div className="rsvp__meal">Meal</div>
                    <div className="rsvp__guests">Guests</div>
                </div>
                <ul className="list__body">{this.renderRsvp()}</ul>
                <div className="list__footer">
                    <div className="rsvp__name" />
                    <div className="rsvp__attend" />
                    <div className="rsvp__meal">Total Guests</div>
                    <div className="rsvp__guests">{this.props.guestTotal}</div>
                </div>
            </div>
        );
    }

    renderRsvp() {
        return map(this.props.rsvp, rsvp => {
            const numGuests = get(rsvp, 'guests.length', 0);
            return (
                <li className="list__item" key={rsvp._id}>
                    <div className="rsvp__item" onClick={() => this.toggleDetail(rsvp._id)}>
                        <div className="rsvp__name">{rsvp.firstName} {rsvp.lastName}</div>
                        <div className="rsvp__attend">{rsvp.cantMake ? 'N' : 'Y'}</div>
                        <div className="rsvp__meal">{rsvp.mealOption}</div>
                        <div className="rsvp__guests">{numGuests}</div>
                    </div>
                    {
                        (numGuests > 0 && this.state[rsvp._id]) &&
                        <div className="rsvp__guests__detail">
                            {
                                map(rsvp.guests, guest => (
                                    <div className="list__item" key={`${rsvp._id}_${guest.firstName}`}>
                                        <div className="rsvp__name">{guest.firstName} {guest.lastName}</div>
                                        <div className="rsvp__attend" />
                                        <div className="rsvp__meal">{guest.mealOption}</div>
                                        <div className="rsvp__guests" />
                                    </div>
                                ))
                            }
                        </div>
                    }
                </li>
            );
        });
    }

    componentDidMount() {
        this.props.fetchRsvp();
    }

    toggleDetail(id) {
        this.setState({ [id]: !this.state[id] });
    }

    expandAll() {
        const expanded = {};
        forEach(this.props.rsvp, rsvp => {
            expanded[rsvp._id] = true;
        });
        this.setState({
            ...expanded
        });
    }
}

export default connect(selector, { fetchRsvp })(Rsvp);
