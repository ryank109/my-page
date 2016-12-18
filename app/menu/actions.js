export const INITIAL_MENU_POSITION = 'INITIAL_MENU_POSITION';
export const SET_MENU_POSITION = 'SET_MENU_POSITION';

export const MENUS = [
    '/',
    /* '/story', */
    '/info',
    '/photos',
    '/registry',
    '/comment'
];

export const MENU_DETAILS = {
    '/': { icon: 'fa-home', title: 'Home' },
    '/comment': { icon: 'fa-commenting', title: 'Leave a Comment' },
    '/info': { icon: 'fa-info', title: 'Info' },
    '/photos': { icon: 'fa-camera', title: 'Photos' },
    '/registry': { icon: 'fa-gift', title: 'Registry' }
    /* '/story': { icon: 'fa-heart', title: 'Our Story' }, */
};

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
