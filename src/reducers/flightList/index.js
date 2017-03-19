
import { combineReducers } from 'redux';
import filters from './filters';
import flights from './flights';
import carriers from './carriers';
import properties from './properties';

export default combineReducers({
    filters,
    flights,
    properties,
    carriers
});