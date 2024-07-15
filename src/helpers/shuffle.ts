import { Deck } from "../models/deck";
import { faroShuffle } from "./shuffle/faro";
import { fisherYatesShuffle } from "./shuffle/fisherYates";
import { riffleShuffle } from "./shuffle/riffle";
import { ShuffleType } from "./shuffle/shuffleType";


export const shuffle = (deck: Deck, shuffleType: ShuffleType, shuffleCount: number = 10) => {
  let shuffledDeck: Deck = deck;
  console.log('Shuffling........................ ');
  switch (shuffleType) {
    case ShuffleType.Faro:
      shuffledDeck = faroShuffle(shuffledDeck, shuffleCount);
      // Implement test shuffle logic here
      break;
    case ShuffleType.Riffle:
      shuffledDeck = riffleShuffle(shuffledDeck, shuffleCount);
      break;
    case ShuffleType.FisherYates:
      shuffledDeck = fisherYatesShuffle(shuffledDeck, shuffleCount);
      break;
    default:
      // Default shuffle logic
      shuffledDeck = riffleShuffle(deck, shuffleCount);
  }
  return shuffledDeck;
}

export default { shuffle };