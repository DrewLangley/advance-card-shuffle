// we need to translate the card values for the solver eg Ace of Diamonds => Ad

import { Card } from "models/card";
import { CardName } from "models/enum/cardName";
import { Suite } from "models/enum/suite";

const getFirstChar = (cardName: CardName): string => {
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

export const mapForSolver = (hand: Card[]): string[] => {
  return hand.map(card => `${getFirstChar(card.cardName)}${Suite[card.suite].charAt(0)}`);
}

export default { mapForSolver };