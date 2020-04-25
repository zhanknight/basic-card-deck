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
    // this method creates an array of card objects, accepts arg for number of standard decks
    makeDeck(size = 1) {
        const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
        const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        while (size > 0) {
            size --;
            for (let i=0; i < (suits.length); i++) {
                for (let j=0; j < ranks.length; j++) {
                    this.cards.push(new Card(suits[i], ranks[j], values[j]));
            }
        }
    }
        console.log('Deck has been made!')
    }
    // this method shuffles the deck
    shuffleDeck() {
        let m = this.cards.length, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            [this.cards[m], this.cards[i]] = [this.cards[i], this.cards[m]];
        }
        console.log('Deck has been shuffled!')
    }
    // this method cuts the deck, 'top' half is moved to the 'bottom'
    cutDeck() {
        let m = (this.cards.length / 2);
        for (let i=0; i<m; i++) {
            let j = this.cards.shift();
            this.cards.push(j);
        }
        console.log('Deck has been cut!')
    }
}


// ugly display testing below
function showDeck() {
    for (let i=0; i<myDeck.cards.length; i++) {
        addElement(myDeck.cards[i]);
    }
}

function addElement(card) { 
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

const myDeck = new Deck();
myDeck.makeDeck();
myDeck.shuffleDeck();
myDeck.cutDeck();
showDeck();