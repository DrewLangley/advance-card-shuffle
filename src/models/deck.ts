import { Card } from "./card";
import { CardName } from "./enum/cardName";
import { Suite } from "./enum/suite";

export class Deck {
  // Define properties and methods for the Deck class here
  cards: Array<Card>;

  constructor(includeJokers: boolean = false) {
    const tempCards = [];

    (Object.keys(Suite).filter((el) => { return isNaN(Number(el)) })).forEach((suite) => {
      (Object.keys(CardName).filter((el) => { return isNaN(Number(el)) })).forEach((card) => {
        if (card !== "Joker") {
          tempCards.push(new Card(CardName[card], Suite[suite]));
        }
      });
    });

    if (includeJokers) {
      tempCards.push(new Card(CardName.Joker, null), new Card(CardName.Joker, null));
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