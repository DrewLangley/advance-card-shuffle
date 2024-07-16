import { Deck } from "../models/deck";
import { Player } from "../models/player";
import { shuffle } from "./shuffle";
import { ShuffleType } from "./shuffle/shuffleType";

export const play = (userName: string, handSize: number, shuffleType: ShuffleType, shuffleNumber: number) => {

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
    cards: player.hand,
    result: player.getResult(),
  }
}

export default play;