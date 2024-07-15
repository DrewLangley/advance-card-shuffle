

import { Deck } from "../../models/deck"

export const fisherYatesShuffle = (deck: Deck, repeat: number = 20): Deck => {
  // Fisher-Yates shuffle
  console.log(`Fisher-Yates shuffling... repeating ${repeat}`);
  for (let i = deck.cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck.cards[i], deck.cards[j]] = [deck.cards[j], deck.cards[i]];
  }

  if (repeat > 0) {
    fisherYatesShuffle(deck, repeat - 1);
  }

  return deck;
}