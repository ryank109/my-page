import { push } from 'react-router-redux';
import Request from 'rk/common/request';

export const LOGIN_FAILED = 'LOGIN_FAILED';

export function login(username, password) {
    return dispatch => {
        Request.post({
            data: { username, password },
            url: '/auth'
        }).then(() => {
            dispatch(navigateToAdminPage());
        }).catch(() => {
            dispatch(failedLogin());
        });
    };
}

export function navigateToAdminPage() {
    return push('/sooandryanadmin');
}

export function failedLogin() {
    return { type: LOGIN_FAILED };
}
