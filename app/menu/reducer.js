import { INITIAL_MENU_POSITION, SET_MENU_POSITION } from 'rk/menu/actions';

export default {
    [INITIAL_MENU_POSITION]: (state, { position }) => ({
        ...state,
        currentPosition: position
    }),

    [SET_MENU_POSITION]: (state, { position }) => {
        const routeAnimationDirection = state.currentPosition < position
            ? 'transition-left'
            : 'transition-right';
        return {
            ...state,
            routeAnimationDirection,
            currentPosition: position
        };
    }
};
