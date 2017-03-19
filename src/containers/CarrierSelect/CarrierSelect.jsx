
import React, { Component } from 'react';
import { CarrierSelect } from '../../components';
import { connect } from 'react-redux';
import { carrier as carrierFilter } from 'actions/filters';

const mapStateToProps = ({flightList: {carriers, filters: { carrier }}}) =>
({
    options: carriers,
    selected: carrier
});

const mapDispatchToProps = (dispatch) =>
({
    onChange(value) {
        dispatch(carrierFilter(value))
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(CarrierSelect);