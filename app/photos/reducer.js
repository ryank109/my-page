import { find, findIndex } from 'lodash';
import {
    LOAD_THUMBNAILS,
    NAVIGATE_IMAGE_LEFT,
    NAVIGATE_IMAGE_RIGHT,
    SET_CURRENT_IMAGE,
    SHOW_NO_PHOTOS
} from 'rk/photos/actions';

export default {
    [LOAD_THUMBNAILS]: (state, { data }) => ({
        ...state,
        data
    }),

    [NAVIGATE_IMAGE_LEFT]: state => {
        const currentIndex = findIndex(state.data, data => data.id === state.currentImage.id);
        const newIndex = currentIndex === 0 ? 0 : currentIndex - 1;
        return {
            ...state,
            currentImage: state.data[newIndex]
        };
    },

    [NAVIGATE_IMAGE_RIGHT]: state => {
        const currentIndex = findIndex(state.data, data => data.id === state.currentImage.id);
        const newIndex = currentIndex === state.data.length - 1 ? currentIndex : currentIndex + 1;
        return {
            ...state,
            currentImage: state.data[newIndex]
        };
    },

    [SET_CURRENT_IMAGE]: (state, { id }) => ({
        ...state,
        currentImage: find(state.data, data => data.id === id)
    }),

    [SHOW_NO_PHOTOS]: state => ({
        ...state,
        data: null
    })
};
