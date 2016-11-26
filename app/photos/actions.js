import Request from 'rk/common/request';

export const LOAD_THUMBNAILS = 'LOAD_THUMBNAILS';
export const NAVIGATE_IMAGE_LEFT = 'NAVIGATE_IMAGE_LEFT';
export const NAVIGATE_IMAGE_RIGHT = 'NAVIGATE_IMAGE_RIGHT';
export const SET_CURRENT_IMAGE = 'SET_CURRENT_IMAGE';
export const SHOW_NO_PHOTOS = 'SHOW_NO_PHOTOS';

export function fetchPhotos() {
    return dispatch => Request.get({
        url: '/photos/media'
    }).then(response => {
        dispatch(loadThumbnails(JSON.parse(response.response)));
    }).catch(() => {
        dispatch(showNoPhotos());
    });
}

export function loadThumbnails(data) {
    return {
        data: data.data,
        type: LOAD_THUMBNAILS
    };
}

export function navigateImageLeft() {
    return { type: NAVIGATE_IMAGE_LEFT };
}

export function navigateImageRight() {
    return { type: NAVIGATE_IMAGE_RIGHT };
}

export function setCurrentImage(id) {
    return {
        id,
        type: SET_CURRENT_IMAGE
    };
}

export function showNoPhotos() {
    return {
        type: SHOW_NO_PHOTOS
    };
}
