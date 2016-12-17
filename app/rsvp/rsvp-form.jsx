import { isEmpty, map, some } from 'lodash';
import { Component } from 'react';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';
import { popupActions } from 'react-redux-popup';
import Button from 'rk/components/button';
import FormItem from 'rk/components/form-item';
import GuestForm from 'rk/rsvp/guest-form';
import MealOptions from 'rk/rsvp/meal-options';
import ThankYouModal from 'rk/rsvp/thank-you';
import {
    addGuest,
    removeGuest,
    rsvp,
    setFirstName,
    setGuestFirstName,
    setGuestLastName,
    setGuestMealOption,
    setLastName,
    setMealOption,
    setReturnTransition,
    validateGuestForm
} from 'rk/rsvp/actions';

const selector = state => state.rsvp;

class RsvpForm extends Component {
    componentDidMount() {
        this.props.setReturnTransition();
    }

    render() {
        return (
            <div className="page">
                <div className="rsvp-page">
                    <FormItem className="rsvp-page__form-item" label="RSVP For">
                        <div className="rsvp-page__name">{this.props.firstName} {this.props.lastName}</div>
                    </FormItem>
                    <MealOptions
                        index={-1}
                        label="What would you like to have for your dinner?"
                        onChange={this.props.setMealOption}
                        showKidsOption={false}
                        value={this.props.mealOption}
                    />
                    {this.renderGuest()}
                    <Button
                        className="rsvp-page__button rsvp-page__button--secondary"
                        isDisabled={this.props.disableAddGuest}
                        label="+ Add Guest"
                        onClick={this.props.addGuest}
                    />
                    <Button
                        className="rsvp-page__button rsvp-page__button--primary"
                        label="Done"
                        onClick={this.rsvp.bind(this)}
                    />
                </div>
                <ThankYouModal
                    height={200}
                    id="thankYouModal"
                    width={300}
                    onClickOk={() => {
                        this.props.closePopup('thankYouModal');
                        this.props.replace('/info');
                    }}
                />
            </div>
        );
    }

    renderGuest() {
        return map(this.props.guests, (guest, index) => (
            <GuestForm
                firstName={guest.firstName}
                firstNameError={guest.firstNameError}
                index={index}
                key={index}
                lastName={guest.lastName}
                lastNameError={guest.lastNameError}
                mealOption={guest.mealOption}
                mealOptionError={guest.mealOptionError}
                onFirstNameChange={firstName => this.props.setGuestFirstName(index, firstName)}
                onLastNameChange={lastName => this.props.setGuestLastName(index, lastName)}
                onMealOptionChange={mealOption => this.props.setGuestMealOption(index, mealOption)}
                onRemove={() => this.props.removeGuest(index)}
            />
        ));
    }

    rsvp() {
        const hasError = some(this.props.guests, guest =>
            isEmpty(guest.firstName) || isEmpty(guest.lastName)
        );

        if (hasError) {
            this.props.validateGuestForm();
            return;
        }

        this.props.rsvp(
            this.props.firstName,
            this.props.lastName,
            this.props.mealOption,
            this.props.guests);
    }
}

export default connect(selector, {
    addGuest,
    removeGuest,
    replace,
    rsvp,
    setFirstName,
    setGuestFirstName,
    setGuestLastName,
    setGuestMealOption,
    setLastName,
    setMealOption,
    setReturnTransition,
    validateGuestForm,
    closePopup: popupActions.closePopup
})(RsvpForm);
