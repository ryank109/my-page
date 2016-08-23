import { combineReducers } from 'redux';
import { popupReducer } from 'react-redux-popup';
import { routeReducer } from 'react-router-redux';
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
    })
};

function appReducer(state = {}, action) {
    const reducer = reducers[action.type];
    return reducer ? reducer(state, action) : state;
}

export default combineReducers({
    popup: popupReducer,
    routing: routeReducer,
    app: appReducer
});
