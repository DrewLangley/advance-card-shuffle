// we need to translate the card values for the solver eg Ace of Diamonds => Ad

import { Card } from "../models/card";
import { CardName } from "../models/enum/cardName";
import { Suite } from "../models/enum/suite";
/**
 * Maps cards from the ENUM version to the evaluator version
 * @param {CardName} cardName card name to translate
 * @returns {string} string for evaluator (first char)
 */
export const getFirstChar = (cardName: CardName): string => {
  switch (cardName) {
    case CardName.Ace: return 'A';
    case CardName.Two: return '2';
    case CardName.Three: return '3';
    case CardName.Four: return '4';
    case CardName.Five: return '5';
    case CardName.Six: return '6';
    case CardName.Seven: return '7';
    case CardName.Eight: return '8';
    case CardName.Nine: return '9';
    case CardName.Ten: return 'T';
    case CardName.Jack: return 'J';
    case CardName.Queen: return 'Q';
    case CardName.King: return 'K';
    default: return 'Joker'; // for Joker, return Joker
  }
}

/**
 * Maps cards from the STRING version to the evaluator version
 * @param {string} cardName card name to translate
 * @returns {string} string for evaluator (first char)
 */
export const getFirstCharStr = (cardName: string): string => {
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
    default: return 'Joker'; // for Joker, return Joker
  }
}

/**
 * Maps card suites to the hex or unicode version to display in command line output
 * @param {Suite} suite suite to translate
 * @returns {string} hex/unicode string representation of suite logo
 */
const getSuiteSymbol = (suite: Suite): string => {
  switch (suite) {
    case Suite.Hearts: return '\u2665';
    case Suite.Diamonds: return '\u2662';
    case Suite.Clubs: return '\u2663';
    case Suite.Spades: return '\u2664';
  }
}

/**
 * Maps cards from the enum version to the evaluator version array to array
 * @param {Array<Card>} hand cards to translate
 * @returns {string} string for evaluator (first char and suite char)
 */
export const mapForSolver = (hand: Card[]): string[] => {
  return hand.map(card => `${getFirstChar(card.cardName)}${Suite[card.suite].charAt(0)}`);
}

/**
 * Pretty prints a card
 * @param {Card} card card to print
 * @returns {string}
 */
export const prettyPrintCard = (card: Card): string => {
  return `${getFirstChar(card.cardName)}${getSuiteSymbol(card.suite)}`
}

/**
 * Randomizes a boolean value with a 20% chance of true
 * @returns {boolean}
 */
export const randomizeChance = () => {
  return Math.floor(Math.random() * 5) > 3;
}

export default { mapForSolver, prettyPrintCard, getFirstCharStr, randomizeChance };