const reducers = {
}

export default function reducer(state = {}, action) {
    const reducer = reducers[action.type];
    return reducer ? reducer(state, action) : state;
}
