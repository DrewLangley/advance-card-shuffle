import { Suite } from "models/enum/suite";
import { Deck } from "../models/deck";
import { Player } from "../models/player";
import { shuffle } from "./shuffle";
import { ShuffleType } from "./shuffle/shuffleType";
import { CardName } from "models/enum/cardName";

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