import React, { Component, PropTypes } from 'react';
import { Select } from 'components';
import './CarrierSelect.less';

class CarrierSelect extends Component {

    static propsTypes = {
        options: PropTypes.array,
        selected: PropTypes.string,
        onChange: PropTypes.func
    };

    render() {
        var { options=[], selected, onChange } = this.props;
        const emptyItem = {
            value: null,
            caption: "Все авиакомании"
        };
        options = [emptyItem, ...options];
        return (
            <div>
                <label className="carrier-select__label">
                    <span className="carrier-select__label-caption">
                        Выберите авиакомпанию
                    </span>
                </label>
                <Select {...{options, selected, onChange}} />
            </div>
        );
    }
}

export default CarrierSelect;