import { describe, expect, test } from '@jest/globals';
import { Deck } from "../src/models/deck";
import { riffleShuffle } from "../src/helpers/shuffle/riffle";
import { CardName } from '../src/models/enum/cardName';
import { Card } from '../src/models/card';
import { Suite } from '../src/models/enum/suite';

describe('RIFFLE SHUFFLE', () => {
  let shuffledDeck = riffleShuffle(new Deck(), 5);

  test('SHOULD NOT LOSE ANY CARDS', () => {
    expect(shuffledDeck.cards.length).toBe(52);
  });
  test('FIRST CARD SHOULD NOT BE ACE', () => {
    expect(shuffledDeck.cards[0]).not.toBe(new Card(CardName.Ace, Suite.Hearts));
  });
  test('FIRST CARD AND RANDOM CARD SHOULD NOT BE SAME AFTER ANOTHER SHUFFLE', () => {
    const firstCard = shuffledDeck.cards[0];
    const randomNumber = Math.floor(Math.random() * shuffledDeck.cards.length);
    const randomCard = shuffledDeck.cards[randomNumber];

    shuffledDeck = riffleShuffle(shuffledDeck, 5);

    expect(shuffledDeck.cards[0]).not.toBe(firstCard);
    expect(shuffledDeck.cards[randomNumber]).not.toBe(randomCard);
  });
});