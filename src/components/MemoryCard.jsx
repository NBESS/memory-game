import React, { Component } from 'react';
import './MemoryCard.css';

class MemoryCard extends Component {
    constructor(props) {
        super(props);
        this.state = { isFlipped: false };
    }
    render() {
        let innerClass = "MemoryCard_inner";
        if (this.props.isFlipped) {
            innerClass = innerClass + " flipped";
        }
        return (
            <div className="MemoryCard" onClick={this.props.pickCard}>
                <div className={innerClass}>
                    <div className="MemoryCard_back">
                        <img src="https://www.digitalcrafts.com/img/logo-wrench-white.png" title='digitalcrafts-logo' alt='digitalcrafts-logo' />
                    </div>
                    <div className="MemoryCard_front">{this.props.symbol}</div>
                </div>
            </div>
        )
    }
}

export default MemoryCard;