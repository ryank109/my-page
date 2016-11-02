import { push } from 'react-router-redux';
import Request from 'rk/common/request';

export const COMMENT_FORM_HAS_ERROR = 'COMMENT_FORM_HAS_ERROR';
export const COMMENT_CLEAR_FORM = 'COMMENT_CLEAR_FORM';

export function post(name, comment) {
    const hasNameError = !name;
    const hasCommentError = !comment;
    if (hasNameError || hasCommentError) {
        return {
            hasNameError,
            hasCommentError,
            type: COMMENT_FORM_HAS_ERROR
        };
    }

    return dispatch => Request.post({
        url: '/comment',
        data: { name, comment }
    }).then(response => {
        dispatch({ type: COMMENT_CLEAR_FORM });
        dispatch(push('/'));
    });
}
