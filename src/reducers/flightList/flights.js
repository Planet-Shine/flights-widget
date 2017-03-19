
import types from 'defs/actionTypes';

const defaultState = [];

const flights = (state=defaultState, action) => {
    switch(action.type) {
        case types.FLIGHTS_SUCCEED:
            return [...action.payload];
        case types.FLIGHTS_FAILED:
            return [];
        default:
            return state;
    }
};

export default flights;