// import { popupActions } from 'react-redux-popup';

export const SET_SCREEN_WIDTH = 'SET_SCREEN_WIDTH';
// export const LOCK_SCROLL = 'LOCK_SCROLL';
// export const UNLOCK_SCROLL = 'UNLOCK_SCROLL';

// export function closePopup(id) {
//     return dispatch => {
//         dispatch(unlockScroll());
//         dispatch(popupActions.closePopup(id));
//     }
// }

// export function openPopup(id) {
//     return dispatch => {
//         dispatch(lockScroll());
//         dispatch(popupActions.openPopup(id));
//     };
// }

export function setScreenWidth(screenWidth) {
    return {
        screenWidth,
        type: SET_SCREEN_WIDTH
    };
}

// export function lockScroll() {
//     return {
//         type: LOCK_SCROLL
//     };
// }

// export function unlockScroll() {
//     return {
//         type: UNLOCK_SCROLL
//     };
// }

// export default {
    // closePopup,
    // lockScroll,
    // openPopup,
    // setScreenWidth
    // unlockScroll
// };
