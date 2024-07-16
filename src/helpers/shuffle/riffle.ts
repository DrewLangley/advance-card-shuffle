import { randomizeChance } from "helpers/utils";
import { Deck } from "../../models/deck"

export const riffleShuffle = (deck: Deck, repeat: number = 20): Deck => {
  // my attempt at shuffling like you would in real life
  // Riffle shuffle
  // split the deck into two, then interleave them using the thumbs
  const half = Math.floor(deck.cards.length / 2);
  const firstHalf = deck.cards.slice(0, half);
  const secondHalf = deck.cards.slice(half);

  const shuffledCards = [];

  console.log(`Riffle shuffling... repeating ${repeat}`);

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

  deck.cards = shuffledCards;

  if (repeat > 0) {
    riffleShuffle(deck, repeat - 1);
  }

  return deck;
}
