var Suit;
(function (Suit) {
    Suit[Suit["\u2660"] = 0] = "\u2660";
    Suit[Suit["\u2663"] = 1] = "\u2663";
    Suit[Suit["\u2665"] = 2] = "\u2665";
    Suit[Suit["\u2666"] = 3] = "\u2666";
})(Suit || (Suit = {}));
export class Card {
    rank;
    suit;
    image;
    constructor(rank, suit, image) {
        this.rank = rank;
        this.suit = suit;
        this.image = image;
    }
    get suitName() {
        return Suit[this.suit];
    }
    isWin(card) {
        return this.rank > card.rank;
    }
    isEqual(card) {
        return this.rank == card.rank;
    }
}
export class Deck {
    cards;
    constructor() {
        this.cards = [];
        let i = 0;
        let s = 0;
        while (i < 52) {
            let image;
            let suitName;
            switch (s) {
                case 0:
                    suitName = "spades";
                    break;
                case 1:
                    suitName = "clubs";
                    break;
                case 2:
                    suitName = "hearts";
                    break;
                default:
                    suitName = "diamonds";
                    break;
            }
            let cardNum = (i % 13) + 2; //2-14
            if (cardNum >= 2 && cardNum <= 10) {
                image = (i % 13) + 2 + "_of_" + suitName + ".png";
            }
            else {
                let caracter;
                switch (cardNum) {
                    case 11:
                        caracter = "jack";
                        break;
                    case 12:
                        caracter = "queen";
                        break;
                    case 13:
                        caracter = "king";
                        break;
                    default:
                        caracter = "ace";
                        break;
                }
                image = caracter + "_of_" + suitName + ".png";
            }
            this.cards.push(new Card(cardNum, s, image));
            if (i % 13 == 0) {
                s++;
            }
            i++;
        }
    }
    shuffle() {
        let shuffled = [];
        let size = this.cards.length;
        while (size > 0) {
            let randomIndex = Math.floor(Math.random() * size);
            shuffled.push(this.cards[randomIndex]);
            this.cards.splice(randomIndex, 1);
            size = this.cards.length;
            // console.log(shuffled);
        }
        this.cards = shuffled;
    }
}
