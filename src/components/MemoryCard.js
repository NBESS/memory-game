import React, { Component } from 'react';
import './MemoryCard.css';

class MemoryCard extends Component {
    render() {
        return (
        <div className="MoneyCard-Container">
            <div className="MoneyCard">
            <img src="https://www.digitalcrafts.com/img/logo-wrench-white.png" title='digitalcrafts-logo' alt='digitalcrafts-logo'/>
            </div>
            <div className="MoneyCard">
                <img src="https://www.digitalcrafts.com/img/logo-wrench-white.png" title='digitalcrafts-logo' alt='digitalcrafts-logo'/>
            </div>
            <div className="MoneyCard">
                <img src="https://www.digitalcrafts.com/img/logo-wrench-white.png" title='digitalcrafts-logo' alt='digitalcrafts-logo'/>
            </div>
            <div className="MoneyCard">
                <img src="https://www.digitalcrafts.com/img/logo-wrench-white.png" title='digitalcrafts-logo' alt='digitalcrafts-logo'/>
            </div>
        </div>
        )
    }
}

export default MemoryCard;