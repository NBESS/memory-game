import React from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard.jsx';
import FunForm from './components/FunForm.jsx';

function generateDeck() {
  const symbols = ['∆', 'ß', '£', '§', '•', '$', '+', 'ø'];
  let deck = [];
  for (let i = 0; i < 16; i++) {
    deck.push({
      isFlipped: false,
      symbol: symbols[i%8],
    })
  }
  shuffle(deck);
  return deck;
}
let attempts = 0;

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deck: generateDeck(),
      pickedCards: [],
      hasWonGame: false,
    }
  }

  pickCard = (cardIndex) => {
    if (this.state.deck[cardIndex].isFlipped) {
      return;
    }
    let cardToFlip = this.state.deck[cardIndex];
    cardToFlip.isFlipped = true;

    let newPickedCards = this.state.pickedCards.concat(cardIndex);

    let newDeck = this.state.deck.map((card, index) => {
      if (cardIndex === index) {
        return cardToFlip;
      }
      return card;
    });
    console.log(newDeck)

    if (newPickedCards.length === 2) {
      let card1Index = newPickedCards[0];
      let card2Index = newPickedCards[1];
      this.increaseAttempt();

      if (newDeck[card1Index].symbol !== newDeck[card2Index].symbol) {
        setTimeout(() => { this.unflipCards(card1Index, card2Index) }, 1000);
      }
      newPickedCards = [];
    }

    this.setState({ deck: newDeck, pickedCards: newPickedCards });
    this.isGameOver();

  }

  unflipCards = (card1Index, card2Index) => {
    let card1 = this.state.deck[card1Index];
    let card2 = this.state.deck[card2Index];

    card1.isFlipped = false;
    card2.isFlipped = false;

    const newDeck = this.state.deck.map((card, index) => {
      if (card1Index === index) {
        return card1;
      }
      if (card2Index === index) {
        return card2;
      }
      return card;
    })

    this.setState({ deck: newDeck })
  }

  isGameOver = () => {
    const newDeck = this.state.deck.filter(card => card.isFlipped)

    if (newDeck.length === this.state.deck.length) {
      this.setState({hasWonGame: true})
    }
  }

  increaseAttempt = () => attempts++;

  refreshGame = () => {
    this.setState({
      deck: generateDeck(),
      pickedCards: [],
      hasWonGame: false,
    })
    attempts = 0;
  }

  render() {
    let cardsJSX = this.state.deck.map((card, index) => <MemoryCard symbol={card.symbol} isFlipped={card.isFlipped} key={index} pickCard={() => this.pickCard(index)} />);
    return (
      <div className="App">
        <header className="App-header">

          <h1>Money game</h1>
          <h2>Match cards to win</h2>
          <span>Attempts: {attempts}</span>
        </header>
        <div>
          {cardsJSX.slice(0, 4)}
        </div>
        <div>
          {cardsJSX.slice(4, 8)}
        </div>
        <div>
          {cardsJSX.slice(8, 12)}
        </div>
        <div>
          {cardsJSX.slice(12, 16)}
        </div>
        <div className="button">
        {this.state.hasWonGame && <button onClick={this.refreshGame}>Restart</button>}
        </div>
        <FunForm />
      </div>
    );
  }
}

export default App;
