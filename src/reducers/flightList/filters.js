import types from 'defs/actionTypes';

const defaultState = {
    carrier: null
};

const filters = (state=defaultState, action) => {
    switch(action.type) {
        case types.FILTER_CARRIER:
            return {
                ...state,
                carrier: action.payload
            };
        default:
            return state;
    }
};

export default filters;