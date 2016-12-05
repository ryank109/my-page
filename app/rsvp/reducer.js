import { isEmpty } from 'lodash';
import {
    ADD_GUEST,
    INIT,
    RESET_TRANSITION,
    SET_FIRST_NAME,
    SET_LAST_NAME,
    SET_MEAL_OPTION,
    VALIDATE_FORM
} from 'rk/rsvp/actions';

export default {
    [ADD_GUEST]: state => {
        const guests = state.guests.concat({ mealOption: 'meat' });
        return {
            ...state,
            guests
        };
    },

    [INIT]: state => ({
        guests: [],
        mealOption: 'meat'
    }),

    [RESET_TRANSITION]: state => ({
        ...state,
        routeAnimationDirection: 'transition-right'
    }),

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

    [VALIDATE_FORM]: state => ({
        ...state,
        firstNameError: isEmpty(state.firstName) ? 'First name is required' : null,
        lastNameError: isEmpty(state.lastName) ? 'Last name is required' : null
    })
};
