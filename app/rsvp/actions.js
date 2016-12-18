import { isEmpty } from 'lodash';
import { push, replace } from 'react-router-redux';
import { popupActions } from 'react-redux-popup';
import Request from 'rk/common/request';

export const ADD_GUEST = 'RSVP_ADD_GUEST';
export const LOAD_DATA = 'RSVP_LOAD_DATA';
export const INIT = 'RSVP_INIT';
export const RESET_TRANSITION = 'RSVP_RESET_TRANSITION';
export const RSVP = 'RSVP';
export const SET_FIRST_NAME = 'RSVP_SET_FIRST_NAME';
export const SET_GUEST_FIRST_NAME = 'RSVP_SET_GUEST_FIRST_NAME';
export const SET_GUEST_LAST_NAME = 'RSVP_SET_GUEST_LAST_NAME';
export const SET_GUEST_MEAL_OPTION = 'RSVP_SET_GUEST_MEAL_OPTION';
export const SET_LAST_NAME = 'RSVP_SET_LAST_NAME';
export const SET_MEAL_OPTION = 'RSVP_SET_MEAL_OPTION';
export const SET_RETURN_TRANSITION = 'RSVP_SET_RETURN_TRANSITION';
export const REMOVE_GUEST = 'RSVP_REMOVE_GUEST';
export const VALIDATE_FORM = 'RSVP_VALIDATE_FORM';
export const VALIDATE_GUEST_FORM = 'RSVP_VALIDATE_GUEST_FORM';

export function addGuest() {
    return {
        type: ADD_GUEST
    };
}

export function cantMakeIt(firstName, lastName) {
    if (isEmpty(firstName) || isEmpty(lastName)) {
        return validateForm();
    }

    return dispatch => {
        Request.post({
            url: '/rsvp',
            data: { firstName, lastName, cantMake: true }
        }).then(() => {
            dispatch(popupActions.openPopup('seeYouModal'));
        });
    };
}

export function loadData(data) {
    return {
        data,
        type: LOAD_DATA
    };
};

export function init() {
    return {
        type: INIT
    };
}

export function removeGuest(index) {
    return {
        index,
        type: REMOVE_GUEST
    };
}

export function setGuestFirstName(index, firstName) {
    return {
        firstName,
        index,
        type: SET_GUEST_FIRST_NAME
    };
}

export function setGuestLastName(index, lastName) {
    return {
        lastName,
        index,
        type: SET_GUEST_LAST_NAME
    };
}

export function setGuestMealOption(index, mealOption) {
    return {
        mealOption,
        index,
        type: SET_GUEST_MEAL_OPTION
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

export function setReturnTransition() {
    return {
        type: SET_RETURN_TRANSITION
    };
}

export function startRsvp(firstName, lastName) {
    if (isEmpty(firstName) || isEmpty(lastName)) {
        return validateForm();
    }
    return dispatch => {
        Request.get({
            url: `/rsvp/${encodeURIComponent(firstName)}/${encodeURIComponent(lastName)}`
        }).then(response => {
            const data = JSON.parse(response.response);
            dispatch(loadData(data));
            dispatch(push('/rsvp/form'));
        }).catch(() => {
            dispatch(push('/rsvp/form'));
        });
    };
}

export function rsvp(firstName, lastName, mealOption, guests) {
    return dispatch => {
        Request.post({
            url: '/rsvp',
            data: { firstName, lastName, mealOption, guests }
        }).then(() => {
            dispatch(popupActions.openPopup('thankYouModal'));
        });
    };
}

export function validateForm() {
    return {
        type: VALIDATE_FORM
    };
}

export function validateGuestForm() {
    return {
        type: VALIDATE_GUEST_FORM
    };
}
