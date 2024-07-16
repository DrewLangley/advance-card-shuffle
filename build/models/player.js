"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const PokerEvaluator = __importStar(require("poker-evaluator-ts"));
const utils_1 = require("helpers/utils");
class Player {
    constructor(name) {
        this.hand = [];
        this.name = 'Test';
        this.dealCards = (cards, cardCount, fromTop = true) => {
            var _a, _b;
            if (fromTop) {
                for (let i = 0; i < cardCount; i++) {
                    this.hand.unshift((_a = cards.shift()) !== null && _a !== void 0 ? _a : cards[0]);
                }
            }
            else {
                for (let i = 0; i < cardCount; i++) {
                    this.hand.push((_b = cards.shift()) !== null && _b !== void 0 ? _b : cards[0]);
                }
            }
        };
        this.checkCards = () => {
            return `${this.name}'s hand: \n ${this.hand.map(card => card.toString()).join('\n ')}`;
        };
        this.checkResult = () => {
            const hand = (0, utils_1.mapForSolver)(this.hand);
            const result = PokerEvaluator.evalHand(hand);
            const { handName, handRank, value } = result;
            return `${this.name} has a ${handName} with a rank of ${handRank} and ${value} points.`;
        };
        this.getResult = () => {
            const hand = (0, utils_1.mapForSolver)(this.hand);
            return PokerEvaluator.evalHand(hand);
        };
        this.arrangeHand = () => {
            this.hand.sort((a, b) => b.cardName - a.cardName);
        };
        if (name) {
            this.name = name;
        }
    }
}
exports.Player = Player;
exports.default = { Player };
//# sourceMappingURL=player.js.map