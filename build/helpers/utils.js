"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomizeChance = exports.prettyPrintCard = exports.mapForSolver = exports.getFirstCharStr = exports.getFirstChar = void 0;
const cardName_1 = require("../models/enum/cardName");
const suite_1 = require("../models/enum/suite");
const getFirstChar = (cardName) => {
    switch (cardName) {
        case cardName_1.CardName.Ace: return 'A';
        case cardName_1.CardName.Two: return '2';
        case cardName_1.CardName.Three: return '3';
        case cardName_1.CardName.Four: return '4';
        case cardName_1.CardName.Five: return '5';
        case cardName_1.CardName.Six: return '6';
        case cardName_1.CardName.Seven: return '7';
        case cardName_1.CardName.Eight: return '8';
        case cardName_1.CardName.Nine: return '9';
        case cardName_1.CardName.Ten: return 'T';
        case cardName_1.CardName.Jack: return 'J';
        case cardName_1.CardName.Queen: return 'Q';
        case cardName_1.CardName.King: return 'K';
        default: return 'Joker';
    }
};
exports.getFirstChar = getFirstChar;
const getFirstCharStr = (cardName) => {
    switch (cardName) {
        case 'Ace': return 'A';
        case 'Two': return '2';
        case 'Three': return '3';
        case 'Four': return '4';
        case 'Five': return '5';
        case 'Six': return '6';
        case 'Seven': return '7';
        case 'Eight': return '8';
        case 'Nine': return '9';
        case 'Ten': return 'T';
        case 'Jack': return 'J';
        case 'Queen': return 'Q';
        case 'King': return 'K';
        default: return 'Joker';
    }
};
exports.getFirstCharStr = getFirstCharStr;
const getSuiteSymbol = (suite) => {
    switch (suite) {
        case suite_1.Suite.Hearts: return '\u2665';
        case suite_1.Suite.Diamonds: return '\u2662';
        case suite_1.Suite.Clubs: return '\u2663';
        case suite_1.Suite.Spades: return '\u2664';
    }
};
const mapForSolver = (hand) => {
    return hand.map(card => `${(0, exports.getFirstChar)(card.cardName)}${suite_1.Suite[card.suite].charAt(0)}`);
};
exports.mapForSolver = mapForSolver;
const prettyPrintCard = (card) => {
    return `${(0, exports.getFirstChar)(card.cardName)}${getSuiteSymbol(card.suite)}`;
};
exports.prettyPrintCard = prettyPrintCard;
const randomizeChance = () => {
    return Math.floor(Math.random() * 5) > 3;
};
exports.randomizeChance = randomizeChance;
exports.default = { mapForSolver: exports.mapForSolver, prettyPrintCard: exports.prettyPrintCard, getFirstCharStr: exports.getFirstCharStr, randomizeChance: exports.randomizeChance };
//# sourceMappingURL=utils.js.map