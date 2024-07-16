import { Card } from "./card";
import { CardName } from "./enum/cardName";
import { Suite } from "./enum/suite";

/**
 * Deck Class Definition
 * Represents a deck of playing cards.
 */
export class Deck {
  cards: Array<Card>;

  constructor(includeJokers: boolean = false) {
    const tempCards = [];

    (Object.keys(Suite).filter((el) => { return isNaN(Number(el)) })).forEach((suite) => {
      (Object.keys(CardName).filter((el) => { return isNaN(Number(el)) })).forEach((card) => {
        if (card !== "Joker") {
          tempCards.push(new Card(CardName[card as keyof typeof CardName], Suite[suite as keyof typeof Suite]));
        }
      });
    });

    if (includeJokers) {
      tempCards.push(new Card(CardName.Joker, undefined), new Card(CardName.Joker, undefined));
    }

    this.cards = tempCards;
  }

  public toString(): string {
    let result = '';
    this.cards.forEach((c) => result += `${c.toString()}, \n`);

    return result;
  }
}

export default { Deck };