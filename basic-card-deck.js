// Trying to model a basic deck of cards using JS
// Practicing OOP in JS


// Each card should be an object, so let's make a class
class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}

// The deck itself should be another object, get classy
class Deck {
    constructor() {
        this.cards = [];
    }
    makeDeck() {
        const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
        const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        for (let i=0; i < suits.length; i++) {
            for (let j=0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], values[j]));
            }
        }
    }
    shuffleDeck() {
        let m = this.cards.length, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            [this.cards[m], this.cards[i]] = [this.cards[i], this.cards[m]];
        }
    }
}


// ugly display testing below VVV
const myDeck = new Deck();
myDeck.makeDeck();
myDeck.shuffleDeck();

function showDeck() {
    for (let i=0; i<myDeck.cards.length; i++) {
        addElement(myDeck.cards[i]);
    }
}

function addElement(card) { 
    console.log(card);
    // create a new div element 
    let newDiv = document.createElement("div"); 
    // and give it some content 
    let newContent = document.createTextNode(`Suit: ${card.suit} // Rank: ${card.rank} // Value: ${card.value}`); 
    let spacer = document.createElement("p");
    // add the text node to the newly created div
    newDiv.appendChild(newContent); 
    newDiv.appendChild(spacer);  
    // add the newly created element and its content into the DOM 
    let currentDiv = document.getElementById("div1"); 
    document.body.insertBefore(newDiv, currentDiv); 
  }

  showDeck();