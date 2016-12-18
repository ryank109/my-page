import { get } from 'lodash';
import { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'rk/components/button';
import FormItem from 'rk/components/form-item';
import Input from 'rk/components/input';
import {
    cantMakeIt,
    init,
    setFirstName,
    setLastName,
    startRsvp
} from 'rk/rsvp/actions';

const selector = state => {
    const rsvp = state.rsvp;
    return {
        ...rsvp,
        firstName: get(rsvp, 'firstName', ''),
        lastName: get(rsvp, 'lastName', '')
    };
};

class RsvpIndex extends Component {
    componentDidMount() {
        this.props.init();
    }

    render() {
        return (
            <div className="page rsvp-page">
                <div className="rsvp-page__container">
                    <div className="form-item rsvp-page__form">
                        <FormItem
                            className="rsvp-page__form__name"
                            error={this.props.firstNameError}
                            id="firstName"
                            label="First Name"
                        >
                            <Input
                                id="firstName"
                                error={this.props.firstNameError}
                                onChange={this.props.setFirstName}
                                value={this.props.firstName}
                            />
                        </FormItem>
                        <FormItem
                            className="rsvp-page__form__name"
                            error={this.props.lastNameError}
                            id="lastName"
                            label="Last Name"
                        >
                            <Input
                                id="lastName"
                                error={this.props.lastNameError}
                                onChange={this.props.setLastName}
                                value={this.props.lastName}
                            />
                        </FormItem>
                    </div>
                    <div className="rsvp-page__buttons">
                        <Button
                            className="rsvp-page__button"
                            label="RSVP"
                            onClick={this.startRsvp.bind(this)}
                        />
                        <Button
                            className="rsvp-page__button rsvp-page__button--secondary"
                            label="Sorry, can't make it..."
                            onClick={this.cantMakeIt.bind(this)}
                        />
                    </div>
                </div>
            </div>
        );
    }

    cantMakeIt() {
        this.props.cantMakeIt(this.props.firstName, this.props.lastName);
    }

    startRsvp() {
        this.props.startRsvp(this.props.firstName, this.props.lastName);
    }
}

export default connect(selector, {
    cantMakeIt,
    init,
    setFirstName,
    setLastName,
    startRsvp
})(RsvpIndex);
