import { INITIAL_MENU_POSITION, SET_MENU_POSITION } from 'rk/menu/actions';

export const reducers = {
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

export default function reducer(state = {}, action) {
    const reducer = reducers[action.type];
    return reducer ? reducer(state, action) : state;
}
