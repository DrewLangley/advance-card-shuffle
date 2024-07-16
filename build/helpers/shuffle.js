"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffle = void 0;
const faro_1 = require("./shuffle/faro");
const fisherYates_1 = require("./shuffle/fisherYates");
const riffle_1 = require("./shuffle/riffle");
const shuffleType_1 = require("./shuffle/shuffleType");
const shuffle = (deck, shuffleType, shuffleCount = 10) => {
    let shuffledDeck = deck;
    console.log('Shuffling........................ ');
    switch (shuffleType) {
        case shuffleType_1.ShuffleType.Faro:
            shuffledDeck = (0, faro_1.faroShuffle)(shuffledDeck, shuffleCount);
            break;
        case shuffleType_1.ShuffleType.Riffle:
            shuffledDeck = (0, riffle_1.riffleShuffle)(shuffledDeck, shuffleCount);
            break;
        case shuffleType_1.ShuffleType.FisherYates:
            shuffledDeck = (0, fisherYates_1.fisherYatesShuffle)(shuffledDeck, shuffleCount);
            break;
        default:
            shuffledDeck = (0, riffle_1.riffleShuffle)(deck, shuffleCount);
    }
    return shuffledDeck;
};
exports.shuffle = shuffle;
exports.default = { shuffle: exports.shuffle };
//# sourceMappingURL=shuffle.js.map