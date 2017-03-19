
import React, { Component } from 'react';
import { FlightList, CarrierSelect } from 'containers';
import './FlightListWidget.less';

class FlightListWidget extends Component {

    render() {
        return (
            <div className="flight-list-widget">
                <div>
                    <CarrierSelect />
                </div>
                <FlightList />
            </div>
        );
    }
}

export default FlightListWidget;