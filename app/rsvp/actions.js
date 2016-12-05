import { isEmpty } from 'lodash';
import { push } from 'react-router-redux';

export const ADD_GUEST = 'RSVP_ADD_GUEST';
export const INIT = 'RSVP_INIT';
export const RESET_TRANSITION = 'RSVP_RESET_TRANSITION';
export const RSVP = 'RSVP';
export const SET_FIRST_NAME = 'RSVP_SET_FIRST_NAME';
export const SET_LAST_NAME = 'RSVP_SET_LAST_NAME';
export const SET_MEAL_OPTION = 'RSVP_SET_MEAL_OPTION';
export const VALIDATE_FORM = 'RSVP_VALIDATE_FORM';

export function addGuest() {
    return {
        type: ADD_GUEST
    };
}

export function init() {
    return {
        type: INIT
    };
}

export function setFirstName(firstName) {
    return {
        firstName,
        type: SET_FIRST_NAME
    };
}

export function setLastName(lastName) {
    return {
        lastName,
        type: SET_LAST_NAME
    };
}

export function setMealOption(mealOption) {
    return {
        mealOption,
        type: SET_MEAL_OPTION
    };
}

export function resetTransition() {
    return {
        type: RESET_TRANSITION
    };
}

export function rsvp() {
    return {
        type: RSVP
    };
}

export function validateForm() {
    return {
        type: VALIDATE_FORM
    };
}
