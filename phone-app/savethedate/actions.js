import { push } from 'react-router-redux';
import Request from 'rk/common/request';

export const SET_GUEST_DATA_IN_STATE = 'SET_GUEST_DATA_IN_STATE';

function next(dispatch, response) {
    const data = JSON.parse(response.response);
    dispatch(setGuestDataInState(data));
    dispatch(data.attend === 'Y'
        ? push('/savethedate/yes')
        : push('/savethedate/no'));
}

export function responseToSaveTheDate(email, attend, prevAnswer) {
    return dispatch => {
        if (prevAnswer) {
            return Request.patch({
                url: '/guest/' + email,
                data: { attend, email }
            }).then(response => next(dispatch, response));
        }

        return Request.post({
            url: '/guest',
            data: { attend, email }
        }).then(response => next(dispatch, response));
    };
}

export function setGuestDataInState(data) {
    return {
        data,
        type: SET_GUEST_DATA_IN_STATE
    };
}

export default {
    responseToSaveTheDate,
    setGuestDataInState
};
