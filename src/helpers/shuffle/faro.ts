import { randomizeChance } from "helpers/utils";
import { Deck } from "../../models/deck"

export const faroShuffle = (deck: Deck, repeat: number = 20): Deck => {
  // Faro shuffle, the professional Riffle shuffle
  const half = Math.floor(deck.cards.length / 2);
  const firstHalf = deck.cards.slice(0, half);
  const secondHalf = deck.cards.slice(half);

  const shuffledCards = [];

  console.log(`Faro shuffling... repeating ${repeat}`);

  for (let i = 0; i < firstHalf.length; i++) {
    if (!randomizeChance()) {
      // random chance from the left hand first
      shuffledCards.push(firstHalf[i]);
      shuffledCards.push(secondHalf[i]);
    } else {
      // random chance from the right hand first
      shuffledCards.push(secondHalf[i]);
      shuffledCards.push(firstHalf[i]);
    }
  }

  if (deck.cards.length % 2 !== 0) {
    shuffledCards.push(secondHalf[secondHalf.length - 1]);
  }

  deck.cards = shuffledCards;

  if (repeat > 0) {
    faroShuffle(deck, repeat - 1);
  }

  return deck;
}
