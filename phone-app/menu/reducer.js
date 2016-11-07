import { MENUS, INITIAL_MENU_POSITION, SET_MENU_POSITION } from 'rk/menu/actions';
import {
    MENU_ROTATE,
    MENU_TOUCH_END,
    MENU_TOUCH_MOVE,
    MENU_TOUCH_START,
    MENU_TRANSITION_TO_END,
    MOVE_TO_ROUTE,
    NAVIGATE
} from 'phone/menu/actions';

const MENU_ITEM_WIDTH_OFFSET = 20.5;
const TRANSITION_DURATION = 500;

function getMenuXPosition(menuContainerWidth, menuItemLeft) {
    return (menuContainerWidth / 2) - MENU_ITEM_WIDTH_OFFSET - menuItemLeft;
}

const reducerFuncs = {
    [INITIAL_MENU_POSITION]: (state, action) => {
        const menuXPosition = getMenuXPosition(
            action.menuContainerWidth,
            action.menuItemLeft);

        return {
            ...state,
            menuXPosition,
            currentPosition: action.position,
            menuContainerWidth: action.menuContainerWidth,
            menuDistance: action.menuDistance,
            menuItemPositions: action.menuItemPositions,
            menuOffset: 0
        };
    },

    [MENU_ROTATE]: (state, action) => {
        const menuXPosition = getMenuXPosition(
            action.menuContainerWidth,
            action.menuItemLeft,
            0);

        return {
            ...state,
            menuXPosition,
            menuContainerWidth: action.menuContainerWidth,
            menuOffset: 0
        };
    },

    [MENU_TOUCH_END]: state => {
        const transitionTimestamp = Date.now();
        return {
            ...state,
            transitionTimestamp,
            isTransitionToEnd: true,
            xStart: false,
            yStart: false
        };
    },

    [MENU_TOUCH_MOVE]: (state, { menuOffset }) => ({
        ...state,
        menuOffset
    }),

    [MENU_TOUCH_START]: (state, { xStart, yStart }) => ({
        ...state,
        xStart,
        yStart,
        isTransitionToEnd: false,
        transitionTimestamp: null
    }),

    [MOVE_TO_ROUTE]: (state, { route }) => {
        const currentPosition = MENUS.indexOf(route);
        const prevPosition = state.currentPosition;
        const menuOffset = state.menuDistance * (prevPosition - currentPosition);
        const menuXPosition = state.menuXPosition + menuOffset;
        const transitionTimestamp = Date.now();
        return {
            ...state,
            currentPosition,
            menuXPosition,
            menuOffset,
            transitionTimestamp,
            isTransitionToEnd: true,
            xStart: false,
            yStart: false
        };
    },

    [NAVIGATE]: (state, { push }) => {
        const transitionTimestamp = Date.now();
        let isMoveLeft = state.menuXPosition > state.menuXPosition + state.menuOffset;
        const routeAnimationDirection = isMoveLeft ? 'transition-right' : 'transition-left';
        if (isMoveLeft && state.currentPosition === 0
            || !isMoveLeft && state.currentPosition === MENUS.length - 1) {
            return {
                ...state,
                routeAnimationDirection,
                transitionTimestamp,
                isTransitionToEnd: true,
                xStart: false,
                yStart: false
            };
        }

        const currentPosition = state.currentPosition + (isMoveLeft ? -1 : 1);
        push(MENUS[currentPosition]);

        const menuXPosition = // getMenuXPosition(state.menuContainerWidth, state.menuItemPositions[currentPosition]);
            state.menuXPosition + (state.menuDistance * (isMoveLeft ? 1 : -1));
        const menuOffset = (state.menuDistance - Math.abs(state.menuOffset)) * (isMoveLeft ? 1 : -1);
        return {
            ...state,
            currentPosition,
            menuOffset,
            menuXPosition,
            routeAnimationDirection,
            transitionTimestamp,
            isTransitionToEnd: true,
            xStart: false,
            yStart: false
        };
    },

    [MENU_TRANSITION_TO_END]: state => {
        const curTimestamp = Date.now();
        const fps = (curTimestamp - state.transitionTimestamp) / TRANSITION_DURATION;
        const menuOffset = state.menuOffset - (state.menuOffset * fps);
        const isTransitionToEnd = Math.abs(menuOffset) > 5;
        const transitionTimestamp = isTransitionToEnd ? state.transitionTimestamp : null;
        return {
            ...state,
            isTransitionToEnd,
            transitionTimestamp,
            menuOffset: isTransitionToEnd ? menuOffset : 0
        };
    },

    [SET_MENU_POSITION]: (state, { position }) => {
        const routeAnimationDirection = state.currentPosition < position
            ? 'transition-left'
            : 'transition-right';
        return {
            ...state,
            routeAnimationDirection
        };
    }
};

export default function reducer(state = {}, action) {
    const reducer = reducerFuncs[action.type];
    return reducer ? reducer(state, action) : state;
}
