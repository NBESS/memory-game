import React, { Component } from 'react';
import './MemoryCard.css';

class MemoryCard extends Component {
    constructor(props) {
        super(props);
        this.state = { isFlipped: false };
    }
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

  clickHandler = ()=> {
        this.setState({ isFlipped: !this.state.isFlipped }, () => console.log(this.state));

    } 

}

export default MemoryCard;