"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.riffleShuffle = void 0;
const utils_1 = require("helpers/utils");
const riffleShuffle = (deck, repeat = 20) => {
    const half = Math.floor(deck.cards.length / 2);
    const firstHalf = deck.cards.slice(0, half);
    const secondHalf = deck.cards.slice(half);
    const shuffledCards = [];
    console.log(`Riffle shuffling... repeating ${repeat}`);
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
    deck.cards = shuffledCards;
    if (repeat > 0) {
        (0, exports.riffleShuffle)(deck, repeat - 1);
    }
    return deck;
};
exports.riffleShuffle = riffleShuffle;
//# sourceMappingURL=riffle.js.map