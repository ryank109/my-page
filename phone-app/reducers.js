import { combineReducers } from 'redux';
import { popupReducer } from 'react-redux-popup';
import { routerReducer } from 'react-router-redux';
import { resolver } from 'rk/reducers';
import commentsReducer from 'rk/comments/reducer';
import menuReducer from 'phone/menu/reducer';
import photoReducer from 'rk/photos/reducer';
import rsvpReducer from 'rk/rsvp/reducer';

export default combineReducers({
    comments: resolver(commentsReducer),
    menu: resolver(menuReducer),
    photos: resolver(photoReducer),
    popup: popupReducer,
    routing: routerReducer,
    rsvp: resolver(rsvpReducer)
});
