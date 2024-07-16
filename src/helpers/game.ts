import { Suite } from "models/enum/suite";
import { Deck } from "../models/deck";
import { Player } from "../models/player";
import { shuffle } from "./shuffle";
import { ShuffleType } from "./shuffle/shuffleType";
import { CardName } from "models/enum/cardName";

/**
 *
 * Creates a deck of cards and a player, shuffles the deck and deals cards to the player.
 * @param {string} userName player's name
 * @param {number} handSize amount of cards to draw
 * @param {ShuffleType} shuffleType
 * @param {number} amount of time to shuffle the deck
 * @returns Array of player's cards and the result calculated by the poker evaluator
 */
export const play = async (userName: string, handSize: number, shuffleType: ShuffleType, shuffleNumber: number) => {

  // create deck
  const deck = new Deck();
  const player = new Player(userName);

  // shuffle the deck
  shuffle(deck, shuffleType, shuffleNumber);

  console.log('\n ',);

  // deal cards
  player.dealCards(deck.cards, handSize);
  console.log('\n ',);
  // arrange hand
  player.arrangeHand();

  // reveal cards
  console.log(player.checkCards());
  console.log('\n ',);
  // print result
  console.log(player.checkResult());
  console.log('\n ',);

  return {
    cards: player.hand.map((card) => ({ cardName: CardName[card.cardName], suite: Suite[card.suite] })),
    result: player.getResult(),
  }
}

export default { play };