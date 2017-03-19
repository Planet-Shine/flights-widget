import types from 'defs/actionTypes';

const defaultState = {
    pending: false,
    loaded: false,
    error: null,
    status: null
};

const properties = (state=defaultState, action) => {
    switch(action.type) {
        case types.FLIGHTS_PENDING:
            return {
                ...state,
                pending: true
            };
        case types.FLIGHTS_SUCCEED:
            return {
                ...state,
                pending: false,
                loaded: true
            };
        case types.FLIGHTS_FAILED:
            return {
                ...state,
                pending: false,
                loaded: false,
                error: action.payload.error,
                status: action.payload.status
            };
        default:
            return state;
    }
};

export default properties;