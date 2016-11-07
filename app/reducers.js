import { combineReducers } from 'redux';
import { popupReducer } from 'react-redux-popup';
import { routerReducer } from 'react-router-redux';
import commentsReducer from 'rk/comments/reducer';
import menuReducer from 'rk/menu/reducer';
import { LOAD_GUESTS, LOAD_COMMENTS } from 'rk/admin/actions';
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

function appReducer(state = {}, action) {
    const reducer = reducers[action.type];
    return reducer ? reducer(state, action) : state;
}

export default combineReducers({
    popup: popupReducer,
    routing: routerReducer,
    app: appReducer,
    comments: commentsReducer,
    menu: menuReducer
});
