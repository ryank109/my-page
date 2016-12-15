import { filter, get, isEmpty, map } from 'lodash';
import {
    ADD_GUEST,
    LOAD_DATA,
    INIT,
    REMOVE_GUEST,
    SET_FIRST_NAME,
    SET_GUEST_FIRST_NAME,
    SET_GUEST_LAST_NAME,
    SET_GUEST_MEAL_OPTION,
    SET_LAST_NAME,
    SET_MEAL_OPTION,
    SET_RETURN_TRANSITION,
    VALIDATE_FORM,
    VALIDATE_GUEST_FORM
} from 'rk/rsvp/actions';

function validateGuest(guest) {
    return {
        ...guest,
        firstNameError: isEmpty(guest.firstName) ? 'First name is required.' : null,
        lastNameError: isEmpty(guest.lastName) ? 'Last name is required.' : null,
        mealOptionError: isEmpty(guest.mealOption) ? 'Please choose a meal option for your guest.' : null
    };
}

export default {
    [ADD_GUEST]: state => {
        const prevGuests = state.guests ? state.guests : [];
        if (prevGuests.length > 4) { return state; }

        const guests = prevGuests.concat({
            firstName: '',
            lastName: '',
            mealOption: 'meat'
        });

        const disableAddGuest = guests.length > 4;
        return {
            ...state,
            disableAddGuest,
            guests
        };
    },

    [LOAD_DATA]: (state, { data }) => ({
        ...state,
        ...data
    }),

    [INIT]: state => ({
        ...state,
        guests: [],
        mealOption: 'meat',
        routeAnimationDirection: 'transition-left'
    }),

    [REMOVE_GUEST]: (state, { index }) => {
        const guests = filter(state.guests, (guest, idx) => index !== idx);
        return {
            ...state,
            guests,
            disableAddGuest: false
        };
    },

    [SET_GUEST_FIRST_NAME]: (state, { firstName, index }) => {
        const guests = [...state.guests];
        guests[index].firstName = firstName;
        guests[index].firstNameError = null;
        return {
            ...state,
            guests
        };
    },

    [SET_GUEST_LAST_NAME]: (state, { lastName, index }) => {
        const guests = [...state.guests];
        guests[index].lastName = lastName;
        guests[index].lastNameError = null;
        return {
            ...state,
            guests
        };
    },

    [SET_GUEST_MEAL_OPTION]: (state, { mealOption, index }) => {
        const guests = [...state.guests];
        guests[index].mealOption = mealOption;
        return {
            ...state,
            guests
        };
    },

    [SET_FIRST_NAME]: (state, { firstName }) => ({
        ...state,
        firstName,
        firstNameError: null
    }),

    [SET_LAST_NAME]: (state, { lastName }) => ({
        ...state,
        lastName,
        lastNameError: null
    }),

    [SET_MEAL_OPTION]: (state, { mealOption }) => ({
        ...state,
        mealOption
    }),

    [SET_RETURN_TRANSITION]: state => ({
        ...state,
        routeAnimationDirection: 'transition-right'
    }),

    [VALIDATE_FORM]: state => ({
        ...state,
        firstNameError: isEmpty(state.firstName) ? 'First name is required' : null,
        lastNameError: isEmpty(state.lastName) ? 'Last name is required' : null
    }),

    [VALIDATE_GUEST_FORM]: state => {
        const guests = map(state.guests, validateGuest);
        return {
            ...state,
            guests
        };
    }
};
