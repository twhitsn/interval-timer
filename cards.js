'use strict';

class Deck {
    constructor(){
        this.ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        this.suits = ['SPADES', 'CLUBS', 'HEARTS', 'DIAMONDS'];

        this.cards = this.combine();
        this.shuffle(this.cards);
    }

    // combine ranks and suits, returns arrays of arrays [[rank, suit]] (cartesian product)
    combine(){
        // https://stackoverflow.com/questions/12303989/cartesian-product-of-multiple-arrays-in-javascript
        var f = (a, b) => [].concat(...a.map(d => b.map(e => [].concat(d, e))));
        var cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);

        return cartesian(this.ranks, this.suits);
    }

    // shuffle deck
    shuffle(a){
        // https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
    }

    // draw card from stack
    draw(){
        return this.cards.pop();
    }

    // draw all cards
    *drawAll(){
        let card = this.draw();

        while(card !== undefined){
            yield card;
            card = this.draw();
        }
    }
}
