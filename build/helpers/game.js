"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.play = void 0;
const suite_1 = require("models/enum/suite");
const deck_1 = require("../models/deck");
const player_1 = require("../models/player");
const shuffle_1 = require("./shuffle");
const cardName_1 = require("models/enum/cardName");
const play = (userName, handSize, shuffleType, shuffleNumber) => __awaiter(void 0, void 0, void 0, function* () {
    const deck = new deck_1.Deck();
    const player = new player_1.Player(userName);
    (0, shuffle_1.shuffle)(deck, shuffleType, shuffleNumber);
    console.log('\n ');
    player.dealCards(deck.cards, handSize);
    console.log('\n ');
    player.arrangeHand();
    console.log(player.checkCards());
    console.log('\n ');
    console.log(player.checkResult());
    console.log('\n ');
    return {
        cards: player.hand.map((card) => ({ cardName: cardName_1.CardName[card.cardName], suite: suite_1.Suite[card.suite] })),
        result: player.getResult(),
    };
});
exports.play = play;
exports.default = { play: exports.play };
//# sourceMappingURL=game.js.map