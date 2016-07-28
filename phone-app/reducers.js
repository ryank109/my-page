import { combineReducers } from 'redux';
import { popupReducer } from 'react-redux-popup';
import { routeReducer } from 'react-router-redux';
import { LOCK_SCROLL, SET_SCREEN_WIDTH, UNLOCK_SCROLL } from 'phone/actions';
import { SET_GUEST_DATA_IN_STATE } from 'phone/savethedate/actions';
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
        hasNameError: false
    }),

    [LOCK_SCROLL]: state => ({
        ...state,
        isScrollLocked: true
    }),

    [SET_SCREEN_WIDTH]: (state, action) => ({
        ...state,
        screenWidth: action.screenWidth
    }),

    [UNLOCK_SCROLL]: state => ({
        ...state,
        isScrollLocked: false
    }),

    [SET_GUEST_DATA_IN_STATE]: (state, { data }) => ({
        ...state,
        ...data
    })
};

function phoneAppReducer(state = {}, action) {
    const reducer = reducers[action.type];
    return reducer ? reducer(state, action) : state;
}

export default combineReducers({
    popup: popupReducer,
    routing: routeReducer,
    app: phoneAppReducer
});
