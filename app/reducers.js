import { get } from 'lodash';
import { combineReducers } from 'redux';
import { popupReducer } from 'react-redux-popup';
import { routerReducer } from 'react-router-redux';
import { INITIAL_MENU_POSITION, SET_MENU_POSITION } from 'rk/actions';
import { LOAD_GUESTS, LOAD_COMMENTS } from 'rk/admin/actions';
import { LOGIN_FAILED } from 'rk/login/actions';
import { COMMENT_CLEAR_FORM, COMMENT_FORM_HAS_ERROR } from 'phone/comment/actions';

const reducers = {
    [COMMENT_FORM_HAS_ERROR]: (state, { hasNameError, hasCommentError }) => ({
        ...state,
        hasCommentError,
        hasNameError
    }),

    [COMMENT_CLEAR_FORM]: state => ({
        ...state,
        hasCommentError: false,
        hasNameError: false,
        hasPosted: true
    }),

    [INITIAL_MENU_POSITION]: (state, { position }) => ({
        ...state,
        currentPosition: position
    }),

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
    }),

    [SET_MENU_POSITION]: (state, { position }) => {
        const routeAnimationDirection = state.currentPosition < position
            ? 'transition-left'
            : 'transition-right';
        return {
            ...state,
            routeAnimationDirection,
            currentPosition: position,
        };
    }
};

function appReducer(state = {}, action) {
    const reducer = reducers[action.type];
    return reducer ? reducer(state, action) : state;
}

export default combineReducers({
    popup: popupReducer,
    routing: routerReducer,
    app: appReducer
});
