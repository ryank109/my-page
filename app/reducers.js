import { popupReducer } from 'react-redux-popup';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import commentsReducer from 'rk/comments/reducer';
import menuReducer from 'rk/menu/reducer';
import photoReducer from 'rk/photos/reducer';
import rsvpReducer from 'rk/rsvp/reducer';
import { LOAD_COMMENTS, LOAD_GUESTS } from 'rk/admin/actions';
import { LOGIN_FAILED } from 'rk/login/actions';

const reducers = {
    [LOGIN_FAILED]: state => ({
        ...state,
        hasLoginError: true
    }),

    [LOAD_GUESTS]: (state, action) => ({
        ...state,
        guests: action.data
    }),

    [LOAD_COMMENTS]: (state, action) => ({
        ...state,
        comments: action.data
    })
};

export const resolver = reducers => (state = {}, action) => {
    const reducerFunc = reducers[action.type];
    return reducerFunc ? reducerFunc(state, action) : state;
};

export default combineReducers({
    app: resolver(reducers),
    comments: resolver(commentsReducer),
    menu: resolver(menuReducer),
    photos: resolver(photoReducer),
    popup: popupReducer,
    rsvp: resolver(rsvpReducer),
    routing: routerReducer
});
