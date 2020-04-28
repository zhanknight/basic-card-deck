// Trying to model a basic deck of cards using JS
// Practicing OOP in JS

//TODO
// add argument validation on makeDeck method
// add argument validation to dealCards method
// Better naming scheme?


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
            size--;
            for (let i = 0; i < (suits.length); i++) {
                for (let j = 0; j < ranks.length; j++) {
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
        for (let i = 0; i < m; i++) {
            let j = this.cards.shift();
            this.cards.push(j);
        }
        console.log('Deck has been cut!')
    }
    //this method returns the 'top' card from the deck in an array
    dealCard() {
        console.log('Card dealt!');
        let dealtCards = [];
        dealtCards.push(this.cards.shift());
        return dealtCards;
    }
    //this method returns the specified number of cards from the 'top' as an array of card objects
    dealCards(num) {
        console.log(`${num} cards dealt!`);
        let dealtCards = [];
        for (let i = num; i > 0; i--) {
            dealtCards.push(this.cards.shift());
        }
        return dealtCards;
    }
}

// this subclass creates a deck with all face cards having a value of 10 for games that require it
class Deck10 extends Deck {
    makeDeck(size = 1) {
        const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
        const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
        while (size > 0) {
            size--;
            for (let i = 0; i < (suits.length); i++) {
                for (let j = 0; j < ranks.length; j++) {
                    this.cards.push(new Card(suits[i], ranks[j], values[j]));
                }
            }
        }
        console.log('Deck (10s) has been made!')
    }
}

// this class creates a player with a hand, name, wins and losses. 
class Player {
    constructor(playername) {
        this.cards = [];
        this.name = playername;
        this.wins = 0;
        this.losses = 0;
    }
}

//
// ugly display testing below
//

// this function builds the html to display a card then appends it to the deck area html
function cardBuilder(card, location) {
    let newcard = document.createElement("div");
    let icon = '';
    // this is pretty hideous 
    if (card.suit == 'Hearts') {
        icon = '♥';
        newcard.className = 'card red';
    }
    else if (card.suit == 'Spades') {
        icon = '♠';
        newcard.className = 'card';
    }
    else if (card.suit == 'Diamonds') {
        icon = '♦';
        newcard.className = 'card red';
    }
    else {
        icon = '♣'
        newcard.className = 'card';;
    }
    newcard.innerHTML = `${card.rank}<p class="cardsuit">${icon}</p>`;
    document.getElementById(`${location}`).appendChild(newcard);
}

// this function resets the deck area html then iterates over all the card objects in the deck, callng cardBuilder for each
function showDeck(deckName) {
    document.getElementById('deck').innerHTML = '';
    for (let i = 0; i < deckName.cards.length; i++) {
        cardBuilder(deckName.cards[i], "deck");
    }
}

// this function resets the player hand html then iterates over all the card objects in the player, callng cardBuilder for each
function showDealt(dealtcards) {
    document.getElementById('dealt').innerHTML = '';
    for (let i = 0; i < dealtcards.length; i++) {
        cardBuilder(dealtcards[i], "dealt");
    }
}

// test setup
const testDeck = new Deck();
const testPlayer = new Player("Evan");
testDeck.makeDeck(1);
testDeck.shuffleDeck();
testDeck.cutDeck();
showDeck(testDeck);


// buttons
const dealButton = document.getElementById("dealbutton");
dealButton.addEventListener("click", function () {
    testPlayer.cards = testPlayer.cards.concat(testDeck.dealCard())
    showDealt(testPlayer.cards);
    showDeck(testDeck);
})

const deal5Button = document.getElementById("deal5button");
deal5Button.addEventListener("click", function () {
    testPlayer.cards = testPlayer.cards.concat(testDeck.dealCards(5))
   // testHand = testHand.concat(testDeck.dealCards(5))
    showDealt(testPlayer.cards);
    showDeck(testDeck);
})

const shuffleButton = document.getElementById("shufflebutton");
shuffleButton.addEventListener("click", function () {
    testDeck.shuffleDeck();
    showDeck(testDeck);
})

const cutButton = document.getElementById("cutbutton");
cutButton.addEventListener("click", function () {
    testDeck.cutDeck();
    showDeck(testDeck);
})

