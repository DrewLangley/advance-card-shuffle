import { Deck } from "../models/deck";
import { faroShuffle } from "./shuffle/faro";
import { fisherYatesShuffle } from "./shuffle/fisherYates";
import { riffleShuffle } from "./shuffle/riffle";
import { overHandShuffle } from "./shuffle/overHand";
import { ShuffleType } from "./shuffle/shuffleType";

/** 
 * Interface for handling which shuffle method
 */
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
    case ShuffleType.OverHand:
      shuffledDeck = overHandShuffle(shuffledDeck, shuffleCount);
      break;
    default:
      // Default shuffle logic
      // fisher yates simulates spreading them out on a table
      shuffledDeck = fisherYatesShuffle(deck, 2);
      // riffle is the most common technique
      shuffledDeck = riffleShuffle(deck, 6);
  }
  return shuffledDeck;
}

export default { shuffle };