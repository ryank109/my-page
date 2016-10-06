import Request from 'rk/common/request';

export const INITIAL_MENU_POSITION = 'INITIAL_MENU_POSITION';
export const SET_MENU_POSITION = 'SET_MENU_POSITION';

export const MENUS = [
    '/',
    /* '/story',
    '/photos', */
    '/registry',
    '/comment' /*,
    '/map' */
];

export function initialMenuPosition(route) {
    return {
        position: MENUS.indexOf(route),
        type: INITIAL_MENU_POSITION
    };
}

export function setMenuPosition(route) {
    return {
        position: MENUS.indexOf(route),
        type: SET_MENU_POSITION
    };
}
