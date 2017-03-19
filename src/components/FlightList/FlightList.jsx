
import React, { Component } from 'react';
import './FlightList.less';
import $date from 'utils/date';

class FlightList extends Component {

    render() {
        const { flights } = this.props;
        return (
            <div className="flight-list">
                <ul>
                    {flights.map(
                        ({id, direction: {from, to}, arrival, departure, carrier}) => {
                            departure = new Date(Date.parse(departure));
                            arrival = new Date(Date.parse(arrival));
                            return (<li className="flight-list__item" key={id}>
                                <span className="flight-list__carrier">{carrier}</span>
                                <span className="flight-list__flight">{from}—{to}</span><br/>
                                <span className="flight-list__departure">ВЫЛЕТ: {$date.getDateString(departure)}, <span className="flight-list__day">{$date.getDay(departure)}</span></span><br/>
                                <span className="flight-list__departure-time">{departure.getHours()}:{departure.getMinutes()}</span>
                                —<span className="flight-list__arrival-time">{arrival.getHours()}:{arrival.getMinutes()}</span>
                            </li>);
                        }
                    )}
                </ul>
            </div>
        );
    }
}
export default FlightList;