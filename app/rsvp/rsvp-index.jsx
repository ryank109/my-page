import { get } from 'lodash';
import { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { popupActions } from 'react-redux-popup';
import Button from 'rk/components/button';
import FormItem from 'rk/components/form-item';
import Input from 'rk/components/input';
import SeeYouModal from 'rk/rsvp/see-you';
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
            <div className="page">
                <div className="rsvp-page">
                    <FormItem className="rsvp-page__form">
                        <FormItem
                            className="rsvp-page__form__name"
                            error={this.props.firstNameError}
                            label="First Name"
                        >
                            <Input
                                error={this.props.firstNameError}
                                onChange={this.props.setFirstName}
                                value={this.props.firstName}
                            />
                        </FormItem>
                        <FormItem
                            className="rsvp-page__form__name"
                            error={this.props.lastNameError}
                            label="Last Name"
                        >
                            <Input
                                error={this.props.lastNameError}
                                onChange={this.props.setLastName}
                                value={this.props.lastName}
                            />
                        </FormItem>
                    </FormItem>
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
                <SeeYouModal
                    height={200}
                    id="seeYouModal"
                    width={300}
                    onClickOk={() => {
                        this.props.closePopup('seeYouModal');
                        this.props.push('/');
                    }}
                />
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
    push,
    setFirstName,
    setLastName,
    startRsvp,
    closePopup: popupActions.closePopup
})(RsvpIndex);
