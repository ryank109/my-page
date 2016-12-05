import { Component } from 'react';
import FormItem from 'rk/components/form-item';
import Input from 'rk/components/input';
import MealOptions from 'rk/rsvp/meal-options';

export default props => (
    <div className="page">
        <div className="rsvp-page">
            <h2>Guest {props.index + 1} <span>(remove)</span></h2>
            <FormItem className="rsvp-page__form">
                <FormItem className="rsvp-page__form__name" label="First Name">
                    <Input
                        className="rsvp-page__email"
                        onChange={props.onFirstNameChange}
                        value={props.firstName}
                    />
                </FormItem>
                <FormItem className="rsvp-page__form__name" label="Last Name">
                    <Input
                        className="rsvp-page__email"
                        onChange={props.onLastNameChange}
                        value={props.lastName}
                    />
                </FormItem>
            </FormItem>
            <MealOptions
                showKidsOption={true}
                onChange={props.onMealOptionChange}
                value={props.mealOption}
            />
        </div>
    </div>
);
