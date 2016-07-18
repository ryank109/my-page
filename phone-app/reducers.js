import { combineReducers } from 'redux';
import { popupReducer } from 'react-redux-popup';
import { routeReducer } from 'react-router-redux';
import { LOCK_SCROLL, SET_SCREEN_WIDTH, UNLOCK_SCROLL } from 'phone/actions';

const reducers = {
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
