import Request from 'rk/common/request';

export const LOAD_COMMENTS = 'ADMIN_LOAD_COMMENTS';
export const LOAD_GUESTS = 'ADMIN_LOAD_GUEST';

export function fetchGuests() {
    return dispatch => {
        Request.get({
            dispatch,
            url: '/guest'
        }).then(response => {
            dispatch(loadGuests(JSON.parse(response.response)));
        });
    };
}

export function loadGuests(data) {
    return {
        data,
        type: LOAD_GUESTS
    };
}

export function fetchComments() {
    return dispatch => {
        Request.get({
            dispatch,
            url: '/comment/all'
        }).then(response => {
            dispatch(loadComments(JSON.parse(response.response)));
        });
    };
}

export function loadComments(data) {
    return {
        data,
        type: LOAD_COMMENTS
    };
}
