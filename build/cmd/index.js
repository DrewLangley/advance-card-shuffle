"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = require("../helpers/game");
const readline_sync_1 = __importDefault(require("readline-sync"));
const shuffleType_1 = require("../helpers/shuffle/shuffleType");
const consolePlay = () => {
    const userName = readline_sync_1.default.question('May I have your name? ');
    console.log('Hi ' + userName + '!');
    console.log('Welcome to poker: ');
    const shuffleType = readline_sync_1.default.keyInSelect((Object.keys(shuffleType_1.ShuffleType).filter((el) => { return isNaN(Number(el)); })).map((item) => item), 'How would you like to shuffle?');
    const shuffleNumber = readline_sync_1.default.questionInt('How many times would you like to shuffle?');
    const handSize = readline_sync_1.default.questionInt('How many cards would you like to draw? 3, 5, 6 or 7', { limit: '$<3-7>' });
    (0, game_1.play)(userName, handSize, shuffleType, shuffleNumber);
};
consolePlay();
exports.default = consolePlay;
//# sourceMappingURL=index.js.map