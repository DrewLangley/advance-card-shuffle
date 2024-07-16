"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const utils_1 = require("helpers/utils");
const cardName_1 = require("./enum/cardName");
const suite_1 = require("./enum/suite");
class Card {
    constructor(cardName, suite) {
        this.suite = 0;
        this.cardName = cardName;
        if (suite) {
            this.suite = suite;
        }
    }
    toString() {
        return `${(0, utils_1.prettyPrintCard)(this)} - ${cardName_1.CardName[this.cardName]} of ${suite_1.Suite[this.suite]}`;
    }
}
exports.Card = Card;
//# sourceMappingURL=card.js.map