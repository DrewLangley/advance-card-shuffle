import { Deck } from "../../models/deck"

export const riffleShuffle = (deck: Deck, repeat: number = 20): Deck => {
  // my attempt at shuffling like you would in real life
  // Riffle shuffle
  // split the deck into two, then interleave them using the thumbs
  const half = Math.floor(deck.cards.length / 2);
  const firstHalf = deck.cards.slice(0, half);
  const secondHalf = deck.cards.slice(half);
  // const shuffledCards = firstHalf.concat(secondHalf);

  const shuffledCards = [];

  console.log(`Riffle shuffling... repeating ${repeat}`);

  for (let i = 0; i < firstHalf.length; i++) {
    shuffledCards.push(firstHalf[i]);
    shuffledCards.push(secondHalf[i]);
  }

  deck.cards = shuffledCards;

  if (repeat > 0) {
    riffleShuffle(deck, repeat - 1);
  }

  return deck;
}
