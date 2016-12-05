import { get, map } from 'lodash';
import { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'rk/components/button';
import FormItem from 'rk/components/form-item';
import Input from 'rk/components/input';
import GuestForm from 'rk/rsvp/guest-form';
import MealOptions from 'rk/rsvp/meal-options';
import {
    addGuest,
    setFirstName,
    setLastName,
    setMealOption,
    rsvp
} from 'rk/rsvp/actions';

const selector = state => {
    const rsvp = state.rsvp;
    return {
        ...rsvp,
        firstName: get(rsvp, 'firstName', ''),
        lastName: get(rsvp, 'lastName', ''),
        mealOption: get(rsvp, 'mealOption', '')
    };
};

class RsvpForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="page">
                <div className="rsvp-page">
                    <FormItem className="rsvp-page__form">
                        <FormItem className="rsvp-page__form__name" label="First Name">
                            <Input
                                error={this.props.firstNameError}
                                onChange={this.props.setFirstName}
                                value={this.props.firstName}
                            />
                        </FormItem>
                        <FormItem className="rsvp-page__form__name" label="Last Name">
                            <Input
                                error={this.props.lastNameError}
                                onChange={this.props.setLastName}
                                value={this.props.lastName}
                            />
                        </FormItem>
                    </FormItem>
                    <MealOptions
                        onChange={this.props.setMealOption}
                        showKidsOption={false}
                        value={this.props.mealOption}
                    />
                    {this.renderGuest()}
                    <Button
                        className="rsvp-page__button rsvp-page__button--secondary"
                        label="+ Add Guest"
                        onClick={this.props.addGuest}
                    />
                    <Button
                        className="rsvp-page__button rsvp-page__button--primary"
                        label="Done"
                        onClick={this.props.rsvp}
                    />
                </div>
            </div>
        );
    }

    renderGuest() {
        return map(this.props.guests, (guest, index) => (
            <GuestForm index={index} />
        ));
    }
}

export default connect(selector, {
    addGuest,
    setFirstName,
    setLastName,
    setMealOption,
    rsvp
})(RsvpForm);
