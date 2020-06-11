import React, { Component } from 'react'
import './FunForm.css'

export default class FunForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: 0,
        };
    }

    onChange = (e) => {
        const newValue = e.target.value;
        if (isNaN(newValue)) {
            return;
        }
        this.setState({ inputValue: Number(newValue) });
    }

    onIncrementClick = () => {
        const newValue = this.state.inputValue;
        this.setState({ inputValue: Number(newValue) + 1 });
    }

    onDecrementClick = () => {
        const newValue = this.state.inputValue;
        this.setState({ inputValue: Number(newValue) - 1 });
    }

    render() {
        return (
            <div className="meterContainer">
                <form className="FunForm" action="#">
                    <div className="heading">
                        <h2>Set the Memory Game's Fun Level</h2>
                    </div>
                    <div className="funMeter">
                        <input type="text" value={this.state.inputValue} onChange={this.onChange} />
                        <div className="buttons">
                            <div className="increment-button"><button onClick={this.onIncrementClick}>+</button></div>
                            <div className="decrement-button"><button onClick={this.onDecrementClick}>-</button></div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}