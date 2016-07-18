import { delay } from 'lodash';
import { push } from 'react-router-redux'
import Request from 'rk/common/request';
import { openPopup, closePopup } from 'phone/actions';

export const SAVE_THE_DATE_YES = 'SAVE_THE_DATE_YES';
export const SAVE_THE_DATE_NO = 'SAVE_THE_DATE_NO';

export function responseToSaveTheDate(email, attend) {
    return dispatch => {
        Request.post({
            url: '/savethedate',
            data: { attend, email }
        }).then(response => {
            dispatch(push('/savethedate/info'));
        });
    };
}

export function checkSaveTheDateResponse(email) {
    return {
        type: 'blah'
    };
}

export default {
    checkSaveTheDateResponse,
    responseToSaveTheDate
};
