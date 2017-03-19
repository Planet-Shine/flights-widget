
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import SelectItem from './SelectItem';
import './Select.less';
import classNames from 'classnames';

class Select extends Component {
    static propTypes = {
        selected: PropTypes.string,
        options: PropTypes.array,
        onChange: PropTypes.func.isRequired
    };

    state = {
        opened: false
    };

    constructor() {
        super();
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemSelect = this.handleItemSelect.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const area = ReactDOM.findDOMNode(this.refs.clickArea);
        if (!area.contains(event.target)) {
            this.setState({
                opened: false
            });
        }
    }

    componentWillMount() {
        document.addEventListener('click', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick, false);
    }

    handleItemSelect(value) {
        this.setState({
            opened: false
        });
        this.props.onChange(value);
    }

    handleButtonClick() {
        this.setState({
            opened: !this.state.opened
        });
    }

    render() {
        var { selected, options=[], onChange } = this.props;
        const { opened } = this.state;
        options = options.map(option => {
            var {value, caption} = option;
            if (!caption && !value) {
                caption = value = option;
            } else if (!caption && value) {
                caption = value;
            }
            return {caption, value};
        });
        const selectedItem = (options.find(item => item.value === selected) || {});
        const { caption } = selectedItem;
        options.splice(options.indexOf(selectedItem), 1);
        return (
            <div className={classNames({
                    select: true,
                    select_opened: opened
                })}
                ref="clickArea"
                onMouseDown={this.mouseDownHandler}
                onMouseUp={this.mouseUpHandler}>
                <button className="select__button"
                        onClick={this.handleButtonClick}
                        type="button">
                    <span className="select__caption">
                        {caption}
                    </span>
                </button>
                {opened &&
                    <ul className="select__list">
                        {options.map(
                            ({caption, value}, index) =>
                            <SelectItem
                                className="select__list-item"
                                key={index}
                                onClick={this.handleItemSelect}
                                {...{caption, value}}
                            />
                        )}
                    </ul>
                }
            </div>
        );
    }
}

export default Select;
