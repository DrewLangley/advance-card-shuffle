import { prettyPrintCard } from "helpers/utils";
import { CardName } from "./enum/cardName";
import { Suite } from "./enum/suite";


export class Card {
  cardName: CardName;
  suite: Suite;

  constructor(cardName: CardName, suite: Suite) {
    this.cardName = cardName;
    this.suite = suite;
  }

  public toString(): string {
    return `${prettyPrintCard(this)} - ${CardName[this.cardName]} of ${Suite[this.suite]}`;
  }
}