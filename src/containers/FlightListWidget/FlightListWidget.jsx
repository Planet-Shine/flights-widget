
import React, { Component } from 'react';
import { FlightListWidget as FlightListWidgetComponent } from 'components';
import { flights } from 'actions/flights';
import { connect } from 'react-redux';

@connect()
class FlightListWidget extends Component {

    componentWillMount() {
        this.props.dispatch(flights());
    }

    render() {
        return (
            <div>
                <FlightListWidgetComponent />
            </div>
        );
    }
}

export default FlightListWidget;