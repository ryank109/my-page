import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import commentsReducer from 'rk/comments/reducer';
import menuReducer from 'phone/menu/reducer';

export default combineReducers({
    comments: commentsReducer,
    menu: menuReducer,
    routing: routerReducer
});
