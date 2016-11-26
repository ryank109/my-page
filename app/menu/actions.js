export const INITIAL_MENU_POSITION = 'INITIAL_MENU_POSITION';
export const SET_MENU_POSITION = 'SET_MENU_POSITION';

export const MENUS = [
    '/',
    /* '/story', */
    '/photos',
    '/registry',
    '/comment' /*,
    '/map' */
];

export const MENU_DETAILS = {
    '/': { icon: 'fa-home', title: 'Home' },
    /* '/story': { icon: 'fa-heart', title: 'Our Story' }, */
    '/photos': { icon: 'fa-camera', title: 'Photos' },
    '/registry': { icon: 'fa-gift', title: 'Registry' },
    '/comment': { icon: 'fa-commenting', title: 'Leave a Comment' } /*,
    '/map': { icon: 'fa-map', title: 'Location' } */
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
