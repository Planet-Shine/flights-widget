
import React, { Component } from 'react';
import { FlightList } from '../../components';
import { connect } from 'react-redux';

const filterFlights = (flights, carrierFilter) => {
    return (carrierFilter !== null
        ?
    flights.filter(flight => flight.carrier === carrierFilter)
        :
    flights);
};
const mapStateToProps = ({flightList: { flights=[], filters: {carrier: carrierFilter} }}) =>
({
    flights : filterFlights(flights, carrierFilter)
});
export default connect(mapStateToProps)(FlightList);