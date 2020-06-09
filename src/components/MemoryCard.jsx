import React, { Component } from 'react';
import './MemoryCard.css';

class MemoryCard extends Component {
    render() {
        return (
            <div className="MemoryCard" onClick={this.clickHandler}>
                <div className="MemoryCard_inner">
                    <div className="MemoryCard_back">
                        <img src="https://www.digitalcrafts.com/img/logo-wrench-white.png" title='digitalcrafts-logo' alt='digitalcrafts-logo' />
                    </div>
                    <div className="MemoryCard_front">∆</div>
                </div>
            </div>
        )
    }

    clickHandler = ()=> alert("card clicked");
}

export default MemoryCard;