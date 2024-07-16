import { prettyPrintCard } from "../helpers/utils";
import { CardName } from "./enum/cardName";
import { Suite } from "./enum/suite";

/**
 * Card Class Definition
 * Represents a playing card with name and suite.
 */
export class Card {
  cardName: CardName;
  suite: Suite = 0;

  constructor(cardName: CardName, suite?: Suite) {
    this.cardName = cardName;
    if (suite) {
      this.suite = suite;
    }
  }

  public toString(): string {
    return `${prettyPrintCard(this)} - ${CardName[this.cardName]} of ${Suite[this.suite]}`;
  }
}