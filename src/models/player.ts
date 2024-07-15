import * as PokerEvaluator from 'poker-evaluator-ts';
import { mapForSolver } from "helpers/solverMap";
import { Card } from "./card";

export class Player {

  hand: Card[] = [];

  public name: string;

  constructor(name?: string) {
    if (name) {

      this.name = name;
    }
  }

  public dealCards = (cards: Card[], cardCount: number, fromTop: boolean = true): void => {
    if (fromTop) {
      for (let i = 0; i < cardCount; i++) {
        this.hand.unshift(cards.shift());
      }
    } else {
      for (let i = 0; i < cardCount; i++) {
        this.hand.push(cards.shift());
      }
    }
  }

  public checkCards = (): string => {
    return `${this.name}'s hand: \n ${this.hand.map(card => card.toString()).join('\n ')}`;
  }

  public checkResult = () => {
    const hand = mapForSolver(this.hand);

    const result = PokerEvaluator.evalHand(hand);
    const { handName, handRank, value } = result;
    return `${this.name} has a ${handName} with a rank of ${handRank} and ${value} points.`;
  }
}

export default { Player };