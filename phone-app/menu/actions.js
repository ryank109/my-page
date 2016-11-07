import { INITIAL_MENU_POSITION, MENUS } from 'rk/menu/actions';

export const MENU_ROTATE = 'MENU_ROTATE';
export const MENU_TOUCH_END = 'MENU_TOUCH_END';
export const MENU_TOUCH_MOVE = 'MENU_TOUCH_MOVE';
export const MENU_TOUCH_START = 'MENU_TOUCH_START';
export const MENU_TRANSITION_TO_END = 'MENU_TRANSITION_TO_END';
export const MOVE_TO_ROUTE = 'MENU_MOVE_TO_ROUTE';
export const NAVIGATE = 'NAVIGATE';

export function initialMenuPosition(route, menuContainerWidth, menuDistance, menuItemLeft, menuItemPositions) {
    return {
        menuContainerWidth,
        menuDistance,
        menuItemLeft,
        menuItemPositions,
        position: MENUS.indexOf(route),
        type: INITIAL_MENU_POSITION
    };
}

export function moveToRoute(route) {
    return {
        route,
        type: MOVE_TO_ROUTE
    };
}

export function navigate(push) {
    return {
        push,
        type: NAVIGATE
    };
}

export function rotate(menuContainerWidth, menuItemLeft) {
    return {
        menuContainerWidth,
        menuItemLeft,
        type: MENU_ROTATE
    };
}

export function touchEnd(transitionToEnd) {
    return {
        transitionToEnd,
        type: MENU_TOUCH_END
    };
}

export function touchMove(menuOffset) {
    return {
        menuOffset,
        type: MENU_TOUCH_MOVE
    };
}

export function touchStart(xStart, yStart) {
    return {
        xStart,
        yStart,
        type: MENU_TOUCH_START
    };
}

export function transitionToEnd() {
    return {
        type: MENU_TRANSITION_TO_END
    };
}
