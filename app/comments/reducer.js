import { COMMENT_CLEAR_FORM, COMMENT_FORM_HAS_ERROR } from 'rk/comments/actions';

export default {
    [COMMENT_FORM_HAS_ERROR]: (state, { hasNameError, hasCommentError }) => ({
        ...state,
        hasCommentError,
        hasNameError
    }),

    [COMMENT_CLEAR_FORM]: state => ({
        ...state,
        hasCommentError: false,
        hasNameError: false,
        hasPosted: true
    })
};
