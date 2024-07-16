"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.faroShuffle = void 0;
const utils_1 = require("helpers/utils");
const faroShuffle = (deck, repeat = 20) => {
    const half = Math.floor(deck.cards.length / 2);
    const firstHalf = deck.cards.slice(0, half);
    const secondHalf = deck.cards.slice(half);
    const shuffledCards = [];
    console.log(`Faro shuffling... repeating ${repeat}`);
    for (let i = 0; i < firstHalf.length; i++) {
        if (!(0, utils_1.randomizeChance)()) {
            shuffledCards.push(firstHalf[i]);
            shuffledCards.push(secondHalf[i]);
        }
        else {
            shuffledCards.push(secondHalf[i]);
            shuffledCards.push(firstHalf[i]);
        }
    }
    if (deck.cards.length % 2 !== 0) {
        shuffledCards.push(secondHalf[secondHalf.length - 1]);
    }
    deck.cards = shuffledCards;
    if (repeat > 0) {
        (0, exports.faroShuffle)(deck, repeat - 1);
    }
    return deck;
};
exports.faroShuffle = faroShuffle;
//# sourceMappingURL=faro.js.map