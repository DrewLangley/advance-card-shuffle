"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fisherYatesShuffle = void 0;
const fisherYatesShuffle = (deck, repeat = 20) => {
    console.log(`Fisher-Yates shuffling... repeating ${repeat}`);
    for (let i = deck.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck.cards[i], deck.cards[j]] = [deck.cards[j], deck.cards[i]];
    }
    if (repeat > 0) {
        (0, exports.fisherYatesShuffle)(deck, repeat - 1);
    }
    return deck;
};
exports.fisherYatesShuffle = fisherYatesShuffle;
//# sourceMappingURL=fisherYates.js.map