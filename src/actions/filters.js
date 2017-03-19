
import types from 'defs/actionTypes';

export const carrier = (carrier) => {
    return {
        type: types.FILTER_CARRIER,
        payload: carrier
    };
};