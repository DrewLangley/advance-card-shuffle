"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
const card_1 = require("./card");
const cardName_1 = require("./enum/cardName");
const suite_1 = require("./enum/suite");
class Deck {
    constructor(includeJokers = false) {
        const tempCards = [];
        (Object.keys(suite_1.Suite).filter((el) => { return isNaN(Number(el)); })).forEach((suite) => {
            (Object.keys(cardName_1.CardName).filter((el) => { return isNaN(Number(el)); })).forEach((card) => {
                if (card !== "Joker") {
                    tempCards.push(new card_1.Card(cardName_1.CardName[card], suite_1.Suite[suite]));
                }
            });
        });
        if (includeJokers) {
            tempCards.push(new card_1.Card(cardName_1.CardName.Joker, undefined), new card_1.Card(cardName_1.CardName.Joker, undefined));
        }
        this.cards = tempCards;
    }
    toString() {
        let result = '';
        this.cards.forEach((c) => result += `${c.toString()}, \n`);
        return result;
    }
}
exports.Deck = Deck;
exports.default = { Deck };
//# sourceMappingURL=deck.js.map