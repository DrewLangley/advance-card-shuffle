

import { Deck } from "../../models/deck"

export const overHandShuffle = (deck: Deck, repeat: number = 20): Deck => {
  // Over-hand shuffle
  // move small chunks of cards to the top and bottom of the deck repeatedly
  console.log(`Over-hand shuffling... repeating ${repeat}`);

  // I normally do about 10 times before a rest, and would normally repeat that a few times too
  for (let i = 0; i < 1; i++) {
    // grab a big stack of cards
    const mainChunkSize = Math.floor(Math.random() * deck.cards.length);
    const mainChunk = deck.cards.splice(deck.cards.length - mainChunkSize, mainChunkSize);


    while (mainChunk.length > 0) {
      // grab a small amount of cards to either put on the top or bottom of the deck
      const randomChunkSize = Math.floor(Math.random() * mainChunk.length + 1);
      const chunk = mainChunk.splice(mainChunk.length - randomChunkSize, randomChunkSize);


      // back or front on odd or even
      if (randomChunkSize % 2 == 0) {
        deck.cards.unshift(...chunk);
      } else {
        deck.cards.push(...chunk);
      }
    }
  }

  if (repeat > 0) {
    console.log('deck: ', deck.toString());
    overHandShuffle(deck, repeat - 1);
  }

  return deck;
}