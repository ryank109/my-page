import { Component } from 'react';
import Button from 'rk/components/button';
import FormItem from 'rk/components/form-item';
import Input from 'rk/components/input';
import MealOptions from 'rk/rsvp/meal-options';

const TRANSITION_DURATION = 200;

export default class GuestForm extends Component {
    componentDidMount() {
        this.scrollArea = document.getElementsByClassName('main')[1];
        this.startTransitionTime = Date.now();
        this.offsetTop = this.refs.page.offsetTop;
        this.scrollDistance = Math.abs(this.offsetTop - this.scrollArea.scrollTop);
        window.requestAnimationFrame(this.scroll.bind(this));
    }

    scroll() {
        const curTimestamp = Date.now();
        const animationFrame = (curTimestamp - this.startTransitionTime) / TRANSITION_DURATION;
        const prevScrollTop = this.scrollArea.scrollTop;
        this.scrollArea.scrollTop += Math.ceil(this.scrollDistance * animationFrame + 1);
        if (this.scrollArea.scrollTop < this.offsetTop && prevScrollTop !== this.scrollArea.scrollTop) {
            this.startTransitionTime = curTimestamp;
            window.requestAnimationFrame(this.scroll.bind(this));
        } else {
            this.scrollArea.scrollTop = this.offsetTop;
            this.offsetTop = null;
            this.scrollArea = null;
            this.scrollDistance = null;
            this.startTransitionTime = null;
        }
    }

    render() {
        return (
            <div className="page" ref="page">
                <div className="rsvp-page guest-form">
                    <h2
                        className="guest-form__title"
                    >
                        Guest {this.props.index + 1} <Button
                            className="guest-form__remove"
                            label="(remove)"
                            onClick={this.props.onRemove} />
                    </h2>
                    <FormItem className="rsvp-page__form">
                        <FormItem
                            className="rsvp-page__form__name"
                            error={this.props.firstNameError}
                            label="First Name"
                        >
                            <Input
                                className="rsvp-page__email"
                                error={this.props.firstNameError}
                                onChange={this.props.onFirstNameChange}
                                value={this.props.firstName}
                            />
                        </FormItem>
                        <FormItem
                            className="rsvp-page__form__name"
                            error={this.props.lastNameError}
                            label="Last Name"
                        >
                            <Input
                                className="rsvp-page__email"
                                error={this.props.lastNameError}
                                onChange={this.props.onLastNameChange}
                                value={this.props.lastName}
                            />
                        </FormItem>
                    </FormItem>
                    <MealOptions
                        mealOptionError={this.props.mealOptionError}
                        index={this.props.index}
                        showKidsOption={true}
                        onChange={this.props.onMealOptionChange}
                        value={this.props.mealOption}
                    />
                </div>
            </div>
        );
    }
}
