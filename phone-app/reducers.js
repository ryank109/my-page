import { combineReducers } from 'redux';
import { popupReducer } from 'react-redux-popup';
import { routerReducer } from 'react-router-redux';
import commentsReducer from 'rk/comments/reducer';
import menuReducer from 'phone/menu/reducer';
import photoReducer from 'rk/photos/reducer';

export default combineReducers({
    comments: commentsReducer,
    menu: menuReducer,
    photos: photoReducer,
    popup: popupReducer,
    routing: routerReducer
});
