
import types from 'defs/actionTypes';

const defaultState = [];

const airlines = (state=defaultState, action) => {
    switch(action.type) {
        case types.CARRIERS:
            return [...action.payload];
        default:
            return state;
    }
};

export default airlines;