import { popupReducer } from 'react-redux-popup';
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import commentsReducer from 'rk/comments/reducer';
import menuReducer from 'rk/menu/reducer';
import photoReducer from 'rk/photos/reducer';
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

function appReducer(state = {}, action) {
    const reducer = reducers[action.type];
    return reducer ? reducer(state, action) : state;
}

export default combineReducers({
    app: appReducer,
    comments: commentsReducer,
    menu: menuReducer,
    photos: photoReducer,
    popup: popupReducer,
    routing: routerReducer
});
