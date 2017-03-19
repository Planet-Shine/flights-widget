
import types from 'defs/actionTypes';
import api from 'api';

export const flights = () => {
    return dispatch => {
        dispatch({
            type: types.FLIGHTS_PENDING
        });
        api.flights().then(
            ({ entity: {flights=[]} }) => {
                dispatch({
                    type: types.FLIGHTS_SUCCEED,
                    payload: flights
                });
                dispatch({
                    type: types.CARRIERS,
                    payload: [...new Set(flights.map(flight => flight.carrier))]
                });
            },
            ({ entity, status: { code }}) => {
                dispatch({
                    type: types.FLIGHTS_FAILED,
                    payload: {status: code, entity}
                });
                dispatch({
                    type: types.CARRIERS,
                    payload: []
                });
            }
        );
    };
};