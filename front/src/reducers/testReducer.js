 import { INCREMENT, DECREMENT, SET_DIFF, TEST } from 'actions';

const counterInitialState = {
    value: 0,
    diff: 1,
    aaa: null
};

export const counter = (state = counterInitialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + state.diff
            });
        case DECREMENT:
            return Object.assign({}, state, {
                value: state.value - state.diff
            });
        case SET_DIFF:
            return Object.assign({}, state, {
                diff: action.diff
            });
        case TEST :
          return Object.assign({}, state, {
              aaa : action.data
          });
        default:
            return state;
    }
};
